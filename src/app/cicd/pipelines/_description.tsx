export default function CIPipelinesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        CI/CD pipelines automatizan el proceso de integración, testing y despliegue.
        Aprende a configurar pipelines robustos con GitHub Actions, GitLab CI y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔄 CI/CD Stages</h3>
          <ul className="space-y-2">
            <li>✓ Source - Code checkout</li>
            <li>✓ Build - Compilación</li>
            <li>✓ Test - Unit/Integration</li>
            <li>✓ Quality - Linting, coverage</li>
            <li>✓ Deploy - Staging/Production</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🛠️ Herramientas</h3>
          <ul className="space-y-2">
            <li>• GitHub Actions</li>
            <li>• GitLab CI/CD</li>
            <li>• Jenkins</li>
            <li>• CircleCI</li>
            <li>• Travis CI</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Fail fast - Detectar errores temprano</li>
          <li>• Parallel execution - Jobs simultáneos</li>
          <li>• Caching - Dependencies y builds</li>
          <li>• Environment segregation - Dev/Staging/Prod</li>
          <li>• Rollback strategy - Plan B siempre</li>
        </ul>
      </div>
    </>
  );
}
