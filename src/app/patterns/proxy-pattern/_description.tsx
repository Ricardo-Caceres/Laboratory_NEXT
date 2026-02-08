'use client';

export function ProxyPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Proxy Pattern</strong> - Proporciona un sustituto o placeholder para otro objeto, controlando el acceso a él y añadiendo funcionalidad adicional sin modificar el objeto original.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Proxy Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Proxy crea un objeto intermediario que actúa como sustituto de otro objeto. El proxy controla el acceso al objeto real, pudiendo añadir funcionalidad como lazy loading, caching, validación, logging o control de acceso, todo sin modificar el objeto original.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          JavaScript moderno proporciona el objeto <code className="px-2 py-1 bg-gray-100 rounded text-sm">Proxy</code> nativo que permite interceptar y redefinir operaciones fundamentales como lectura, escritura, función invocation, etc.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Tipos de Proxy
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Virtual Proxy:</strong> Lazy loading - crea objetos costosos solo cuando se necesitan</li>
          <li><strong>Protection Proxy:</strong> Control de acceso - verifica permisos antes de permitir operaciones</li>
          <li><strong>Cache Proxy:</strong> Almacena resultados de operaciones costosas para reutilizarlos</li>
          <li><strong>Remote Proxy:</strong> Representa objetos en diferentes espacios de direcciones (ej: APIs)</li>
          <li><strong>Logging Proxy:</strong> Registra todas las operaciones realizadas en el objeto</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Control de acceso:</strong> Gestiona quién y cuándo puede acceder al objeto</li>
          <li><strong>Lazy initialization:</strong> Crea objetos costosos solo cuando son necesarios</li>
          <li><strong>Logging y auditoría:</strong> Registra todas las operaciones sin modificar el objeto</li>
          <li><strong>Caching:</strong> Mejora el rendimiento almacenando resultados</li>
          <li><strong>Principio Open/Closed:</strong> Añade funcionalidad sin modificar el objeto original</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Image lazy loading:</strong> Cargar imágenes solo cuando son visibles</li>
          <li><strong>API caching:</strong> Cachear respuestas de APIs para reducir llamadas</li>
          <li><strong>Validación:</strong> Validar datos antes de asignarlos a propiedades</li>
          <li><strong>Observabilidad:</strong> Tracking de cambios en objetos (similar a Vue reactivity)</li>
          <li><strong>Control de permisos:</strong> Restringir acceso a métodos según roles</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás un proxy de validación que intercepta asignaciones de propiedades y valida los datos antes de permitir la modificación. También incluye logging automático de todas las operaciones.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> El objeto <code className="px-2 py-1 bg-gray-100 rounded text-sm">Proxy</code> de JavaScript es extremadamente poderoso y es la base de sistemas de reactividad en frameworks como Vue 3.
        </p>
      </div>
    </div>
  );
}
