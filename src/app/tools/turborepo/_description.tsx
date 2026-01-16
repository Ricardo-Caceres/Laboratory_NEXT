export default function TurborepoDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Turborepo es un build system incremental de alto rendimiento para monorepos JavaScript/TypeScript.
        Optimiza builds con caching inteligente y ejecución paralela.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Características</h3>
          <ul className="space-y-2">
            <li>✓ Incremental builds - Solo lo que cambió</li>
            <li>✓ Remote caching - Compartir cache</li>
            <li>✓ Parallel execution - Máximo paralelismo</li>
            <li>✓ Task pipelines - Dependencias automáticas</li>
            <li>✓ Zero config - Funciona out-of-the-box</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Ventajas</h3>
          <ul className="space-y-2">
            <li>• Builds 10x más rápidos</li>
            <li>• Cache compartido en equipo</li>
            <li>• Compatible con npm/yarn/pnpm</li>
            <li>• Integración con Vercel</li>
            <li>• Filtering avanzado</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Conceptos clave</p>
        <ul className="space-y-1 text-sm">
          <li>• Pipeline - Definir orden de tasks</li>
          <li>• Workspace - Cada package del monorepo</li>
          <li>• Cache - Input/output hashing</li>
          <li>• Remote cache - Cloud caching</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Comandos comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>turbo run build</code> - Build all packages</li>
          <li>• <code>turbo run test --filter=app</code> - Test específico</li>
          <li>• <code>turbo prune --scope=app</code> - Subset del monorepo</li>
        </ul>
      </div>
    </>
  );
}
