export default function GraphQLMutationsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Las Mutations en GraphQL permiten modificar datos en el servidor.
        Aprende a crear, actualizar y eliminar datos de forma type-safe.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✏️ Operaciones</h3>
          <ul className="space-y-2">
            <li>✓ Create - Insertar datos nuevos</li>
            <li>✓ Update - Modificar existentes</li>
            <li>✓ Delete - Eliminar registros</li>
            <li>✓ Upsert - Create o Update</li>
            <li>✓ Batch - Múltiples operaciones</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Best practices</h3>
          <ul className="space-y-2">
            <li>• Input types - Validación clara</li>
            <li>• Return full object - Para cache</li>
            <li>• Error handling - Descriptivo</li>
            <li>• Idempotency - Misma request = mismo resultado</li>
            <li>• Optimistic updates - UX mejorado</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Estructura típica</p>
        <ul className="space-y-1 text-sm">
          <li>• Input validation - Validar antes de ejecutar</li>
          <li>• Business logic - Aplicar reglas de negocio</li>
          <li>• Database operation - Persistir cambios</li>
          <li>• Return updated data - Cliente actualiza cache</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Consideraciones</p>
        <ul className="space-y-1 text-sm">
          <li>• Mutations siempre son POST requests</li>
          <li>• Se ejecutan secuencialmente (no paralelo)</li>
          <li>• Retornar suficiente info para actualizar UI</li>
          <li>• Considerar rate limiting</li>
        </ul>
      </div>
    </>
  );
}
