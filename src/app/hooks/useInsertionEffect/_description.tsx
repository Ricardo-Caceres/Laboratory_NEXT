'use client';

export function UseInsertionEffectDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useInsertionEffect</strong> es un Hook especializado para bibliotecas CSS-in-JS que necesitan insertar estilos antes de que el layout se calcule.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Se ejecuta ANTES de useLayoutEffect y ANTES de cualquier lectura del DOM.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Orden de ejecución
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useInsertionEffect</strong> - Primero (insertar estilos)</li>
          <li><strong>useLayoutEffect</strong> - Segundo (leer layout)</li>
          <li><strong>Navegador pinta</strong></li>
          <li><strong>useEffect</strong> - Último (efectos asíncronos)</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Para qué sirve?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Cuando una biblioteca CSS-in-JS genera estilos dinámicamente, necesita insertarlos ANTES de que React lea el layout.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Si los estilos se insertan después, las medidas del DOM serían incorrectas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Bibliotecas CSS-in-JS (styled-components, emotion)</li>
          <li>Runtime style injection</li>
          <li>Dynamic theme systems con estilos generados</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useInsertionEffect(() ={'>'} {'{'} /* insertar estilos */ {'}'}, [deps]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo (biblioteca CSS-in-JS)
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function useCSS(rule) {
  useInsertionEffect(() => {
    // Insertar regla CSS antes de layout
    const styleTag = document.createElement('style');
    styleTag.textContent = rule;
    document.head.appendChild(styleTag);
    
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [rule]);
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Limitaciones importantes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>NO puedes actualizar estado desde useInsertionEffect</li>
          <li>NO puedes leer refs (aún no están disponibles)</li>
          <li>Solo debe usarse para insertar estilos/scripts</li>
          <li>Extremadamente especializado - 99% de apps NO lo necesitan</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Aplicaciones normales (usa useEffect o useLayoutEffect)</li>
          <li>Cualquier cosa que no sea insertar estilos globales</li>
          <li>Si no estás creando una biblioteca CSS-in-JS</li>
        </ul>
      </section>

      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-red-600 dark:text-red-400">🚫 Advertencia:</strong> Este hook es SOLO para autores de bibliotecas CSS-in-JS. Las aplicaciones normales NO deben usarlo. Usa useEffect o useLayoutEffect en su lugar.
        </p>
      </div>
    </div>
  );
}
