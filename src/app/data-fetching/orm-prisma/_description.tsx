'use client';

export function OrmPrismaDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Prisma ORM</strong> es un ORM moderno de próxima generación para Node.js y TypeScript.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Proporciona type-safety completo, migraciones automáticas y una DX excepcional.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Type-safe queries:</strong> TypeScript end-to-end</li>
          <li><strong>Auto-completion:</strong> IntelliSense en queries</li>
          <li><strong>Migraciones:</strong> Schema migrations automáticas</li>
          <li><strong>Prisma Studio:</strong> GUI visual para tu database</li>
          <li><strong>Multi-database:</strong> PostgreSQL, MySQL, SQLite, MongoDB</li>
          <li><strong>Relations:</strong> Manejo fácil de relaciones</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes de Prisma
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Prisma Schema</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Define tu modelo de datos en un archivo declarativo simple.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Prisma Client</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Query builder type-safe auto-generado desde tu schema.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Prisma Migrate</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Sistema de migraciones declarativo y versionado.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas vs SQL directo
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Type-safety completo elimina errores runtime</li>
          <li>No más SQL strings vulnerables</li>
          <li>Auto-completion acelera desarrollo</li>
          <li>Migraciones manejadas automáticamente</li>
          <li>Mejor developer experience</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Integración con Next.js
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Prisma es perfecto para Next.js API Routes y Server Actions:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Usa Prisma Client en Server Components</li>
          <li>Queries en API Routes</li>
          <li>Server Actions con Prisma</li>
          <li>Edge-compatible con Prisma Accelerate</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Recomendado:</strong> Prisma es el ORM preferido para proyectos Next.js modernos. Combina perfecto con TanStack Query.
        </p>
      </div>
    </div>
  );
}
