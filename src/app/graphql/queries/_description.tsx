export default function GraphQLQueriesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Las Queries en GraphQL permiten solicitar exactamente los datos que necesitas.
        Aprende a escribir queries eficientes, con argumentos, aliases y fragmentos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Conceptos clave</h3>
          <ul className="space-y-2">
            <li>✓ Fields - Datos específicos</li>
            <li>✓ Arguments - Filtros y parámetros</li>
            <li>✓ Aliases - Renombrar resultados</li>
            <li>✓ Fragments - Reutilizar campos</li>
            <li>✓ Variables - Queries dinámicas</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>• Nested queries - Datos relacionados</li>
            <li>• Pagination - Limit/offset, cursors</li>
            <li>• Sorting - Ordenamiento</li>
            <li>• Filtering - Condiciones WHERE</li>
            <li>• Directives - @include, @skip</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Optimización</p>
        <ul className="space-y-1 text-sm">
          <li>• Pide solo campos necesarios</li>
          <li>• Usa fragmentos para consistencia</li>
          <li>• Implementa caching en cliente</li>
          <li>• DataLoader para N+1 queries</li>
          <li>• Query complexity limits</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Patterns comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Connection pattern - Pagination estándar</li>
          <li>• Relay specification - Best practices</li>
          <li>• Global ID - Identificadores únicos</li>
          <li>• Node interface - Refetch por ID</li>
        </ul>
      </div>
    </>
  );
}
