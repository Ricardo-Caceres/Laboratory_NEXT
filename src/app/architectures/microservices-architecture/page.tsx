export default function MicroservicesArchitecturePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Microservices Architecture</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Microservices Architecture</strong> descompone una aplicación en servicios pequeños, independientes y autónomos que se comunican a través de APIs.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Características:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Servicios independientes y desplegables por separado</li>
                <li>Cada servicio tiene su propia base de datos</li>
                <li>Comunicación mediante APIs (REST, GraphQL, gRPC)</li>
                <li>Tecnologías heterogéneas posibles</li>
                <li>Escalabilidad independiente</li>
              </ul>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
              <p className="text-blue-200 text-sm">
                <strong>En Frontend:</strong> Micro-frontends permiten dividir aplicaciones grandes en partes más pequeñas desarrolladas independientemente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Microservices</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center shadow-lg">
              <div className="text-3xl mb-2">👤</div>
              <div className="font-semibold">User Service</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center shadow-lg">
              <div className="text-3xl mb-2">🛒</div>
              <div className="font-semibold">Order Service</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center shadow-lg">
              <div className="text-3xl mb-2">💳</div>
              <div className="font-semibold">Payment Service</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center shadow-lg">
              <div className="text-3xl mb-2">📦</div>
              <div className="font-semibold">Inventory Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
