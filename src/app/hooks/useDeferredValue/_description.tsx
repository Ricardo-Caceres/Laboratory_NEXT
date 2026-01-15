'use client';

export function UseDeferredValueDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useDeferredValue</strong> es un Hook de React 18+ que permite diferir la actualización de una parte de la UI.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Es similar a useTransition pero para valores en lugar de funciones de actualización.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Concepto
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Cuando un valor cambia rápidamente (como un input), useDeferredValue crea una versión "retrasada" de ese valor.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          React actualiza primero las partes urgentes de la UI y luego, cuando tenga tiempo, actualiza las partes diferidas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Valor diferido:</strong> Crea una copia "retrasada" del valor</li>
          <li><strong>No bloquea input:</strong> El usuario puede seguir escribiendo sin lag</li>
          <li><strong>Automático:</strong> React decide cuándo actualizar</li>
          <li><strong>Interrumpible:</strong> Se cancela si llega una actualización más reciente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Búsqueda en tiempo real con resultados costosos de renderizar</li>
          <li>Filtrado de listas grandes</li>
          <li>Gráficos que se actualizan mientras el usuario escribe</li>
          <li>Preview en tiempo real de contenido pesado</li>
          <li>Auto-completado con muchas opciones</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const deferredValue = useDeferredValue(value);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencia con useTransition
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] opacity-90">
          <li>
            <strong>useTransition:</strong> Cuando TÚ controlas la actualización de estado
            <br />
            <code className="text-sm text-[var(--primary)]">startTransition(() ={'>'} setState(newValue))</code>
          </li>
          <li>
            <strong>useDeferredValue:</strong> Cuando recibes el valor de PROPS o de otro hook
            <br />
            <code className="text-sm text-[var(--primary)]">const deferred = useDeferredValue(propsValue)</code>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);

// Input se actualiza inmediatamente
<input 
  value={query} 
  onChange={e => setQuery(e.target.value)} 
/>

// Lista usa el valor diferido
<HeavyList searchQuery={deferredQuery} />`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Más simple que debouncing manual</li>
          <li>Integrado con Concurrent Features de React</li>
          <li>Se integra con Suspense</li>
          <li>Cancela renders obsoletos automáticamente</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este ejemplo muestra cómo useDeferredValue mantiene el input responsivo mientras actualiza componentes pesados en segundo plano.
        </p>
      </div>
    </div>
  );
}
