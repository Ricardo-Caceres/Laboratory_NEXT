export default function FunctionTypesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        JavaScript ofrece múltiples formas de definir funciones, cada una con sus características,
        comportamientos y casos de uso específicos. Domina todos los tipos para escribir código
        más expresivo y eficiente.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📝 Declarativas</h4>
          <ul className="text-sm space-y-1">
            <li>• Function Declaration</li>
            <li>• Function Expression</li>
            <li>• Arrow Function</li>
            <li>• Named Expression</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">⚡ Especializadas</h4>
          <ul className="text-sm space-y-1">
            <li>• Generator Function</li>
            <li>• Async Function</li>
            <li>• Async Generator</li>
            <li>• IIFE</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">🎯 Patrones</h4>
          <ul className="text-sm space-y-1">
            <li>• Constructor</li>
            <li>• Method</li>
            <li>• Callback</li>
            <li>• Higher-Order</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔑 Características clave</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Con <code>this</code> propio:</p>
            <ul className="ml-4">
              <li>• Function Declaration</li>
              <li>• Function Expression</li>
              <li>• Constructor</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Sin <code>this</code> propio:</p>
            <ul className="ml-4">
              <li>• Arrow Function</li>
              <li>• Method shorthand (hereda)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📊 Guía de selección rápida</p>
        <ul className="space-y-1 text-sm">
          <li>✅ <strong>Arrow</strong> → Callbacks y cuando necesites heredar this</li>
          <li>✅ <strong>Declaration</strong> → Funciones principales reutilizables</li>
          <li>✅ <strong>Async/await</strong> → Operaciones asíncronas</li>
          <li>✅ <strong>Generator</strong> → Iteraciones lazy o infinitas</li>
          <li>❌ <strong>Constructor</strong> → Usa ES6 classes en su lugar</li>
        </ul>
      </div>
    </>
  );
}
