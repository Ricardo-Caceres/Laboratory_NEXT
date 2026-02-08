'use client';

export function DecoratorPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Decorator Pattern</strong> - Permite añadir nuevas funcionalidades a objetos existentes de forma dinámica sin alterar su estructura, envolviendo objetos en otros objetos decoradores.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Decorator Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Decorator permite agregar responsabilidades adicionales a un objeto de forma dinámica. Los decoradores proporcionan una alternativa flexible a la herencia para extender funcionalidad, envolviendo el objeto original con capas de funcionalidad adicional.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En React, este patrón es especialmente útil con Higher-Order Components (HOCs) y composition de componentes, donde puedes envolver componentes para añadir comportamiento sin modificar el componente original.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Extensibilidad sin herencia:</strong> Añade funcionalidad sin crear subclases</li>
          <li><strong>Principio Open/Closed:</strong> Extiende comportamiento sin modificar código existente</li>
          <li><strong>Composición flexible:</strong> Combina decoradores de diferentes maneras</li>
          <li><strong>Responsabilidad única:</strong> Cada decorador tiene una responsabilidad específica</li>
          <li><strong>Runtime dinámico:</strong> Añade o quita funcionalidad en tiempo de ejecución</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso en React
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Higher-Order Components:</strong> <code className="px-2 py-1 bg-gray-100 rounded text-sm">withAuth</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">withLoading</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">withErrorBoundary</code></li>
          <li><strong>Middleware:</strong> Añadir logging, analytics o validación a funciones</li>
          <li><strong>Component enhancement:</strong> Añadir tooltips, drag-and-drop, o resize a componentes</li>
          <li><strong>API calls:</strong> Añadir autenticación, retry logic, o caching a peticiones</li>
          <li><strong>Form fields:</strong> Añadir validación, formato o máscaras a inputs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás cómo decoradores pueden añadir diferentes funcionalidades a un componente de notificación: animaciones, auto-dismiss, sonidos, etc. Cada decorador añade una capa de funcionalidad manteniendo la interfaz consistente.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> En React moderno, considera usar Hooks personalizados o render props como alternativas más idiomáticas al patrón Decorator tradicional implementado con HOCs.
        </p>
      </div>
    </div>
  );
}
