'use client';

export function AtomicDesignDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Atomic Design</strong> es una metodología para crear design systems organizando componentes UI en una jerarquía de 5 niveles.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Los 5 niveles</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Atoms:</strong> Elementos básicos (Button, Input, Label)</li>
          <li><strong>Molecules:</strong> Grupos de atoms (SearchBox = Input + Button)</li>
          <li><strong>Organisms:</strong> Secciones complejas (Header = Logo + Nav + Search)</li>
          <li><strong>Templates:</strong> Layouts de página sin datos reales</li>
          <li><strong>Pages:</strong> Instancias de templates con datos reales</li>
        </ul>
      </section>
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">Perfecto para:</strong> Design systems, bibliotecas de componentes, equipos de diseño + desarrollo.
        </p>
      </div>
    </div>
  );
}
