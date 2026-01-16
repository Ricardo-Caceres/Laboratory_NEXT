export default function AlgorithmsAdvancedDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Algoritmos avanzados y técnicas de optimización: divide and conquer, dynamic programming,
        greedy algorithms, backtracking y algoritmos de grafos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🧠 Técnicas</h3>
          <ul className="space-y-2">
            <li>✓ Divide & Conquer - Dividir problema</li>
            <li>✓ Dynamic Programming - Memoization</li>
            <li>✓ Greedy - Elección óptima local</li>
            <li>✓ Backtracking - Exploración exhaustiva</li>
            <li>✓ Branch & Bound - Poda de búsqueda</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Algoritmos de grafos</h3>
          <ul className="space-y-2">
            <li>• BFS/DFS - Recorrido</li>
            <li>• Dijkstra - Shortest path</li>
            <li>• Bellman-Ford - Negative weights</li>
            <li>• Floyd-Warshall - All pairs shortest</li>
            <li>• Kruskal/Prim - MST</li>
            <li>• Topological Sort - DAG ordering</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Sorting avanzado</p>
        <ul className="space-y-1 text-sm">
          <li>• Merge Sort - O(n log n), estable</li>
          <li>• Quick Sort - O(n log n) avg, in-place</li>
          <li>• Heap Sort - O(n log n), in-place</li>
          <li>• Radix Sort - O(nk) para integers</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Cuándo usar qué</p>
        <ul className="space-y-1 text-sm">
          <li>• DP - Subproblemas overlapping</li>
          <li>• Greedy - Elección local = óptimo global</li>
          <li>• Backtracking - Soluciones permutaciones</li>
          <li>• D&C - Problemas divisibles</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Problemas clásicos</p>
        <ul className="space-y-1 text-sm">
          <li>• Fibonacci - DP básico</li>
          <li>• Knapsack - DP, optimización</li>
          <li>• N-Queens - Backtracking</li>
          <li>• Longest Common Subsequence - DP</li>
        </ul>
      </div>
    </>
  );
}
