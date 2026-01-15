'use client';

export function UseMemoDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useMemo</strong> es un Hook de optimización que memoriza el resultado de un cálculo costoso.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Solo recalcula el valor cuando una de sus dependencias cambia.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es la memoización?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          La memoización es una técnica de optimización que almacena el resultado de operaciones costosas y lo reutiliza cuando las entradas son las mismas.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Es como tener una "caché" de resultados.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Memoización de valores:</strong> Almacena y reutiliza resultados de cálculos</li>
          <li><strong>Recálculo condicional:</strong> Solo recalcula cuando las dependencias cambian</li>
          <li><strong>Optimización de rendimiento:</strong> Evita cálculos costosos repetidos</li>
          <li><strong>Valores derivados:</strong> Perfecto para valores computados a partir del estado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencias con useCallback
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useMemo:</strong> Memoriza el <strong>resultado</strong> de ejecutar una función</li>
          <li><strong>useCallback:</strong> Memoriza la <strong>función misma</strong> (sin ejecutarla)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso reales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Filtrado o sorting de listas grandes</li>
          <li>Cálculos matemáticos complejos o algoritmos costosos</li>
          <li>Transformaciones de datos pesadas</li>
          <li>Creación de objetos o arrays derivados del estado</li>
          <li>Procesamiento de strings complejos (regex, parsing)</li>
          <li>Cálculos estadísticos o agregaciones</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const memoizedValue = useMemo(() ={'>'} computeExpensiveValue(a, b), [a, b]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo SÍ usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Cálculos verdaderamente costosos (loops, algoritmos complejos)</li>
          <li>Filtrado/sorting de listas grandes (1000+ items)</li>
          <li>El valor es usado en otros Hooks como dependencia</li>
          <li>Transformaciones de datos que toman tiempo medible</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Cálculos simples (suma, resta, concatenación)</li>
          <li>Como optimización prematura sin medir rendimiento</li>
          <li>Listas pequeñas (menos de 100 items)</li>
          <li>El costo de memorización es mayor que el cálculo</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este ejemplo muestra cómo useMemo evita recalcular valores costosos en cada render, mejorando significativamente el rendimiento.
        </p>
      </div>
    </div>
  );
}
