'use client';

export function LayeredArchitectureDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Layered Architecture</strong> organiza el código en capas horizontales con responsabilidades específicas.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Capas típicas</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Presentation:</strong> UI, componentes React</li>
          <li><strong>Business Logic:</strong> Casos de uso, servicios</li>
          <li><strong>Data Access:</strong> Repositorios, APIs</li>
          <li><strong>Database:</strong> Persistencia</li>
        </ul>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          La arquitectura más tradicional y simple. Ideal para comenzar proyectos estructurados.
        </p>
      </div>
    </div>
  );
}
