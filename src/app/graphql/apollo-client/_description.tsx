export default function ApolloClientDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Apollo Client es la librería más popular para integrar GraphQL en aplicaciones React.
        Proporciona gestión de estado, caché inteligente y hooks optimizados para queries y mutations.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Características</h3>
          <ul className="space-y-2">
            <li>✓ Cache inteligente normalizado</li>
            <li>✓ React Hooks optimizados</li>
            <li>✓ Gestión de estado integrada</li>
            <li>✓ Optimistic UI updates</li>
            <li>✓ Subscriptions en tiempo real</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Hooks principales</h3>
          <ul className="space-y-2">
            <li>• useQuery - Queries</li>
            <li>• useLazyQuery - Lazy queries</li>
            <li>• useMutation - Mutations</li>
            <li>• useSubscription - Real-time</li>
            <li>• useApolloClient - Cliente directo</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Cache y Performance</p>
        <ul className="space-y-1 text-sm">
          <li>• Cache normalizado automático</li>
          <li>• Políticas de fetch configurables</li>
          <li>• Optimistic responses</li>
          <li>• Refetch automático</li>
        </ul>
      </div>
    </>
  );
}
