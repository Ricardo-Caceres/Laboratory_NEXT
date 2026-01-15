import AccessibleInput from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useId** es un Hook de React 18+ que genera IDs únicos y estables que son consistentes entre el servidor y el cliente. Es especialmente útil para accesibilidad y evita problemas de hidratación en aplicaciones con Server-Side Rendering (SSR).

Características principales:
- **IDs únicos:** Genera IDs que son únicos en toda la aplicación
- **Consistencia SSR:** Los IDs son iguales en servidor y cliente
- **Sin conflictos:** Evita colisiones de IDs entre componentes
- **Accesibilidad:** Perfecto para atributos aria- y relaciones HTML

Casos de uso comunes:
- Conectar labels con inputs (htmlFor/id)
- Atributos ARIA (aria-describedby, aria-labelledby)
- Formularios accesibles
- Componentes reutilizables que necesitan IDs
- Evitar IDs hardcodeados

**Sintaxis:**
\`const id = useId();\`

**Generación de múltiples IDs:**
\`\`\`typescript
const id = useId();
const inputId = id + '-input';
const labelId = id + '-label';
\`\`\`

**Por qué NO usar otras alternativas:**
- **Math.random():** Diferente en servidor y cliente (error de hidratación)
- **Contador global:** Puede causar conflictos con código paralelo
- **IDs hardcodeados:** No reutilizables, pueden duplicarse

**Ventajas:**
- Garantiza consistencia en SSR/Hydration
- Seguro para renderizado concurrente
- Funciona con React Server Components
- Optimizado para performance

**Cuándo usarlo:**
- Necesitas conectar elementos HTML (label/input)
- Implementas patrones de accesibilidad ARIA
- Creas componentes de librería reutilizables
- Trabajas con SSR o React Server Components

**Importante:**
- useId NO es para generar keys en listas (usa datos estables)
- Los IDs generados son strings con formato específico de React
- No uses el ID para CSS selectors (usa clases)
- El ID es estable durante la vida del componente

En este ejemplo, demostramos cómo useId conecta un label con un input de forma accesible, asegurando que la relación funcione correctamente tanto en SSR como en el cliente.
`;

const filePaths = ['src/app/hooks/useId/_client_example.tsx'];

export default function UseIdPage() {
  return (
    <HookPageLayout
      title="useId Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={AccessibleInput}
    />
  );
}
