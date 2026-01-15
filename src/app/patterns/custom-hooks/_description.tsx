'use client';

export function CustomHooksDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Custom Hooks</strong> permiten extraer lógica de componentes en funciones reutilizables.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Son el patrón moderno preferido para compartir lógica stateful entre componentes.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Reglas de los Custom Hooks
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>El nombre debe empezar con "use" (useForm, useAuth, etc.)</li>
          <li>Solo pueden ser llamados desde componentes funcionales o custom hooks</li>
          <li>Deben seguir las Rules of Hooks</li>
          <li>Pueden usar otros hooks (useState, useEffect, etc.)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas sobre HOCs y Render Props
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Sin wrapper hell:</strong> No agregan componentes extra al árbol</li>
          <li><strong>Más simple:</strong> JavaScript plano, sin componentes</li>
          <li><strong>Composición fácil:</strong> Llama múltiples hooks sin anidar</li>
          <li><strong>Type-safe:</strong> TypeScript funciona perfectamente</li>
          <li><strong>Testeable:</strong> Puedes testear hooks en aislamiento</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useForm:</strong> Manejo de formularios</li>
          <li><strong>useAuth:</strong> Autenticación y autorización</li>
          <li><strong>useFetch:</strong> Data fetching</li>
          <li><strong>useLocalStorage:</strong> Persistencia local</li>
          <li><strong>useDebounce:</strong> Debouncing de valores</li>
          <li><strong>useMediaQuery:</strong> Responsive design</li>
          <li><strong>useKeyPress:</strong> Keyboard shortcuts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Mantén hooks enfocados en una sola responsabilidad</li>
          <li>Retorna objetos o arrays según el caso</li>
          <li>Documenta las dependencias y efectos secundarios</li>
          <li>Usa TypeScript para type safety</li>
          <li>Considera performance (usa useMemo/useCallback cuando sea necesario)</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Mejor práctica:</strong> Custom Hooks son el patrón preferido en React moderno. Usa hooks en lugar de HOCs o Render Props siempre que sea posible.
        </p>
      </div>
    </div>
  );
}
