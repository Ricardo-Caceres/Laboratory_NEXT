'use client';

export function CleanArchitectureDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Clean Architecture</strong> separa el código en capas concéntricas con dependencias que apuntan hacia adentro.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Propuesta por Robert C. Martin (Uncle Bob), maximiza independencia y testabilidad.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Las 4 capas principales
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">1. Entities (Core)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Lógica de negocio crítica. Independiente de todo. No tiene dependencias externas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">2. Use Cases (Application)</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Casos de uso específicos de la aplicación. Orquesta el flujo de datos.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">3. Interface Adapters</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Convierte datos entre formatos. Controllers, Presenters, Gateways.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">4. Frameworks & Drivers</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              UI, DB, APIs externas. React, Next.js, Axios viven aquí.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Regla de dependencia
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Las dependencias SOLO pueden apuntar hacia adentro:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Entities no conocen NADA del mundo exterior</li>
          <li>Use Cases solo conocen Entities</li>
          <li>Interface Adapters solo conocen Use Cases</li>
          <li>Frameworks pueden conocer todo</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Independiente de frameworks:</strong> Puedes cambiar React por Vue sin tocar el core</li>
          <li><strong>Testeable:</strong> Lógica de negocio 100% testeable sin UI</li>
          <li><strong>Independiente de UI:</strong> Misma lógica para web, mobile, CLI</li>
          <li><strong>Independiente de DB:</strong> Cambia PostgreSQL por MongoDB sin dolor</li>
          <li><strong>Reglas de negocio protegidas:</strong> El core nunca se contamina</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Implementación en React/Next.js
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`src/
├── domain/           # Entities + Use Cases
│   ├── entities/
│   └── useCases/
├── application/      # Interface Adapters
│   ├── repositories/
│   └── services/
├── infrastructure/   # Frameworks
│   ├── api/
│   └── database/
└── presentation/     # UI (React/Next.js)
    └── components/`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Proyectos enterprise grandes</li>
          <li>Aplicaciones de larga duración (5+ años)</li>
          <li>Lógica de negocio compleja</li>
          <li>Múltiples plataformas (web, mobile, desktop)</li>
          <li>Equipos grandes distribuidos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usar
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Proyectos pequeños o MVPs</li>
          <li>Prototipado rápido</li>
          <li>Apps CRUD simples</li>
          <li>Equipos sin experiencia en arquitectura</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Clean Architecture es el gold standard para aplicaciones enterprise. El overhead inicial se paga con creces en mantenibilidad a largo plazo.
        </p>
      </div>
    </div>
  );
}
