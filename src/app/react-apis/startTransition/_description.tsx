'use client';

export function startTransitionDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">startTransition</strong> - Marca actualizaciones como no urgentes.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>API fundamental de React</li>
          <li>Facilita patrones avanzados</li>
          <li>Mejora la composición de componentes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Esencial para ciertos patrones y optimizaciones en aplicaciones React modernas.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Explora el ejemplo interactivo para ver cómo implementar startTransition en tus componentes.
        </p>
      </div>
    </div>
  );
}
