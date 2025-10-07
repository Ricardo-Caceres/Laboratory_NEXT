import DataFetcher from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

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

const filePaths = [
  'src/app/hooks/useEffect/_client_example.tsx',
];

export default function UseEffectPage() {
  return (
    <HookPageLayout
      title="useEffect Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={DataFetcher}
    />
  );
}
