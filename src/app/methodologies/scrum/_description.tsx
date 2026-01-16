export default function ScrumDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Scrum es el framework ágil más popular para gestión de proyectos. Aprende los roles,
        eventos y artefactos para implementar Scrum efectivamente en tu equipo.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">👥 Roles</h4>
          <ul className="text-sm space-y-1">
            <li>• Product Owner</li>
            <li>• Scrum Master</li>
            <li>• Development Team</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📅 Eventos</h4>
          <ul className="text-sm space-y-1">
            <li>• Sprint Planning</li>
            <li>• Daily Scrum</li>
            <li>• Sprint Review</li>
            <li>• Retrospective</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📋 Artefactos</h4>
          <ul className="text-sm space-y-1">
            <li>• Product Backlog</li>
            <li>• Sprint Backlog</li>
            <li>• Increment</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Valores Scrum</p>
        <ul className="space-y-1 text-sm">
          <li>• Commitment - Compromiso con los objetivos</li>
          <li>• Courage - Valentía para hacer lo correcto</li>
          <li>• Focus - Enfoque en el Sprint</li>
          <li>• Openness - Transparencia en el trabajo</li>
          <li>• Respect - Respeto mutuo</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Beneficios</p>
        <ul className="space-y-1 text-sm">
          <li>• Entregas frecuentes de valor</li>
          <li>• Adaptabilidad al cambio</li>
          <li>• Transparencia y visibilidad</li>
          <li>• Mejora continua del equipo</li>
        </ul>
      </div>
    </>
  );
}
