'use client';

export function ModulePatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Module Pattern</strong> - Encapsula código relacionado en una unidad auto-contenida, exponiendo solo una API pública mientras mantiene el estado y la implementación privados.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Module Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Module permite crear encapsulación en JavaScript, manteniendo variables y funciones privadas mientras expone solo lo necesario a través de una interfaz pública. Históricamente se implementaba con IIFEs (Immediately Invoked Function Expressions), pero en JavaScript moderno usamos módulos ES6.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón ayuda a evitar la contaminación del namespace global, organiza el código de forma lógica, y facilita la reutilización y el testing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Variantes del patrón
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Module Pattern clásico (IIFE):</strong> Usa closures para crear privacidad</li>
          <li><strong>Revealing Module Pattern:</strong> Define todo privadamente y expone solo lo necesario</li>
          <li><strong>ES6 Modules:</strong> Sintaxis moderna con import/export</li>
          <li><strong>Singleton Module:</strong> Instancia única compartida globalmente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Encapsulación:</strong> Oculta detalles de implementación y estado privado</li>
          <li><strong>Namespace limpio:</strong> No contamina el scope global</li>
          <li><strong>Organización:</strong> Agrupa código relacionado de forma lógica</li>
          <li><strong>Reutilización:</strong> Facilita la importación y uso en diferentes partes</li>
          <li><strong>Testing:</strong> APIs públicas claras facilitan escribir tests</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Utilities libraries:</strong> Colecciones de funciones de utilidad relacionadas</li>
          <li><strong>Service layer:</strong> Encapsular lógica de negocio o APIs</li>
          <li><strong>Configuration:</strong> Gestionar configuración de aplicación</li>
          <li><strong>State management:</strong> Crear stores o gestores de estado</li>
          <li><strong>Plugin systems:</strong> Crear extensiones auto-contenidas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás diferentes implementaciones del Module Pattern: desde el patrón clásico con IIFE, pasando por el Revealing Module Pattern, hasta módulos ES6 modernos. Compararás cómo cada enfoque maneja la privacidad y la exposición de APIs.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> En código moderno, prefiere usar módulos ES6 (<code className="px-2 py-1 bg-gray-100 rounded text-sm">import/export</code>) en lugar de patrones IIFE, ya que proporcionan mejor soporte de herramientas y tree-shaking.
        </p>
      </div>
    </div>
  );
}
