export default function EliteFeaturesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Características elite de JavaScript para desarrolladores expertos. Proxies, Reflect,
        Symbols, WeakMaps, y patrones avanzados de metaprogramación.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎭 Metaprogramación</h3>
          <ul className="space-y-2">
            <li>✓ Proxy - Interceptar operaciones</li>
            <li>✓ Reflect API - Meta operaciones</li>
            <li>✓ Symbol - Identificadores únicos</li>
            <li>✓ WeakMap/WeakSet - Referencias débiles</li>
            <li>✓ Decorators (proposal)</li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Patrones avanzados</h3>
          <ul className="space-y-2">
            <li>• Memoization avanzada</li>
            <li>• Property descriptors</li>
            <li>• Object.defineProperty</li>
            <li>• Getters/Setters dinámicos</li>
            <li>• Private state con WeakMap</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Proxy - Validación, observables, lazy loading</li>
          <li>• WeakMap - State privado, caching sin memory leaks</li>
          <li>• Symbol - Keys únicos, well-known symbols</li>
          <li>• Reflect - Metaprogramación, frameworks avanzados</li>
        </ul>
      </div>
    </>
  );
}
