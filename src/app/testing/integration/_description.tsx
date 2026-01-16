'use client';

export function integrationDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Integration Testing</strong> verifica que múltiples unidades de código funcionen correctamente juntas.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          A diferencia de unit tests, aquí se prueban interacciones reales entre componentes, módulos y servicios.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Integración real:</strong> Prueba componentes trabajando juntos</li>
          <li><strong>API calls:</strong> Verifica interacciones con APIs (mock o real)</li>
          <li><strong>Data flow:</strong> Testea flujo de datos entre capas</li>
          <li><strong>Side effects:</strong> Incluye efectos secundarios reales</li>
          <li><strong>Más lentos:</strong> Más complejos que unit tests</li>
          <li><strong>Mayor confianza:</strong> Detecta problemas de integración</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Qué testear
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Componentes React con hooks y context</li>
          <li>Formularios completos con validación</li>
          <li>API routes + database en Next.js</li>
          <li>Server Actions con side effects</li>
          <li>Auth flows (login, logout, protected routes)</li>
          <li>Interacción entre múltiples componentes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Herramientas comunes
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">MSW (Mock Service Worker)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Mockea APIs interceptando requests a nivel de network.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">React Testing Library</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Ideal para integration tests de componentes React.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Supertest</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Testing de APIs Express/Next.js sin levantar servidor.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-blue-600 dark:text-blue-400">🔗 Balance perfecto:</strong> Integration tests complementan unit tests. Prueban que las piezas funcionan juntas correctamente.
        </p>
      </div>
    </div>
  );
}
