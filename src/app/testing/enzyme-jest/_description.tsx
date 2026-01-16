'use client';

export function enzymejestDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Enzyme + Jest</strong> era la combinación estándar para testing de React antes de 2020.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Jest como test runner + Enzyme para manipular componentes. Ahora obsoleto.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Por qué era popular
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Jest: Zero config, snapshots, mocking</li>
          <li>Enzyme: Shallow rendering, jQuery-like API</li>
          <li>Combinación poderosa para su época</li>
          <li>Documentación abundante</li>
          <li>Ampliamente adoptado en la industria</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Setup típico (legacy)
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Dependencias</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              jest, enzyme, enzyme-adapter-react-16/17
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Setup file</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Configurar adapter de Enzyme para tu versión de React
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Tests</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              shallow(), mount(), find(), simulate()
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Problemas actuales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Enzyme no soporta React 18+ oficialmente</li>
          <li>Problemas con Hooks y Concurrent Mode</li>
          <li>Adapters desactualizados</li>
          <li>Testing de implementación vs comportamiento</li>
          <li>Mantenimiento descontinuado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Migración moderna
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          El stack moderno recomendado:
        </p>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Jest (mantener)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Jest sigue siendo excelente como test runner.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">React Testing Library (reemplazar Enzyme)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Testing centrado en usuario, hooks-friendly, mantenido activamente.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Pasos de migración
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Instala @testing-library/react y @testing-library/jest-dom</li>
          <li>Reemplaza shallow() con render()</li>
          <li>Usa screen.getByRole() en vez de wrapper.find()</li>
          <li>Reemplaza simulate() con userEvent</li>
          <li>Testea comportamiento, no estado interno</li>
        </ul>
      </section>

      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-orange-600 dark:text-orange-400">🔄 Tiempo de migrar:</strong> Si aún usas Enzyme+Jest, planea migrar a Jest+RTL. La inversión vale la pena para proyectos a largo plazo.
        </p>
      </div>
    </div>
  );
}
