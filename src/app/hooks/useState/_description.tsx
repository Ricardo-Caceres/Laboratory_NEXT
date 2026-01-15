'use client';

export function UseStateDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useState</strong> es el Hook más básico y fundamental de React. Permite agregar estado local a componentes funcionales.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Antes de los Hooks, solo los componentes de clase podían tener estado.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el estado?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          El estado es información que puede cambiar durante el ciclo de vida de un componente.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Cuando el estado cambia, React automáticamente re-renderiza el componente para reflejar los nuevos valores.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Estado local:</strong> Cada componente mantiene su propio estado independiente</li>
          <li><strong>Re-renderizado automático:</strong> Cuando el estado cambia, React actualiza la UI</li>
          <li><strong>Inicialización flexible:</strong> Puedes usar un valor directo o una función de inicialización</li>
          <li><strong>Actualizaciones asíncronas:</strong> Las actualizaciones de estado pueden agruparse (batching)</li>
          <li><strong>Inmutabilidad:</strong> Debes crear un nuevo estado en vez de modificar el anterior</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Formularios y inputs controlados</li>
          <li>Toggles, switches y checkboxes</li>
          <li>Contadores y acumuladores</li>
          <li>Estados de UI (modales, dropdowns, tabs)</li>
          <li>Datos temporales antes de enviar a servidor</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis básica
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-4">
          <code className="text-[var(--foreground)] font-mono text-sm">
            const [state, setState] = useState(initialValue);
          </code>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><code className="text-[var(--primary)]">state</code>: El valor actual del estado</li>
          <li><code className="text-[var(--primary)]">setState</code>: Función para actualizar el estado</li>
          <li><code className="text-[var(--primary)]">initialValue</code>: Valor inicial (puede ser cualquier tipo)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Buenas prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa múltiples useState para estados independientes</li>
          <li>Nombra el setter como <code className="text-[var(--primary)]">set</code> + nombre del estado</li>
          <li>Para actualizaciones basadas en el valor anterior, usa la forma funcional</li>
          <li>Evita duplicar el estado (deriva valores cuando sea posible)</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En este ejemplo, creamos un contador simple que demuestra cómo usar useState para manejar el estado de un número que puede incrementarse o decrementarse.
        </p>
      </div>
    </div>
  );
}
