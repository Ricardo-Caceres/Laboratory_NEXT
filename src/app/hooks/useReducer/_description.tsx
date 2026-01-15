'use client';

export function UseReducerDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useReducer</strong> es un Hook alternativo a useState para manejar lógica de estado compleja.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Es similar al patrón reducer de Redux y es especialmente útil cuando el estado tiene múltiples sub-valores o cuando las actualizaciones dependen del estado anterior.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Estado complejo:</strong> Ideal para estados con múltiples valores relacionados</li>
          <li><strong>Lógica centralizada:</strong> Toda la lógica de actualización en un solo lugar (reducer)</li>
          <li><strong>Predecibilidad:</strong> Las actualizaciones son más predecibles y fáciles de testear</li>
          <li><strong>Acciones tipadas:</strong> Facilita el uso con TypeScript</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Formularios complejos con múltiples campos</li>
          <li>Estado con lógica de actualización compleja</li>
          <li>Estados que dependen de valores anteriores</li>
          <li>Cuando necesitas dispatch en lugar de setState</li>
          <li>Máquinas de estado simples</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const [state, dispatch] = useReducer(reducer, initialState);
          </code>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Reducer:</strong> Función que recibe (state, action) y retorna nuevo estado</li>
          <li><strong>Initial state:</strong> Estado inicial del componente</li>
          <li><strong>Dispatch:</strong> Función para enviar acciones al reducer</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar useReducer vs useState
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useReducer:</strong> Estado complejo, múltiples sub-valores, lógica compleja</li>
          <li><strong>useState:</strong> Estado simple, valores independientes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Mejor organización del código</li>
          <li>Más fácil de testear</li>
          <li>Facilita el debugging</li>
          <li>Buena preparación para Redux</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En este ejemplo, demostramos cómo usar useReducer para manejar un contador con múltiples acciones (incrementar, decrementar, reset) de forma organizada.
        </p>
      </div>
    </div>
  );
}
