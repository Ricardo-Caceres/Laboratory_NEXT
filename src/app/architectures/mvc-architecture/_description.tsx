'use client';

export function MvcArchitectureDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">MVC (Model-View-Controller)</strong> separa la aplicación en tres componentes interconectados.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Los 3 componentes</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Model</h3>
            <p className="text-[var(--foreground)] opacity-90">Datos y lógica de negocio</p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">View</h3>
            <p className="text-[var(--foreground)] opacity-90">Presentación, UI</p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Controller</h3>
            <p className="text-[var(--foreground)] opacity-90">Maneja input del usuario, actualiza Model y View</p>
          </div>
        </div>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Patrón clásico adaptado a React con hooks y componentes modernos.
        </p>
      </div>
    </div>
  );
}
