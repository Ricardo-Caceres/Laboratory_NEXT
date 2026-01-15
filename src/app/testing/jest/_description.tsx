'use client';

export function JestDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Jest</strong> es el framework de testing más popular para JavaScript y React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Desarrollado por Meta, viene con todo incluido: test runner, assertions, mocks y coverage.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Características principales</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Zero config:</strong> Funciona out-of-the-box</li>
          <li><strong>Snapshot testing:</strong> Detecta cambios UI automáticamente</li>
          <li><strong>Mocking integrado:</strong> Mock functions, modules, timers</li>
          <li><strong>Code coverage:</strong> Reportes detallados incluidos</li>
          <li><strong>Parallel testing:</strong> Tests corren en paralelo</li>
          <li><strong>Watch mode:</strong> Re-run automático al guardar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Casos de uso</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Unit tests de componentes React</li>
          <li>Integration tests</li>
          <li>Testing de funciones puras</li>
          <li>Snapshot testing de UI</li>
          <li>API mocking</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Estándar de la industria:</strong> Jest es el framework de testing preferido para proyectos React y Next.js.
        </p>
      </div>
    </div>
  );
}
