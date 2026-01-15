'use client';

export function UseSyncExternalStoreDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useSyncExternalStore</strong> permite suscribirse a stores externos de forma segura con Concurrent Rendering.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Diseñado para integraciones con stores de terceros y estado fuera de React.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Problema que resuelve
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Con Concurrent Rendering, suscribirse a stores externos puede causar "tearing" (partes de la UI mostrando diferentes versiones del estado).
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          useSyncExternalStore garantiza consistencia en toda la UI.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Seguro para Concurrent:</strong> Previene tearing visual</li>
          <li><strong>SSR compatible:</strong> Soporta hydration correctamente</li>
          <li><strong>Selector optimizado:</strong> Solo re-renderiza cuando cambia el valor seleccionado</li>
          <li><strong>Para bibliotecas:</strong> Principalmente para autores de bibliotecas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Integración con Redux, MobX, Zustand</li>
          <li>Suscripción a browser APIs (matchMedia, geolocation)</li>
          <li>Stores globales fuera de React</li>
          <li>Observables de terceros (RxJS sin React wrapper)</li>
          <li>WebSocket stores</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Parámetros
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] opacity-90">
          <li>
            <strong>subscribe:</strong> Función que se suscribe al store y retorna cleanup
          </li>
          <li>
            <strong>getSnapshot:</strong> Función que retorna el estado actual del store
          </li>
          <li>
            <strong>getServerSnapshot:</strong> (Opcional) Snapshot para SSR
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`// Store externo
let listeners = [];
let state = { count: 0 };

const store = {
  getState: () => state,
  setState: (newState) => {
    state = newState;
    listeners.forEach(listener => listener());
  },
  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }
};

// En componente React
function Counter() {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState
  );
  
  return <div>{state.count}</div>;
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Estás creando una biblioteca de state management</li>
          <li>Integras con stores que no controlas</li>
          <li>Necesitas suscribirte a browser APIs</li>
          <li>Tienes un store global fuera de React</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa useState/useReducer para estado local</li>
          <li>Usa Context API para estado compartido simple</li>
          <li>Usa bibliotecas modernas (Zustand, Jotai ya lo usan internamente)</li>
          <li>Para la mayoría de aplicaciones normales</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          useSyncExternalStore es principalmente para autores de bibliotecas. Si usas Zustand, Redux Toolkit, etc., ya estás usando este hook internamente sin saberlo.
        </p>
      </div>
    </div>
  );
}
