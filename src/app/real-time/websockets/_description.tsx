export default function WebSocketsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        WebSockets proporcionan comunicación bidireccional full-duplex sobre una sola conexión TCP.
        Ideal para chat, juegos en tiempo real, notificaciones live y actualizaciones en vivo.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔌 Características</h3>
          <ul className="space-y-2">
            <li>✓ Bidireccional - Cliente ↔ Servidor</li>
            <li>✓ Full-duplex - Simultáneo</li>
            <li>✓ Baja latencia - Conexión persistente</li>
            <li>✓ Menos overhead - vs HTTP polling</li>
            <li>✓ Binary y text data</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Chat en tiempo real</li>
            <li>• Juegos multiplayer</li>
            <li>• Live notifications</li>
            <li>• Dashboards en vivo</li>
            <li>• Colaboración simultánea</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Librerías populares</p>
        <ul className="space-y-1 text-sm">
          <li>• Socket.IO - Abstracción con fallbacks</li>
          <li>• ws - WebSocket puro para Node.js</li>
          <li>• SockJS - Fallback automático</li>
          <li>• uWebSockets - Ultra rápido</li>
        </ul>
      </div>
    </>
  );
}
