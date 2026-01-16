export default function PrometheusDevOpsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Prometheus como parte del stack DevOps: monitoreo de métricas, alertas,
        integración con Grafana y best practices para observabilidad en producción.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Stack de observabilidad</h3>
          <ul className="space-y-2">
            <li>✓ Prometheus - Métricas y alertas</li>
            <li>✓ Grafana - Visualización</li>
            <li>✓ Alertmanager - Gestión de alertas</li>
            <li>✓ Node Exporter - Métricas de sistema</li>
            <li>✓ Blackbox Exporter - Probes HTTP/TCP</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Golden Signals</h3>
          <ul className="space-y-2">
            <li>• Latency - Tiempo de respuesta</li>
            <li>• Traffic - Requests por segundo</li>
            <li>• Errors - Tasa de errores</li>
            <li>• Saturation - Uso de recursos</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ PromQL queries útiles</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>rate(http_requests_total[5m])</code> - RPS</li>
          <li>• <code>histogram_quantile(0.95, ...)</code> - P95 latency</li>
          <li>• <code>up == 0</code> - Servicios caídos</li>
          <li>• <code>predict_linear(...)</code> - Predicción</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🚨 Alerting rules</p>
        <ul className="space-y-1 text-sm">
          <li>• High error rate - &gt;5% errors</li>
          <li>• High latency - P95 &gt; threshold</li>
          <li>• Service down - Up == 0 for 5min</li>
          <li>• Disk space - &lt;10% free</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Define SLOs/SLIs basados en métricas</li>
          <li>• Retention period adecuado (15-30 días)</li>
          <li>• Label cardinality bajo control</li>
          <li>• Dashboards por servicio</li>
        </ul>
      </div>
    </>
  );
}
