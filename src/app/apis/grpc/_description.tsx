export default function GRPCDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        gRPC es un framework RPC de alto rendimiento que usa HTTP/2 y Protocol Buffers.
        Ideal para microservicios, comunicación eficiente y APIs type-safe.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Ventajas</h3>
          <ul className="space-y-2">
            <li>✓ HTTP/2 - Multiplexing, streaming</li>
            <li>✓ Protocol Buffers - Serialización eficiente</li>
            <li>✓ Type-safe - Contratos definidos</li>
            <li>✓ Streaming bidireccional</li>
            <li>✓ Multi-lenguaje</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📡 Tipos de comunicación</h3>
          <ul className="space-y-2">
            <li>• Unary - Request/Response simple</li>
            <li>• Server streaming - Stream de datos</li>
            <li>• Client streaming - Upload stream</li>
            <li>• Bidirectional - Chat, real-time</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Microservicios - Comunicación eficiente entre servicios</li>
          <li>• Mobile apps - Menor uso de batería y datos</li>
          <li>• Real-time - Streaming bidireccional</li>
          <li>• IoT - Dispositivos con recursos limitados</li>
        </ul>
      </div>
    </>
  );
}
