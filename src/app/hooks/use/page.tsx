'use client';

import { useState, Suspense, use } from 'react';
import { StyledText } from '../../../components/StyledText';

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

function fetchData(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

function DataDisplay() {
  const data = use(fetchData());
  return <p className="text-lg mt-4 p-4 bg-green-100 rounded">{data}</p>;
}

export default function UseHookExample() {
  const [showData, setShowData] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">use Hook (React 19)</h1>
          <StyledText text={description} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">use Hook Demo</h2>
          <p className="text-lg mb-4">Click the button to load data asynchronously using the use Hook with Suspense.</p>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" 
            onClick={() => setShowData(true)}
            disabled={showData}
          >
            {showData ? 'Data Loaded' : 'Load Data'}
          </button>
          {showData && (
            <Suspense fallback={<p className="text-lg mt-4 text-blue-600">Loading data...</p>}>
              <DataDisplay />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
