import OnlineStatus from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useSyncExternalStore** es un Hook especializado que permite suscribirse a stores externos de forma segura con Server-Side Rendering y Concurrent Features. Es fundamental para integraciones con state managers y fuentes de datos externas.

Características principales:
- **Suscripción externa:** Se conecta a stores fuera de React
- **Seguridad en SSR:** Maneja diferencias entre servidor y cliente
- **Concurrent-safe:** Compatible con renderizado concurrente
- **Tearing prevention:** Previene inconsistencias visuales

Componentes del Hook:
- **subscribe:** Función para suscribirse al store externo
- **getSnapshot:** Función que retorna el valor actual del store
- **getServerSnapshot:** (Opcional) Valor para SSR

Casos de uso comunes:
- Integración con Redux, MobX, Zustand
- Suscripción a eventos del navegador (online/offline, resize, etc.)
- Integración con WebSockets o Server-Sent Events
- Observables de RxJS
- Cualquier fuente de datos externa a React

**Sintaxis:**
\`const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);\`

**Implementación típica:**
\`\`\`typescript
function subscribe(callback) {
  store.subscribe(callback);
  return () => store.unsubscribe(callback);
}

function getSnapshot() {
  return store.getState();
}

const data = useSyncExternalStore(subscribe, getSnapshot);
\`\`\`

**Por qué es necesario:**
- **Tearing:** Sin este Hook, diferentes partes de la UI pueden mostrar versiones diferentes del mismo estado
- **Concurrent Rendering:** React 18+ puede renderizar en paralelo
- **SSR:** Necesita manejar diferencias servidor/cliente

**Cuándo usarlo:**
- Integras librerías de estado externas
- Te suscribes a APIs del navegador
- Creas custom hooks para stores externos
- Migras código legacy a React 18+

**Cuándo NO usarlo:**
- Para estado interno de React (usa useState/useReducer)
- Si la librería ya provee hooks compatibles
- Para efectos simples (usa useEffect)

**Importante:**
- El snapshot debe ser inmutable o un valor primitivo
- getServerSnapshot es crucial para SSR
- La función subscribe debe retornar una función de cleanup

En este ejemplo, demostramos cómo useSyncExternalStore se suscribe al estado online/offline del navegador de forma segura y eficiente.
`;

const filePaths = ['src/app/hooks/useSyncExternalStore/_client_example.tsx'];

export default function UseSyncExternalStorePage() {
  return (
    <HookPageLayout
      title="useSyncExternalStore Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={OnlineStatus}
    />
  );
}
