export default function PrometheusDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Prometheus es un sistema de monitoreo y alertas open-source con modelo de datos
        de time series. Ideal para métricas de aplicaciones y infraestructura.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>✓ Time series DB - Datos temporales</li>
            <li>✓ Pull model - Scraping automático</li>
            <li>✓ PromQL - Query language potente</li>
            <li>✓ Service discovery - Auto-discovery</li>
            <li>✓ Alertmanager - Gestión de alertas</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Tipos de métricas</h3>
          <ul className="space-y-2">
            <li>• Counter - Valores incrementales</li>
            <li>• Gauge - Valores que suben/bajan</li>
            <li>• Histogram - Distribuciones</li>
            <li>• Summary - Quantiles calculados</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Ecosystem</p>
        <ul className="space-y-1 text-sm">
          <li>• Grafana - Visualización de métricas</li>
          <li>• Exporters - Métricas de third-party</li>
          <li>• Client libraries - Node, Python, Go, etc</li>
          <li>• Alertmanager - Routing de alertas</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Monitoreo de microservicios</li>
          <li>• Métricas de aplicación custom</li>
          <li>• Infrastructure monitoring</li>
          <li>• SLO/SLA tracking</li>
        </ul>
      </div>
    </>
  );
}
