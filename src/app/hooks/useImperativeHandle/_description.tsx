'use client';

export function UseImperativeHandleDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useImperativeHandle</strong> personaliza el valor de la instancia que se expone a componentes padres cuando usan ref.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Permite controlar exactamente qué métodos y propiedades expone un componente hijo.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Por qué existe?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Por defecto, cuando pasas un ref a un componente funcional con forwardRef, el padre obtiene acceso al elemento DOM completo.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          useImperativeHandle te permite limitar y personalizar qué se expone, manteniendo encapsulación.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Encapsulación:</strong> Expone solo lo que quieres</li>
          <li><strong>API personalizada:</strong> Define métodos imperativos personalizados</li>
          <li><strong>Abstracción:</strong> Oculta detalles de implementación</li>
          <li><strong>Control:</strong> El componente hijo decide qué es accesible</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Componentes de input personalizados (exponer focus, blur, clear)</li>
          <li>Reproductores de video/audio (exponer play, pause, stop)</li>
          <li>Modales (exponer open, close)</li>
          <li>Componentes de forma compleja (exponer validate, reset)</li>
          <li>Integraciones con bibliotecas DOM que requieren métodos imperativos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useImperativeHandle(ref, () ={'>'} ({'{'} /* métodos */ {'}'}), [deps]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));
  
  return <input ref={inputRef} />;
});

// Uso:
const ref = useRef();
<FancyInput ref={ref} />
ref.current.focus(); // ✓
ref.current.clear(); // ✓
ref.current.value; // ✗ No disponible`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Mejor encapsulación de componentes</li>
          <li>API más limpia y documentada</li>
          <li>Previene mal uso del componente</li>
          <li>Facilita testing (mocks más simples)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Importante
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Evita usar refs imperativos cuando sea posible (prefiere props)</li>
          <li>Solo úsalo cuando realmente necesites control imperativo</li>
          <li>Requiere forwardRef para funcionar</li>
          <li>El segundo parámetro debe ser una función que retorna un objeto</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚠️ Nota:</strong> useImperativeHandle es una "escape hatch" para casos especiales. Prefiere el flujo de datos declarativo con props cuando sea posible.
        </p>
      </div>
    </div>
  );
}
