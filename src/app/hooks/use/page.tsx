import HookPageLayout from '../../../components/HookPageLayout';
import UseHookExample from './_client_example';

const description = `
**use** es un Hook revolucionario de React 19 que permite "unwrap" recursos como Promises y Contexts directamente en la lógica de renderizado. Simplifica el manejo de datos asíncronos y contextos, funcionando de manera diferente a otros Hooks.

Características principales:
- **Promises:** Lee valores de Promises directamente
- **Context:** Consume contextos sin useContext
- **Condicional:** Puede usarse dentro de condicionales y loops (a diferencia de otros Hooks)
- **Suspense:** Se integra automáticamente con Suspense boundaries

Casos de uso comunes:
- Leer datos de Promises directamente en el render
- Consumir contextos de forma más flexible
- Data fetching simplificado
- Integración con React Server Components

**Sintaxis con Promise:**
\`const value = use(promise);\`

**Sintaxis con Context:**
\`const value = use(MyContext);\`

**Diferencias con otros Hooks:**
- **Puede usarse condicionalmente:** \`if (condition) { use(promise); }\`
- **Puede usarse en loops:** \`items.map(() => use(...))\`
- **No requiere useEffect para data fetching**
- **Integración nativa con Suspense**

**Con Promises:**
- Suspende el componente mientras la Promise está pending
- Renderiza el valor cuando la Promise se resuelve
- Lanza el error si la Promise se rechaza

**Con Context:**
- Similar a useContext pero más flexible
- Puede usarse condicionalmente
- Busca el Provider más cercano

**Ventajas:**
- Código más simple y legible
- Menos boilerplate para async data
- Mejor integración con Suspense
- Más flexible que otros Hooks

**Cuándo usarlo:**
- Datos asíncronos en React 19+
- Cuando trabajas con Suspense
- Para simplificar data fetching
- Con React Server Components

**Importante:**
- Requiere React 19+
- Funciona mejor con Suspense boundaries
- Las Promises deben ser cacheadas/estables
- No crear nuevas Promises en cada render

**Patrón típico:**
\`\`\`typescript
function Component() {
  const data = use(fetchData()); // Suspende hasta que se resuelva
  return <div>{data}</div>;
}

// Wrappear con Suspense
<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
\`\`\`

En este ejemplo, demostramos cómo el Hook use permite leer el valor de una Promise directamente, suspendiendo el componente automáticamente mientras se carga.
`;

const filePaths = ['src/app/hooks/use/_client_example.tsx'];

export default function UseHookPage() {
  return (
    <HookPageLayout
      title="use Hook (React 19)"
      description={description}
      filePaths={filePaths}
      ClientExample={UseHookExample}
    />
  );
}
