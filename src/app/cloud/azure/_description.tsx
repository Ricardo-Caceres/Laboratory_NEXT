export default function AzureDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Microsoft Azure es una plataforma cloud completa con servicios para compute, storage,
        networking, AI y más. Aprende los servicios esenciales para desarrolladores.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">☁️ Servicios core</h3>
          <ul className="space-y-2">
            <li>✓ App Service - Web apps PaaS</li>
            <li>✓ Functions - Serverless</li>
            <li>✓ Storage - Blobs, files, queues</li>
            <li>✓ SQL Database - Managed SQL</li>
            <li>✓ Cosmos DB - NoSQL global</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 DevOps en Azure</h3>
          <ul className="space-y-2">
            <li>• Azure DevOps - CI/CD</li>
            <li>• Container Registry - Docker</li>
            <li>• Kubernetes Service (AKS)</li>
            <li>• Monitor - Observabilidad</li>
            <li>• Key Vault - Secrets</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Web apps - App Service + SQL Database</li>
          <li>• APIs - Functions + API Management</li>
          <li>• Microservicios - AKS + Service Bus</li>
          <li>• Data apps - Cosmos DB + Functions</li>
        </ul>
      </div>
    </>
  );
}
