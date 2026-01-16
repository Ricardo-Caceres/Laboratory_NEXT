'use client';

export function cypressDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Cypress</strong> es el framework E2E moderno con la mejor developer experience del mercado.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Revolucionó E2E testing con time-travel debugging, automatic waiting y un test runner visual increíble.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características destacadas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Time travel:</strong> Ve tu app en cada paso del test</li>
          <li><strong>Auto-waiting:</strong> No más sleeps o waits manuales</li>
          <li><strong>Real-time reload:</strong> Tests se re-ejecutan al guardar</li>
          <li><strong>Screenshots/Videos:</strong> Automáticos en CI</li>
          <li><strong>Network stubbing:</strong> Mockea APIs fácilmente</li>
          <li><strong>Test runner visual:</strong> Debugging increíble</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas vs Selenium
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Setup en minutos vs horas</li>
          <li>No necesita WebDriver</li>
          <li>Tests más estables (menos flaky)</li>
          <li>Debugging muchísimo mejor</li>
          <li>Sintaxis moderna y limpia</li>
          <li>DX incomparable</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Limitaciones
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Solo Chromium browsers (versión gratuita)</li>
          <li>No puede manejar múltiples tabs/ventanas fácilmente</li>
          <li>Todas las commands son asíncronas (learning curve)</li>
          <li>No ideal para testing de iframes complejos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cypress vs Playwright
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Cypress</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Mejor DX, test runner visual, ideal para desarrollo.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Playwright</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Multi-browser, más features, mejor para CI/CD enterprise.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso perfectos
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>SPAs modernas (React, Vue, Angular)</li>
          <li>E2E testing con gran DX</li>
          <li>Component testing (Cypress Component Testing)</li>
          <li>API testing</li>
          <li>Teams que priorizan developer experience</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🎯 DX increíble:</strong> Cypress cambió el game de E2E testing. La mejor opción si priorizas developer experience.
        </p>
      </div>
    </div>
  );
}
