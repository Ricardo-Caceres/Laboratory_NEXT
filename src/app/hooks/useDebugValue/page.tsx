import OnlineStatusIndicator from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

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

const filePaths = [
  'src/app/hooks/useDebugValue/_client_example.tsx',
  'src/app/hooks/useDebugValue/useOnlineStatus.ts',
];

export default function UseDebugValuePage() {
  return (
    <HookPageLayout
      title="useDebugValue Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={OnlineStatusIndicator}
    />
  );
}
