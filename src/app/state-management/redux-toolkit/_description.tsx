'use client';

export function ReduxToolkitDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Redux Toolkit (RTK)</strong> es la forma oficial y recomendada de escribir lógica Redux.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Simplifica la configuración de Redux eliminando el boilerplate y proporcionando herramientas poderosas out-of-the-box.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Por qué Redux Toolkit?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Redux original requería mucho código repetitivo (boilerplate). Redux Toolkit soluciona esto:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Menos código:</strong> 70% menos boilerplate que Redux clásico</li>
          <li><strong>Mejores defaults:</strong> Configuración optimizada incluida</li>
          <li><strong>Immer integrado:</strong> Escribe código "mutable" que es inmutable</li>
          <li><strong>DevTools incluido:</strong> Redux DevTools configurado automáticamente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Conceptos principales
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">configureStore</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Simplifica la configuración del store. Incluye Redux DevTools y middleware por defecto.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">createSlice</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Genera automáticamente action creators y reducers. Usa Immer para código más limpio.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">createAsyncThunk</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Maneja lógica asíncrona (API calls) generando automáticamente pending/fulfilled/rejected actions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">RTK Query</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Data fetching y caching poderoso. Alternativa a React Query integrada en Redux.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Predictibilidad:</strong> Estado centralizado, cambios predecibles</li>
          <li><strong>DevTools increíbles:</strong> Time-travel debugging</li>
          <li><strong>Middleware ecosystem:</strong> Redux Saga, Thunk, etc.</li>
          <li><strong>TypeScript friendly:</strong> Excelente soporte de tipos</li>
          <li><strong>SSR compatible:</strong> Funciona perfecto con Next.js</li>
          <li><strong>Testing fácil:</strong> Lógica pura y testeable</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso ideales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Aplicaciones grandes con estado complejo</li>
          <li>Múltiples fuentes de actualización del estado</li>
          <li>Debugging avanzado requerido</li>
          <li>Estado compartido entre muchos componentes</li>
          <li>Lógica de negocio compleja</li>
          <li>Necesitas time-travel debugging</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usar Redux
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Aplicación pequeña o mediana simple</li>
          <li>Estado mayormente local a componentes</li>
          <li>Equipo sin experiencia en Redux</li>
          <li>Solo necesitas server state (usa React Query)</li>
          <li>Prototipo rápido o MVP</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Redux Toolkit vs Alternativas
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">vs Zustand</h3>
            <p className="text-[var(--foreground)] opacity-90">
              Zustand es más simple pero Redux ofrece más herramientas enterprise.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">vs Context API</h3>
            <p className="text-[var(--foreground)] opacity-90">
              Context causa re-renders innecesarios. Redux optimiza esto.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">vs Jotai/Recoil</h3>
            <p className="text-[var(--foreground)] opacity-90">
              Atomic state es más moderno pero Redux tiene mejor tooling.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa RTK Query para data fetching</li>
          <li>Organiza por features, no por tipo de archivo</li>
          <li>Normaliza estado complejo (con createEntityAdapter)</li>
          <li>Usa TypeScript para type-safe store</li>
          <li>Mantén slices pequeños y enfocados</li>
          <li>Usa selectors memoizados (createSelector)</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Redux Toolkit es el estándar de la industria para state management complejo. Si tu app crece, Redux escala perfectamente.
        </p>
      </div>
    </div>
  );
}
