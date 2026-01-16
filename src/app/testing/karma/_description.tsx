'use client';

export function karmaDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Karma</strong> es un test runner creado por el equipo de Angular para ejecutar tests en navegadores reales.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Aunque es considerado legacy, aún se usa en proyectos Angular antiguos.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Multi-browser:</strong> Chrome, Firefox, Safari, IE, etc.</li>
          <li><strong>Real browsers:</strong> Tests en navegadores reales</li>
          <li><strong>Watch mode:</strong> Re-run automático</li>
          <li><strong>CI integration:</strong> Funciona bien en CI/CD</li>
          <li><strong>Plugins:</strong> Ecosystem de plugins para frameworks</li>
          <li><strong>Remote testing:</strong> Browsers remotos via BrowserStack/SauceLabs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ecosystem típico
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Jasmine</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Framework de testing típicamente usado con Karma.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Mocha</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              También compatible como alternativa a Jasmine.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Angular CLI</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Viene configurado por defecto en proyectos Angular.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Estado actual
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Considerado legacy en el ecosistema moderno</li>
          <li>Reemplazado por Jest, Vitest en nuevos proyectos</li>
          <li>Angular migró a Web Test Runner</li>
          <li>Aún útil para proyectos legacy que lo usan</li>
          <li>Mantenimiento mínimo, sin nuevas features</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Alternativas modernas
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Jest</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Para proyectos React. Todo incluido, mejor DX.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Vitest</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Alternativa ultra-rápida compatible con Vite.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Playwright/Cypress</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Para E2E testing moderno con mejor DX.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚠️ Legacy tool:</strong> Karma fue importante históricamente pero ya no se recomienda para nuevos proyectos. Usa Jest o Vitest.
        </p>
      </div>
    </div>
  );
}
