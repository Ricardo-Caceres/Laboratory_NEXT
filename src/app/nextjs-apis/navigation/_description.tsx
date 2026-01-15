'use client';

export function NavigationDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-[var(--primary)]">Navigation APIs</strong> en Next.js App Router proporcionan hooks y funciones para navegación avanzada.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Hooks disponibles</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>usePathname():</strong> Obtiene ruta actual</li>
          <li><strong>useSearchParams():</strong> Lee query params</li>
          <li><strong>useParams():</strong> Lee dynamic route params</li>
          <li><strong>useRouter():</strong> Navegación programática</li>
        </ul>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Herramientas esenciales para construir navegación interactiva en App Router.
        </p>
      </div>
    </div>
  );
}
