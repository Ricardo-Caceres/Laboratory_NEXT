export default function FacadePatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Facade Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Facade Pattern</strong> proporciona una interfaz simplificada a un conjunto complejo de clases, biblioteca o framework. Actúa como una fachada que oculta la complejidad del sistema.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Características principales:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Simplifica interfaces complejas</li>
                <li>Desacopla el cliente del subsistema</li>
                <li>Proporciona un punto de entrada único</li>
                <li>Reduce dependencias entre sistemas</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Casos de uso:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>API wrappers para simplificar bibliotecas complejas</li>
                <li>Servicios que coordinan múltiples subsistemas</li>
                <li>Interfaces simplificadas para sistemas legacy</li>
                <li>Abstracciones de bajo nivel (ej: axios sobre fetch)</li>
              </ul>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
              <p className="text-blue-200 text-sm">
                <strong>Ejemplo:</strong> jQuery es una fachada que simplifica la manipulación del DOM y AJAX. Next.js proporciona una fachada sobre React, Webpack, Babel, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Facade Pattern</h2>
            <p className="text-gray-600">Simplified interface to complexity</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                El patrón Facade oculta la complejidad del sistema y provee una interfaz simple al cliente.
              </p>
              <div className="bg-white rounded p-3 font-mono text-xs overflow-x-auto border border-gray-300">
                <pre className="text-gray-800">{`// Subsistemas complejos
class PaymentProcessor { /* ... */ }
class InventorySystem { /* ... */ }
class ShippingService { /* ... */ }
class NotificationService { /* ... */ }

// Facade - Interfaz simplificada
class OrderFacade {
  processOrder(order) {
    this.payment.process(order);
    this.inventory.reserve(order.items);
    this.shipping.schedule(order);
    this.notifications.send(order.user);
  }
}

// Cliente usa la fachada
const orderSystem = new OrderFacade();
orderSystem.processOrder(myOrder);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
