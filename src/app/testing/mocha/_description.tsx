'use client';

export function mochaDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Mocha</strong> es un test framework flexible y feature-rich para Node.js y browsers.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          A diferencia de Jest, Mocha es minimalista: tú eliges las librerías de assertions, mocking y spies.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Flexible:</strong> Combina con Chai, Sinon, etc.</li>
          <li><strong>Async support:</strong> Callbacks, promises, async/await</li>
          <li><strong>Browser support:</strong> Corre en navegadores</li>
          <li><strong>Multiple reporters:</strong> spec, dot, nyan, json, etc.</li>
          <li><strong>Before/After hooks:</strong> Setup y teardown elegantes</li>
          <li><strong>Configurable:</strong> Muchas opciones de configuración</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ecosystem típico
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Chai</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Assertion library con expect, should y assert styles.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Sinon</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Spies, stubs y mocks para testing de side effects.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">NYC (Istanbul)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Code coverage tool compatible con Mocha.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mocha vs Jest
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Mocha ventajas</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Más flexible y personalizable</li>
              <li>Mejor para proyectos Node.js backend</li>
              <li>Runs in browsers natively</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Jest ventajas</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Todo incluido (batteries included)</li>
              <li>Mejor para React/frontend</li>
              <li>Snapshot testing built-in</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso ideales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>APIs Node.js y Express</li>
          <li>Microservicios backend</li>
          <li>Testing en navegadores</li>
          <li>Cuando necesitas control fino de setup</li>
          <li>Proyectos que ya usan Mocha</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-blue-600 dark:text-blue-400">🔧 Framework maduro:</strong> Mocha es una opción sólida para backend. Para React, considera Jest primero.
        </p>
      </div>
    </div>
  );
}
