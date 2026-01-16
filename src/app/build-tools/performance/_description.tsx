export default function BuildPerformanceDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Optimización del rendimiento de builds: code splitting, tree shaking, minificación,
        caching y estrategias para reducir tiempos de build y bundle size.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Técnicas de optimización</h3>
          <ul className="space-y-2">
            <li>✓ Code splitting - Chunks separados</li>
            <li>✓ Tree shaking - Eliminar código muerto</li>
            <li>✓ Minification - Reducir tamaño</li>
            <li>✓ Compression - Gzip/Brotli</li>
            <li>✓ Lazy loading - Carga bajo demanda</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Métricas</h3>
          <ul className="space-y-2">
            <li>• Bundle size - Tamaño total</li>
            <li>• Initial load - Primer bundle</li>
            <li>• Build time - Tiempo de compilación</li>
            <li>• Chunk size - Tamaño de chunks</li>
            <li>• Cache hit rate - Eficiencia cache</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Webpack optimization</p>
        <ul className="space-y-1 text-sm">
          <li>• SplitChunksPlugin - Vendors separados</li>
          <li>• TerserPlugin - Minificación JS</li>
          <li>• ModuleConcatenationPlugin - Scope hoisting</li>
          <li>• Persistent caching - Cache de build</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Herramientas</p>
        <ul className="space-y-1 text-sm">
          <li>• webpack-bundle-analyzer - Visualizar bundles</li>
          <li>• source-map-explorer - Analizar source maps</li>
          <li>• Lighthouse - Performance audit</li>
          <li>• bundlephobia - Costo de dependencies</li>
        </ul>
      </div>
    </>
  );
}
