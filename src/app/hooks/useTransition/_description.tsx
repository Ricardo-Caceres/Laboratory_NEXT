'use client';

export function UseTransitionDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useTransition</strong> es un Hook de React 18+ que permite marcar actualizaciones de estado como transiciones no urgentes.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Mantiene la UI responsiva durante actualizaciones de estado costosas.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Concepto de Transiciones
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          React divide las actualizaciones en dos categorías:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Urgentes:</strong> Typing, clicking, scrolling - el usuario espera feedback inmediato</li>
          <li><strong>Transiciones:</strong> Actualizar listas, cambiar vistas - pueden esperar un poco</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>UI responsiva:</strong> El input sigue funcionando durante renders pesados</li>
          <li><strong>Estado isPending:</strong> Saber cuándo la transición está en progreso</li>
          <li><strong>Interrumpible:</strong> React puede pausar renders para atender inputs urgentes</li>
          <li><strong>Sin bloqueo:</strong> El usuario puede seguir interactuando</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Búsqueda en tiempo real con filtrado de listas grandes</li>
          <li>Cambio entre tabs con contenido pesado</li>
          <li>Navegación entre rutas con datos complejos</li>
          <li>Filtros que actualizan visualizaciones costosas</li>
          <li>Auto-guardar con validaciones complejas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const [isPending, startTransition] = useTransition();
          </code>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>isPending:</strong> Booleano que indica si hay una transición en progreso</li>
          <li><strong>startTransition:</strong> Función para marcar actualizaciones como no urgentes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const [query, setQuery] = useState('');
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  setQuery(e.target.value); // Urgente
  startTransition(() => {
    // No urgente - filtrado pesado
    setFilteredResults(
      data.filter(item => 
        item.name.includes(e.target.value)
      )
    );
  });
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Input fields nunca se sienten lentos</li>
          <li>Mejor experiencia de usuario</li>
          <li>No necesitas debouncing manual</li>
          <li>React optimiza automáticamente</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este ejemplo muestra cómo useTransition mantiene la UI responsiva mientras se procesan actualizaciones costosas en segundo plano.
        </p>
      </div>
    </div>
  );
}
