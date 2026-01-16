export default function TurbopackDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Turbopack es el nuevo bundler de Vercel escrito en Rust, diseñado para reemplazar Webpack.
        Hasta 700x más rápido en desarrollo con HMR instantáneo.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Características</h3>
          <ul className="space-y-2">
            <li>✓ Rust-powered - Rendimiento nativo</li>
            <li>✓ Incremental - Solo compila cambios</li>
            <li>✓ HMR instantáneo - Updates <10ms</li>
            <li>✓ Lazy bundling - Build on-demand</li>
            <li>✓ Next.js native - Integración perfecta</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Ventajas vs Webpack</h3>
          <ul className="space-y-2">
            <li>• 700x más rápido (dev)</li>
            <li>• 10x más rápido (prod builds)</li>
            <li>• Menos configuración</li>
            <li>• Built-in optimizations</li>
            <li>• Better error messages</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Uso en Next.js</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>next dev --turbo</code> - Dev mode con Turbopack</li>
          <li>• Alpha en Next.js 13+</li>
          <li>• Migración automática desde Webpack</li>
          <li>• Compatible con la mayoría de loaders</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Estado actual</p>
        <p className="text-sm">
          Turbopack está en alpha. Dev mode es estable, pero prod builds
          aún usan Webpack. Roadmap incluye soporte completo en 2024.
        </p>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Arquitectura</p>
        <p className="text-sm">
          Usa arquitectura incremental con function-level caching.
          Solo recompila funciones afectadas por cambios, no módulos completos.
        </p>
      </div>
    </>
  );
}
