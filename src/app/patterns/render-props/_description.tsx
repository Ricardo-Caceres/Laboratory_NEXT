'use client';

export function RenderPropsDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Render Props</strong> es un patrón que permite compartir lógica entre componentes usando una prop cuyo valor es una función.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          El componente llama a esta función en lugar de implementar su propio render, pasándole los datos que necesita.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Concepto básico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`<DataProvider render={(data) => (
  <div>{data.value}</div>
)} />`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Separación de concerns:</strong> Lógica vs Presentación</li>
          <li><strong>Reutilización:</strong> Misma lógica, diferentes UIs</li>
          <li><strong>Flexibilidad:</strong> El consumidor decide cómo renderizar</li>
          <li><strong>Type-safe:</strong> TypeScript infiere los tipos automáticamente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Tracking de mouse position</li>
          <li>Data fetching con diferentes UIs</li>
          <li>Toggle/Modal logic</li>
          <li>Form state management</li>
          <li>Animation controllers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Render Props vs Hooks
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong>Antes (Render Props):</strong> Era el patrón estándar para compartir lógica
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong>Ahora (Hooks):</strong> Custom Hooks son generalmente preferidos
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>Cuándo usar Render Props hoy:</strong> Cuando necesitas control fino sobre el render o trabajas con código legacy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Desventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>"Callback hell" con múltiples render props anidados</li>
          <li>Más verboso que hooks</li>
          <li>Puede ser confuso para principiantes</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">📝 Nota:</strong> Aunque Hooks son ahora el estándar, Render Props sigue siendo válido y útil en ciertos casos. Muchas bibliotecas populares aún lo usan.
        </p>
      </div>
    </div>
  );
}
