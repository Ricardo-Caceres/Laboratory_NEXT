import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function PropsGetterPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Props Getter Pattern"
        description="🎁 **Props Getter Pattern** - Simplifica prop spreading con funciones getter

El Props Getter Pattern proporciona funciones que retornan props pre-configuradas para elementos específicos. Popularizado por Downshift, simplifica el uso de componentes complejos permitiendo a usuarios aplicar props correctas sin conocer todos los detalles internos.

**🎯 ¿Cuándo usarlo?**
- **Componentes complejos** con muchas props interdependientes
- **Accessibility**: Props ARIA correctas automáticamente
- **Event handlers**: Múltiples handlers que deben coordinarse
- **Composition**: Usuario controla renderizado pero no implementación
- **Librerías**: Exponer API simple para casos complejos

**🔑 Conceptos Clave:**
- **Getter functions**: Funciones que retornan objetos de props
- **Prop merging**: Combina props del usuario con las del getter
- **Encapsulation**: Oculta complejidad interna
- **Flexibility**: Usuario controla qué elementos renderizar

**📐 Estructura:**
\`\`\`tsx
function useToggle() {
  const [on, setOn] = useState(false);
  
  const getTogglerProps = (props = {}) => ({
    'aria-pressed': on,
    onClick: () => setOn(!on),
    ...props, // User props override
  });
  
  return { on, getTogglerProps };
}

// Usage
function App() {
  const { on, getTogglerProps } = useToggle();
  
  return (
    <button {...getTogglerProps()}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
}
\`\`\`

**✅ Ventajas:**
- 🎯 **Simple API**: Usuario no necesita conocer detalles
- ♿ **Accessibility**: Props ARIA incluidas automáticamente
- 🔄 **Prop merging**: Usuario puede override defaults
- 🧩 **Flexible**: Usuario controla renderizado
- 📦 **Encapsulated**: Lógica compleja oculta

**💡 Casos de Uso Reales:**
- **Downshift**: `getInputProps()`, `getMenuProps()`, `getItemProps()`
- **React Table**: `getTableProps()`, `getRowProps()`, `getCellProps()`
- **React Hook Form**: `register()` retorna props para inputs
- **Reach UI**: Múltiples getters para componentes accesibles

**🆚 Props Getter vs Props directo:**
\`\`\`tsx
// ❌ Sin getter (usuario debe saber todo)
<button
  aria-pressed={on}
  onClick={toggle}
  onKeyDown={handleKeyDown}
  role=\"switch\"
  tabIndex={0}
>
  Toggle
</button>

// ✅ Con getter (simple y correcto)
<button {...getTogglerProps()}>
  Toggle
</button>
\`\`\`

**🔥 Best Practices:**
1. **Merge user props**: Permitir overrides
2. **Spread user props last**: `{ ...defaults, ...userProps }`
3. **Compose event handlers**: Ejecutar ambos (tuyos + usuario)
4. **Document getters**: Qué props retorna cada getter
5. **TypeScript**: Tipar props retornadas

**Prop composition pattern:**
\`\`\`tsx
function composeEventHandlers(ourHandler, theirHandler) {
  return (event) => {
    ourHandler?.(event);
    if (!event.defaultPrevented) {
      theirHandler?.(event);
    }
  };
}

const getTogglerProps = ({ onClick, ...props } = {}) => ({
  'aria-pressed': on,
  onClick: composeEventHandlers(toggle, onClick),
  ...props
});
\`\`\`

**Ejemplo del código:**
Hook `useToggle` con `getTogglerProps()` que retorna todas las props necesarias para un toggle button accesible."
        codeContent={[
          {
            filePath: 'patterns/props-getter-basic.tsx',
            content: `// Props Getter Pattern - Basic
import { useState } from 'react';

function useToggle(initialState = false) {
  const [on, setOn] = useState(initialState);
  
  const toggle = () => setOn(!on);
  
  // Getter function returns props for toggler element
  const getTogglerProps = (props = {}) => ({
    'aria-pressed': on,
    onClick: toggle,
    ...props, // User props can override
  });
  
  return {
    on,
    toggle,
    getTogglerProps
  };
}

// Usage - User controls rendering
function App() {
  const { on, getTogglerProps } = useToggle();
  
  return (
    <div>
      <button {...getTogglerProps()}>
        {on ? '🔆 ON' : '🌙 OFF'}
      </button>
      
      {/* User can override props */}
      <button {...getTogglerProps({ 
        className: 'custom-class',
        onClick: () => console.log('Custom click!')
      })}>
        Custom Toggle
      </button>
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/props-getter-advanced.tsx',
            content: `// Advanced: Multiple Getters with Event Composition
import { useState, useRef } from 'react';

// Compose multiple event handlers
function composeEventHandlers(...handlers: Array<(e: any) => void>) {
  return (event: any) => {
    handlers.forEach(handler => {
      if (handler && !event.defaultPrevented) {
        handler(event);
      }
    });
  };
}

function useMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const getMenuButtonProps = ({ onClick, ...props } = {}) => ({
    ref: buttonRef,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': isOpen,
    onClick: composeEventHandlers(
      () => setIsOpen(!isOpen),
      onClick
    ),
    ...props
  });
  
  const getMenuProps = (props = {}) => ({
    role: 'menu',
    'aria-labelledby': buttonRef.current?.id,
    hidden: !isOpen,
    ...props
  });
  
  const getItemProps = ({ index, onClick, ...props } = {}) => ({
    role: 'menuitem',
    'aria-selected': highlightedIndex === index,
    onClick: composeEventHandlers(
      () => {
        setIsOpen(false);
        setHighlightedIndex(index);
      },
      onClick
    ),
    onMouseEnter: () => setHighlightedIndex(index),
    ...props
  });
  
  return {
    isOpen,
    highlightedIndex,
    getMenuButtonProps,
    getMenuProps,
    getItemProps
  };
}

// Usage
function DropdownMenu() {
  const { getMenuButtonProps, getMenuProps, getItemProps } = useMenu();
  
  return (
    <div>
      <button {...getMenuButtonProps()}>
        Menu
      </button>
      
      <ul {...getMenuProps()}>
        <li {...getItemProps({ index: 0 })}>Item 1</li>
        <li {...getItemProps({ index: 1 })}>Item 2</li>
        <li {...getItemProps({ index: 2 })}>Item 3</li>
      </ul>
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/props-getter-typescript.tsx',
            content: `// TypeScript Props Getter
import { useState, ButtonHTMLAttributes } from 'react';

interface UseToggleReturn {
  on: boolean;
  toggle: () => void;
  getTogglerProps: <T extends HTMLElement = HTMLButtonElement>(
    props?: ButtonHTMLAttributes<T>
  ) => ButtonHTMLAttributes<T> & { 'aria-pressed': boolean };
}

function useToggle(initialState = false): UseToggleReturn {
  const [on, setOn] = useState(initialState);
  
  const toggle = () => setOn(!on);
  
  const getTogglerProps = <T extends HTMLElement = HTMLButtonElement>(
    props: ButtonHTMLAttributes<T> = {}
  ) => ({
    'aria-pressed': on,
    onClick: (e: React.MouseEvent<T>) => {
      toggle();
      props.onClick?.(e as any);
    },
    ...props,
  });
  
  return { on, toggle, getTogglerProps };
}

// Usage with full type safety
function TypedToggle() {
  const { on, getTogglerProps } = useToggle();
  
  return (
    <button {...getTogglerProps({ 
      className: 'btn',
      disabled: false,
      // TypeScript ensures these are valid button props
    })}>
      {on ? 'ON' : 'OFF'}
    </button>
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
  title: 'Props Getter Pattern | Design Patterns',
  description: 'Learn the Props Getter pattern for easier prop spreading and composition',
};
