import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function UIFundamentalsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="UI Fundamentals"
        description="**User Interface (UI)** es el punto de interacción visual entre el usuario y el sistema. Todo front-end developer debe dominar estos fundamentos.

**Principios Fundamentales de UI:**

**1. Visual Hierarchy (Jerarquía Visual)**
- Guía el ojo del usuario a través del contenido
- Usa tamaño, color, espaciado y contraste
- El elemento más importante debe ser el más prominente

**2. Color Theory (Teoría del Color)**
- **60-30-10 Rule**: 60% color dominante, 30% secundario, 10% acento
- **Contraste**: Mínimo 4.5:1 para texto (WCAG AA)
- **Psicología del color**: Rojo (urgencia), Azul (confianza), Verde (éxito)

**3. Typography (Tipografía)**
- **Jerarquía**: H1 > H2 > H3 > Body > Caption
- **Legibilidad**: 45-75 caracteres por línea
- **Line Height**: 1.5-1.6 para texto body
- **Font Pairing**: Máximo 2-3 familias tipográficas

**4. Spacing & Layout**
- **8pt Grid System**: Múltiplos de 8 (8, 16, 24, 32, 48, 64)
- **White Space**: El espacio vacío es tan importante como el contenido
- **Proximity**: Elementos relacionados deben estar cerca

**5. Consistency (Consistencia)**
- Componentes reutilizables
- Patrones de diseño coherentes
- Comportamientos predecibles

**6. Feedback Visual**
- Estados: Default, Hover, Active, Focus, Disabled, Error
- Transiciones suaves (200-300ms)
- Animaciones con propósito

**Reglas de Oro del UI:**
- **F-Pattern**: Usuarios leen en forma de F
- **Z-Pattern**: Para layouts más visuales
- **Above the Fold**: Lo importante debe verse sin scroll
- **Thumb Zone**: En móvil, CTAs en área alcanzable con pulgar
- **Gestalt Principles**: Proximidad, similitud, continuidad, cierre

**Sistemas de Diseño Populares:**
- Material Design (Google)
- Human Interface Guidelines (Apple)
- Fluent Design (Microsoft)
- Carbon Design System (IBM)
- Ant Design
- Chakra UI
- Tailwind UI

**Herramientas Esenciales:**
- Figma (diseño y prototipado)
- Adobe XD
- Sketch
- InVision
- Zeplin (handoff diseño-desarrollo)"
        codeContent={[
          {
            filePath: 'hierarchy/visual-hierarchy.tsx',
            content: `// Jerarquía Visual: Guiar la atención del usuario

export function VisualHierarchyExample() {
  return (
    <article className="max-w-2xl mx-auto p-6">
      {/* Nivel 1: Hero / Título principal */}
      <h1 className="text-4xl font-bold mb-2">
        Título Principal de la Página
      </h1>
      
      {/* Nivel 2: Subtítulo */}
      <p className="text-xl text-gray-600 mb-6">
        Un subtítulo que complementa el título principal
      </p>
      
      {/* Nivel 3: Sección */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Sección Importante
        </h2>
        
        {/* Nivel 4: Contenido principal */}
        <p className="text-base leading-relaxed mb-4">
          Este es el contenido principal. Debe ser fácil de leer con 
          suficiente espacio entre líneas y un tamaño de fuente cómodo.
        </p>
        
        {/* Nivel 5: Subsección */}
        <h3 className="text-lg font-medium mb-2">
          Subsección
        </h3>
        
        <p className="text-base leading-relaxed">
          Más detalles sobre la subsección.
        </p>
      </section>
      
      {/* Call to Action - Debe destacar */}
      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
          Acción Principal
        </button>
        <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          Acción Secundaria
        </button>
      </div>
      
      {/* Información secundaria - Menos prominente */}
      <p className="text-sm text-gray-500 mt-6">
        * Información adicional o disclaimer en texto pequeño
      </p>
    </article>
  );
}`,
          },
          {
            filePath: 'color/color-system.tsx',
            content: `// Sistema de colores consistente

export const colorSystem = {
  // Colores primarios (60%)
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Base
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Colores secundarios (30%)
  secondary: {
    500: '#6b7280',  // Grises para texto y fondos
  },
  
  // Colores de acento (10%)
  accent: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Escala de grises
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// ❌ MAL - Colores sin sistema
export function BadColorUsage() {
  return (
    <div style={{ backgroundColor: '#3498db' }}>
      <button style={{ backgroundColor: '#e74c3c' }}>Click</button>
      <p style={{ color: '#2ecc71' }}>Texto</p>
    </div>
  );
}

// ✅ BIEN - Sistema de colores consistente
export function GoodColorUsage() {
  return (
    <div className="bg-gray-50">
      <button className="bg-primary-600 hover:bg-primary-700 text-white">
        Click
      </button>
      <p className="text-gray-700">Texto con buen contraste</p>
      <div className="bg-accent-success text-white">
        ✓ Operación exitosa
      </div>
    </div>
  );
}

// 60-30-10 Rule en práctica
export function ColorBalanceExample() {
  return (
    <div className="min-h-screen bg-gray-50">  {/* 60% - Dominante */}
      <header className="bg-white border-b">  {/* 30% - Secundario */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">  {/* 10% - Acento */}
            Login
          </button>
        </nav>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">  {/* 60% - Dominante */}
        <div className="bg-white rounded-lg p-6">  {/* 30% - Secundario */}
          <h1>Contenido</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">  {/* 10% - Acento */}
            Call to Action
          </button>
        </div>
      </main>
    </div>
  );
}`,
          },
          {
            filePath: 'typography/type-scale.tsx',
            content: `// Escala tipográfica consistente

// Type Scale: Sistema de tamaños de fuente
export const typeScale = {
  // Headings
  h1: 'text-4xl font-bold leading-tight',      // 36px
  h2: 'text-3xl font-bold leading-tight',      // 30px
  h3: 'text-2xl font-semibold leading-snug',   // 24px
  h4: 'text-xl font-semibold leading-snug',    // 20px
  h5: 'text-lg font-medium leading-normal',    // 18px
  h6: 'text-base font-medium leading-normal',  // 16px
  
  // Body
  bodyLarge: 'text-lg leading-relaxed',        // 18px, line-height 1.75
  body: 'text-base leading-relaxed',           // 16px, line-height 1.75
  bodySmall: 'text-sm leading-normal',         // 14px, line-height 1.5
  
  // Captions
  caption: 'text-xs leading-normal',           // 12px
  overline: 'text-xs uppercase tracking-wide', // 12px, uppercase
};

// ❌ MAL - Tipografía inconsistente
export function BadTypography() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', lineHeight: '1.2' }}>Título</h1>
      <h2 style={{ fontSize: '28px', lineHeight: '1.3' }}>Subtítulo</h2>
      <p style={{ fontSize: '15px', lineHeight: '1.4' }}>Texto</p>
      <small style={{ fontSize: '11px' }}>Pequeño</small>
    </div>
  );
}

// ✅ BIEN - Sistema tipográfico consistente
export function GoodTypography() {
  return (
    <article className="max-w-2xl mx-auto">
      <h1 className={typeScale.h1}>
        Arquitectura de Software Moderna
      </h1>
      
      <p className={\`\${typeScale.bodyLarge} text-gray-600 mt-2\`}>
        Una introducción a los patrones arquitectónicos más importantes
      </p>
      
      <section className="mt-8">
        <h2 className={typeScale.h2}>
          Microservicios
        </h2>
        
        <p className={\`\${typeScale.body} mt-4\`}>
          Los microservicios son un enfoque arquitectónico donde una aplicación 
          se estructura como una colección de servicios pequeños y autónomos.
          Cada servicio es independiente y se comunica mediante APIs bien definidas.
        </p>
        
        <h3 className={\`\${typeScale.h3} mt-6\`}>
          Ventajas
        </h3>
        
        <ul className={\`\${typeScale.body} mt-2 space-y-2\`}>
          <li>Escalabilidad independiente</li>
          <li>Tecnología heterogénea</li>
          <li>Despliegue independiente</li>
        </ul>
        
        <p className={\`\${typeScale.caption} text-gray-500 mt-4\`}>
          Última actualización: Enero 2026
        </p>
      </section>
    </article>
  );
}

// Legibilidad: Caracteres por línea
export function ReadableContent() {
  return (
    <div className="max-w-prose mx-auto">  {/* max-w-prose = ~65ch (caracteres) */}
      <p className="text-base leading-relaxed">
        La legibilidad mejora cuando las líneas tienen entre 45-75 caracteres.
        Esto reduce el esfuerzo ocular y mejora la comprensión. La clase 
        max-w-prose de Tailwind automáticamente aplica este ancho óptimo.
      </p>
    </div>
  );
}

// Font Pairing: Combinación de fuentes
export function FontPairingExample() {
  return (
    <div>
      {/* Headings: Fuente con personalidad */}
      <h1 className="font-['Inter'] font-bold text-4xl">
        Título con Inter
      </h1>
      
      {/* Body: Fuente legible */}
      <p className="font-['Georgia'] text-base leading-relaxed mt-4">
        El contenido principal usa Georgia, una fuente serif que es 
        altamente legible en textos largos y complementa bien con Inter.
      </p>
      
      {/* Código: Monospace */}
      <code className="font-['Fira_Code'] bg-gray-100 px-2 py-1 rounded text-sm">
        const example = "código";
      </code>
    </div>
  );
}`,
          },
          {
            filePath: 'spacing/spacing-system.tsx',
            content: `// Sistema de espaciado consistente (8pt grid)

// Escala de espaciado en múltiplos de 8
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
  '4xl': '8rem',  // 128px
};

// ❌ MAL - Espaciado inconsistente
export function BadSpacing() {
  return (
    <div>
      <h1 style={{ marginBottom: '13px' }}>Título</h1>
      <p style={{ marginBottom: '19px' }}>Párrafo 1</p>
      <p style={{ marginBottom: '21px' }}>Párrafo 2</p>
      <button style={{ padding: '7px 15px' }}>Click</button>
    </div>
  );
}

// ✅ BIEN - Sistema de espaciado consistente
export function GoodSpacing() {
  return (
    <div className="p-8">  {/* 64px padding */}
      <h1 className="mb-4">  {/* 32px margin-bottom */}
        Título
      </h1>
      
      <p className="mb-6">  {/* 48px margin-bottom */}
        Primer párrafo con espacio consistente.
      </p>
      
      <p className="mb-6">  {/* 48px margin-bottom */}
        Segundo párrafo con el mismo espacio.
      </p>
      
      <button className="px-6 py-3">  {/* 48px x 24px padding */}
        Click
      </button>
    </div>
  );
}

// Ley de proximidad: Elementos relacionados cerca
export function ProximityExample() {
  return (
    <div className="space-y-8">  {/* Separación entre secciones */}
      {/* Card 1 */}
      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-1">  {/* Título cerca de subtítulo */}
          John Doe
        </h3>
        <p className="text-sm text-gray-600 mb-4">  {/* Subtítulo, luego más espacio */}
          Senior Developer
        </p>
        
        <p className="text-base mb-1">  {/* Info relacionada junta */}
          Email: john@example.com
        </p>
        <p className="text-base">
          Phone: +1 234 567 890
        </p>
      </div>
      
      {/* Card 2 - Misma estructura, mismo espaciado */}
      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-1">
          Jane Smith
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Lead Designer
        </p>
        
        <p className="text-base mb-1">
          Email: jane@example.com
        </p>
        <p className="text-base">
          Phone: +1 234 567 891
        </p>
      </div>
    </div>
  );
}

// White space: El espacio vacío es diseño
export function WhiteSpaceExample() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Versión apretada - difícil de leer */}
      <div className="bg-gray-100 p-2 mb-8">
        <h2 className="text-lg mb-1">Título</h2>
        <p className="text-sm mb-1">Párrafo sin espacio suficiente.</p>
        <button className="px-2 py-1 bg-blue-600 text-white text-xs">Click</button>
      </div>
      
      {/* Versión con espacio - respira y es legible */}
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Título</h2>
        <p className="text-base leading-relaxed mb-6">
          Párrafo con espacio adecuado que permite que el contenido respire.
          El espacio en blanco guía la atención y mejora la legibilidad.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Click
        </button>
      </div>
    </div>
  );
}`,
          },
          {
            filePath: 'states/interactive-states.tsx',
            content: `// Estados interactivos: Todos los elementos clicables deben tener estados claros

'use client';

export function InteractiveStates() {
  return (
    <div className="space-y-8 p-6">
      {/* Estados de botones */}
      <section>
        <h3 className="font-semibold mb-4">Estados de Botones</h3>
        <div className="flex flex-wrap gap-4">
          {/* Default */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Default
          </button>
          
          {/* Hover - debe cambiar en hover */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Hover
          </button>
          
          {/* Active - se presiona */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded active:bg-blue-800 active:scale-95 transition-all">
            Active
          </button>
          
          {/* Focus - para navegación con teclado */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded focus:ring-4 focus:ring-blue-300 focus:outline-none">
            Focus
          </button>
          
          {/* Disabled */}
          <button 
            disabled 
            className="px-4 py-2 bg-blue-600 text-white rounded opacity-50 cursor-not-allowed"
          >
            Disabled
          </button>
          
          {/* Loading */}
          <button 
            disabled 
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2 opacity-75 cursor-wait"
          >
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading
          </button>
        </div>
      </section>
      
      {/* Estados de inputs */}
      <section>
        <h3 className="font-semibold mb-4">Estados de Inputs</h3>
        <div className="space-y-3 max-w-md">
          {/* Default */}
          <input
            type="text"
            placeholder="Default"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {/* Focus */}
          <input
            type="text"
            placeholder="Focus (click aquí)"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {/* Error */}
          <div>
            <input
              type="email"
              placeholder="Error state"
              className="w-full px-3 py-2 border-2 border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <p className="text-sm text-red-600 mt-1">Email inválido</p>
          </div>
          
          {/* Success */}
          <div>
            <input
              type="email"
              placeholder="Success state"
              value="valid@email.com"
              className="w-full px-3 py-2 border-2 border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              readOnly
            />
            <p className="text-sm text-green-600 mt-1">✓ Email válido</p>
          </div>
          
          {/* Disabled */}
          <input
            type="text"
            placeholder="Disabled"
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>
      </section>
      
      {/* Cards con estados */}
      <section>
        <h3 className="font-semibold mb-4">Cards Interactivas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer">
            <h4 className="font-medium">Hover Card</h4>
            <p className="text-sm text-gray-600">Pasa el mouse encima</p>
          </div>
          
          <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
            <h4 className="font-medium">Selected Card</h4>
            <p className="text-sm text-gray-600">Estado seleccionado</p>
          </div>
          
          <div className="border rounded-lg p-4 opacity-50 cursor-not-allowed">
            <h4 className="font-medium">Disabled Card</h4>
            <p className="text-sm text-gray-600">No disponible</p>
          </div>
        </div>
      </section>
    </div>
  );
}`,
          },
          {
            filePath: 'layout/f-pattern.tsx',
            content: `// F-Pattern: Usuarios leen en forma de F

export function FPatternLayout() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Barra horizontal superior - Primera línea de la F */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Título Principal que Capta Atención
        </h1>
        <p className="text-lg text-gray-600">
          Subtítulo o descripción importante que se lee completamente
        </p>
      </header>
      
      {/* Contenido con F-pattern */}
      <article>
        {/* Segunda barra horizontal - Segunda línea de la F */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Sección Importante
          </h2>
          <p className="leading-relaxed mb-4">
            <strong className="text-blue-600">Palabras clave al inicio</strong> captan 
            la atención. El resto del párrafo puede ser menos leído.
            Los usuarios escanean el inicio de cada párrafo buscando información relevante.
          </p>
        </section>
        
        {/* Barra vertical izquierda - Línea vertical de la F */}
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <div className="text-right font-semibold text-blue-600 pr-4 border-r-2 border-blue-600">
            <div className="mb-4">Punto 1</div>
            <div className="mb-4">Punto 2</div>
            <div className="mb-4">Punto 3</div>
            <div className="mb-4">Punto 4</div>
          </div>
          
          <div className="space-y-4">
            <p>Información sobre el punto 1. La mirada se concentra en la izquierda.</p>
            <p>Información sobre el punto 2. Menos lectura profunda.</p>
            <p>Información sobre el punto 3. Escaneo rápido.</p>
            <p>Información sobre el punto 4. Mínima atención aquí abajo.</p>
          </div>
        </div>
      </article>
      
      {/* CTA en el punto de mayor atención */}
      <div className="mt-8">
        <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
          Call to Action Principal
        </button>
      </div>
    </div>
  );
}

// Z-Pattern: Para contenido más visual / landing pages
export function ZPatternLayout() {
  return (
    <div className="min-h-screen">
      {/* Top-left a top-right - Primera línea de la Z */}
      <header className="flex justify-between items-center p-6 bg-white border-b">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#" className="hover:text-blue-600">Productos</a>
          <a href="#" className="hover:text-blue-600">Contacto</a>
        </nav>
        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Login
        </button>
      </header>
      
      {/* Diagonal: de top-right a center-left */}
      <section className="grid grid-cols-2 gap-8 p-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Producto Increíble
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Descripción que capta atención y guía hacia el centro
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg">
            Comenzar Ahora
          </button>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Imagen o Demo</span>
        </div>
      </section>
      
      {/* Bottom-left a bottom-right - Última línea de la Z */}
      <footer className="flex justify-between items-center p-6 bg-gray-100 border-t">
        <div className="text-sm text-gray-600">
          © 2026 Company
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:text-blue-600">Privacidad</a>
          <a href="#" className="text-sm hover:text-blue-600">Términos</a>
        </div>
      </footer>
    </div>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">UI Fundamentals</h2>
          <p className="mb-4">
            Principios visuales y técnicos esenciales para crear interfaces efectivas.
          </p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Checklist de UI</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Hay jerarquía visual clara?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿El contraste cumple WCAG (4.5:1 mínimo)?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿El espaciado sigue un sistema (8pt grid)?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿La tipografía es consistente?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Todos los estados interactivos están definidos?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Los CTAs destacan claramente?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Hay suficiente white space?</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Herramientas Recomendadas</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Diseño:</strong> Figma, Adobe XD, Sketch</li>
                <li><strong>Colores:</strong> Coolors, Adobe Color</li>
                <li><strong>Tipografía:</strong> Google Fonts, Font Pair</li>
                <li><strong>Iconos:</strong> Heroicons, Lucide, Phosphor</li>
                <li><strong>Contraste:</strong> WebAIM Contrast Checker</li>
                <li><strong>Inspiración:</strong> Dribbble, Behance, awwwards</li>
              </ul>
            </section>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}
