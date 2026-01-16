'use client';

export function enzymeDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Enzyme</strong> es una librería de testing de componentes React creada por Airbnb.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Fue muy popular pero ahora es considerada legacy. React Testing Library es la alternativa moderna.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características (históricas)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Shallow rendering:</strong> Testea componente sin hijos</li>
          <li><strong>Full DOM rendering:</strong> Mount completo con jsdom</li>
          <li><strong>jQuery-like API:</strong> find, simulate, setState, etc.</li>
          <li><strong>Snapshot testing:</strong> Con Jest</li>
          <li><strong>Testing de estado:</strong> Acceso directo a state</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Por qué cayó en desuso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>No soporta React Hooks bien</li>
          <li>Requiere adapters para cada versión de React</li>
          <li>Promueve testing de implementación vs comportamiento</li>
          <li>Mantenimiento mínimo desde 2020</li>
          <li>No compatible con React 18+ oficialmente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Enzyme vs React Testing Library
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Enzyme (old way)</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Acceso a state y props internos</li>
              <li>Shallow rendering</li>
              <li>Testing de implementación</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">RTL (modern way)</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Testing como usuario real</li>
              <li>Basado en queries de DOM</li>
              <li>Testing de comportamiento</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Migración recomendada
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Si tu proyecto usa Enzyme:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Migra gradualmente a React Testing Library</li>
          <li>Reemplaza shallow() con render()</li>
          <li>Usa queries de DOM en vez de find()</li>
          <li>Testea comportamiento, no implementación</li>
          <li>Sigue la guía oficial de migración</li>
        </ul>
      </section>

      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-red-600 dark:text-red-400">❌ Deprecated:</strong> No uses Enzyme en proyectos nuevos. React Testing Library es el estándar actual para testing de componentes React.
        </p>
      </div>
    </div>
  );
}
