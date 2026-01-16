export default function StakeholdersDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Gestión efectiva de stakeholders: comunicación, expectativas, alineamiento,
        y técnicas para colaborar exitosamente con product, design, y business.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">👥 Tipos de stakeholders</h3>
          <ul className="space-y-2">
            <li>✓ Product Managers - Features, roadmap</li>
            <li>✓ Designers - UX/UI collaboration</li>
            <li>✓ Business - ROI, metrics</li>
            <li>✓ End users - Necesidades reales</li>
            <li>✓ Otros devs - APIs, dependencies</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Skills clave</h3>
          <ul className="space-y-2">
            <li>• Active listening - Entender necesidades</li>
            <li>• Translation - Técnico ↔ No-técnico</li>
            <li>• Negotiation - Scope, timeline</li>
            <li>• Expectation setting - Realismo</li>
            <li>• Status updates - Transparencia</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Comunica early and often</li>
          <li>• Usa su lenguaje, no jargon técnico</li>
          <li>• Explica trade-offs claramente</li>
          <li>• Propón soluciones, no solo problemas</li>
          <li>• Document decisions (email, docs)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💬 Comunicación efectiva</p>
        <ul className="space-y-1 text-sm">
          <li>• Con PM: Impacto en usuarios, effort estimation</li>
          <li>• Con Business: ROI, time to market, risk</li>
          <li>• Con Design: Feasibility, technical constraints</li>
          <li>• Con Users: Problemas reales que resuelves</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Red flags</p>
        <ul className="space-y-1 text-sm">
          <li>• Stakeholder sorprendido por delays</li>
          <li>• Misalignment en prioridades</li>
          <li>• Scope creep sin discusión</li>
          <li>• "Throw it over the wall" mentality</li>
        </ul>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Técnicas</p>
        <ul className="space-y-1 text-sm">
          <li>• RACI matrix - Roles y responsabilidades</li>
          <li>• Regular syncs - Alineamiento continuo</li>
          <li>• Demo early - Feedback temprano</li>
          <li>• Stakeholder map - Identificar influencers</li>
        </ul>
      </div>
    </>
  );
}
