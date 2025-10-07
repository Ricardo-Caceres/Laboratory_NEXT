import Counter from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useReducer** es un Hook alternativo a useState para manejar lógica de estado compleja. Es similar al patrón reducer de Redux y es especialmente útil cuando el estado tiene múltiples sub-valores o cuando las actualizaciones dependen del estado anterior.

Características principales:
- **Estado complejo:** Ideal para estados con múltiples valores relacionados
- **Lógica centralizada:** Toda la lógica de actualización en un solo lugar (reducer)
- **Predecibilidad:** Las actualizaciones son más predecibles y fáciles de testear
- **Acciones tipadas:** Facilita el uso con TypeScript

Casos de uso comunes:
- Formularios complejos con múltiples campos
- Estado con lógica de actualización compleja
- Estados que dependen de valores anteriores
- Cuando necesitas dispatch en lugar de setState
- Máquinas de estado simples

**Sintaxis:**
\`const [state, dispatch] = useReducer(reducer, initialState);\`

**Componentes:**
1. **Reducer:** Función que recibe (state, action) y retorna nuevo estado
2. **Initial state:** Estado inicial del componente
3. **Dispatch:** Función para enviar acciones al reducer

**Cuándo usar useReducer vs useState:**
- **useReducer:** Estado complejo, múltiples sub-valores, lógica compleja
- **useState:** Estado simple, valores independientes

**Patrón del Reducer:**
\`\`\`typescript
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, /* cambios */ };
    default:
      return state;
  }
}
\`\`\`

**Ventajas:**
- Mejor organización del código
- Más fácil de testear
- Facilita el debugging
- Buena preparación para Redux

En este ejemplo, demostramos cómo usar useReducer para manejar un contador con múltiples acciones (incrementar, decrementar, reset) de forma organizada.
`;

const filePaths = [
  'src/app/hooks/useReducer/_client_example.tsx',
];

export default function UseReducerPage() {
  return (
    <HookPageLayout
      title="useReducer Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={Counter}
    />
  );
}
