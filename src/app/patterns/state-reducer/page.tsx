import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function StateReducerPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="State Reducer Pattern"
        description="⚙️ **State Reducer Pattern** - Inversion of Control para state management

El State Reducer Pattern da a los usuarios control completo sobre cómo se actualiza el estado interno de un componente, manteniendo defaults sensatos. Es el máximo nivel de control sin perder la funcionalidad del componente.

**🎯 ¿Cuándo usarlo?**
- **Máximo control**: Usuario necesita override completo de state logic
- **Custom behavior**: Casos edge que tu componente no anticipa
- **Complex components**: Toggles, dropdowns, accordions con lógica compleja
- **Inversion of control**: Usuario controla TODO el state management

**🔑 Conceptos Clave:**
- **Reducer**: Función `(state, action) => newState`
- **Default reducer**: Tu lógica default
- **User reducer**: Usuario puede override acciones específicas
- **Composition**: Combina tu reducer con el del usuario
- **Actions**: Eventos que causan cambios de estado

**📐 Estructura:**
\`\`\`tsx
const defaultReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, on: !state.on };
    default:
      return state;
  }
};

function useToggle({ reducer = defaultReducer } = {}) {
  const [state, dispatch] = useReducer(reducer, { on: false });
  
  const toggle = () => dispatch({ type: 'toggle' });
  
  return { on: state.on, toggle };
}

// User can control state transitions
const customReducer = (state, action) => {
  if (action.type === 'toggle' && state.clickCount >= 4) {
    return state; // Block toggle after 4 clicks
  }
  return defaultReducer(state, action);
};

const { on, toggle } = useToggle({ reducer: customReducer });
\`\`\`

**✅ Ventajas:**
- 🎯 **Ultimate control**: Usuario controla todo state behavior
- 🔄 **Flexible**: Override solo lo necesario
- 📦 **Encapsulated**: Defaults funcionan out-of-the-box
- 🧩 **Composable**: Combina reducers
- 🎨 **Customizable**: Casos edge específicos del usuario

**💡 Casos de Uso Reales:**
- **Downshift**: Usuario controla cómo filtra, selecciona items
- **React Table**: Control sobre sorting, filtering logic
- **Form libraries**: Custom validation logic
- **Complex UI**: Accordions, tabs con behavior específico

**🆚 State Reducer vs Control Props:**
\`\`\`tsx
// Control Props (control parcial)
<Toggle 
  on={on} 
  onToggle={setOn}
/>

// State Reducer (control total)
<Toggle 
  reducer={(state, action) => {
    // Control TODA la lógica de state
    if (shouldBlock(state, action)) return state;
    return defaultReducer(state, action);
  }}
/>
\`\`\`

**Reducer composition pattern:**
\`\`\`tsx
function composeReducers(...reducers) {
  return (state, action) => {
    return reducers.reduce(
      (acc, reducer) => reducer(acc, action),
      state
    );
  };
}

const combined = composeReducers(
  loggingReducer,
  validationReducer,
  defaultReducer
);
\`\`\`

**🔥 Best Practices:**
1. **Provide default**: Funciona sin reducer customizado
2. **Document actions**: Lista todas las actions posibles
3. **Call default**: Usuario puede llamar tu reducer desde el suyo
4. **Type actions**: Use TypeScript para type-safe actions
5. **Test edge cases**: Usuario puede hacer cualquier cosa

**Ejemplo del código:**
Toggle con state reducer que permite usuario controlar cuándo se puede hacer toggle (ej: limitar clicks, agregar logging, etc)."
        codeContent={[
          {
            filePath: 'patterns/state-reducer-basic.tsx',
            content: `// State Reducer Pattern - Basic
import { useReducer } from 'react';

type State = { on: boolean; clickCount: number };
type Action = { type: 'toggle' } | { type: 'reset' };

// Default reducer
const defaultReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'toggle':
      return {
        on: !state.on,
        clickCount: state.clickCount + 1
      };
    case 'reset':
      return { on: false, clickCount: 0 };
    default:
      return state;
  }
};

function useToggle({ 
  initialState = { on: false, clickCount: 0 },
  reducer = defaultReducer 
} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const toggle = () => dispatch({ type: 'toggle' });
  const reset = () => dispatch({ type: 'reset' });
  
  return { ...state, toggle, reset };
}

// Usage 1: Default behavior
function DefaultToggle() {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}

// Usage 2: Custom reducer (limit clicks)
function LimitedToggle() {
  const customReducer = (state: State, action: Action) => {
    // Block toggle after 4 clicks
    if (action.type === 'toggle' && state.clickCount >= 4) {
      return state;
    }
    // Otherwise use default logic
    return defaultReducer(state, action);
  };
  
  const { on, toggle, clickCount } = useToggle({ reducer: customReducer });
  
  return (
    <div>
      <button onClick={toggle} disabled={clickCount >= 4}>
        {on ? 'ON' : 'OFF'}
      </button>
      <p>Clicks: {clickCount}/4</p>
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/state-reducer-advanced.tsx',
            content: `// Advanced: Reducer Composition
type ToggleState = { 
  on: boolean; 
  clickCount: number;
  lastToggled?: Date;
};

type ToggleAction = 
  | { type: 'toggle' }
  | { type: 'reset' }
  | { type: 'forceOn' }
  | { type: 'forceOff' };

const defaultReducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case 'toggle':
      return { 
        ...state, 
        on: !state.on,
        clickCount: state.clickCount + 1,
        lastToggled: new Date()
      };
    case 'reset':
      return { on: false, clickCount: 0 };
    case 'forceOn':
      return { ...state, on: true };
    case 'forceOff':
      return { ...state, on: false };
    default:
      return state;
  }
};

// Logging reducer (middleware pattern)
const loggingReducer = (reducer: typeof defaultReducer) => {
  return (state: ToggleState, action: ToggleAction) => {
    console.log('Previous state:', state);
    console.log('Action:', action);
    const nextState = reducer(state, action);
    console.log('Next state:', nextState);
    return nextState;
  };
};

// Validation reducer
const validationReducer = (reducer: typeof defaultReducer) => {
  return (state: ToggleState, action: ToggleAction) => {
    // Prevent toggle if clicked too fast
    if (action.type === 'toggle' && state.lastToggled) {
      const timeSinceLastToggle = Date.now() - state.lastToggled.getTime();
      if (timeSinceLastToggle < 1000) { // 1 second cooldown
        console.warn('Toggling too fast!');
        return state;
      }
    }
    return reducer(state, action);
  };
};

// Usage with composed reducers
function AdvancedToggle() {
  const composedReducer = (state: ToggleState, action: ToggleAction) => {
    const withLogging = loggingReducer(defaultReducer);
    const withValidation = validationReducer(withLogging);
    return withValidation(state, action);
  };
  
  const { on, toggle } = useToggle({ reducer: composedReducer });
  
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
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
  title: 'State Reducer Pattern | Design Patterns',
  description: '⚙️ Inversion of Control para gestión de estado - Da a los usuarios control total sobre cómo se comporta tu componente complejo mientras mantienes defaults sensatos',
};
