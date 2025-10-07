import FocusInput from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useRef** es un Hook que devuelve un objeto mutable que persiste durante toda la vida del componente. A diferencia del estado, cambiar un ref NO causa un re-renderizado.

Características principales:
- **Persistencia:** El valor persiste entre re-renderizados
- **Mutabilidad:** Se puede modificar directamente sin causar re-renderizado
- **Acceso al DOM:** Forma principal de acceder a elementos DOM en React
- **Valores anteriores:** Útil para guardar valores previos de props o estado

Casos de uso comunes:
- Acceder y manipular elementos DOM directamente
- Almacenar valores mutables que no afectan la UI
- Guardar IDs de timers o intervalos
- Mantener valores previos de props o estado
- Integración con librerías de terceros que requieren referencias DOM

**Sintaxis:**
\`const ref = useRef(initialValue);\`

**Diferencias con useState:**
- **useRef:** No causa re-renderizado al cambiar
- **useState:** Causa re-renderizado al cambiar

**Acceso al valor:**
- Usar \`ref.current\` para acceder o modificar el valor

**Patrones comunes:**
1. **DOM ref:** \`<input ref={inputRef} />\`
2. **Valor mutable:** \`ref.current = newValue\`
3. **Guardar callback:** \`ref.current = callback\`

**Importante:**
- No uses ref para datos que afectan la renderización (usa useState)
- Los cambios en ref.current no disparan re-renderizados
- Útil para "escapar" del paradigma declarativo cuando es necesario

En este ejemplo, demostramos cómo usar useRef para acceder y manipular un elemento input del DOM, permitiéndonos enfocarlo programáticamente.
`;

const filePaths = [
  'src/app/hooks/useRef/_client_example.tsx',
];

export default function UseRefPage() {
  return (
    <HookPageLayout
      title="useRef Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={FocusInput}
    />
  );
}
