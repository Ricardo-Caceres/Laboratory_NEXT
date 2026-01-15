'use client';

export function MemoDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">React.memo</strong> es un Higher-Order Component que optimiza re-renders memorizando el resultado del componente.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Solo re-renderiza cuando las props cambian (shallow comparison).
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          React.memo cachea el resultado del render. En re-renders subsecuentes, si las props no cambiaron, retorna el resultado cacheado sin ejecutar el componente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const MemoizedComponent = memo(Component);

// Con comparación personalizada
const MemoizedComponent = memo(Component, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Componentes que renderizan frecuentemente con las mismas props</li>
          <li>Componentes pesados (muchos elementos o cálculos)</li>
          <li>Listas grandes donde cada item es costoso</li>
          <li>Componentes que reciben props que rara vez cambian</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usar
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Componentes que siempre reciben props diferentes</li>
          <li>Componentes muy simples (el overhead no vale la pena)</li>
          <li>Como optimización prematura sin medir primero</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚠️ Importante:</strong> memo hace shallow comparison. Si pasas objetos/arrays/funciones nuevas en cada render, memo no funcionará. Usa useMemo/useCallback.
        </p>
      </div>
    </div>
  );
}
