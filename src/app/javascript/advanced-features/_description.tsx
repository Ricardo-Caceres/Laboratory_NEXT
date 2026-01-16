export default function AdvancedFeaturesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Características avanzadas de JavaScript que todo desarrollador senior debe dominar.
        Desde destructuring y spread hasta módulos ES6 y características modernas del lenguaje.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 ES6+ Features</h3>
          <ul className="space-y-2">
            <li>✓ Destructuring</li>
            <li>✓ Spread/Rest operators</li>
            <li>✓ Template literals</li>
            <li>✓ Optional chaining</li>
            <li>✓ Nullish coalescing</li>
            <li>✓ Modules (import/export)</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Async Patterns</h3>
          <ul className="space-y-2">
            <li>• Promises</li>
            <li>• Async/Await</li>
            <li>• Promise.all/race/allSettled</li>
            <li>• Error handling</li>
            <li>• Async iterators</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Características modernas</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>?.
</code> Optional chaining - Acceso seguro a propiedades</li>
          <li>• <code>??</code> Nullish coalescing - Valores por defecto</li>
          <li>• <code>??=</code> Logical assignment - Asignación condicional</li>
          <li>• Private fields (#) - Encapsulación en clases</li>
        </ul>
      </div>
    </>
  );
}
