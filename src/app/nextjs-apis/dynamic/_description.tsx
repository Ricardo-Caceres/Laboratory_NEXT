export default function DynamicDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        next/dynamic permite importación dinámica de componentes con code splitting automático.
        Ideal para optimizar el bundle inicial y mejorar el rendimiento.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Características</h3>
          <ul className="space-y-2">
            <li>✓ Code splitting - Chunks separados</li>
            <li>✓ Lazy loading - Carga bajo demanda</li>
            <li>✓ SSR control - Con/sin SSR</li>
            <li>✓ Loading states - Componente de carga</li>
            <li>✓ Named exports - Importar específicos</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Componentes grandes (charts, editors)</li>
            <li>• Componentes solo cliente</li>
            <li>• Modals y componentes condicionales</li>
            <li>• Librería pesadas (PDF, maps)</li>
            <li>• Features opcionales</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Opciones</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>ssr: false</code> - Deshabilitar SSR</li>
          <li>• <code>loading</code> - Componente de carga</li>
          <li>• <code>suspense</code> - Usar React Suspense</li>
        </ul>
      </div>
    </>
  );
}
