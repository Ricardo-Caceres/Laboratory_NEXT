export default function DatadogDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Datadog es una plataforma de monitoreo y observabilidad cloud-native.
        Unifica logs, métricas, traces y más en un solo lugar para debugging y análisis.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Pilares de observabilidad</h3>
          <ul className="space-y-2">
            <li>✓ Logs - Centralización de logs</li>
            <li>✓ Metrics - Métricas de sistema/app</li>
            <li>✓ Traces - Distributed tracing</li>
            <li>✓ APM - Application Performance</li>
            <li>✓ RUM - Real User Monitoring</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>• Dashboards - Visualización custom</li>
            <li>• Alerts - Notificaciones inteligentes</li>
            <li>• Synthetic monitoring - Tests automáticos</li>
            <li>• Infrastructure - Monitoreo de servidores</li>
            <li>• Security - Detección de amenazas</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Integrations</p>
        <ul className="space-y-1 text-sm">
          <li>• 600+ integraciones out-of-the-box</li>
          <li>• AWS, Azure, GCP - Cloud providers</li>
          <li>• Kubernetes, Docker - Containers</li>
          <li>• Node.js, Python, Java - APM agents</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Debug issues - Traces + logs correlacionados</li>
          <li>• Performance - Identificar bottlenecks</li>
          <li>• Uptime - Monitorear disponibilidad</li>
          <li>• Cost optimization - Analizar uso recursos</li>
        </ul>
      </div>
    </>
  );
}
