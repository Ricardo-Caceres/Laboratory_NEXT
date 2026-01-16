export default function HoistingDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        El hoisting es el comportamiento de JavaScript que mueve todas las declaraciones al inicio
        de su contexto durante la fase de compilación. Comprende cómo funciona con var, let, const,
        funciones y clases para evitar bugs sutiles.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📚 Conceptos cubiertos</h3>
          <ul className="space-y-2">
            <li>✓ Hoisting con var</li>
            <li>✓ Function Declarations vs Expressions</li>
            <li>✓ let y const (TDZ)</li>
            <li>✓ Class Hoisting</li>
            <li>✓ Temporal Dead Zone</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚠️ Puntos clave</h3>
          <ul className="space-y-2">
            <li>• Solo declaraciones son hoisted</li>
            <li>• var se inicializa con undefined</li>
            <li>• let/const quedan en TDZ</li>
            <li>• Functions son completamente hoisted</li>
            <li>• Classes están en TDZ</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
        <p className="font-semibold mb-2">🚫 Errores comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Usar variables antes de declararlas</li>
          <li>• Confundir var con let/const</li>
          <li>• Depender del hoisting en lugar de declarar al inicio</li>
          <li>• No entender la Temporal Dead Zone</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Mejores prácticas</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa <code>const</code> por defecto</li>
          <li>• Usa <code>let</code> cuando necesites reasignar</li>
          <li>• Evita <code>var</code> en código moderno</li>
          <li>• Declara variables al inicio del scope</li>
        </ul>
      </div>
    </>
  );
}
