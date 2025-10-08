export default function StrategyPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Strategy Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Strategy Pattern</strong> define una familia de algoritmos, encapsula cada uno y los hace intercambiables. El patrón permite que el algoritmo varíe independientemente de los clientes que lo usan.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Características principales:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Encapsula algoritmos en clases separadas</li>
                <li>Permite cambiar algoritmos en tiempo de ejecución</li>
                <li>Elimina condicionales complejos</li>
                <li>Facilita agregar nuevas estrategias</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Casos de uso:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Diferentes métodos de pago (tarjeta, PayPal, cripto)</li>
                <li>Algoritmos de ordenamiento intercambiables</li>
                <li>Estrategias de validación de formularios</li>
                <li>Diferentes formatos de exportación (PDF, Excel, CSV)</li>
              </ul>
            </div>

            <div className="bg-green-900/30 p-4 rounded-lg border border-green-700">
              <p className="text-green-200 text-sm">
                <strong>Ejemplo:</strong> En una tienda online, puedes tener diferentes estrategias de descuento (porcentaje, monto fijo, compra-uno-lleva-otro) que se aplican según el contexto.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Strategy Pattern</h2>
            <p className="text-gray-600">Interchangeable algorithms</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                El patrón Strategy permite seleccionar el algoritmo a usar en tiempo de ejecución.
              </p>
              <div className="bg-white rounded p-3 font-mono text-xs overflow-x-auto border border-gray-300">
                <pre className="text-gray-800">{`// Estrategias
const strategies = {
  percentage: (price, value) => price * (1 - value/100),
  fixed: (price, value) => price - value,
  none: (price) => price
}

// Contexto
const calculatePrice = (price, strategy, value) => {
  return strategies[strategy](price, value);
}

// Uso
calculatePrice(100, 'percentage', 10); // 90
calculatePrice(100, 'fixed', 10);      // 90`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
