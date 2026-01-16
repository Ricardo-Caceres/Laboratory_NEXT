export default function SPADescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Single Page Applications cargan una sola página HTML y actualizan dinámicamente el contenido.
        Aprende arquitectura SPA, routing client-side y state management.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>✓ Client-side rendering - Todo en navegador</li>
            <li>✓ No page reloads - Navegación fluida</li>
            <li>✓ API-driven - Backend solo datos</li>
            <li>✓ Rich interactions - UX tipo app</li>
            <li>✓ State management - Global state</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚖️ Ventajas vs Desventajas</h3>
          <p className="text-sm mb-2 font-semibold text-green-700 dark:text-green-300">Pros:</p>
          <ul className="text-sm space-y-1 mb-3">
            <li>• UX fluida y rápida</li>
            <li>• Separación frontend/backend</li>
            <li>• Caching eficiente</li>
          </ul>
          <p className="text-sm mb-2 font-semibold text-red-700 dark:text-red-300">Contras:</p>
          <ul className="text-sm space-y-1">
            <li>• SEO complicado</li>
            <li>• Bundle inicial grande</li>
            <li>• JS requerido</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Stack típico</p>
        <ul className="space-y-1 text-sm">
          <li>• React/Vue/Angular - Framework UI</li>
          <li>• React Router/Vue Router - Client routing</li>
          <li>• Redux/Zustand - State management</li>
          <li>• Axios/Fetch - API calls</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Cuándo usar SPA</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Dashboards y admin panels</li>
          <li>✓ Web apps internas</li>
          <li>✓ Apps con mucha interacción</li>
          <li>❌ Sitios con SEO crítico</li>
          <li>❌ Contenido estático</li>
        </ul>
      </div>
    </>
  );
}
