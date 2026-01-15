import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function RenderPropsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Render Props Pattern"
        description="🎨 **Render Props Pattern** - El puente entre HOCs y Hooks que democratizó la compartición de lógica en React

El patrón de Render Props es una técnica elegante y poderosa para compartir código entre componentes de React utilizando una prop cuya función es renderizar elementos. En lugar de pasar un componente ya renderizado o envolver con un HOC, pasas una FUNCIÓN que devuelve JSX, dándote control total sobre el renderizado mientras compartes lógica compleja.

**🎯 ¿Qué problema resuelve?**
Imagina que tienes lógica reutilizable (tracking de mouse, data fetching, form state) que necesitas en múltiples componentes pero cada uno la renderiza diferente. HOCs te fuerzan a una estructura rígida. Render Props te dan flexibilidad total: Te doy los datos, tú decides cómo mostrarlos.

**⚙️ ¿Cómo funciona?**
En este ejemplo, el componente Mouse no renderiza nada por sí mismo - es un componente lógico. Rastrea la posición del mouse y pasa esos datos a través de su prop render. El componente MouseTracker utiliza esta prop para definir exactamente cómo quiere mostrar esa posición, desacoplando completamente la lógica (tracking) de la presentación (visualización).

**Patrón típico:**
<code>&lt;DataProvider render={data =&gt; &lt;YourCustomUI data={data} /&gt;} /&gt;</code>

**✨ Beneficios Clave:**
- **🎭 Máxima Flexibilidad:** El componente consumidor tiene control ABSOLUTO sobre qué y cómo renderizar. Zero restricciones.
- **♻️ Reutilización Sin Acoplamiento:** La lógica está completamente desacoplada de la presentación. Un componente, infinitas representaciones.
- **🔍 Transparencia:** A diferencia de HOCs, puedes ver exactamente qué se está pasando. No hay magia oculta en wrappers.
- **🧩 Composición Natural:** Se combina perfectamente con otros componentes y patrones sin crear wrapper hell.
- **💉 Dependency Injection:** Es esencialmente inyección de dependencias para el renderizado. El componente padre inyecta la estrategia de renderizado.
- **🎯 Props Explícitas:** Los datos fluyen de forma explícita y visible, no como props mágicamente inyectadas por HOCs.

**🏢 Casos de Uso Reales:**
- **React Router v4-v5:** &lt;Route render={({ match }) =&gt; &lt;Component match={match} /&gt;} /&gt;
- **Formik (antes de Hooks):** &lt;Formik render={formikProps =&gt; &lt;Form {...formikProps} /&gt;} /&gt;
- **React Motion:** &lt;Motion render={interpolatedStyle =&gt; &lt;div style={interpolatedStyle} /&gt;} /&gt;
- **Downshift:** Biblioteca de accesibilidad que usa render props extensivamente
- **React Apollo (GraphQL):** &lt;Query query={QUERY} render={({ data }) =&gt; &lt;View data={data} /&gt;} /&gt;

**🎨 Variantes del Patrón:**
1. **Render Prop Clásica:** <code>&lt;Mouse render={mouse =&gt; &lt;Display {...mouse} /&gt;} /&gt;</code>
2. **Children as Function:** <code>&lt;Mouse&gt;{mouse =&gt; &lt;Display {...mouse} /&gt;}&lt;/Mouse&gt;</code>
3. **Named Function Props:** <code>&lt;DataFetcher renderLoading={() =&gt; &lt;Spinner /&gt;} renderSuccess={data =&gt; &lt;List data={data} /&gt;} /&gt;</code>

**⚠️ Consideraciones de Performance:**
- **Cuidado con inline functions:** <code>render={() =&gt; &lt;Component /&gt;}</code> crea nueva función cada render
- **Solución:** Extrae a una función estable o usa useCallback (en el consumidor)
- **Pure Components:** Los componentes que usan render props pueden romper PureComponent si no se memorizan

**🆚 Render Props vs Hooks:**
En 2024, Custom Hooks han ganado popularidad porque:
- ✅ Hooks: Código más limpio, no requieren JSX anidado, mejor TypeScript inference
- ✅ Render Props: Útiles cuando necesitas renderizado condicional complejo, o composición visual explícita

**🔥 Tips Pro:**
- Usa TypeScript genéricos para type-safe render props
- Considera proporcionar tanto render prop como hook para máxima flexibilidad
- Nombre tus render props descriptivamente: renderItem, renderHeader, renderEmpty
- Documenta claramente qué props recibe la render function

**💡 Cuándo usar Render Props en 2024:**
1. **Necesitas control visual explícito:** Cuando el consumidor debe decidir exactamente qué renderizar
2. **Múltiples puntos de renderizado:** renderHeader, renderBody, renderFooter
3. **Bibliotecas UI:** Cuando construyes componentes headless que otros estilizarán
4. **Migración gradual:** Transición de código legacy sin refactorizar todo a Hooks

**🧠 Concepto Mental:**
Piensa en Render Props como Hollywood Principle - Don't call us, we'll call you. El componente te llama con datos, tú decides qué hacer con ellos."
        codeContent={[
          {
            filePath: 'patterns/render-props-basic.tsx',
            content: `// Render Props básico - Mouse Tracker
import { useState, useEffect } from 'react';

// Componente que proporciona lógica de mouse tracking
function Mouse({ render }: { render: (mouse: { x: number; y: number }) => JSX.Element }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // El componente delega el renderizado al consumidor
  return render(position);
}

// Uso - control total sobre cómo mostrar los datos
function App() {
  return (
    <div>
      <Mouse 
        render={({ x, y }) => (
          <div>Mouse position: {x}, {y}</div>
        )} 
      />
    </div>
  );
}

// ✨ La lógica de tracking está separada de la presentación
// ✨ Puedes usar Mouse con diferentes UIs`,
          },
          {
            filePath: 'patterns/render-props-children.tsx',
            content: `// Children as Function - Variante más común
import { useState, useEffect } from 'react';

type MousePosition = { x: number; y: number };

function Mouse({ children }: { children: (pos: MousePosition) => JSX.Element }) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return children(position);
}

// Uso - sintaxis más limpia
function App() {
  return (
    <Mouse>
      {({ x, y }) => (
        <div style={{ 
          position: 'absolute', 
          left: x, 
          top: y,
          transform: 'translate(-50%, -50%)'
        }}>
          📍
        </div>
      )}
    </Mouse>
  );
}

// ✨ Sintaxis más intuitiva que render prop
// ✨ Mismo poder, mejor DX`,
          },
          {
            filePath: 'patterns/render-props-data-fetching.tsx',
            content: `// Render Props para Data Fetching
import { useState, useEffect } from 'react';

type DataFetcherProps<T> = {
  url: string;
  renderLoading?: () => JSX.Element;
  renderError?: (error: Error) => JSX.Element;
  renderSuccess: (data: T) => JSX.Element;
};

function DataFetcher<T>({ 
  url, 
  renderLoading, 
  renderError, 
  renderSuccess 
}: DataFetcherProps<T>) {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    data: T | null;
  }>({ loading: true, error: null, data: null });
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ loading: false, error: null, data }))
      .catch(error => setState({ loading: false, error, data: null }));
  }, [url]);
  
  if (state.loading) return renderLoading?.() || <div>Loading...</div>;
  if (state.error) return renderError?.(state.error) || <div>Error!</div>;
  if (state.data) return renderSuccess(state.data);
  return null;
}

// Uso con múltiples render props
<DataFetcher
  url="/api/users"
  renderLoading={() => <Spinner />}
  renderError={(error) => <ErrorMessage error={error} />}
  renderSuccess={(users) => <UserList users={users} />}
/>

// ✨ Múltiples puntos de customización
// ✨ Cada estado puede renderizarse diferente`,
          },
          {
            filePath: 'patterns/render-props-vs-hooks.tsx',
            content: `// Render Props vs Custom Hook - Comparación

// ❌ Approach con Render Props
function MouseWithRenderProp() {
  return (
    <Mouse>
      {({ x, y }) => (
        <div>
          <p>Mouse: {x}, {y}</p>
        </div>
      )}
    </Mouse>
  );
}

// ✅ Approach con Custom Hook
function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return position;
}

function MouseWithHook() {
  const { x, y } = useMouse();
  return <div>Mouse: {x}, {y}</div>;
}

// 🎯 Cuándo usar cada uno:
// Render Props: Necesitas control sobre el renderizado visual
// Custom Hooks: Solo necesitas la lógica/datos

// 💡 Mejor de ambos mundos: Ofrece ambos!
function Mouse({ children }: { children?: (pos: MousePosition) => JSX.Element }) {
  const position = useMouse(); // Hook interno
  return children ? children(position) : null;
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
  title: 'Render Props Pattern | React Patterns',
  description: 'Patrón de Render Props - Compartir código entre componentes usando una prop cuya función es renderizar elementos'
};