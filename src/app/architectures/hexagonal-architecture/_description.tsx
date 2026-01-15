'use client';

export function HexagonalArchitectureDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Hexagonal Architecture</strong> (Ports and Adapters) aísla la lógica de negocio del mundo exterior.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Propuesta por Alistair Cockburn, permite que la aplicación funcione igual sin importar cómo se ejecute.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Conceptos clave
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Hexágono (Core)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              La lógica de negocio. Independiente de frameworks, UI y DB.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Ports (Interfaces)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Contratos que definen cómo el mundo exterior interactúa con el core.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Adapters (Implementaciones)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Implementaciones concretas de los ports. REST API, GraphQL, UI, DB.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Tipos de Ports
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Primary/Driving Ports:</strong> Lo que usa el core (Casos de uso, Servicios)</li>
          <li><strong>Secondary/Driven Ports:</strong> Lo que el core necesita (Repositorios, APIs externas)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Lógica de negocio completamente aislada</li>
          <li>Fácil de testear con mocks</li>
          <li>Cambiar tecnologías sin afectar el core</li>
          <li>Múltiples adapters para un mismo port</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Hexagonal Architecture es similar a Clean Architecture pero enfatiza más la inversión de dependencias mediante ports y adapters.
        </p>
      </div>
    </div>
  );
}
