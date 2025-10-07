import AccessibleInput from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

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

export default function UseIdPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useId Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useId/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <AccessibleInput />
      </div>
    </div>
  );
}
