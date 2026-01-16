export default function DataStructuresBasicDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Las estructuras de datos básicas son fundamentales para organizar y acceder a información
        eficientemente. Domina arrays, listas enlazadas, stacks, queues y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📦 Estructuras lineales</h3>
          <ul className="space-y-2">
            <li>✓ Array - Acceso O(1)</li>
            <li>✓ Linked List - Inserción O(1)</li>
            <li>✓ Stack (LIFO) - Push/Pop O(1)</li>
            <li>✓ Queue (FIFO) - Enqueue/Dequeue O(1)</li>
            <li>✓ Hash Table - Búsqueda O(1) promedio</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Arrays - Colecciones ordenadas</li>
            <li>• Linked Lists - Inserción frecuente</li>
            <li>• Stacks - Undo/Redo, parsing</li>
            <li>• Queues - Task scheduling, BFS</li>
            <li>• Hash Tables - Búsqueda rápida</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Complejidad temporal</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm mt-2">
          <div>
            <p className="font-semibold">Array:</p>
            <ul className="ml-4">
              <li>Acceso: O(1)</li>
              <li>Búsqueda: O(n)</li>
              <li>Inserción: O(n)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Linked List:</p>
            <ul className="ml-4">
              <li>Acceso: O(n)</li>
              <li>Búsqueda: O(n)</li>
              <li>Inserción: O(1)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔑 Elección correcta</p>
        <ul className="space-y-1 text-sm">
          <li>• ¿Necesitas acceso rápido por índice? → Array</li>
          <li>• ¿Inserción/eliminación frecuente? → Linked List</li>
          <li>• ¿LIFO (último en entrar, primero en salir)? → Stack</li>
          <li>• ¿FIFO (primero en entrar, primero en salir)? → Queue</li>
          <li>• ¿Búsqueda rápida por clave? → Hash Table</li>
        </ul>
      </div>
    </>
  );
}
