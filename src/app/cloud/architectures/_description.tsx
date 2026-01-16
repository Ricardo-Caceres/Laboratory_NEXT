export default function CloudArchitecturesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Arquitecturas cloud modernas: serverless, microservicios, multi-cloud, edge computing
        y patrones de diseño para aplicaciones escalables y resilientes.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🏗️ Patrones arquitectónicos</h3>
          <ul className="space-y-2">
            <li>✓ Serverless - Sin gestión de servers</li>
            <li>✓ Microservicios - Servicios independientes</li>
            <li>✓ Event-driven - Comunicación por eventos</li>
            <li>✓ CQRS - Command Query Separation</li>
            <li>✓ Event Sourcing - Estado como eventos</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Cloud-native principles</h3>
          <ul className="space-y-2">
            <li>• Scalability - Horizontal scaling</li>
            <li>• Resilience - Fault tolerance</li>
            <li>• Observability - Logs, metrics, traces</li>
            <li>• Automation - IaC, CI/CD</li>
            <li>• Security - Zero trust</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Design patterns</p>
        <ul className="space-y-1 text-sm">
          <li>• Circuit Breaker - Prevenir cascading failures</li>
          <li>• Retry with exponential backoff</li>
          <li>• Bulkhead - Aislar recursos</li>
          <li>• API Gateway - Punto de entrada único</li>
          <li>• Service Mesh - Comunicación entre servicios</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📊 Multi-cloud strategies</p>
        <ul className="space-y-1 text-sm">
          <li>• Avoid vendor lock-in</li>
          <li>• Best-of-breed services</li>
          <li>• Geographic redundancy</li>
          <li>• Cost optimization</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 IaC Tools</p>
        <ul className="space-y-1 text-sm">
          <li>• Terraform - Multi-cloud IaC</li>
          <li>• CloudFormation - AWS native</li>
          <li>• Pulumi - IaC con código real</li>
          <li>• CDK - Cloud Development Kit</li>
        </ul>
      </div>
    </>
  );
}
