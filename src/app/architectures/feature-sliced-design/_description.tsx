'use client';

export function FeatureSlicedDesignDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Feature-Sliced Design (FSD)</strong> organiza código por features y capas, optimizado para escalabilidad.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Estructura</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>app:</strong> Inicialización, providers, rutas</li>
          <li><strong>pages:</strong> Composición de features en páginas</li>
          <li><strong>widgets:</strong> Componentes complejos independientes</li>
          <li><strong>features:</strong> Funcionalidades con lógica de negocio</li>
          <li><strong>entities:</strong> Modelos de dominio</li>
          <li><strong>shared:</strong> Código reutilizable</li>
        </ul>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Arquitectura moderna ganando popularidad en apps React grandes. Combina lo mejor de feature-based y layered.
        </p>
      </div>
    </div>
  );
}
