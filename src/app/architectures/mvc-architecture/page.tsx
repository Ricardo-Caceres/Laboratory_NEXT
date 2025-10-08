export default function MVCArchitecturePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">MVC Architecture</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">MVC (Model-View-Controller)</strong> separa la aplicación en tres componentes interconectados para separar la lógica de negocio de la interfaz de usuario.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Componentes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Model:</strong> Gestiona datos y lógica de negocio</li>
                <li><strong>View:</strong> Presenta datos al usuario (UI)</li>
                <li><strong>Controller:</strong> Maneja input del usuario y actualiza Model/View</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Flujo:</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-300">
                <li>Usuario interactúa con la View</li>
                <li>Controller recibe el input</li>
                <li>Controller actualiza el Model</li>
                <li>Model notifica cambios a la View</li>
                <li>View se actualiza y muestra nuevos datos</li>
              </ol>
            </div>

            <div className="bg-pink-900/30 p-4 rounded-lg border border-pink-700">
              <p className="text-pink-200 text-sm">
                <strong>En React:</strong> Components (View), State/Reducers (Model), Event Handlers (Controller)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">MVC Pattern</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="font-bold text-xl">Model</div>
              <div className="text-sm text-blue-100 mt-1">Data & Business Logic</div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex gap-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg text-center flex-1">
                  <div className="text-4xl mb-2">👁️</div>
                  <div className="font-bold text-xl">View</div>
                  <div className="text-sm text-green-100 mt-1">User Interface</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center flex-1">
                  <div className="text-4xl mb-2">🎮</div>
                  <div className="font-bold text-xl">Controller</div>
                  <div className="text-sm text-purple-100 mt-1">Input Handler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
