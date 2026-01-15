'use client';

export function RateLimitingDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Rate Limiting</strong> controla la frecuencia de peticiones para proteger APIs y mejorar la estabilidad.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Esencial para prevenir abuso, DDoS y optimizar recursos del servidor.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es Rate Limiting?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Limita cuántas peticiones puede hacer un usuario/IP en un período de tiempo específico.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Ejemplo: Máximo 100 peticiones por minuto por IP.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Estrategias comunes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Fixed Window</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              X peticiones por ventana de tiempo fija (ej: 100/minuto).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Sliding Window</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Más preciso, calcula basado en tiempo continuo.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Token Bucket</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Permite bursts, tokens se regeneran con el tiempo.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Leaky Bucket</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Procesa peticiones a tasa constante, suaviza tráfico.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Implementación en Next.js
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Middleware:</strong> Rate limiting antes de llegar a las rutas</li>
          <li><strong>API Routes:</strong> Validar en cada endpoint</li>
          <li><strong>Edge Functions:</strong> Rate limiting en el edge (Vercel)</li>
          <li><strong>Redis:</strong> Almacenar contadores distribuidos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Bibliotecas populares
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>@upstash/ratelimit:</strong> Rate limiting con Redis/Upstash</li>
          <li><strong>express-rate-limit:</strong> Para APIs Express</li>
          <li><strong>bottleneck:</strong> Job scheduler con rate limiting</li>
          <li><strong>limiter:</strong> Token bucket simple</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Headers HTTP estándar
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
Retry-After: 60`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>APIs públicas (GitHub: 5000 req/hour)</li>
          <li>Login endpoints (prevenir brute force)</li>
          <li>Formularios de contacto (prevenir spam)</li>
          <li>Búsquedas costosas</li>
          <li>Upload de archivos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Retorna headers informativos (límite, restante, reset)</li>
          <li>HTTP 429 Too Many Requests cuando se excede</li>
          <li>Diferentes límites por tipo de usuario (free vs premium)</li>
          <li>Whitelist IPs confiables</li>
          <li>Monitorea y ajusta límites según uso real</li>
          <li>Combina con caching para reducir carga</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Rate Limiting en el cliente
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          También puedes implementar throttling/debouncing en el frontend:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Debouncing:</strong> Espera a que el usuario termine de escribir</li>
          <li><strong>Throttling:</strong> Ejecuta máximo cada X milisegundos</li>
          <li><strong>Request deduplication:</strong> Cancela peticiones duplicadas</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Rate Limiting es crucial para la seguridad y estabilidad de tu API. Impleméntalo desde el día 1 en producción.
        </p>
      </div>
    </div>
  );
}
