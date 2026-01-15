import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function CompoundComponentsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Compound Components Pattern"
        description="🧩 **Compound Components Pattern** - El patrón arquitectónico que revoluciona la composición de componentes en React

El patrón de Componentes Compuestos es una de las técnicas más poderosas y elegantes para diseñar APIs de componentes en React. Permite crear familias de componentes que trabajan juntos de manera armoniosa, compartiendo estado implícito a través de Context API, mientras mantienen una API externa limpia, intuitiva y altamente flexible.

**🎯 ¿Qué problema resuelve?**
Cuando construyes componentes complejos como Accordions, Tabs, Dropdowns o Modals, típicamente te enfrentas a un dilema: ¿Pasas 50 props para cada caso de uso posible, o creas múltiples componentes específicos? Los Compound Components ofrecen una tercera vía superior: una API declarativa y componible.

**⚙️ ¿Cómo funciona?**
En este ejemplo, el componente 'Accordion' es un componente compuesto que expone 'Accordion.Item', 'Accordion.Header' y 'Accordion.Body'. Estos subcomponentes se comunican implícitamente a través de un contexto compartido ('AccordionContext'), coordinando su comportamiento (qué elemento está abierto) sin pasar props explícitamente a través de múltiples niveles. El usuario del componente nunca ve esta complejidad - solo ve una API intuitiva.

**✨ Beneficios Clave:**
- **🎨 Flexibilidad Total:** Los consumidores tienen control absoluto sobre la estructura, orden y presentación de los subcomponentes. Puedes reordenar, estilizar o incluso omitir subcomponentes según tus necesidades.
- **🔒 Encapsulación:** La lógica interna (estado, eventos, coordinación) está completamente encapsulada. Los cambios internos no rompen la API externa.
- **♻️ Reutilización Avanzada:** Los subcomponentes pueden ser reutilizados en diferentes contextos, combinados de formas inesperadas, o envueltos con estilos personalizados.
- **📖 API Intuitiva:** La API se lee como HTML semántico. Es auto-documentada y fácil de entender: <code>&lt;Accordion&gt;&lt;Accordion.Item&gt;&lt;Accordion.Header&gt;...&lt;/Accordion.Header&gt;&lt;/Accordion.Item&gt;&lt;/Accordion&gt;</code>
- **🧪 Testabilidad:** Cada subcomponente puede ser testeado de forma aislada, y la lógica compartida está centralizada.
- **🎭 Inversion of Control:** El consumidor controla el renderizado, pero el componente gestiona la complejidad interna.

**🏢 Casos de Uso Reales:**
- Design Systems: Componentes UI complejos (React Aria, Radix UI, Headless UI)
- Form Libraries: React Hook Form, Formik
- Data Tables: TanStack Table
- Navigation: React Router (&lt;Routes&gt;&lt;Route /&gt;&lt;/Routes&gt;)
- Layouts: Frameworks como Chakra UI, Material UI

**⚡ Cuándo NO usar este patrón:**
- Componentes simples con 2-3 props
- Cuando la relación entre componentes no es clara
- Si necesitas compatibilidad con frameworks que no soportan Context

**🔥 Tips Pro:**
- Combina con TypeScript para type-safe APIs
- Usa displayName para mejor debugging
- Considera agregar validación de children con React.Children
- Documenta qué subcomponentes son requeridos vs opcionales"
        codeContent={[
          {
            filePath: 'patterns/compound-accordion.tsx',
            content: `// Compound Components Pattern - Accordion Example
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Context compartido entre componentes
type AccordionContextType = {
  openItem: string | null;
  toggleItem: (label: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

// 2. Hook para acceder al contexto
function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Must be used within Accordion');
  return context;
}

// 3. Componente principal
function Accordion({ children }: { children: ReactNode }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const toggleItem = (label: string) => {
    setOpenItem(prev => prev === label ? null : label);
  };
  
  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

// 4. Subcomponentes que usan el contexto
function Item({ children }: { children: ReactNode }) {
  return <div className="accordion-item">{children}</div>;
}

function Header({ children, label }: { children: ReactNode; label: string }) {
  const { toggleItem, openItem } = useAccordion();
  const isOpen = openItem === label;
  
  return (
    <button onClick={() => toggleItem(label)}>
      {children}
      <span>{isOpen ? '▼' : '▶'}</span>
    </button>
  );
}

function Body({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  return openItem === label ? <div>{children}</div> : null;
}

// 5. API compuesta
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;`,
          },
          {
            filePath: 'patterns/compound-usage.tsx',
            content: `// Uso del Compound Component
import Accordion from './Accordion';

function MyPage() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header label="section1">
          🎨 What is Compound Components?
        </Accordion.Header>
        <Accordion.Body label="section1">
          Compound Components is a React pattern where components 
          work together to form a complete UI.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item>
        <Accordion.Header label="section2">
          ⚡ Benefits
        </Accordion.Header>
        <Accordion.Body label="section2">
          Flexible API, better separation of concerns, 
          and improved code reusability.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

// ✨ Ventajas:
// - API declarativa y semántica
// - Estado compartido sin prop drilling
// - Flexibilidad total en composición
// - Cada parte es reutilizable`,
          },
          {
            filePath: 'patterns/compound-tabs.tsx',
            content: `// Otro ejemplo: Tabs con Compound Components
import { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (id: string) => void;
}>(null!);

function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button 
      onClick={() => setActiveTab(id)}
      className={activeTab === id ? 'active' : ''}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === id ? <div>{children}</div> : null;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Uso
<Tabs>
  <Tabs.List>
    <Tabs.Tab id="tab1">Home</Tabs.Tab>
    <Tabs.Tab id="tab2">Profile</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="tab1">Home content</Tabs.Panel>
  <Tabs.Panel id="tab2">Profile content</Tabs.Panel>
</Tabs>`,
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
  title: 'Compound Components Pattern | React Patterns',
  description: 'Patrón de Componentes Compuestos - Familia de componentes que trabajan juntos compartiendo estado implícito a través de Context API'
};
