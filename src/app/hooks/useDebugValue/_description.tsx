'use client';

export function UseDebugValueDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useDebugValue</strong> es un Hook para mostrar labels personalizados en React DevTools para custom hooks.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Solo visible en React DevTools - no afecta el comportamiento de la app.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Solo desarrollo:</strong> No tiene efecto en producción</li>
          <li><strong>Para custom hooks:</strong> Mejora la experiencia de debugging</li>
          <li><strong>Formato personalizado:</strong> Puedes formatear el valor mostrado</li>
          <li><strong>Lazy formatting:</strong> El formato solo se ejecuta cuando DevTools está abierto</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Custom hooks complejos usados en muchos lugares</li>
          <li>Bibliotecas y packages que exportan hooks</li>
          <li>Debugging de estado compartido</li>
          <li>Mostrar información computada del hook</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useDebugValue(value);
          </code>
        </div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Con formato personalizado:
        </p>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useDebugValue(value, (v) ={'>'} formatValue(v));
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  
  // Muestra "Online" o "Offline" en DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');
  
  useEffect(() => {
    // lógica...
  }, []);
  
  return isOnline;
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Custom hooks en bibliotecas compartidas</li>
          <li>Hooks complejos que necesitan debugging frecuente</li>
          <li>Cuando el valor interno no es obvio desde afuera</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Hooks simples (useState, useEffect directos)</li>
          <li>Hooks usados solo una o dos veces</li>
          <li>Como optimización prematura</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          useDebugValue es una herramienta de desarrollo que mejora la experiencia de debugging para custom hooks complejos.
        </p>
      </div>
    </div>
  );
}
