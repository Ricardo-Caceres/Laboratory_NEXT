'use client';

export function LinkDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Next.js Link</strong> habilita navegación client-side entre rutas con prefetching automático.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Reemplaza &lt;a&gt; para navegación interna sin recargar la página.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Client-side navigation:</strong> No recarga la página</li>
          <li><strong>Prefetching:</strong> Precarga páginas en background</li>
          <li><strong>Scroll to top:</strong> Automático en navegación</li>
          <li><strong>Preserva scroll:</strong> Con opción scroll={`{false}`}</li>
          <li><strong>Shallow routing:</strong> Cambia URL sin re-fetch</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Props principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>href:</strong> Ruta de destino (string o object)</li>
          <li><strong>prefetch:</strong> true/false (default auto)</li>
          <li><strong>replace:</strong> Reemplaza en lugar de push history</li>
          <li><strong>scroll:</strong> Control de scroll behavior</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Usa Link para todas las navegaciones internas. Solo usa &lt;a&gt; para links externos.
        </p>
      </div>
    </div>
  );
}
