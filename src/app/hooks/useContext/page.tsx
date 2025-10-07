import UseContextExample from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useContext** es el Hook que permite consumir valores de un Context de React sin necesidad de usar componentes Consumer. Simplifica el acceso a datos compartidos en toda la aplicación.

Características principales:
- **Consumo de contexto:** Accede a valores de contexto de forma directa
- **Sin prop drilling:** Evita pasar props a través de múltiples niveles
- **Reactividad:** El componente se re-renderiza cuando el valor del contexto cambia
- **Múltiples contextos:** Puedes usar múltiples contextos en el mismo componente

Casos de uso comunes:
- Temas (dark/light mode)
- Autenticación y estado del usuario
- Configuración de idioma (i18n)
- Estado global de la aplicación
- Preferencias del usuario

**Sintaxis:**
\`const value = useContext(MyContext);\`

**Patrón completo:**
1. Crear el contexto: \`createContext()\`
2. Proveer valores: \`<Context.Provider value={...}>\`
3. Consumir valores: \`useContext(Context)\`

**Ventajas:**
- Código más limpio y legible
- Evita prop drilling
- Facilita el testing

**Consideraciones:**
- Cualquier cambio en el valor del contexto re-renderiza todos los consumidores
- Para grandes aplicaciones, considera dividir en múltiples contextos
- Combina con useMemo para optimizar objetos/valores complejos

En este ejemplo, demostramos cómo usar useContext para implementar un sistema de temas (light/dark) que puede ser accedido desde cualquier componente de la aplicación.
`;

export default function UseContextPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useContext Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useContext/_client_example.tsx', 'src/app/hooks/useContext/ThemeContext.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <UseContextExample />
      </div>
    </div>
  );
}
