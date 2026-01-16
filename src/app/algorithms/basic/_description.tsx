export default function AlgorithmsBasicDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Los algoritmos básicos son los fundamentos de la programación eficiente. Domina búsqueda,
        ordenamiento y algoritmos matemáticos esenciales que todo desarrollador debe conocer.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">🔍 Búsqueda</h4>
          <ul className="text-sm space-y-1">
            <li>• Linear Search - O(n)</li>
            <li>• Binary Search - O(log n)</li>
            <li>• Jump Search</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📊 Ordenamiento</h4>
          <ul className="text-sm space-y-1">
            <li>• Bubble Sort - O(n²)</li>
            <li>• Selection Sort - O(n²)</li>
            <li>• Insertion Sort - O(n²)</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">🔢 Matemáticos</h4>
          <ul className="text-sm space-y-1">
            <li>• GCD / LCM</li>
            <li>• Prime Numbers</li>
            <li>• Fibonacci</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-6">
        <p className="font-semibold mb-2">📈 Big O Notation</p>
        <ul className="space-y-1 text-sm">
          <li>• O(1) - Constante - Acceso a array</li>
          <li>• O(log n) - Logarítmico - Binary search</li>
          <li>• O(n) - Lineal - Loop simple</li>
          <li>• O(n²) - Cuadrático - Nested loops</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Por qué aprender</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Mejora habilidades de resolución de problemas</li>
          <li>✓ Optimiza el rendimiento del código</li>
          <li>✓ Preparación para entrevistas técnicas</li>
          <li>✓ Base para algoritmos avanzados</li>
        </ul>
      </div>
    </>
  );
}
