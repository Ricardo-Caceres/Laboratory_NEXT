export default function WebpackDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Webpack es el module bundler más popular para JavaScript. Aprende a configurar,
        optimizar y extender Webpack para proyectos modernos de frontend.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚙️ Conceptos core</h3>
          <ul className="space-y-2">
            <li>✓ Entry points</li>
            <li>✓ Output configuration</li>
            <li>✓ Loaders - Transformadores</li>
            <li>✓ Plugins - Extensiones</li>
            <li>✓ Code splitting</li>
            <li>✓ Tree shaking</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Optimización</h3>
          <ul className="space-y-2">
            <li>• Minification</li>
            <li>• Bundle splitting</li>
            <li>• Lazy loading</li>
            <li>• Caching strategies</li>
            <li>• Source maps</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Loaders comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• babel-loader - Transpilación ES6+</li>
          <li>• css-loader / style-loader - Estilos</li>
          <li>• file-loader - Archivos estáticos</li>
          <li>• ts-loader - TypeScript</li>
        </ul>
      </div>
    </>
  );
}
