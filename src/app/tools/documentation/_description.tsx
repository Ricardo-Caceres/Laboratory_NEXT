export default function DocumentationDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Herramientas y best practices para documentación técnica. Desde JSDoc y TypeDoc
        hasta Storybook, Docusaurus y generación automática de docs.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📚 Herramientas</h3>
          <ul className="space-y-2">
            <li>✓ JSDoc/TSDoc - Comentarios código</li>
            <li>✓ TypeDoc - Docs de TypeScript</li>
            <li>✓ Storybook - Component docs</li>
            <li>✓ Docusaurus - Sites de documentación</li>
            <li>✓ Swagger/OpenAPI - API docs</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Tipos de docs</h3>
          <ul className="space-y-2">
            <li>• API Reference - Endpoints y métodos</li>
            <li>• Guides - Tutoriales y how-tos</li>
            <li>• Component Library - UI components</li>
            <li>• Architecture - Decisiones técnicas</li>
            <li>• Changelog - Historial de cambios</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Docs como código - Versionado con git</li>
          <li>• Ejemplos ejecutables - Code samples</li>
          <li>• Búsqueda integrada - Fácil navegación</li>
          <li>• Actualización continua - Parte del workflow</li>
          <li>• Screenshots y videos - Visual aids</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Estructura recomendada</p>
        <ul className="space-y-1 text-sm">
          <li>• Getting Started - Quick start</li>
          <li>• Guides - Step-by-step tutorials</li>
          <li>• API Reference - Detailed specs</li>
          <li>• Examples - Real-world use cases</li>
          <li>• FAQ - Preguntas frecuentes</li>
        </ul>
      </div>
    </>
  );
}
