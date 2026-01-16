export default function WebhooksDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Los Webhooks son callbacks HTTP que permiten a aplicaciones comunicarse en tiempo real
        mediante eventos. Aprende a implementar y consumir webhooks de forma segura.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔔 Conceptos clave</h3>
          <ul className="space-y-2">
            <li>✓ Event-driven architecture</li>
            <li>✓ HTTP POST callbacks</li>
            <li>✓ Payload verification</li>
            <li>✓ Retry mechanisms</li>
            <li>✓ Idempotency</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔒 Seguridad</h3>
          <ul className="space-y-2">
            <li>• HMAC signatures</li>
            <li>• Timestamp validation</li>
            <li>• IP whitelisting</li>
            <li>• HTTPS only</li>
            <li>• Secret rotation</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Verificar signatures antes de procesar</li>
          <li>• Responder rápidamente (200 OK)</li>
          <li>• Procesar payload de forma asíncrona</li>
          <li>• Implementar retry logic</li>
          <li>• Loguear todos los eventos</li>
        </ul>
      </div>
    </>
  );
}
