export default function EventDrivenDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        La arquitectura event-driven permite que los componentes se comuniquen mediante eventos,
        creando sistemas desacoplados, escalables y reactivos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📡 Conceptos clave</h3>
          <ul className="space-y-2">
            <li>✓ Event Emitters - Productores</li>
            <li>✓ Event Listeners - Consumidores</li>
            <li>✓ Event Bus - Mediador</li>
            <li>✓ Pub/Sub - Patrón publisher/subscriber</li>
            <li>✓ Message Queue - Cola de mensajes</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Ventajas</h3>
          <ul className="space-y-2">
            <li>• Desacoplamiento - Independencia</li>
            <li>• Escalabilidad - Fácil horizontal scaling</li>
            <li>• Flexibilidad - Agregar listeners</li>
            <li>• Asincronía - No bloquea</li>
            <li>• Auditabilidad - Event sourcing</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Implementaciones</p>
        <ul className="space-y-1 text-sm">
          <li>• Node EventEmitter - Nativo Node.js</li>
          <li>• RxJS - Reactive programming</li>
          <li>• Message Brokers - RabbitMQ, Kafka</li>
          <li>• Custom Event Bus - Frontend apps</li>
        </ul>
      </div>
    </>
  );
}
