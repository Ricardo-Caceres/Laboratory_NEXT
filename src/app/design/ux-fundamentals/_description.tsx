export default function UXFundamentalsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        User Experience fundamentals: research, usabilidad, arquitectura de información,
        design thinking y testing. Crea experiencias centradas en el usuario.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔍 UX Process</h3>
          <ul className="space-y-2">
            <li>✓ Research - Entender usuarios</li>
            <li>✓ Define - Problema y objetivos</li>
            <li>✓ Ideate - Generar soluciones</li>
            <li>✓ Prototype - Crear versiones testables</li>
            <li>✓ Test - Validar con usuarios</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Research methods</h3>
          <ul className="space-y-2">
            <li>• User interviews - Conversaciones</li>
            <li>• Surveys - Datos cuantitativos</li>
            <li>• Usability testing - Observación</li>
            <li>• A/B testing - Comparación</li>
            <li>• Analytics - Comportamiento real</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Usability principles</p>
        <ul className="space-y-1 text-sm">
          <li>• Learnability - Fácil de aprender</li>
          <li>• Efficiency - Rápido de usar</li>
          <li>• Memorability - Fácil de recordar</li>
          <li>• Errors - Prevención y recuperación</li>
          <li>• Satisfaction - Experiencia placentera</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Information Architecture</p>
        <ul className="space-y-1 text-sm">
          <li>• Organization - Estructura lógica</li>
          <li>• Labeling - Nombres claros</li>
          <li>• Navigation - Fácil encontrar info</li>
          <li>• Search - Cuando navegación no basta</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Mental models</p>
        <p className="text-sm">
          Los usuarios tienen expectativas basadas en experiencias previas.
          Diseña interfaces que coincidan con sus modelos mentales para reducir fricción.
        </p>
      </div>
    </>
  );
}
