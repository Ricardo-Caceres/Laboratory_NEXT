'use client';

export function UseLayoutEffectDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useLayoutEffect</strong> es idéntico a useEffect pero se dispara sincrónicamente después de todas las mutaciones del DOM y antes de que el navegador pinte la pantalla.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Es útil cuando necesitas leer layout del DOM o realizar mutaciones sincrónicas.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencias con useEffect
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useEffect (Asíncrono)</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Se ejecuta DESPUÉS de que el navegador pinta</li>
              <li>No bloquea el pintado visual</li>
              <li>Mejor para la mayoría de casos</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useLayoutEffect (Síncrono)</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Se ejecuta ANTES de que el navegador pinte</li>
              <li>Bloquea el pintado visual hasta completarse</li>
              <li>Solo para casos específicos de layout</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Medir dimensiones del DOM (getBoundingClientRect)</li>
          <li>Posicionar tooltips o popovers basados en otro elemento</li>
          <li>Animaciones que requieren lecturas síncronas del DOM</li>
          <li>Prevenir parpadeos cuando se modifica el DOM inmediatamente</li>
          <li>Sincronizar con bibliotecas de terceros que manipulan el DOM</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useLayoutEffect(() ={'>'} {'{'} /* código */ {'}'}, [deps]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar useLayoutEffect
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Necesitas medir el DOM antes de que el usuario lo vea</li>
          <li>Hay parpadeo visible con useEffect</li>
          <li>Necesitas mutaciones síncronas del DOM</li>
          <li>Integración con bibliotecas que requieren medidas inmediatas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Advertencias importantes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Bloquea el pintado visual - puede afectar performance</li>
          <li>Prefiere useEffect cuando sea posible</li>
          <li>En SSR (Next.js) puede causar warnings - usa dynamic import</li>
          <li>Solo úsalo cuando useEffect cause problemas visuales</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚠️ Nota:</strong> useLayoutEffect debe ser tu última opción. Primero intenta con useEffect. Solo úsalo si experimentas parpadeos visuales o necesitas medidas síncronas del DOM.
        </p>
      </div>
    </div>
  );
}
