export default function BigODescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Big O notation describe la complejidad temporal y espacial de algoritmos.
        Aprende a analizar eficiencia y comparar soluciones algorítmicas.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Complejidades comunes</h3>
          <ul className="space-y-2">
            <li>✓ O(1) - Constante - Array access</li>
            <li>✓ O(log n) - Logarítmica - Binary search</li>
            <li>✓ O(n) - Lineal - Loop simple</li>
            <li>✓ O(n log n) - Linearithmic - Merge sort</li>
            <li>✓ O(n²) - Cuadrática - Nested loops</li>
            <li>✓ O(2ⁿ) - Exponencial - Fibonacci recursivo</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Ranking (mejor a peor)</h3>
          <ul className="space-y-2 text-sm">
            <li>1. O(1) - Constante ⚡</li>
            <li>2. O(log n) - Logarítmica 🚀</li>
            <li>3. O(n) - Lineal ✅</li>
            <li>4. O(n log n) - Linearithmic 👍</li>
            <li>5. O(n²) - Cuadrática ⚠️</li>
            <li>6. O(2ⁿ) - Exponencial 🐌</li>
            <li>7. O(n!) - Factorial ❌</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📈 Reglas para calcular</p>
        <ul className="space-y-1 text-sm">
          <li>• Drop constants - O(2n) → O(n)</li>
          <li>• Drop non-dominant - O(n² + n) → O(n²)</li>
          <li>• Different inputs = different variables - O(a + b)</li>
          <li>• Nested loops multiply - O(n × m) = O(nm)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔍 Ejemplos prácticos</p>
        <ul className="space-y-1 text-sm">
          <li>• Hash table lookup - O(1)</li>
          <li>• Binary search - O(log n)</li>
          <li>• Linear search - O(n)</li>
          <li>• Quick sort avg - O(n log n)</li>
          <li>• Bubble sort - O(n²)</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">💾 Space Complexity</p>
        <p className="text-sm mb-2">
          Analiza el espacio adicional que usa un algoritmo:
        </p>
        <ul className="space-y-1 text-sm">
          <li>• O(1) - Variables constantes</li>
          <li>• O(n) - Array del tamaño del input</li>
          <li>• O(log n) - Recursión de binary search</li>
        </ul>
      </div>
    </>
  );
}
