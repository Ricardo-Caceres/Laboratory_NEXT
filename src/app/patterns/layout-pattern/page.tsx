import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function LayoutPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Layout Pattern"
        description="📐 **Layout Pattern** - Componentes reusables para estructurar UI

El Layout Pattern se enfoca en crear componentes reutilizables que controlan la estructura y disposición de otros componentes, sin preocuparse por su contenido específico. Usa composition con children para máxima flexibilidad.

**🎯 Tipos comunes:**
- **Grid Layout**: Sistema de rejilla responsive
- **Two/Three Column**: Layouts multi-columna
- **Card Layout**: Wrapper con estilos consistentes
- **Center Layout**: Centrado vertical/horizontal
- **Stack Layout**: Elementos apilados con spacing

**🔑 Conceptos:**
- **Children prop**: Acepta cualquier contenido
- **Composition**: Componentes dentro de componentes
- **Responsiveness**: Adapta a diferentes viewports
- **Spacing**: Control consistente de margins/padding

**Ejemplo básico:**
\`\`\`tsx
function TwoColumnLayout({ left, right }) {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

<TwoColumnLayout
  left={<Sidebar />}
  right={<Content />}
/>
\`\`\`

**Ventajas:**
- ♻️ Reutilizable en toda la app
- 🎨 UI consistente
- 📱 Responsive por defecto
- 🧩 Composable y flexible"
        codeContent={[
          {
            filePath: 'patterns/layout-examples.tsx',
            content: `// Grid Layout
function GridLayout({ children, cols = 3 }) {
  return (
    <div className={\`grid grid-cols-1 md:grid-cols-\${cols} gap-4\`}>
      {children}
    </div>
  );
}

// Two Column Layout
function TwoColumn({ left, right }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

// Card Layout
function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

// Center Layout
function Center({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

export const metadata = {
  title: 'Layout Pattern | Design Patterns',
  description: 'Learn how to create reusable layout components',
};
