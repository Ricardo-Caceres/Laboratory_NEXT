export default function ArtilleryDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Artillery es una herramienta moderna de load testing y performance testing.
        Diseñada para probar APIs, microservicios y aplicaciones en producción.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>✓ Load testing - Carga sostenida</li>
            <li>✓ Stress testing - Límites del sistema</li>
            <li>✓ Smoke testing - Verificación rápida</li>
            <li>✓ Scenarios - Flujos complejos</li>
            <li>✓ WebSocket/Socket.IO - Real-time</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Métricas</h3>
          <ul className="space-y-2">
            <li>• Response time - P50, P95, P99</li>
            <li>• Throughput - Requests/sec</li>
            <li>• Error rate - % de errores</li>
            <li>• Concurrency - Usuarios virtuales</li>
            <li>• Custom metrics - Personalizadas</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Tipos de test</p>
        <ul className="space-y-1 text-sm">
          <li>• Smoke test - Verificar disponibilidad</li>
          <li>• Load test - Comportamiento bajo carga</li>
          <li>• Stress test - Encontrar límites</li>
          <li>• Spike test - Picos repentinos</li>
          <li>• Soak test - Estabilidad a largo plazo</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Empieza con smoke tests</li>
          <li>• Incrementa carga gradualmente</li>
          <li>• Monitorea servidor durante tests</li>
          <li>• Usa datos realistas</li>
        </ul>
      </div>
    </>
  );
}
