export default function DockerDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Docker es la plataforma líder de containerización. Aprende a crear imágenes,
        gestionar containers y orquestar aplicaciones con Docker y Docker Compose.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🐳 Conceptos clave</h3>
          <ul className="space-y-2">
            <li>✓ Images - Templates inmutables</li>
            <li>✓ Containers - Instancias ejecutables</li>
            <li>✓ Dockerfile - Build instructions</li>
            <li>✓ Volumes - Persistencia de datos</li>
            <li>✓ Networks - Comunicación</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Ventajas</h3>
          <ul className="space-y-2">
            <li>• Portabilidad total</li>
            <li>• Aislamiento de entornos</li>
            <li>• Despliegue rápido</li>
            <li>• Escalabilidad</li>
            <li>• Consistencia dev/prod</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Comandos esenciales</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>docker build</code> - Crear imagen</li>
          <li>• <code>docker run</code> - Ejecutar container</li>
          <li>• <code>docker ps</code> - Listar containers</li>
          <li>• <code>docker-compose up</code> - Multi-container</li>
        </ul>
      </div>
    </>
  );
}
