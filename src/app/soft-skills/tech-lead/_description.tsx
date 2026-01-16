export default function TechLeadDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        El Tech Lead balancea responsabilidades técnicas y de liderazgo. Aprende a guiar equipos,
        tomar decisiones arquitectónicas, mentorear desarrolladores y delivery de proyectos exitosos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">👨‍💼 Responsabilidades</h3>
          <ul className="space-y-2">
            <li>✓ Arquitectura - Decisiones técnicas</li>
            <li>✓ Code reviews - Quality assurance</li>
            <li>✓ Mentorship - Desarrollar equipo</li>
            <li>✓ Planning - Estimaciones, roadmap</li>
            <li>✓ Technical debt - Balance deuda/features</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Skills clave</h3>
          <ul className="space-y-2">
            <li>• Comunicación - Técnico y no-técnico</li>
            <li>• Delegación - Empoderar equipo</li>
            <li>• Priorización - Qué es importante</li>
            <li>• Problem solving - Debug complejo</li>
            <li>• Influence - Sin autoridad formal</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• 70% código, 30% liderazgo (aproximado)</li>
          <li>• Bloquea tiempo para coding</li>
          <li>• 1-on-1s regulares con equipo</li>
          <li>• Documenta decisiones arquitectónicas (ADRs)</li>
          <li>• Celebrate wins, aprende de failures</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Errores comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Micromanagement - Confía en tu equipo</li>
          <li>• Hero syndrome - No hagas todo tú</li>
          <li>• Ignorar technical debt - Balance es clave</li>
          <li>• No comunicar "por qué" - Context matters</li>
          <li>• Burnout - Delega, no hagas todo</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Daily activities</p>
        <ul className="space-y-1 text-sm">
          <li>• Code reviews - Calidad y learning</li>
          <li>• Planning - Sprint planning, grooming</li>
          <li>• Unblocking - Ayudar al equipo</li>
          <li>• Architecture - Design discussions</li>
          <li>• Coding - Features críticas, spikes</li>
        </ul>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 my-6">
        <p className="font-semibold mb-2">🌱 Career growth</p>
        <ul className="space-y-1 text-sm">
          <li>• Tech Lead → Senior/Staff Engineer (IC track)</li>
          <li>• Tech Lead → Engineering Manager (Manager track)</li>
          <li>• Tech Lead → Architect (Architecture track)</li>
        </ul>
      </div>
    </>
  );
}
