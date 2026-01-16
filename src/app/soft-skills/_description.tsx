export default function SoftSkillsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Las soft skills son cruciales para el éxito como desarrollador. Aprende comunicación efectiva,
        liderazgo técnico, gestión de stakeholders y colaboración en equipo.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">👥 Skills interpersonales</h3>
          <ul className="space-y-2">
            <li>✓ Comunicación - Clara y efectiva</li>
            <li>✓ Colaboración - Trabajo en equipo</li>
            <li>✓ Empatía - Entender perspectivas</li>
            <li>✓ Feedback - Dar y recibir</li>
            <li>✓ Conflict resolution - Resolver conflictos</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Skills profesionales</h3>
          <ul className="space-y-2">
            <li>• Leadership - Guiar equipos</li>
            <li>• Time management - Priorización</li>
            <li>• Problem solving - Pensamiento crítico</li>
            <li>• Adaptability - Flexibilidad</li>
            <li>• Mentoring - Desarrollar otros</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Por qué importan</p>
        <ul className="space-y-1 text-sm">
          <li>• El código se escribe para humanos primero</li>
          <li>• Proyectos complejos requieren colaboración</li>
          <li>• Career growth depende de soft skills</li>
          <li>• Tech lead y management roles son 80% soft skills</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• Tech leadership efectivo</li>
          <li>• Stakeholder management</li>
          <li>• Team collaboration best practices</li>
          <li>• Communication strategies</li>
        </ul>
      </div>
    </>
  );
}
