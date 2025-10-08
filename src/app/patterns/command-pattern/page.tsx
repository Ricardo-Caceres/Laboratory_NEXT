export default function CommandPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Command Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Command Pattern</strong> encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar solicitudes y soportar operaciones reversibles (undo/redo).
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Características principales:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Desacopla emisor de receptor</li>
                <li>Soporta operaciones undo/redo</li>
                <li>Permite encolar y registrar comandos</li>
                <li>Facilita crear macros de comandos</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Casos de uso:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Sistemas de undo/redo en editores</li>
                <li>Gestión de transacciones</li>
                <li>Sistemas de cola de tareas</li>
                <li>Event sourcing y CQRS</li>
                <li>Redux actions en React</li>
              </ul>
            </div>

            <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-700">
              <p className="text-orange-200 text-sm">
                <strong>Ejemplo:</strong> En Redux, las actions son comandos que encapsulan cambios de estado. El dispatcher ejecuta estos comandos y el reducer actualiza el estado.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Command Pattern</h2>
            <p className="text-gray-600">Encapsulate requests as objects</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                El patrón Command transforma solicitudes en objetos independientes con toda la información necesaria.
              </p>
              <div className="bg-white rounded p-3 font-mono text-xs overflow-x-auto border border-gray-300">
                <pre className="text-gray-800">{`// Command Interface
class Command {
  execute() {}
  undo() {}
}

// Concrete Commands
class AddCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }
  execute(state) { return state + this.value; }
  undo(state) { return state - this.value; }
}

// Invoker
class Calculator {
  constructor() { this.history = []; }
  execute(command, state) {
    this.history.push(command);
    return command.execute(state);
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
