export default function FrontendSecurityPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-6">Seguridad Frontend - Esenciales</h1>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>1. XSS (Cross-Site Scripting)</h2>
        <p className="mb-4">La vulnerabilidad #1 en frontend. Inyección de scripts maliciosos.</p>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// ❌ VULNERABLE
function UserComment({ comment }: { comment: string }) {
  return <div dangerouslySetInnerHTML={{ __html: comment }} />;
}

// ✅ SEGURO - React escapa automáticamente
function UserComment({ comment }: { comment: string }) {
  return <div>{comment}</div>;
}

// ✅ Si necesitas HTML, sanitiza primero
import DOMPurify from 'dompurify';

function SafeHTML({ html }: { html: string }) {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}

// ❌ VULNERABLE - URL injection
<a href={userInput}>Click</a>

// ✅ SEGURO - Valida URLs
function SafeLink({ href }: { href: string }) {
  const isValid = /^https?:\\/\\//.test(href);
  return <a href={isValid ? href : '#'}>Link</a>;
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>2. CSRF (Cross-Site Request Forgery)</h2>
        <p className="mb-4">Protección contra requests maliciosos desde otros sitios.</p>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Next.js API con CSRF Token
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const csrfToken = cookies().get('csrf-token')?.value;
  const headerToken = request.headers.get('x-csrf-token');
  
  if (!csrfToken || csrfToken !== headerToken) {
    return NextResponse.json(
      { error: 'Invalid CSRF token' },
      { status: 403 }
    );
  }
  
  // Procesar request...
}

// Cliente
async function makeSecureRequest(data: any) {
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrf-token='))
    ?.split('=')[1];
  
  const response = await fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken || ''
    },
    body: JSON.stringify(data)
  });
  
  return response.json();
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>3. Content Security Policy (CSP)</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://api.example.com",
      "frame-ancestors 'none'"
    ].join('; ')
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>4. Almacenamiento Seguro</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// ❌ NUNCA guardes tokens sensibles en localStorage
localStorage.setItem('jwt', token); // Vulnerable a XSS

// ✅ Usa httpOnly cookies (backend)
// Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict

// ✅ Para datos menos sensibles, usa sessionStorage
sessionStorage.setItem('user-preferences', JSON.stringify(prefs));

// ✅ Encrypta datos sensibles antes de guardar
import CryptoJS from 'crypto-js';

const encrypted = CryptoJS.AES.encrypt(
  JSON.stringify(data),
  SECRET_KEY
).toString();

sessionStorage.setItem('data', encrypted);

// Decrypt
const decrypted = CryptoJS.AES.decrypt(
  encrypted,
  SECRET_KEY
).toString(CryptoJS.enc.Utf8);`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>5. Validación de Inputs</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { z } from 'zod';

// Schema de validación
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*[0-9])/),
  age: z.number().int().min(18).max(120)
});

// Validación en el cliente
async function handleSubmit(data: unknown) {
  try {
    const validated = userSchema.parse(data);
    
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated)
    });
    
    if (!response.ok) throw new Error('Failed');
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation failed:', error.errors);
    }
  }
}

// ⚠️ IMPORTANTE: Siempre valida también en el backend
// app/api/users/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  
  const result = userSchema.safeParse(body);
  
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.errors },
      { status: 400 }
    );
  }
  
  // Procesar datos validados...
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>6. Authentication Seguro</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// ✅ Usa librerías probadas
import { useSession } from 'next-auth/react';

function ProtectedComponent() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    }
  });
  
  if (status === 'loading') return <div>Loading...</div>;
  
  return <div>Welcome {session.user.name}</div>;
}

// Middleware para proteger rutas
// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.startsWith('/admin')) {
        return token?.role === 'admin';
      }
      return !!token;
    }
  }
});

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
};`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>7. Rate Limiting</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// lib/rate-limit.ts
import { LRUCache } from 'lru-cache';

type Options = {
  interval: number;
  uniqueTokenPerInterval?: number;
};

export default function rateLimit(options: Options) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval
  });
  
  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        
        tokenCount[0] += 1;
        
        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        
        return isRateLimited ? reject() : resolve();
      })
  };
}

// API Route
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minuto
  uniqueTokenPerInterval: 500
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  try {
    await limiter.check(10, ip); // 10 requests por minuto
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }
  
  // Procesar...
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>8. Dependency Security</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`# Auditoría de dependencias
yarn audit
yarn audit --fix

# Usar herramientas automatizadas
yarn add -D @security/audit

# package.json scripts
{
  "scripts": {
    "security:check": "yarn audit",
    "security:fix": "yarn audit --fix"
  }
}

# .npmrc - Verificar integridad
package-lock=true
audit-level=moderate

# Renovate Bot / Dependabot para actualizar deps automáticamente`}
        </pre>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--error)', color: '#fff' }}>
        <h3 className="text-xl font-semibold mb-2">🚨 Checklist de Seguridad</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>✓ Nunca confíes en input del usuario</li>
          <li>✓ Sanitiza todo HTML antes de renderizar</li>
          <li>✓ Usa httpOnly cookies para tokens</li>
          <li>✓ Implementa CSP headers</li>
          <li>✓ Valida en cliente Y servidor</li>
          <li>✓ Rate limiting en APIs</li>
          <li>✓ HTTPS en producción (siempre)</li>
          <li>✓ Actualiza dependencias regularmente</li>
          <li>✓ No expongas secrets en frontend</li>
          <li>✓ Usa CORS apropiadamente</li>
        </ul>
      </div>
    </div>
  );
}
