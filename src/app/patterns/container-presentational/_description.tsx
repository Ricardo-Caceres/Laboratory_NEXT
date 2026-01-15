'use client';

export function ContainerPresentationalDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Container/Presentational Pattern</strong> separa componentes en dos categorías: lógica (containers) y presentación (presentational).
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Promueve la separación de concerns y reutilización de UI.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes Container (Smart)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Responsabilidad:</strong> Lógica, data fetching, estado</li>
          <li><strong>Sin estilos:</strong> No contienen CSS o diseño</li>
          <li><strong>Pasan datos:</strong> A componentes presentacionales vía props</li>
          <li><strong>Llaman APIs:</strong> Manejan side effects</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes Presentacionales (Dumb)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Responsabilidad:</strong> Solo UI y estilos</li>
          <li><strong>Sin lógica:</strong> Reciben todo vía props</li>
          <li><strong>Reutilizables:</strong> Pueden usarse en diferentes contextos</li>
          <li><strong>Pure components:</strong> Mismo input = mismo output</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Separación clara de concerns</li>
          <li>Componentes UI altamente reutilizables</li>
          <li>Fácil de testear (UI separada de lógica)</li>
          <li>Mejor organización del código</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Patrón moderno con Hooks
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Con hooks, la distinción es menos estricta:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Custom hooks extraen la lógica</li>
          <li>Componentes usan los hooks y manejan UI</li>
          <li>Más flexible que la separación rígida Container/Presentational</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón sigue siendo útil conceptualmente, pero hooks ofrecen una forma más flexible de lograr la misma separación de concerns.
        </p>
      </div>
    </div>
  );
}
