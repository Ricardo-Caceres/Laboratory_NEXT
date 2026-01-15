'use client';

export function MicroFrontendsDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Micro Frontends</strong> divide una aplicación frontend en piezas más pequeñas e independientes.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Ventajas</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Equipos independientes trabajando en paralelo</li>
          <li>Deploy independiente de cada micro frontend</li>
          <li>Tecnologías diferentes en cada parte</li>
          <li>Escalabilidad de equipos</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Implementaciones</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Module Federation (Webpack 5)</li>
          <li>iframe-based</li>
          <li>Web Components</li>
          <li>Single-SPA</li>
        </ul>
      </section>
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>⚠️ Advertencia:</strong> Agrega complejidad significativa. Solo para organizaciones muy grandes.
        </p>
      </div>
    </div>
  );
}
