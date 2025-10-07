import MemoExample from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

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

const filePaths = [
  'src/app/hooks/useMemo/_client_example.tsx',
];

export default function UseMemoPage() {
  return (
    <HookPageLayout
      title="useMemo Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={MemoExample}
    />
  );
}
