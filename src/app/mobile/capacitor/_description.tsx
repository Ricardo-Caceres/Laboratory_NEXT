export default function CapacitorDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Capacitor es la solución moderna de Ionic para crear apps nativas desde web apps.
        Acceso a APIs nativas, plugins, y deployment a iOS, Android y web desde una sola codebase.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📱 Características</h3>
          <ul className="space-y-2">
            <li>✓ Native APIs - Camera, GPS, etc</li>
            <li>✓ Cross-platform - iOS, Android, Web</li>
            <li>✓ Modern stack - Compatible con cualquier framework</li>
            <li>✓ Native UI - WebView o native</li>
            <li>✓ Live reload - Desarrollo rápido</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔌 Plugins core</h3>
          <ul className="space-y-2">
            <li>• Camera - Fotos y videos</li>
            <li>• Geolocation - GPS</li>
            <li>• Storage - Persistent storage</li>
            <li>• Push Notifications</li>
            <li>• Filesystem - File access</li>
            <li>• Network - Connectivity status</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Ventajas vs alternativas</p>
        <ul className="space-y-1 text-sm">
          <li>• vs Cordova - Moderno, mejor performance, API más simple</li>
          <li>• vs React Native - Menor curva, reutiliza web code</li>
          <li>• vs Flutter - Usa tu stack existente (React, Vue, etc)</li>
          <li>• vs PWA - Acceso completo a APIs nativas</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Workflow</p>
        <ul className="space-y-1 text-sm">
          <li>1. Desarrolla web app normalmente</li>
          <li>2. <code>npx cap add ios/android</code></li>
          <li>3. <code>npx cap sync</code> - Sync web to native</li>
          <li>4. <code>npx cap open ios/android</code> - Build native</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa Capacitor Storage en vez de localStorage</li>
          <li>• Implementa offline-first strategy</li>
          <li>• Test en dispositivos reales</li>
          <li>• Optimiza bundle size para mobile</li>
        </ul>
      </div>
    </>
  );
}
