export default function ZustandGuideDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Guía práctica de Zustand: state management minimalista y moderno para React.
        Simple, rápido, sin boilerplate y con excelente soporte TypeScript.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✨ Características</h3>
          <ul className="space-y-2">
            <li>✓ Minimalist - ~1KB gzipped</li>
            <li>✓ No providers - Usa hooks directamente</li>
            <li>✓ TypeScript-first - Perfect inference</li>
            <li>✓ DevTools - Redux DevTools support</li>
            <li>✓ Middleware - Persist, immer, devtools</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Ventajas</h3>
          <ul className="space-y-2">
            <li>• Zero boilerplate - Extremadamente simple</li>
            <li>• No Context hell - Sin providers anidados</li>
            <li>• Performance - Re-renders quirúrgicos</li>
            <li>• Flexible - Usa donde quieras</li>
            <li>• Framework agnostic - Fuera de React también</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ API super simple</p>
        <div className="text-sm space-y-2">
          <p>1. <code>create()</code> - Crear store</p>
          <p>2. Define state y actions en el mismo objeto</p>
          <p>3. Usa el hook en cualquier componente</p>
          <p>4. ¡Eso es todo! No providers, no boilerplate</p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Middleware útiles</p>
        <ul className="space-y-1 text-sm">
          <li>• persist - LocalStorage/SessionStorage auto</li>
          <li>• devtools - Redux DevTools integration</li>
          <li>• immer - "Mutable" updates inmutables</li>
          <li>• combine - Combinar múltiples stores</li>
          <li>• subscribeWithSelector - Selective subscriptions</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Patterns comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Slices pattern - Separar concerns</li>
          <li>• Async actions - Funciones async en actions</li>
          <li>• Computed values - Selectors con useMemo</li>
          <li>• Reset state - Action para resetear</li>
        </ul>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Zustand vs alternativas</p>
        <ul className="space-y-1 text-sm">
          <li>• vs Redux - 95% menos código, más simple</li>
          <li>• vs Context - Mejor performance, sin providers</li>
          <li>• vs Recoil - Más simple, menos conceptos</li>
          <li>• vs Jotai - Similar, Zustand más maduro</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Cuándo usar Zustand</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Apps pequeñas a medianas</li>
          <li>✓ Quieres simplicidad sobre features</li>
          <li>✓ No necesitas time-travel debugging complejo</li>
          <li>✓ State compartido entre pocos componentes</li>
          <li>✓ Startup rápido, menos curva de aprendizaje</li>
        </ul>
      </div>
    </>
  );
}
