/**
 * In-Memory Rate Limiting Module
 * Learn how to build an efficient rate limiter in Next.js
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Memory Rate Limiting | Laboratory',
  description: 'Learn how to build an efficient in-memory rate limiter in Next.js',
};

export default function RateLimitingPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">In-Memory Rate Limiting in Next.js</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Rate limiting prevents abuse by restricting the number of requests a client can make
          within a time window. This is essential for API protection, DDoS prevention, and
          cost control.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Token Bucket Implementation</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// lib/rate-limiter.ts

interface RateLimitConfig {
  interval: number; // milliseconds
  uniqueTokenPerInterval: number; // max unique tokens
}

interface TokenBucket {
  tokens: number;
  lastRefill: number;
}

export class RateLimiter {
  private tokenCache = new Map<string, TokenBucket>();
  private interval: number;
  private tokensPerInterval: number;
  private maxTokens: number;

  constructor(config: RateLimitConfig) {
    this.interval = config.interval;
    this.tokensPerInterval = config.uniqueTokenPerInterval;
    this.maxTokens = config.uniqueTokenPerInterval;
  }

  check(identifier: string, tokens: number = 1): boolean {
    const now = Date.now();
    const bucket = this.tokenCache.get(identifier);

    if (!bucket) {
      // First request from this identifier
      this.tokenCache.set(identifier, {
        tokens: this.tokensPerInterval - tokens,
        lastRefill: now,
      });
      return true;
    }

    // Calculate tokens to add based on time passed
    const timePassed = now - bucket.lastRefill;
    const refillCount = Math.floor(timePassed / this.interval);
    
    if (refillCount > 0) {
      bucket.tokens = Math.min(
        this.maxTokens,
        bucket.tokens + refillCount * this.tokensPerInterval
      );
      bucket.lastRefill = now;
    }

    // Check if enough tokens available
    if (bucket.tokens >= tokens) {
      bucket.tokens -= tokens;
      return true;
    }

    return false;
  }

  reset(identifier: string): void {
    this.tokenCache.delete(identifier);
  }

  getRemainingTokens(identifier: string): number {
    const bucket = this.tokenCache.get(identifier);
    return bucket?.tokens ?? this.maxTokens;
  }
}

// Usage
const limiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 10, // 10 requests per minute
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sliding Window Rate Limiter</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// lib/sliding-window-limiter.ts

export class SlidingWindowLimiter {
  private requestLog = new Map<string, number[]>();
  private windowSize: number;
  private maxRequests: number;

  constructor(windowMs: number, maxRequests: number) {
    this.windowSize = windowMs;
    this.maxRequests = maxRequests;
  }

  check(identifier: string): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();
    const windowStart = now - this.windowSize;

    // Get existing requests for this identifier
    let requests = this.requestLog.get(identifier) || [];

    // Remove requests outside the current window
    requests = requests.filter(timestamp => timestamp > windowStart);

    if (requests.length < this.maxRequests) {
      // Allow the request
      requests.push(now);
      this.requestLog.set(identifier, requests);
      return { allowed: true };
    }

    // Calculate retry after time
    const oldestRequest = requests[0];
    const retryAfter = Math.ceil((oldestRequest + this.windowSize - now) / 1000);

    return { allowed: false, retryAfter };
  }

  // Cleanup old entries periodically
  cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.windowSize;

    for (const [identifier, requests] of this.requestLog.entries()) {
      const validRequests = requests.filter(ts => ts > windowStart);
      
      if (validRequests.length === 0) {
        this.requestLog.delete(identifier);
      } else {
        this.requestLog.set(identifier, validRequests);
      }
    }
  }
}

// Automatic cleanup
const limiter = new SlidingWindowLimiter(60000, 100);
setInterval(() => limiter.cleanup(), 60000);`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Next.js API Route Implementation</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// app/api/protected/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from '@/lib/rate-limiter';

const limiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 10, // 10 requests per minute
});

function getIdentifier(request: NextRequest): string {
  // Use IP address as identifier
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  
  // Or use API key
  // const apiKey = request.headers.get('x-api-key');
  // return apiKey || ip;
  
  return ip;
}

export async function GET(request: NextRequest) {
  const identifier = getIdentifier(request);

  if (!limiter.check(identifier)) {
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded',
        message: 'Too many requests, please try again later'
      },
      { 
        status: 429,
        headers: {
          'Retry-After': '60',
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': String(limiter.getRemainingTokens(identifier)),
        }
      }
    );
  }

  // Process the request
  return NextResponse.json({ message: 'Success' });
}

export async function POST(request: NextRequest) {
  const identifier = getIdentifier(request);

  // POST requests cost more tokens
  if (!limiter.check(identifier, 2)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }

  // Process the request
  const body = await request.json();
  return NextResponse.json({ message: 'Created', data: body });
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Middleware Implementation</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from './lib/rate-limiter';

const limiter = new RateLimiter({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 50,
});

export function middleware(request: NextRequest) {
  // Skip rate limiting for static files
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/static/')
  ) {
    return NextResponse.next();
  }

  const ip = request.ip ?? 'unknown';

  if (!limiter.check(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced: Multi-Tier Rate Limiting</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// lib/multi-tier-limiter.ts

export class MultiTierRateLimiter {
  private limiters: Map<string, RateLimiter>;

  constructor() {
    this.limiters = new Map([
      // Per second limit
      ['second', new RateLimiter({ interval: 1000, uniqueTokenPerInterval: 10 })],
      // Per minute limit
      ['minute', new RateLimiter({ interval: 60000, uniqueTokenPerInterval: 100 })],
      // Per hour limit
      ['hour', new RateLimiter({ interval: 3600000, uniqueTokenPerInterval: 1000 })],
    ]);
  }

  check(identifier: string): { allowed: boolean; tier?: string } {
    for (const [tier, limiter] of this.limiters.entries()) {
      if (!limiter.check(identifier)) {
        return { allowed: false, tier };
      }
    }
    return { allowed: true };
  }
}

// Usage in API route
const multiLimiter = new MultiTierRateLimiter();

export async function GET(request: NextRequest) {
  const ip = request.ip ?? 'unknown';
  const result = multiLimiter.check(ip);

  if (!result.allowed) {
    return NextResponse.json(
      { 
        error: \`Rate limit exceeded for \${result.tier}\`,
      },
      { status: 429 }
    );
  }

  return NextResponse.json({ message: 'Success' });
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">User-Tier Based Limiting</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// lib/user-tier-limiter.ts

enum UserTier {
  FREE = 'free',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

const TIER_LIMITS = {
  [UserTier.FREE]: { interval: 60000, requests: 10 },
  [UserTier.PRO]: { interval: 60000, requests: 100 },
  [UserTier.ENTERPRISE]: { interval: 60000, requests: 1000 },
};

export class UserTierRateLimiter {
  private limiters = new Map<UserTier, RateLimiter>();

  constructor() {
    for (const [tier, config] of Object.entries(TIER_LIMITS)) {
      this.limiters.set(
        tier as UserTier,
        new RateLimiter({
          interval: config.interval,
          uniqueTokenPerInterval: config.requests,
        })
      );
    }
  }

  check(userId: string, tier: UserTier): boolean {
    const limiter = this.limiters.get(tier);
    return limiter ? limiter.check(userId) : false;
  }
}

// Usage with authentication
export async function POST(request: NextRequest) {
  const session = await getSession(request);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limiter = new UserTierRateLimiter();
  const allowed = limiter.check(session.userId, session.tier);

  if (!allowed) {
    return NextResponse.json(
      { 
        error: 'Rate limit exceeded',
        upgrade: session.tier === UserTier.FREE ? 
          'Upgrade to Pro for higher limits' : undefined
      },
      { status: 429 }
    );
  }

  // Process request
  return NextResponse.json({ success: true });
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Memory Optimization</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// lib/optimized-limiter.ts

export class OptimizedRateLimiter {
  private cache: Map<string, TokenBucket>;
  private maxCacheSize: number;
  private cleanupInterval: NodeJS.Timeout;

  constructor(
    config: RateLimitConfig,
    maxCacheSize: number = 10000
  ) {
    this.maxCacheSize = maxCacheSize;
    this.cache = new Map();

    // Periodic cleanup to prevent memory leaks
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // Every minute
  }

  private cleanup(): void {
    const now = Date.now();
    const expiryTime = 5 * 60 * 1000; // 5 minutes

    // Remove old entries
    for (const [key, bucket] of this.cache.entries()) {
      if (now - bucket.lastRefill > expiryTime) {
        this.cache.delete(key);
      }
    }

    // If still too large, remove oldest entries
    if (this.cache.size > this.maxCacheSize) {
      const entries = Array.from(this.cache.entries());
      entries
        .sort((a, b) => a[1].lastRefill - b[1].lastRefill)
        .slice(0, this.cache.size - this.maxCacheSize)
        .forEach(([key]) => this.cache.delete(key));
    }
  }

  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.cache.clear();
  }
}

// Use LRU Cache for better memory management
import LRU from 'lru-cache';

export class LRURateLimiter {
  private cache: LRU<string, TokenBucket>;

  constructor(config: RateLimitConfig) {
    this.cache = new LRU({
      max: 10000,
      ttl: 5 * 60 * 1000, // 5 minutes
      updateAgeOnGet: true,
    });
  }
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use IP address or API key as unique identifier</li>
          <li>Implement cleanup to prevent memory leaks</li>
          <li>Return proper HTTP headers (Retry-After, X-RateLimit-*)</li>
          <li>Consider using Redis for distributed rate limiting</li>
          <li>Different limits for different endpoints/tiers</li>
          <li>Log rate limit violations for monitoring</li>
          <li>Whitelist trusted IPs if needed</li>
          <li>Use exponential backoff for repeated violations</li>
          <li>Test under load to ensure performance</li>
          <li>Consider using existing libraries like express-rate-limit</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Use External Solutions</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="mb-2">
            <strong>In-memory rate limiting works well for:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Single-server deployments</li>
            <li>Low to medium traffic</li>
            <li>Simple rate limiting needs</li>
          </ul>
          <p className="mb-2">
            <strong>Consider Redis or external services for:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Multi-server deployments (horizontal scaling)</li>
            <li>High traffic applications</li>
            <li>Need for persistence across restarts</li>
            <li>Complex rate limiting rules</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>FreeCodeCamp: In-Memory Rate Limiter Tutorial</li>
          <li>Token Bucket Algorithm</li>
          <li>Leaky Bucket Algorithm</li>
          <li>Sliding Window Algorithm</li>
          <li>Redis Rate Limiting</li>
          <li>Cloudflare Rate Limiting</li>
        </ul>
      </section>
    </div>
  );
}
