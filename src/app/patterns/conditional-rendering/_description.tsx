'use client';

export function ConditionalRenderingDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Conditional Rendering</strong> - Técnicas y patrones para renderizar componentes condicionalmente en React basándose en el estado, props, o lógica de negocio.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es Conditional Rendering?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El renderizado condicional en React permite mostrar u ocultar componentes dinámicamente basándose en condiciones. React trata las expresiones JSX de forma similar a JavaScript, permitiendo usar operadores lógicos, ternarios, y otras técnicas para controlar qué se renderiza.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Elegir la técnica correcta de renderizado condicional mejora la legibilidad, mantenibilidad y performance de tu aplicación.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Técnicas principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>If/Else statements:</strong> Return temprano para casos mutuamente excluyentes</li>
          <li><strong>Operador ternario (<code className="px-2 py-1 bg-gray-100 rounded text-sm">? :</code>):</strong> Para condiciones simples con alternativa</li>
          <li><strong>Operador AND (<code className="px-2 py-1 bg-gray-100 rounded text-sm">&&</code>):</strong> Renderizar solo si la condición es verdadera</li>
          <li><strong>Operador OR (<code className="px-2 py-1 bg-gray-100 rounded text-sm">||</code>):</strong> Valores por defecto/fallback</li>
          <li><strong>Nullish coalescing (<code className="px-2 py-1 bg-gray-100 rounded text-sm">??</code>):</strong> Fallback solo para null/undefined</li>
          <li><strong>Switch/Object mapping:</strong> Para múltiples condiciones</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Evita ternarios anidados:</strong> Difíciles de leer, extrae a funciones o componentes</li>
          <li><strong>Cuidado con <code className="px-2 py-1 bg-gray-100 rounded text-sm">&&</code>:</strong> <code className="px-2 py-1 bg-gray-100 rounded text-sm">0 && Component</code> renderiza "0", no null</li>
          <li><strong>Return temprano:</strong> Simplifica la lógica de componentes complejos</li>
          <li><strong>Fragment para múltiples elementos:</strong> Usa <code className="px-2 py-1 bg-gray-100 rounded text-sm">&lt;&gt;&lt;/&gt;</code> cuando necesites retornar múltiples elementos</li>
          <li><strong>Componentes guardián:</strong> Encapsula lógica condicional en componentes reutilizables</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Estados de carga:</strong> Mostrar spinners mientras se cargan datos</li>
          <li><strong>Estados vacíos:</strong> Mensajes cuando no hay datos para mostrar</li>
          <li><strong>Control de acceso:</strong> Mostrar UI basándose en permisos/roles</li>
          <li><strong>Estados de error:</strong> Mensajes de error condicionales</li>
          <li><strong>Responsive UI:</strong> Diferentes componentes según viewport</li>
          <li><strong>Feature flags:</strong> Habilitar/deshabilitar funcionalidades</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás diferentes técnicas de renderizado condicional aplicadas a un mismo caso de uso, comparando legibilidad, mantenibilidad y cuándo usar cada una.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> Para lógica condicional compleja, considera extraer a componentes separados o usar patrones como Render Props o Custom Hooks en lugar de ternarios anidados.
        </p>
      </div>
    </div>
  );
}
