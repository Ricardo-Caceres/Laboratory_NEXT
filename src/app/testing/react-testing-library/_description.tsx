'use client';

export function reacttestinglibraryDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">React Testing Library</strong> - La forma recomendada de testear componentes React.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Herramienta esencial para testing en JavaScript</li>
          <li>Mejora la calidad y confiabilidad del código</li>
          <li>Facilita refactoring sin miedo</li>
          <li>Documenta el comportamiento esperado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Ideal para asegurar que tu código funciona correctamente y prevenir regresiones en aplicaciones React y Next.js.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Explora los ejemplos para aprender a implementar testing efectivo en tus proyectos.
        </p>
      </div>
    </div>
  );
}
