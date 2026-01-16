export default function DataStructuresAdvancedDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Estructuras de datos avanzadas para problemas complejos: árboles, grafos, heaps,
        tries y estructuras especializadas para casos de uso específicos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🌳 Árboles</h3>
          <ul className="space-y-2">
            <li>✓ Binary Tree - Árbol binario</li>
            <li>✓ BST - Binary Search Tree</li>
            <li>✓ AVL Tree - Auto-balanceado</li>
            <li>✓ Red-Black Tree - Balanceo eficiente</li>
            <li>✓ B-Tree - Para databases</li>
            <li>✓ Trie - Búsqueda de strings</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Otras estructuras</h3>
          <ul className="space-y-2">
            <li>• Graph - Nodos y edges</li>
            <li>• Heap - Priority queue</li>
            <li>• Disjoint Set - Union-Find</li>
            <li>• Segment Tree - Range queries</li>
            <li>• Fenwick Tree - Prefix sums</li>
            <li>• Bloom Filter - Membership test</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• BST - Búsqueda eficiente O(log n)</li>
          <li>• Trie - Autocompletado, spell checking</li>
          <li>• Graph - Redes sociales, mapas</li>
          <li>• Heap - Priority queue, scheduling</li>
          <li>• Bloom Filter - Cache, duplicates</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📈 Complejidad</p>
        <ul className="space-y-1 text-sm">
          <li>• BST - Search/Insert: O(log n) avg, O(n) worst</li>
          <li>• AVL - Garantizado O(log n)</li>
          <li>• Heap - Insert/Delete: O(log n)</li>
          <li>• Graph BFS/DFS - O(V + E)</li>
        </ul>
      </div>
    </>
  );
}
