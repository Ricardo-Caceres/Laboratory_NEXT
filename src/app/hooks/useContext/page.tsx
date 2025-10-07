import UseContextExample from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

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

const filePaths = [
  'src/app/hooks/useContext/_client_example.tsx',
  'src/app/hooks/useContext/ThemeContext.tsx',
];

export default function UseContextPage() {
  return (
    <HookPageLayout
      title="useContext Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={UseContextExample}
    />
  );
}
