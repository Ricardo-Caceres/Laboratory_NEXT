'use client';

export function ImageDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Next.js Image</strong> es un componente optimizado para servir imágenes con performance automática.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Reemplaza el tag HTML &lt;img&gt; con optimizaciones automáticas de tamaño, formato y lazy loading.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Optimizaciones automáticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Responsive:</strong> Genera múltiples tamaños automáticamente</li>
          <li><strong>WebP/AVIF:</strong> Convierte a formatos modernos</li>
          <li><strong>Lazy loading:</strong> Carga imágenes solo cuando son visibles</li>
          <li><strong>Blur placeholder:</strong> Muestra preview mientras carga</li>
          <li><strong>Previene CLS:</strong> Reserva espacio para evitar layout shift</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Props importantes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>src:</strong> Ruta local o URL remota</li>
          <li><strong>width/height:</strong> Dimensiones (required para local)</li>
          <li><strong>alt:</strong> Texto alternativo (accesibilidad)</li>
          <li><strong>priority:</strong> Desactiva lazy load para imágenes above-the-fold</li>
          <li><strong>quality:</strong> Calidad 1-100 (default 75)</li>
          <li><strong>fill:</strong> Llena el contenedor parent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas vs &lt;img&gt;
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>70% menos peso promedio de imágenes</li>
          <li>Mejor Core Web Vitals (LCP, CLS)</li>
          <li>Formatos modernos automáticos</li>
          <li>No requiere configuración manual</li>
          <li>CDN edge optimization incluido</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🚀 Usa siempre:</strong> Next.js Image en lugar de &lt;img&gt; para mejor performance automática.
        </p>
      </div>
    </div>
  );
}
