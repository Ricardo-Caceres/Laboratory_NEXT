'use client';

export function ZustandDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Zustand</strong> es una solución de state management minimalista y moderna para React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Simple, rápido y escalable sin el boilerplate de Redux.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Por qué Zustand?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>API minimalista:</strong> Solo necesitas crear un store</li>
          <li><strong>Sin boilerplate:</strong> No actions, reducers, ni dispatchers</li>
          <li><strong>Hooks-based:</strong> Se siente natural en React moderno</li>
          <li><strong>Tiny bundle:</strong> Solo ~1KB gzipped</li>
          <li><strong>No Provider:</strong> Funciona sin context provider</li>
          <li><strong>TypeScript first:</strong> Excelente inferencia de tipos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Conceptos clave
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Store</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Un hook que contiene estado y acciones. Simple y directo.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Selectors</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Elige qué parte del estado quieres. Solo re-renderiza si cambia esa parte.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Immer middleware</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Opcional - escribe código mutable que se convierte en inmutable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Curva de aprendizaje mínima</li>
          <li>Performance excelente (re-renders optimizados)</li>
          <li>Bundle size pequeño</li>
          <li>Funciona fuera de React (vanilla JS)</li>
          <li>DevTools disponible</li>
          <li>Async actions son simples</li>
          <li>Persiste estado fácilmente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso ideales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Apps pequeñas a medianas</li>
          <li>Estado global simple a moderado</li>
          <li>Cuando quieres algo más ligero que Redux</li>
          <li>Prototipado rápido</li>
          <li>Apps con múltiples stores independientes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Zustand vs Redux
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Zustand</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Más simple y menos código</li>
              <li>Bundle más pequeño</li>
              <li>Configuración mínima</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Redux Toolkit</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Más herramientas y middleware</li>
              <li>Better DevTools</li>
              <li>Mejor para apps enterprise</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características avanzadas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Middleware:</strong> Persist, devtools, immer</li>
          <li><strong>Computed values:</strong> Derive estado automáticamente</li>
          <li><strong>Transient updates:</strong> Actualizaciones sin re-render</li>
          <li><strong>Context usage:</strong> Múltiples instancias del store</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa selectors para optimizar re-renders</li>
          <li>Divide en múltiples stores si tiene sentido</li>
          <li>Usa shallow para comparar objetos/arrays</li>
          <li>TypeScript para type safety</li>
          <li>Combina con React Query para server state</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🚀 Recomendado:</strong> Zustand es perfecto para la mayoría de aplicaciones. Simple, rápido y sin complejidad innecesaria.
        </p>
      </div>
    </div>
  );
}
