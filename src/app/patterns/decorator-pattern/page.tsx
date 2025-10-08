export default function DecoratorPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Decorator Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Decorator Pattern</strong> permite agregar nuevas funcionalidades a objetos existentes de manera dinámica sin alterar su estructura.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Características principales:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Extiende funcionalidad sin herencia</li>
                <li>Composición sobre herencia</li>
                <li>Flexible y reutilizable</li>
                <li>Sigue el principio Open/Closed</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Casos de uso:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Agregar estilos o comportamientos a componentes</li>
                <li>Logging, caching, validación</li>
                <li>Higher-Order Components (HOCs) en React</li>
                <li>Middleware en aplicaciones</li>
              </ul>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
              <p className="text-blue-200 text-sm">
                <strong>Ejemplo:</strong> En React, los HOCs son una implementación del patrón Decorator. También se usa con React.memo(), que decora componentes con memoización.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Decorator Pattern</h2>
            <p className="text-gray-600">Enhancing objects dynamically</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                El patrón Decorator envuelve un objeto para agregar nueva funcionalidad manteniendo la interfaz original.
              </p>
              <div className="bg-white rounded p-3 font-mono text-xs overflow-x-auto border border-gray-300">
                <pre className="text-gray-800">{`// Base Component
const Button = ({ text }) => <button>{text}</button>

// Decorator
const withLogging = (Component) => {
  return (props) => {
    console.log('Rendered:', props);
    return <Component {...props} />;
  }
}

// Enhanced Component
const LoggedButton = withLogging(Button);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
