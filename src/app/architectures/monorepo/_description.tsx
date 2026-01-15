'use client';

export function MonorepoDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Monorepo</strong> almacena múltiples proyectos en un único repositorio.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Ventajas</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Compartir código fácilmente entre proyectos</li>
          <li>Refactoring atómico cross-proyecto</li>
          <li>Un solo CI/CD</li>
          <li>Consistencia de versiones</li>
          <li>Testing integrado entre proyectos</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Herramientas populares</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Turborepo:</strong> Por Vercel, optimizado para Next.js</li>
          <li><strong>Nx:</strong> Poderoso, con generadores</li>
          <li><strong>Lerna:</strong> Clásico, múltiples packages</li>
          <li><strong>pnpm workspaces:</strong> Built-in en pnpm</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Cuándo usar</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Web + Mobile + Backend en mismo stack</li>
          <li>Múltiples apps Next.js compartiendo componentes</li>
          <li>Design system + apps que lo consumen</li>
        </ul>
      </section>
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Recomendado:</strong> Monorepo es el estándar moderno para equipos que manejan múltiples proyectos relacionados.
        </p>
      </div>
    </div>
  );
}
