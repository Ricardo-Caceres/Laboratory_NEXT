'use client';

export function LayoutPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Layout Pattern</strong> - Organiza la estructura visual de componentes usando componentes de layout reutilizables que definen la disposición espacial sin conocer el contenido específico.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Layout Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Layout separa la lógica de disposición espacial del contenido real. Los componentes de layout son contenedores reutilizables que definen cómo se organizan sus hijos (grid, flex, stack, etc.) sin preocuparse por qué contienen específicamente.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón es fundamental en Next.js con el App Router, donde los archivos <code className="px-2 py-1 bg-gray-100 rounded text-sm">layout.tsx</code> definen la estructura compartida entre rutas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Tipos de Layout Components
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Stack:</strong> Organiza elementos vertical u horizontalmente con spacing</li>
          <li><strong>Grid:</strong> Disposición en cuadrícula responsiva</li>
          <li><strong>Sidebar:</strong> Layout de contenido con barra lateral</li>
          <li><strong>Split:</strong> Divide el espacio en paneles ajustables</li>
          <li><strong>Center:</strong> Centra contenido horizontal y verticalmente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Reutilización:</strong> Layouts consistentes en toda la aplicación</li>
          <li><strong>Separación de responsabilidades:</strong> Layout vs contenido bien separados</li>
          <li><strong>Mantenibilidad:</strong> Cambios de layout centralizados en un lugar</li>
          <li><strong>Composabilidad:</strong> Layouts se pueden anidar y combinar</li>
          <li><strong>Responsive design:</strong> Lógica de responsividad en un solo lugar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>App layouts:</strong> Estructura principal con header, sidebar, footer</li>
          <li><strong>Dashboard layouts:</strong> Grids de cards o widgets</li>
          <li><strong>Form layouts:</strong> Organización consistente de campos</li>
          <li><strong>Article layouts:</strong> Contenido con sidebars, TOC, etc.</li>
          <li><strong>Modal/Dialog layouts:</strong> Estructura reutilizable de modales</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás diferentes componentes de layout (Stack, Grid, Sidebar, Split) que puedes combinar para crear estructuras complejas. Cada layout es completamente reutilizable y acepta children arbitrarios.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> En Next.js App Router, usa <code className="px-2 py-1 bg-gray-100 rounded text-sm">layout.tsx</code> para compartir UI entre rutas, y aprovecha los layouts anidados para estructuras complejas.
        </p>
      </div>
    </div>
  );
}
