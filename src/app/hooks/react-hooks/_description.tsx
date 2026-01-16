export default function ReactHooksDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Guía completa de React Hooks: desde useState y useEffect hasta hooks avanzados
        como useTransition, useDeferredValue y las nuevas APIs de React 18+.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Hooks básicos</h3>
          <ul className="space-y-2">
            <li>✓ useState - State management</li>
            <li>✓ useEffect - Side effects</li>
            <li>✓ useContext - Context consumption</li>
            <li>✓ useRef - Mutable refs</li>
            <li>✓ useMemo - Memoization</li>
            <li>✓ useCallback - Function memoization</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Hooks avanzados</h3>
          <ul className="space-y-2">
            <li>• useReducer - Complex state</li>
            <li>• useLayoutEffect - Sync effects</li>
            <li>• useImperativeHandle - Ref forwarding</li>
            <li>• useTransition - Concurrent rendering</li>
            <li>• useDeferredValue - Deferred updates</li>
            <li>• useId - Unique IDs</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📊 Cuándo usar cada hook</p>
        <ul className="space-y-1 text-sm">
          <li>• useState - Simple state local</li>
          <li>• useReducer - State complejo con múltiples acciones</li>
          <li>• useEffect - Fetch, subscriptions, DOM mutations</li>
          <li>• useMemo - Cálculos costosos</li>
          <li>• useCallback - Pasar callbacks a child components</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Errores comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• useEffect sin cleanup - Memory leaks</li>
          <li>• Dependencies incorrectas - Stale closures</li>
          <li>• Usar useState para valores derivados</li>
          <li>• Over-optimization con useMemo</li>
          <li>• Hooks condicionales - ¡Nunca!</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🎨 React 18+ Features</p>
        <ul className="space-y-1 text-sm">
          <li>• useTransition - Non-blocking updates</li>
          <li>• useDeferredValue - Lower priority updates</li>
          <li>• useId - SSR-safe unique IDs</li>
          <li>• useSyncExternalStore - External stores</li>
        </ul>
      </div>
    </>
  );
}
