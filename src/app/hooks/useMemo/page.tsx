import MemoExample from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useMemo** es un Hook de optimización que memoriza el resultado de un cálculo costoso. Solo recalcula el valor cuando una de sus dependencias cambia.

**¿Qué es la memoización?**

La memoización es una técnica de optimización que almacena el resultado de operaciones costosas y lo reutiliza cuando las entradas son las mismas. Es como tener una "caché" de resultados.

**Características principales:**

- **Memoización de valores:** Almacena y reutiliza resultados de cálculos
- **Recálculo condicional:** Solo recalcula cuando las dependencias cambian
- **Optimización de rendimiento:** Evita cálculos costosos repetidos
- **Valores derivados:** Perfecto para valores computados a partir del estado

**Diferencias clave con useCallback:**

- **useMemo:** Memoriza el **resultado** de ejecutar una función
- **useCallback:** Memoriza la **función misma** (sin ejecutarla)

**Casos de uso reales:**

- Filtrado o sorting de listas grandes (\`arr.filter(...).sort(...)\`)
- Cálculos matemáticos complejos o algoritmos costosos
- Transformaciones de datos pesadas
- Creación de objetos o arrays derivados del estado
- Procesamiento de strings complejos (regex, parsing)
- Cálculos estadísticos o agregaciones

**Sintaxis:**

\`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\`

**Ejemplo de cuándo SÍ usarlo:**

\`\`\`javascript
// BAD: Se filtra y ordena en CADA render
const expensiveList = items.filter(x => x.active).sort((a, b) => a.price - b.price);

// GOOD: Solo se recalcula cuando items cambia
const expensiveList = useMemo(
  () => items.filter(x => x.active).sort((a, b) => a.price - b.price),
  [items]
);
\`\`\`

**Cuándo SÍ usarlo:**

- El cálculo es costoso (loops grandes, algoritmos complejos)
- El valor se usa múltiples veces en el mismo render
- El valor se pasa a componentes hijos con \`React.memo\`
- Dependencias cambian infrecuentemente

**Cuándo NO usarlo:**

- Cálculos simples y rápidos (\`a + b\`, \`str.toLowerCase()\`)
- Como optimización prematura sin medir rendimiento
- En TODOS los valores por defecto (over-optimization)
- Cuando las dependencias cambian constantemente

**Trampas comunes:**

❌ Poner objetos/arrays en las dependencias sin estabilizar su referencia
❌ Usarlo para todo (hace el código más complejo sin beneficio)
❌ No incluir todas las dependencias que se usan

**Regla de oro:**

"Mide primero, optimiza después. No uses \`useMemo\` por defecto."

En este ejemplo, demostramos cómo \`useMemo\` optimiza el cálculo de números primos, que es una operación costosa que solo debe ejecutarse cuando el input cambia.
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
