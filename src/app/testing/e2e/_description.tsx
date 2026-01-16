'use client';

export function E2EDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">E2E (End-to-End) Testing</strong> prueba flujos completos de usuario desde el inicio hasta el final.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Simula cómo un usuario real interactúa con tu aplicación en un navegador real.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Navegador real:</strong> Ejecuta en Chrome, Firefox, Safari, etc.</li>
          <li><strong>Flujos completos:</strong> Desde login hasta checkout</li>
          <li><strong>Interacción real:</strong> Clicks, typing, navigation</li>
          <li><strong>Visual testing:</strong> Verifica UI y screenshots</li>
          <li><strong>Mayor confianza:</strong> Prueba la app como usuario real</li>
          <li><strong>Más lentos:</strong> Los tests más costosos de mantener</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso críticos
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>User authentication (signup, login, logout)</li>
          <li>Checkout y payment flows</li>
          <li>Formularios multi-step</li>
          <li>Navegación entre páginas</li>
          <li>Features críticos del negocio</li>
          <li>Flujos que generan dinero</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Herramientas populares
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Playwright</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Framework moderno de Microsoft. Multi-browser, rápido y poderoso.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Cypress</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              DX excepcional, time-travel debugging, visual test runner.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Puppeteer</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Control headless de Chrome/Chromium. Ideal para scraping y automatización.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Testing Pyramid
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          La estrategia recomendada:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Muchos:</strong> Unit tests (70%)</li>
          <li><strong>Algunos:</strong> Integration tests (20%)</li>
          <li><strong>Pocos:</strong> E2E tests (10%)</li>
        </ul>
      </section>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-purple-600 dark:text-purple-400">🎭 Mayor confianza:</strong> E2E tests son los más costosos pero dan la mayor certeza de que tu app funciona para usuarios reales.
        </p>
      </div>
    </div>
  );
}
