import MemoExample from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useMemo** es un Hook de optimización que memoriza el resultado de un cálculo costoso. Solo recalcula el valor cuando una de sus dependencias cambia, evitando cálculos innecesarios en cada renderizado.

Características principales:
- **Memoización de valores:** Almacena el resultado de un cálculo
- **Optimización de rendimiento:** Evita cálculos costosos repetidos
- **Recálculo condicional:** Solo recalcula cuando las dependencias cambian
- **Valores computados:** Ideal para valores derivados del estado

Diferencias con useCallback:
- **useMemo:** Memoriza el resultado de una función
- **useCallback:** Memoriza la función misma

Casos de uso comunes:
- Cálculos matemáticos complejos
- Filtrado o transformación de listas grandes
- Valores derivados o computados del estado
- Operaciones costosas de procesamiento de datos

**Sintaxis:**
\`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\`

**Cuándo usarlo:**
- El cálculo es computacionalmente costoso
- El valor se calcula a partir de dependencias que no cambian frecuentemente
- El valor se pasa a componentes hijos optimizados

**Cuándo NO usarlo:**
- Para cálculos simples y rápidos
- Como optimización prematura sin medición de rendimiento
- En todos los valores por defecto

En este ejemplo, demostramos cómo useMemo optimiza el cálculo de números primos, que es una operación costosa que solo debe ejecutarse cuando el input cambia.
`;

export default function UseMemoPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useMemo Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useMemo/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MemoExample />
      </div>
    </div>
  );
}
