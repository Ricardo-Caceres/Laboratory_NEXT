export default function ToolsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Herramientas esenciales para el desarrollo moderno: testing de carga, monitoreo,
        documentación, build systems y más para mejorar tu workflow y productividad.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Categorías</h3>
          <ul className="space-y-2">
            <li>✓ Testing - Artillery, k6, JMeter</li>
            <li>✓ Monitoring - Datadog, Prometheus</li>
            <li>✓ Documentation - Storybook, JSDoc</li>
            <li>✓ Build systems - Turborepo, Nx</li>
            <li>✓ DevOps - Docker, Kubernetes</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Objetivos</h3>
          <ul className="space-y-2">
            <li>• Productivity - Automatizar tareas</li>
            <li>• Quality - Testing y monitoring</li>
            <li>• Collaboration - Docs y tooling</li>
            <li>• Performance - Optimization tools</li>
            <li>• Reliability - Observability</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Stack moderno típico</p>
        <ul className="space-y-1 text-sm">
          <li>• Build: Turborepo + pnpm</li>
          <li>• Testing: Vitest + Playwright + Artillery</li>
          <li>• Monitoring: Datadog o Prometheus + Grafana</li>
          <li>• Docs: Storybook + TypeDoc</li>
          <li>• CI/CD: GitHub Actions + Docker</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• Load testing con Artillery</li>
          <li>• Observability con Datadog y Prometheus</li>
          <li>• Documentation best practices</li>
          <li>• Monorepo management con Turborepo</li>
          <li>• DevOps automation</li>
        </ul>
      </div>
    </>
  );
}
