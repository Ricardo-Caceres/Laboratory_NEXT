export default function LayeredArchitecturePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Layered Architecture</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Layered Architecture</strong> organiza el código en capas horizontales, donde cada capa tiene una responsabilidad específica y solo puede comunicarse con la capa inmediatamente inferior.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Capas típicas:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li><strong>Presentation Layer:</strong> UI, Views, Controllers</li>
                <li><strong>Business Logic Layer:</strong> Reglas de negocio, servicios</li>
                <li><strong>Data Access Layer:</strong> Repositorios, ORMs</li>
                <li><strong>Database Layer:</strong> Almacenamiento de datos</li>
              </ul>
            </div>

            <div className="bg-green-900/30 p-4 rounded-lg border border-green-700">
              <p className="text-green-200 text-sm">
                <strong>En React:</strong> Components (Presentation) → Services/Hooks (Business) → API/Repository (Data Access) → Backend/DB (Database)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Layered Architecture</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-500 text-white p-4 rounded-lg text-center font-semibold">
              Presentation Layer
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold">
              Business Logic Layer
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg text-center font-semibold">
              Data Access Layer
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg text-center font-semibold">
              Database Layer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
