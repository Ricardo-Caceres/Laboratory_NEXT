'use client';

export function UseRefDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useRef</strong> es un Hook que devuelve un objeto mutable que persiste durante toda la vida del componente.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          A diferencia del estado, cambiar un ref NO causa un re-renderizado.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Persistencia:</strong> El valor persiste entre re-renderizados</li>
          <li><strong>Mutabilidad:</strong> Se puede modificar directamente sin causar re-renderizado</li>
          <li><strong>Acceso al DOM:</strong> Forma principal de acceder a elementos DOM en React</li>
          <li><strong>Valores anteriores:</strong> Útil para guardar valores previos de props o estado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Acceder y manipular elementos DOM directamente</li>
          <li>Almacenar valores mutables que no afectan la UI</li>
          <li>Guardar IDs de timers o intervalos</li>
          <li>Mantener valores previos de props o estado</li>
          <li>Integración con librerías de terceros que requieren referencias DOM</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const ref = useRef(initialValue);
          </code>
        </div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Usar <code className="text-[var(--primary)]">ref.current</code> para acceder o modificar el valor
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencias con useState
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useRef:</strong> No causa re-renderizado al cambiar</li>
          <li><strong>useState:</strong> Causa re-renderizado al cambiar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Patrones comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>DOM ref:</strong> <code className="text-[var(--primary)]">&lt;input ref={'{inputRef}'} /&gt;</code></li>
          <li><strong>Valor mutable:</strong> <code className="text-[var(--primary)]">ref.current = newValue</code></li>
          <li><strong>Guardar callback:</strong> <code className="text-[var(--primary)]">ref.current = callback</code></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Importante
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>No uses ref para datos que afectan la renderización (usa useState)</li>
          <li>Los cambios en ref.current no disparan re-renderizados</li>
          <li>Útil para "escapar" del paradigma declarativo cuando es necesario</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En este ejemplo, demostramos cómo usar useRef para acceder y manipular un elemento input del DOM, permitiéndonos enfocarlo programáticamente.
        </p>
      </div>
    </div>
  );
}
