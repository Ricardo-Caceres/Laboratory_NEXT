import DataFetcher from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useEffect** es el Hook para manejar efectos secundarios (side effects) en componentes funcionales. Reemplaza los métodos del ciclo de vida como componentDidMount, componentDidUpdate y componentWillUnmount.

Características principales:
- **Efectos secundarios:** Operaciones que afectan el mundo exterior (API calls, suscripciones, timers)
- **Sincronización:** Mantiene tu componente sincronizado con sistemas externos
- **Limpieza:** Permite limpiar recursos cuando el componente se desmonta
- **Dependencias:** Controla cuándo se ejecuta el efecto mediante un array de dependencias

Casos de uso comunes:
- Obtener datos de una API (data fetching)
- Suscripciones a eventos o servicios externos
- Manipulación directa del DOM
- Temporizadores y intervalos
- Sincronización con servicios de terceros

**Sintaxis:**
\`useEffect(() => { /* efecto */ return () => { /* limpieza */ }; }, [deps]);\`

**Array de dependencias:**
- Sin array: Se ejecuta después de cada renderizado
- Array vacío []: Se ejecuta solo una vez (al montar)
- Con dependencias [a, b]: Se ejecuta cuando a o b cambian

En este ejemplo, demostramos cómo usar useEffect para obtener datos de una API cuando el componente se monta.
`;

export default function UseEffectPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useEffect Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useEffect/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <DataFetcher />
      </div>
    </div>
  );
}
