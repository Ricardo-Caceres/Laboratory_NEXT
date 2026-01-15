'use client';

export function UseCallbackDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useCallback</strong> es un Hook de optimización que devuelve una versión memoizada de una función callback.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Previene la recreación innecesaria de funciones en cada renderizado.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Por qué es importante?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          En JavaScript, cada vez que un componente se re-renderiza, se crean nuevas instancias de todas sus funciones.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Esto puede causar re-renderizados innecesarios en componentes hijos si usan React.memo o useEffect que dependen de esas funciones.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Memoización de funciones:</strong> La función solo se recrea cuando sus dependencias cambian</li>
          <li><strong>Identidad referencial estable:</strong> Mantiene la misma referencia entre renders</li>
          <li><strong>Optimización de rendimiento:</strong> Evita re-renderizados innecesarios en componentes hijos</li>
          <li><strong>Integración con React.memo:</strong> Máximo beneficio al usarlo con componentes memoizados</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso reales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Pasar callbacks a componentes hijos optimizados con React.memo</li>
          <li>Funciones que son dependencias de otros Hooks (useEffect, useMemo)</li>
          <li>Event handlers en listas grandes (evitar recrear funciones por cada item)</li>
          <li>Callbacks en custom hooks que no deben cambiar frecuentemente</li>
          <li>Funciones que se pasan a bibliotecas externas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const memoizedCallback = useCallback(() ={'>'} {'{'} /* función */ {'}'}, [deps]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencia con useMemo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useCallback:</strong> Memoriza la función misma</li>
          <li><strong>useMemo:</strong> Memoriza el resultado de ejecutar una función</li>
        </ul>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
          <code className="text-[var(--primary)]">useCallback(fn, deps)</code> es equivalente a <code className="text-[var(--primary)]">useMemo(() ={'>'} fn, deps)</code>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo SÍ usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>El callback se pasa a un componente hijo optimizado con React.memo</li>
          <li>El callback es una dependencia de useEffect o useMemo</li>
          <li>La función se crea en un componente que se renderiza frecuentemente</li>
          <li>Estás experimentando problemas de rendimiento medibles</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usarlo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Funciones simples que no se pasan a componentes hijos</li>
          <li>Cuando no hay componentes hijos memoizados</li>
          <li>Como optimización prematura sin medir el rendimiento</li>
          <li>En event handlers simples que no causan problemas</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este ejemplo demuestra cómo useCallback previene re-renderizados innecesarios cuando se pasa una función a un componente hijo memoizado.
        </p>
      </div>
    </div>
  );
}
