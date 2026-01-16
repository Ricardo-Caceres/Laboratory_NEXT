export default function GraphQLBasicsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        GraphQL es un lenguaje de consulta para APIs que te permite solicitar exactamente
        los datos que necesitas. Aprende los fundamentos del esquema, queries y mutations.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características clave</h3>
          <ul className="space-y-2">
            <li>✓ Schema fuertemente tipado</li>
            <li>✓ Un solo endpoint</li>
            <li>✓ Queries específicas del cliente</li>
            <li>✓ No over-fetching ni under-fetching</li>
            <li>✓ Subscriptions para datos en tiempo real</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📚 Conceptos básicos</h3>
          <ul className="space-y-2">
            <li>• Types y Schemas</li>
            <li>• Queries (lectura)</li>
            <li>• Mutations (escritura)</li>
            <li>• Resolvers</li>
            <li>• Fields y Arguments</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Ventajas sobre REST</p>
        <ul className="space-y-1 text-sm">
          <li>• Solicita solo los datos que necesitas</li>
          <li>• Evita múltiples round-trips</li>
          <li>• Schema auto-documentado</li>
          <li>• Versionado más simple</li>
        </ul>
      </div>
    </>
  );
}
