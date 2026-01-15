'use client';

export function RouterDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Next.js Router</strong> (useRouter hook) permite navegación programática y acceso a información de ruta.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Métodos principales</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>push():</strong> Navega a nueva ruta</li>
          <li><strong>replace():</strong> Navega sin agregar a history</li>
          <li><strong>back():</strong> Regresa en history</li>
          <li><strong>refresh():</strong> Refresca datos de servidor</li>
          <li><strong>prefetch():</strong> Precarga ruta manualmente</li>
        </ul>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Ideal para navegación condicional, redirects después de acciones, etc.
        </p>
      </div>
    </div>
  );
}
