'use client';

export function AdapterPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Adapter Pattern</strong> - Permite que interfaces incompatibles trabajen juntas convirtiendo la interfaz de una clase en otra que los clientes esperan.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Adapter Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Adapter actúa como un puente entre dos interfaces incompatibles. Es especialmente útil cuando necesitas integrar código legacy con sistemas nuevos, o cuando trabajas con APIs de terceros que no coinciden con tu interfaz esperada.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón envuelve un objeto para hacer que su interfaz sea compatible con otra interfaz, permitiendo que clases con interfaces incompatibles trabajen juntas sin modificar su código fuente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Reutilización de código existente:</strong> Permite usar clases legacy sin modificarlas</li>
          <li><strong>Principio Open/Closed:</strong> Puedes introducir nuevos adaptadores sin romper código existente</li>
          <li><strong>Separación de responsabilidades:</strong> El código de conversión está aislado en el adaptador</li>
          <li><strong>Flexibilidad:</strong> Facilita la integración con APIs de terceros o sistemas externos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Integración de APIs legacy:</strong> Convertir formatos de datos antiguos a modernos</li>
          <li><strong>APIs de terceros:</strong> Adaptar respuestas de APIs externas a tu modelo de datos</li>
          <li><strong>Migración gradual:</strong> Permitir que código nuevo y viejo coexistan durante una migración</li>
          <li><strong>Normalización de datos:</strong> Convertir múltiples formatos de entrada a un formato unificado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás cómo un <code className="px-2 py-1 bg-gray-100 rounded text-sm">UserAdapter</code> convierte datos de una API legacy (con campos como <code className="px-2 py-1 bg-gray-100 rounded text-sm">user_name</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">user_email</code>) al formato moderno que tu aplicación espera (<code className="px-2 py-1 bg-gray-100 rounded text-sm">name</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">email</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">id</code>).
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> El patrón Adapter es ideal cuando no tienes control sobre el código fuente que necesitas adaptar, o cuando modificarlo directamente violaría el principio Open/Closed.
        </p>
      </div>
    </div>
  );
}
