import ParentComponent from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useCallback** es un Hook de optimización que devuelve una versión memoizada de una función callback. Previene la recreación innecesaria de funciones en cada renderizado, lo cual es especialmente útil cuando pasas callbacks a componentes hijos optimizados.

Características principales:
- **Memoización de funciones:** La función solo se recrea cuando sus dependencias cambian
- **Optimización de rendimiento:** Evita re-renderizados innecesarios en componentes hijos
- **Identidad referencial:** Mantiene la misma referencia de función entre renders
- **Combinación con React.memo:** Máximo beneficio al usarlo con componentes memoizados

Casos de uso comunes:
- Pasar callbacks a componentes hijos optimizados con React.memo
- Funciones que son dependencias de otros Hooks (useEffect, useMemo)
- Event handlers en componentes de listas grandes
- Callbacks en custom hooks

**Sintaxis:**
\`const memoizedCallback = useCallback(() => { /* función */ }, [deps]);\`

**Cuándo usarlo:**
- El callback se pasa a un componente hijo optimizado
- El callback es una dependencia de otro Hook
- La función es costosa de crear

**Cuándo NO usarlo:**
- En funciones simples sin pasar a componentes hijos
- Cuando la optimización no es necesaria

En este ejemplo, demostramos cómo useCallback previene re-renderizados innecesarios en componentes hijos cuando se usa junto con React.memo.
`;

export default function UseCallbackPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useCallback Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useCallback/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <ParentComponent />
      </div>
    </div>
  );
}
