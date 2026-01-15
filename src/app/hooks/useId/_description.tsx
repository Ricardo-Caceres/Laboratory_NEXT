'use client';

export function UseIdDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useId</strong> es un Hook para generar IDs únicos que son estables en el servidor y el cliente.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Esencial para accesibilidad y evitar hydration mismatches en SSR.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Problema que resuelve
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Antes de useId, generar IDs únicos era problemático:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>IDs aleatorios causan mismatch entre servidor y cliente</li>
          <li>Contadores globales no funcionan con múltiples instancias del componente</li>
          <li>Math.random() o Date.now() rompen SSR/hydration</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Único:</strong> Garantizado único dentro del árbol de React</li>
          <li><strong>Estable:</strong> Mismo ID en servidor y cliente (SSR safe)</li>
          <li><strong>Determinístico:</strong> Se genera de forma predecible</li>
          <li><strong>Prefijo personalizable:</strong> Puedes agregar sufijos para múltiples IDs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Conectar labels con inputs (htmlFor / id)</li>
          <li>ARIA attributes (aria-labelledby, aria-describedby)</li>
          <li>Múltiples inputs en un mismo componente</li>
          <li>Componentes reutilizables que necesitan IDs únicos</li>
          <li>Accesibilidad en formularios</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const id = useId();
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function FormField() {
  const id = useId();
  
  return (
    <>
      <label htmlFor={id}>
        Email:
      </label>
      <input 
        id={id}
        type="email" 
      />
      <p id={\`\${id}-description\`}>
        We'll never share your email
      </p>
    </>
  );
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Importante
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>NO uses useId para keys en listas (usa datos estables)</li>
          <li>El ID generado incluye ":" - no lo uses en selectores CSS</li>
          <li>Puedes agregar sufijos: <code className="text-[var(--primary)]">{`${id}-description`}</code></li>
          <li>Solo genera UN id por componente - reutilízalo con sufijos</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este ejemplo demuestra cómo useId genera IDs únicos para accesibilidad, funcionando perfectamente con SSR.
        </p>
      </div>
    </div>
  );
}
