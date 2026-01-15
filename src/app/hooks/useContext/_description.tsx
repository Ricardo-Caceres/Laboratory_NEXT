'use client';

export function UseContextDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useContext</strong> es el Hook que permite consumir valores de un Context de React sin necesidad de usar componentes Consumer.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Simplifica el acceso a datos compartidos en toda la aplicación.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Consumo de contexto:</strong> Accede a valores de contexto de forma directa</li>
          <li><strong>Sin prop drilling:</strong> Evita pasar props a través de múltiples niveles</li>
          <li><strong>Reactividad:</strong> El componente se re-renderiza cuando el valor del contexto cambia</li>
          <li><strong>Múltiples contextos:</strong> Puedes usar múltiples contextos en el mismo componente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Temas (dark/light mode)</li>
          <li>Autenticación y estado del usuario</li>
          <li>Configuración de idioma (i18n)</li>
          <li>Estado global de la aplicación</li>
          <li>Preferencias del usuario</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const value = useContext(MyContext);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Patrón completo
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Crear el contexto: <code className="text-[var(--primary)]">createContext()</code></li>
          <li>Proveer valores: <code className="text-[var(--primary)]">&lt;Context.Provider value={'{...}'}&gt;</code></li>
          <li>Consumir valores: <code className="text-[var(--primary)]">useContext(Context)</code></li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Código más limpio y legible</li>
          <li>Evita prop drilling</li>
          <li>Facilita el testing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Consideraciones
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Cualquier cambio en el valor del contexto re-renderiza todos los consumidores</li>
          <li>Para grandes aplicaciones, considera dividir en múltiples contextos</li>
          <li>Combina con useMemo para optimizar objetos/valores complejos</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En este ejemplo, demostramos cómo usar useContext para implementar un sistema de temas (light/dark) que puede ser accedido desde cualquier componente de la aplicación.
        </p>
      </div>
    </div>
  );
}
