'use client';

export function PropsGetterDescription() {
  const formattedTitle = "Props Getter Pattern";
  
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Props Getter Pattern</strong> - Un patrón de diseño fundamental en el desarrollo de software.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Descripción
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón proporciona soluciones probadas para problemas comunes en el desarrollo de aplicaciones React.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Mejora la estructura del código</li>
          <li>Facilita el mantenimiento</li>
          <li>Promueve mejores prácticas</li>
          <li>Aumenta la reutilización</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón es especialmente útil en aplicaciones React modernas donde se requiere una arquitectura escalable y mantenible.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Explora el ejemplo interactivo para ver cómo implementar este patrón en tu aplicación.
        </p>
      </div>
    </div>
  );
}
