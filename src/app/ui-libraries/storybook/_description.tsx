'use client';

export function StorybookDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Storybook</strong> es un workshop para desarrollar componentes UI de forma aislada.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Permite visualizar, documentar y testear componentes fuera de tu aplicación.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Desarrollo aislado:</strong> Componentes sin dependencias de app</li>
          <li><strong>Stories:</strong> Múltiples estados del mismo componente</li>
          <li><strong>Addons:</strong> Accesibilidad, responsive, interactions</li>
          <li><strong>Documentación:</strong> Auto-genera docs de componentes</li>
          <li><strong>Testing visual:</strong> Snapshot y visual regression</li>
          <li><strong>Design system:</strong> Perfecto para component libraries</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Desarrollo más rápido (no navegar toda la app)</li>
          <li>Casos edge fáciles de testear</li>
          <li>Componentes más reutilizables</li>
          <li>Documentación viva y actualizada</li>
          <li>Colaboración diseño-desarrollo</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Design systems</li>
          <li>Component libraries</li>
          <li>Equipos grandes (diseñadores + developers)</li>
          <li>Testing visual sistemático</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🎨 Estándar:</strong> Storybook es usado por Airbnb, Shopify, Slack y miles de equipos para desarrollar componentes.
        </p>
      </div>
    </div>
  );
}
