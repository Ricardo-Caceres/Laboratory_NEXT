export default function TypeScriptBasicsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Domina los fundamentos de TypeScript desde tipos primitivos hasta interfaces avanzadas.
        Aprende a usar tipos, interfaces, clases, y las características esenciales del sistema de tipos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Lo que aprenderás</h3>
          <ul className="space-y-2">
            <li>✓ Tipos primitivos y avanzados</li>
            <li>✓ Interfaces y Type Aliases</li>
            <li>✓ Union e Intersection Types</li>
            <li>✓ Type Guards y Narrowing</li>
            <li>✓ Clases y OOP en TypeScript</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">💡 Conceptos clave</h3>
          <ul className="space-y-2">
            <li>• Type Safety</li>
            <li>• Static Type Checking</li>
            <li>• Type Inference</li>
            <li>• Structural Typing</li>
            <li>• Compile-time Errors</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Best Practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Prefiere <code>interface</code> para shapes de objetos</li>
          <li>• Evita <code>any</code>, usa <code>unknown</code> cuando no conozcas el tipo</li>
          <li>• Aprovecha el type narrowing en lugar de assertions</li>
          <li>• Usa <code>const assertions</code> para valores inmutables</li>
        </ul>
      </div>
    </>
  );
}
