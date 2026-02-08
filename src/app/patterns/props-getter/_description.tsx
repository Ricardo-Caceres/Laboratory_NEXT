'use client';

export function PropsGetterDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Props Getter Pattern</strong> - Proporciona funciones que retornan props pre-configuradas para elementos específicos, simplificando la integración de componentes complejos y promoviendo composición flexible.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Props Getter Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Props Getter proporciona funciones (getters) que retornan un objeto de props optimizadas y pre-configuradas que puedes esparcir directamente en tus elementos. Esto te da control total sobre el renderizado mientras se encarga de la lógica compleja como accessibility, event handlers, y state management.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Popularizado por Downshift y ampliamente usado en headless UI libraries, este patrón permite máxima flexibilidad mientras mantiene la funcionalidad consistente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cómo funciona
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm">
          <pre className="text-gray-800">{`const { getInputProps, getLabelProps } = useField();

<label {...getLabelProps()}>
  Username
</label>
<input {...getInputProps()} />`}</pre>
        </div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
          Los getters retornan props como <code className="px-2 py-1 bg-gray-100 rounded text-sm">id</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">aria-*</code>, <code className="px-2 py-1 bg-gray-100 rounded text-sm">onChange</code>, etc., manejando automáticamente la lógica compleja.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Flexibilidad total:</strong> Control completo sobre el renderizado y estilos</li>
          <li><strong>Composición:</strong> Fácil de combinar con otros props del usuario</li>
          <li><strong>Accessibility:</strong> Props ARIA correctas automáticamente incluidas</li>
          <li><strong>Type safety:</strong> TypeScript puede inferir props correctamente</li>
          <li><strong>Override-friendly:</strong> Usuarios pueden sobrescribir props específicas</li>
          <li><strong>Testing:</strong> Lógica aislada en los getters es fácil de testear</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Headless UI components:</strong> Dropdown, combobox, tooltip</li>
          <li><strong>Form libraries:</strong> Gestión compleja de campos y validación</li>
          <li><strong>Accessibility helpers:</strong> Focus management, ARIA attributes</li>
          <li><strong>Interactive widgets:</strong> Tabs, accordions, date pickers</li>
          <li><strong>Drag & Drop:</strong> Props para draggables y droppables</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Props Getter vs State Reducer
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Estos patrones se complementan: <strong>Props Getter</strong> proporciona props para el renderizado, mientras <strong>State Reducer</strong> permite customizar el comportamiento. Juntos dan control total sobre UI y lógica.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás un hook <code className="px-2 py-1 bg-gray-100 rounded text-sm">useDropdown</code> que proporciona getters para trigger, menu e items. Puedes usar estos getters para construir dropdowns completamente customizados mientras el hook maneja estado, keyboard navigation y accessibility.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> Al diseñar getters, permite que acepten props del usuario y los combine con las props base usando <code className="px-2 py-1 bg-gray-100 rounded text-sm">&#123;...baseProps, ...userProps&#125;</code> para máxima flexibilidad.
        </p>
      </div>
    </div>
  );
}
