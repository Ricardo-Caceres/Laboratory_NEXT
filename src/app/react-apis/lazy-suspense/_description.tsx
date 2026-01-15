'use client';

export function LazySuspenseDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">lazy + Suspense</strong> permite code-splitting y carga diferida de componentes React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Divide tu bundle en chunks más pequeños que se cargan solo cuando se necesitan.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">React.lazy</h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Carga dinámicamente un componente con import() dinámico:
        </p>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm">
{`const LazyComponent = lazy(() => import('./HeavyComponent'));`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Suspense</h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Muestra fallback mientras el componente lazy se carga:
        </p>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Ventajas</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Reduce bundle inicial significativamente</li>
          <li>Faster initial page load</li>
          <li>Mejor performance percibida</li>
          <li>Carga bajo demanda (rutas, modales, tabs)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Casos de uso</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Rutas que no se visitan frecuentemente</li>
          <li>Modales/Dialogs (solo cargar cuando se abren)</li>
          <li>Tabs (cargar contenido del tab activo)</li>
          <li>Componentes pesados (charts, editors)</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🚀 Best Practice:</strong> En Next.js usa dynamic() que combina lazy + Suspense automáticamente con SSR support.
        </p>
      </div>
    </div>
  );
}
