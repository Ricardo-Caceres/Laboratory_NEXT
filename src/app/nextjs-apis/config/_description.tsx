export default function NextConfigDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        El archivo next.config.js/ts es el corazón de la configuración de Next.js.
        Aprende a configurar redirects, rewrites, variables de entorno, webpack y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚙️ Opciones principales</h3>
          <ul className="space-y-2">
            <li>✓ reactStrictMode - Modo estricto</li>
            <li>✓ images - Configuración de imágenes</li>
            <li>✓ env - Variables de entorno</li>
            <li>✓ redirects - Redirecciones</li>
            <li>✓ rewrites - Reescrituras de rutas</li>
            <li>✓ headers - Headers personalizados</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Configuración avanzada</h3>
          <ul className="space-y-2">
            <li>• webpack - Personalizar webpack</li>
            <li>• experimental - Features beta</li>
            <li>• compiler - SWC options</li>
            <li>• output - Modo de salida</li>
            <li>• basePath - Prefijo de rutas</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Casos de uso comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Configurar dominios de imágenes</li>
          <li>• Agregar redirects permanentes</li>
          <li>• Proxy a API externa con rewrites</li>
          <li>• Configurar headers de seguridad</li>
          <li>• Modificar configuración de webpack</li>
        </ul>
      </div>
    </>
  );
}
