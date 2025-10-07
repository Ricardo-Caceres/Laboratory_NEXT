import OnlineStatusIndicator from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useDebugValue** es un Hook especializado para mostrar información de depuración en React DevTools. Es útil principalmente para custom hooks, permitiendo mostrar valores formateados que facilitan el debugging.

Características principales:
- **Depuración visual:** Muestra información en React DevTools
- **Custom hooks:** Diseñado específicamente para hooks personalizados
- **Formato personalizado:** Permite formatear el valor mostrado
- **Performance:** El formateo es lazy (solo se ejecuta si DevTools está abierto)

Casos de uso comunes:
- Debugging de custom hooks complejos
- Mostrar estado interno de hooks personalizados
- Facilitar el desarrollo de librerías de hooks
- Visualizar valores computados o derivados

**Sintaxis básica:**
\`useDebugValue(value);\`

**Con formateo:**
\`useDebugValue(value, (v) => formatValue(v));\`

**Cuándo usarlo:**
- En custom hooks que compartes o publicas
- Cuando el hook tiene lógica compleja
- Para mejorar la experiencia de debugging

**Cuándo NO usarlo:**
- En componentes (solo funciona en hooks)
- Para logging o debugging en producción
- Si el hook es muy simple

**Importante:**
- Solo visible en React DevTools
- La función de formato es opcional
- El formato solo se ejecuta si DevTools está abierto (optimización de performance)
- No afecta el comportamiento de la aplicación

**Ejemplo de uso:**
\`\`\`typescript
function useCustomHook(value) {
  const result = complexCalculation(value);
  useDebugValue(result, r => formatForDebug(r));
  return result;
}
\`\`\`

**Mejores prácticas:**
- Usa nombres descriptivos para los valores
- Mantén el formateo simple y rápido
- Documenta qué representa el valor mostrado

En este ejemplo, creamos un custom hook \`useOnlineStatus\` que detecta si el navegador está online u offline, y usamos useDebugValue para mostrar este estado en React DevTools de forma legible.
`;

export default function UseDebugValuePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useDebugValue Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useDebugValue/_client_example.tsx', 'src/app/hooks/useDebugValue/useOnlineStatus.ts']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <OnlineStatusIndicator />
      </div>
    </div>
  );
}
