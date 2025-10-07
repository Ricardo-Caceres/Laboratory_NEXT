import TransitionExample from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useTransition** es un Hook de React 18+ que permite marcar actualizaciones de estado como no urgentes (transiciones). Mantiene la UI responsiva durante renderizados costosos, permitiendo que React interrumpa el trabajo no urgente para manejar interacciones del usuario.

Características principales:
- **Transiciones:** Marca actualizaciones de estado como no bloqueantes
- **Responsividad:** Las interacciones del usuario tienen prioridad máxima
- **Estado de pending:** Proporciona un indicador de carga incorporado
- **Interrumpible:** React puede pausar transiciones para manejar inputs

Componentes del Hook:
- **isPending:** Boolean que indica si hay una transición en progreso
- **startTransition:** Función para marcar actualizaciones como transiciones

Casos de uso comunes:
- Cambios de pestañas/tabs con contenido pesado
- Navegación entre vistas con datos complejos
- Filtrado y búsqueda en listas grandes
- Actualizaciones de UI que pueden esperar
- Renderizado de gráficos o visualizaciones complejas

**Sintaxis:**
\`const [isPending, startTransition] = useTransition();\`

**Uso típico:**
\`\`\`typescript
startTransition(() => {
  // Actualizaciones de estado no urgentes
  setState(newValue);
});
\`\`\`

**Diferencias con useDeferredValue:**
- **useTransition:** Marca actualizaciones de estado como no urgentes
- **useDeferredValue:** Aplaza la actualización de un valor específico

**Cuándo usarlo:**
- Tienes actualizaciones de estado que causan renderizados costosos
- Quieres mostrar un indicador de carga durante la actualización
- Necesitas mantener otras partes de la UI responsivas

**Cuándo NO usarlo:**
- Para inputs controlados (usa useDeferredValue)
- Para data fetching (usa Suspense)
- Si el renderizado ya es rápido

**Patrones comunes:**
\`\`\`typescript
// Navegación con transición
startTransition(() => {
  setActiveTab(nextTab);
});

// Con indicador de carga
{isPending && <Spinner />}
\`\`\`

**Importante:**
- Requiere React 18+ y Concurrent Features
- Las transiciones son interrumpibles automáticamente
- isPending es útil para mostrar indicadores de carga
- No afecta la actualización del DOM, solo su prioridad

En este ejemplo, demostramos cómo useTransition mantiene el input responsivo mientras se filtra una lista de 10,000 elementos. El estado de \`isPending\` muestra un indicador de carga durante la transición.
`;

export default function UseTransitionPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useTransition Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useTransition/_client_example.tsx', 'src/app/hooks/useTransition/SlowList.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <TransitionExample />
      </div>
    </div>
  );
}
