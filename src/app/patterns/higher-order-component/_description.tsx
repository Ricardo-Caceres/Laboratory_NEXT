'use client';

export function HigherOrderComponentDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Higher-Order Component (HOC)</strong> es una función que toma un componente y retorna un nuevo componente con funcionalidad adicional.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Es un patrón avanzado para reutilizar lógica de componentes, basado en la composición funcional.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Concepto básico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const EnhancedComponent = withFeature(OriginalComponent);

// Uso
<EnhancedComponent />`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>No modifica el componente original:</strong> Usa composición, no mutación</li>
          <li><strong>Transparente:</strong> Pasa todas las props al componente wrapped</li>
          <li><strong>Componible:</strong> Puedes encadenar múltiples HOCs</li>
          <li><strong>Convención de nombres:</strong> Prefijo "with" (withAuth, withLoader)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Autenticación:</strong> withAuth - proteger rutas</li>
          <li><strong>Loading states:</strong> withLoader - mostrar spinners</li>
          <li><strong>Error handling:</strong> withErrorBoundary</li>
          <li><strong>Analytics:</strong> withTracking - tracking de eventos</li>
          <li><strong>Tema:</strong> withTheme - inyectar tema</li>
          <li><strong>Redux:</strong> connect() es un HOC</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Reutilización de lógica cross-cutting</li>
          <li>Separación de concerns clara</li>
          <li>Componible y escalable</li>
          <li>No afecta al componente original</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Desventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Props collision:</strong> Nombres de props pueden chocar</li>
          <li><strong>Wrapper hell:</strong> Múltiples HOCs crean muchos wrappers</li>
          <li><strong>Ref forwarding:</strong> Necesitas forwardRef manualmente</li>
          <li><strong>Debugging difícil:</strong> Stack traces complejos</li>
          <li><strong>Static composition:</strong> No puedes condicionar HOCs en runtime</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          HOC vs Hooks
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Antes (HOC era el estándar)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Pre-Hooks, HOCs eran la única forma de reutilizar lógica stateful.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Ahora (Hooks preferidos)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Custom Hooks son más simples, claros y sin wrapper hell.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Cuándo usar HOC hoy</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Envolver componentes de clase (no pueden usar hooks)</li>
              <li>Bibliotecas legacy (React Router v5, Redux connect)</li>
              <li>Cuando necesitas modificar el componente completo</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa forwardRef para pasar refs correctamente</li>
          <li>Copia static methods del componente original</li>
          <li>Usa displayName para debugging</li>
          <li>Pasa todas las props irrelevantes al componente wrapped</li>
          <li>No uses HOCs dentro del render method</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚠️ Nota:</strong> Aunque HOCs son un patrón legacy, siguen siendo válidos y útiles en ciertos casos. Muchas bibliotecas populares aún los usan extensivamente.
        </p>
      </div>
    </div>
  );
}
