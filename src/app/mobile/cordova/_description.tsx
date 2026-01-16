export default function CordovaDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Apache Cordova permite crear aplicaciones móviles nativas usando HTML, CSS y JavaScript.
        Aunque legacy, aún se usa ampliamente y tiene un ecosistema maduro de plugins.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📱 Características</h3>
          <ul className="space-y-2">
            <li>✓ WebView-based - Wrapper nativo</li>
            <li>✓ Plugin ecosystem - Miles de plugins</li>
            <li>✓ CLI tools - Workflow completo</li>
            <li>✓ Multi-platform - iOS, Android, más</li>
            <li>✓ PhoneGap Build - Cloud builds</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔌 Plugins populares</h3>
          <ul className="space-y-2">
            <li>• cordova-plugin-camera</li>
            <li>• cordova-plugin-geolocation</li>
            <li>• cordova-plugin-file</li>
            <li>• cordova-plugin-inappbrowser</li>
            <li>• cordova-plugin-statusbar</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Estado actual</p>
        <p className="text-sm mb-2">
          Cordova está en mantenimiento. Para proyectos nuevos, considera:
        </p>
        <ul className="space-y-1 text-sm">
          <li>• Capacitor - Sucesor moderno de Ionic</li>
          <li>• React Native - Performance nativo</li>
          <li>• Flutter - UI nativo cross-platform</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Cuándo usar Cordova</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Mantener apps legacy existentes</li>
          <li>✓ Ecosistema de plugins específicos</li>
          <li>✓ Equipo solo con skills web</li>
          <li>❌ Proyectos nuevos (usa Capacitor)</li>
          <li>❌ Apps con performance crítico</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🔄 Migración a Capacitor</p>
        <p className="text-sm">
          Capacitor es compatible con la mayoría de plugins Cordova.
          La migración suele ser straightforward y vale la pena.
        </p>
      </div>
    </>
  );
}
