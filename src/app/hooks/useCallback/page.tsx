import ParentComponent from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useCallback** es un Hook de optimización que devuelve una versión memoizada de una función callback. Previene la recreación innecesaria de funciones en cada renderizado.

**¿Por qué es importante?**

En JavaScript, cada vez que un componente se re-renderiza, se crean nuevas instancias de todas sus funciones. Esto puede causar re-renderizados innecesarios en componentes hijos si usan \`React.memo\` o \`useEffect\` que dependen de esas funciones.

**Características principales:**

- **Memoización de funciones:** La función solo se recrea cuando sus dependencias cambian
- **Identidad referencial estable:** Mantiene la misma referencia entre renders
- **Optimización de rendimiento:** Evita re-renderizados innecesarios en componentes hijos
- **Integración con React.memo:** Máximo beneficio al usarlo con componentes memoizados

**Casos de uso reales:**

- Pasar callbacks a componentes hijos optimizados con \`React.memo\`
- Funciones que son dependencias de otros Hooks (\`useEffect\`, \`useMemo\`)
- Event handlers en listas grandes (evitar recrear funciones por cada item)
- Callbacks en custom hooks que no deben cambiar frecuentemente
- Funciones que se pasan a bibliotecas externas

**Sintaxis:**

\`const memoizedCallback = useCallback(() => { /* función */ }, [deps]);\`

**Diferencia clave con useMemo:**

- **useCallback:** Memoriza la función misma
- **useMemo:** Memoriza el resultado de ejecutar una función

\`useCallback(fn, deps)\` es equivalente a \`useMemo(() => fn, deps)\`

**Cuándo SÍ usarlo:**

- El callback se pasa a un componente hijo optimizado con \`React.memo\`
- El callback es una dependencia de \`useEffect\` o \`useMemo\`
- La función se crea en un componente que se renderiza frecuentemente
- Estás experimentando problemas de rendimiento medibles

**Cuándo NO usarlo (over-optimization):**

- Funciones simples que no se pasan a componentes hijos
- Cuando no hay componentes hijos memoizados
- Como optimización prematura sin medir el rendimiento
- En event handlers simples que no causan problemas

**Regla de oro:**

"Optimiza cuando tengas un problema de rendimiento real, no por defecto"

En este ejemplo, demostramos cómo \`useCallback\` previene re-renderizados innecesarios en componentes hijos cuando se usa junto con \`React.memo\`.
`;

const filePaths = [
  'src/app/hooks/useCallback/_client_example.tsx',
];

export default function UseCallbackPage() {
  return (
    <HookPageLayout
      title="useCallback Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={ParentComponent}
    />
  );
}
