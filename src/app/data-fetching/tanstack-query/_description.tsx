'use client';

export function TanstackQueryDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">TanStack Query</strong> (React Query) es la biblioteca líder para fetching, caching y sincronización de datos en React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Maneja server state de forma declarativa con caching automático, background updates y más.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Caching automático:</strong> Cachea datos y los reutiliza</li>
          <li><strong>Background refetch:</strong> Actualiza datos automáticamente</li>
          <li><strong>Stale-while-revalidate:</strong> Muestra cache mientras revalida</li>
          <li><strong>Parallel queries:</strong> Múltiples queries simultáneas</li>
          <li><strong>Mutations:</strong> Maneja POST/PUT/DELETE con optimistic updates</li>
          <li><strong>DevTools:</strong> Inspector visual de queries</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Hooks principales
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useQuery</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Fetch datos con caching automático y re-fetch inteligente.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useMutation</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Maneja operaciones que modifican datos (POST, PUT, DELETE).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useInfiniteQuery</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Para paginación infinita y load more patterns.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas vs fetch manual
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>No más loading states manuales</li>
          <li>Deduplicación automática de requests</li>
          <li>Retry automático en errores</li>
          <li>Garbage collection de datos no usados</li>
          <li>Window focus refetching</li>
          <li>Offline support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Apps con mucho fetching de APIs</li>
          <li>Dashboards con datos en tiempo real</li>
          <li>E-commerce (productos, cart, checkout)</li>
          <li>Social media feeds</li>
          <li>Cualquier app que consuma REST/GraphQL APIs</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🚀 Estándar de la industria:</strong> TanStack Query es la forma moderna de manejar server state en React. Elimina toneladas de boilerplate.
        </p>
      </div>
    </div>
  );
}
