export default function CustomHooksPatternsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Patrones de diseño para custom hooks: compound pattern, hook factory,
        render props to hooks, y arquitecturas escalables para hooks reutilizables.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎨 Patrones de diseño</h3>
          <ul className="space-y-2">
            <li>✓ Compound Pattern - Múltiples hooks</li>
            <li>✓ Factory Pattern - Hook generator</li>
            <li>✓ Provider Pattern - Context + hook</li>
            <li>✓ Observer Pattern - Subscriptions</li>
            <li>✓ Strategy Pattern - Comportamiento dinámico</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Arquitecturas</h3>
          <ul className="space-y-2">
            <li>• Layered hooks - Capas de abstracción</li>
            <li>• Hook composition - Pequeños + reutilizables</li>
            <li>• Inversion of control - Flexibilidad</li>
            <li>• Dependency injection - Testability</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Ejemplos de patrones</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>useToggle</code> - Simple state toggle</li>
          <li>• <code>useAsync</code> - Async operations wrapper</li>
          <li>• <code>useForm</code> - Form state management</li>
          <li>• <code>useLocalStorage</code> - Persistent state</li>
          <li>• <code>usePrevious</code> - Track previous value</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Principios SOLID en hooks</p>
        <ul className="space-y-1 text-sm">
          <li>• Single Responsibility - Un propósito por hook</li>
          <li>• Open/Closed - Extensible sin modificar</li>
          <li>• Dependency Inversion - Abstracciones</li>
          <li>• Composition over inheritance</li>
        </ul>
      </div>
    </>
  );
}
