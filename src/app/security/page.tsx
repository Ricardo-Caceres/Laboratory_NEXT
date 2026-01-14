import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frontend Security',
  description: 'Seguridad esencial para desarrolladores frontend'
};

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Frontend Security</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Prácticas de seguridad fundamentales que todo desarrollador frontend debe conocer.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Vulnerabilidades Comunes</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. XSS (Cross-Site Scripting)</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ❌ VULNERABLE
function UserComment({ comment }) {
  return <div dangerouslySetInnerHTML={{ __html: comment }} />;
}

// ✅ SEGURO - Escapar HTML
function UserComment({ comment }) {
  return <div>{comment}</div>; // React escapa automáticamente
}

// ✅ Si necesitas HTML, sanitiza primero
import DOMPurify from 'dompurify';

function UserComment({ comment }) {
  const clean = DOMPurify.sanitize(comment);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}

// ❌ VULNERABLE - eval es peligroso
eval(userInput);

// ✅ SEGURO - Evita eval
const data = JSON.parse(userInput);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. CSRF (Cross-Site Request Forgery)</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ✅ Usar CSRF tokens
async function deleteAccount() {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  
  await fetch('/api/account', {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json'
    }
  });
}

// ✅ SameSite cookies
// Backend debe configurar:
// Set-Cookie: sessionId=abc123; SameSite=Strict; Secure; HttpOnly

// ✅ Verificar origin en requests críticos
if (request.headers.origin !== 'https://yourdomain.com') {
  throw new Error('Invalid origin');
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Inyección de Código</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ❌ VULNERABLE - SQL Injection
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// ✅ SEGURO - Usar prepared statements (backend)
const query = 'SELECT * FROM users WHERE id = ?';
db.execute(query, [userId]);

// ❌ VULNERABLE - Command injection
exec(\`git clone \${userRepo}\`);

// ✅ SEGURO - Validar y sanitizar input
const safeRepo = userRepo.replace(/[^a-zA-Z0-9-]/g, '');
if (!/^[a-zA-Z0-9-]+$/.test(safeRepo)) {
  throw new Error('Invalid repo name');
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Autenticación Segura</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ❌ NUNCA almacenar passwords en localStorage
localStorage.setItem('password', password); // ❌

// ✅ Usar httpOnly cookies para tokens
// Backend: Set-Cookie: token=...; HttpOnly; Secure; SameSite=Strict

// ✅ JWT en memoria o cookies seguras
let accessToken = null; // En memoria

async function login(email, password) {
  const response = await fetch('/api/login', {
    method: 'POST',
    credentials: 'include', // Envía cookies
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  const data = await response.json();
  accessToken = data.accessToken; // Guardar en memoria
}

// ✅ Refresh tokens
async function refreshAccessToken() {
  const response = await fetch('/api/refresh', {
    method: 'POST',
    credentials: 'include' // Refresh token en httpOnly cookie
  });
  
  const data = await response.json();
  accessToken = data.accessToken;
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Content Security Policy (CSP)</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: \`
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https://api.example.com;
      frame-ancestors 'none';
    \`.replace(/\\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY' // Prevenir clickjacking
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff' // Prevenir MIME sniffing
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
        headers: securityHeaders,
      },
    ];
  },
};`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. Input Validation</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { z } from 'zod';

// ✅ Validar en cliente Y servidor
const emailSchema = z.string().email();
const passwordSchema = z.string().min(8).max(100);

function validateLogin(email: string, password: string) {
  try {
    emailSchema.parse(email);
    passwordSchema.parse(password);
    return true;
  } catch (error) {
    console.error('Validation failed:', error);
    return false;
  }
}

// ✅ Sanitizar inputs
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover < y >
    .substring(0, 1000);  // Limitar longitud
}

// ✅ Allowlist en lugar de blocklist
function isValidUsername(username: string): boolean {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">7. Secrets y Variables de Entorno</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ❌ NUNCA en código
const API_KEY = 'sk_live_123456789'; // ❌

// ✅ Variables de entorno
// .env.local (NO commitear)
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=sk_live_123456789

// .gitignore
.env*.local

// Uso en código
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ Cliente
const secretKey = process.env.API_SECRET_KEY;   // ✅ Servidor solo

// ⚠️ Solo usa NEXT_PUBLIC_ para valores que pueden ser públicos`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">8. Dependency Security</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ✅ Auditar dependencias regularmente
yarn audit
npm audit

// ✅ Actualizar dependencias
yarn upgrade-interactive

// ✅ Usar lock files
yarn.lock
package-lock.json

// ✅ Verificar packages antes de instalar
yarn info package-name

// ✅ Limitar dependencias
// Solo instala lo necesario
// Evita packages abandonados o poco mantenidos`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">9. HTTPS y Secure Cookies</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// ✅ Forzar HTTPS
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://yourdomain.com/:path*',
        permanent: true,
      },
    ];
  },
};

// ✅ Cookies seguras
document.cookie = "session=abc123; Secure; HttpOnly; SameSite=Strict";`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">10. Rate Limiting</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  const ip = request.ip ?? 'unknown';
  const now = Date.now();
  const windowMs = 60000; // 1 minuto
  const maxRequests = 100;
  
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }
  
  const requests = rateLimit.get(ip)!;
  const recentRequests = requests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  
  return NextResponse.next();
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Security Checklist</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Sanitizar y validar TODO input de usuario</li>
          <li>✅ Usar HTTPS en producción</li>
          <li>✅ Implementar CSP headers</li>
          <li>✅ httpOnly cookies para tokens sensibles</li>
          <li>✅ CSRF protection en forms</li>
          <li>✅ Rate limiting en APIs</li>
          <li>✅ Auditar dependencias regularmente</li>
          <li>✅ No almacenar secrets en código</li>
          <li>✅ Implementar autenticación multifactor</li>
          <li>✅ Logging y monitoreo de seguridad</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
