export default function PWABasicsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Las Progressive Web Apps combinan lo mejor de web y apps nativas. Aprende a crear
        experiencias web que funcionan offline, son instalables y ofrecen rendimiento nativo.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>✓ Progressive - Funciona en cualquier navegador</li>
            <li>✓ Responsive - Se adapta a cualquier pantalla</li>
            <li>✓ Offline-first - Service Workers</li>
            <li>✓ App-like - Navegación fluida</li>
            <li>✓ Installable - Add to home screen</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Tecnologías core</h3>
          <ul className="space-y-2">
            <li>• Service Workers - Cache y offline</li>
            <li>• Web App Manifest - Metadata</li>
            <li>• HTTPS - Seguridad requerida</li>
            <li>• Cache API - Almacenamiento</li>
            <li>• Push Notifications</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Beneficios</p>
        <ul className="space-y-1 text-sm">
          <li>• No requiere app store</li>
          <li>• Actualizaciones automáticas</li>
          <li>• Menor tamaño vs apps nativas</li>
          <li>• SEO-friendly</li>
          <li>• Funciona offline</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Checklist PWA</p>
        <ul className="space-y-1 text-sm">
          <li>□ Manifest.json configurado</li>
          <li>□ Service Worker registrado</li>
          <li>□ HTTPS habilitado</li>
          <li>□ Responsive design</li>
          <li>□ Offline fallback</li>
        </ul>
      </div>
    </>
  );
}
