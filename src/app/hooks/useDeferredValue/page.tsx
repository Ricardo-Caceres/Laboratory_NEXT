import DeferredValueExample from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useDeferredValue** es un Hook de React 18+ que permite diferir la actualización de una parte no crítica de la UI. Ayuda a mantener la interfaz responsiva durante actualizaciones costosas, permitiendo que las interacciones del usuario se procesen primero.

Características principales:
- **Responsividad:** Mantiene la UI responsiva durante renderizados costosos
- **Priorización:** Las interacciones del usuario tienen prioridad
- **Renderizado diferido:** Actualiza valores no críticos después
- **Sin bloqueo:** No bloquea las interacciones mientras se actualiza

Diferencias con useTransition:
- **useDeferredValue:** Aplaza la actualización de un valor específico
- **useTransition:** Marca toda una actualización de estado como no urgente

Casos de uso comunes:
- Búsqueda/filtrado en listas grandes
- Resultados de búsqueda mientras el usuario escribe
- Visualizaciones de datos complejas
- Renderizado de contenido pesado que no es inmediato

**Sintaxis:**
\`const deferredValue = useDeferredValue(value);\`

**Cómo funciona:**
1. React renderiza primero con el valor antiguo (rápido)
2. Luego re-renderiza con el nuevo valor (en background)
3. Las interacciones del usuario no se bloquean

**Cuándo usarlo:**
- Tienes un valor que causa renderizados costosos
- Quieres mantener inputs responsivos
- El valor deriva de input del usuario

**Cuándo NO usarlo:**
- Para optimizar todo (usa React.memo, useMemo primero)
- Si el renderizado ya es rápido
- Para data fetching (usa Suspense)

**Patrón típico:**
\`\`\`typescript
const [input, setInput] = useState('');
const deferredInput = useDeferredValue(input);

// input actualiza inmediatamente
// deferredInput actualiza después
\`\`\`

**Importante:**
- Funciona mejor con Concurrent Features de React 18+
- Combina bien con React.memo para componentes pesados
- No requiere código adicional de debouncing o throttling

En este ejemplo, demostramos cómo useDeferredValue mantiene el input responsivo mientras se filtra una lista grande. El valor diferido se usa para el filtrado costoso, mientras el input se actualiza instantáneamente.
`;

const filePaths = [
  'src/app/hooks/useDeferredValue/_client_example.tsx',
  'src/app/hooks/useDeferredValue/SlowList.tsx'
];

export default function UseDeferredValuePage() {
  return (
    <HookPageLayout
      title="useDeferredValue Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={DeferredValueExample}
    />
  );
}
