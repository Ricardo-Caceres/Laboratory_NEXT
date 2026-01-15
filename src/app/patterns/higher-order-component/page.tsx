import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
🎭 **Higher-Order Component (HOC)** - El patrón de composición funcional que transformó React antes de los Hooks

El patrón de Componente de Orden Superior es una técnica avanzada y poderosa en React para reutilizar lógica de componentes mediante composición funcional. Los HOCs son funciones puras que toman un componente como entrada y devuelven un nuevo componente "mejorado" con props, comportamientos o capacidades adicionales, sin modificar el componente original.

**🎯 ¿Qué problema resuelve?**
Antes de React Hooks (pre-2019), los HOCs eran LA solución estándar para compartir lógica entre componentes. ¿Necesitas autenticación en 10 componentes? ¿Logging? ¿Conexión a Redux? ¿Manejo de suscripciones? Los HOCs te permitían escribir esa lógica UNA vez y aplicarla a CUALQUIER componente mediante composición.

**⚙️ ¿Cómo funciona?**
En este ejemplo, 'withAuth' es un HOC que añade lógica de autenticación a cualquier componente que envuelva. Recibe un componente (WrappedComponent), retorna un nuevo componente que verifica autenticación, y solo renderiza el componente original si el usuario está autenticado. Es una función que recibe una función (componente) y retorna una función (componente mejorado).

Patrón típico:
\`\`\`typescript
const EnhancedComponent = withHOC(OriginalComponent);
// withAuth(Dashboard), withLogging(UserProfile), withData(ProductList)
\`\`\`

**✨ Beneficios Clave:**
- **♻️ Máxima Reutilización:** Escribe lógica cross-cutting UNA vez, aplícala a N componentes. Zero duplicación.
- **🧩 Composición Pura:** Múltiples HOCs se pueden componer: withAuth(withLogging(withData(Component))). Es matemáticamente elegante.
- **🔒 No Invasivo:** El componente original nunca se modifica. El HOC crea una nueva versión mejorada.
- **🎯 Separación de Preocupaciones:** Lógica de negocio (autenticación, data fetching) completamente separada de UI.
- **🧪 Testing Simplificado:** Puedes testear el HOC aisladamente, y los componentes envueltos sin la lógica del HOC.
- **📦 Props Injection:** Inyecta props automáticamente sin que el componente original las solicite explícitamente.

**🏢 Casos de Uso Reales (antes de Hooks):**
- **connect()** en Redux - El HOC más famoso de React
- **withRouter()** en React Router
- **withStyles()** en Material UI v3/v4
- Authentication guards: withAuth, withPermissions
- Data fetching: withData, withSubscription
- Analytics: withTracking, withPageView
- Performance: withMemo, withErrorBoundary

**⚠️ Limitaciones y Problemas:**
- **Wrapper Hell:** compose(withA, withB, withC, withD)(Component) crea profundidad en DevTools
- **Ref Forwarding:** Requiere React.forwardRef para pasar refs correctamente
- **Props Collision:** Múltiples HOCs pueden inyectar props con el mismo nombre
- **Static Methods:** No se copian automáticamente (requiere hoist-non-react-statics)
- **Debugging:** El stack puede ser confuso con múltiples HOCs anidados

**🆚 HOCs vs Hooks (2024):**
En aplicaciones modernas, Custom Hooks han reemplazado a HOCs para la mayoría de casos de uso:
- ✅ Hooks: Mejor composición, no hay wrapper hell, refs funcionan naturalmente
- ✅ HOCs: Útiles cuando necesitas interceptar el ciclo completo de renderizado, o envolver componentes de terceros que no controlas

**🔥 Tips Pro:**
- Usa \`displayName\` para debugging: \`EnhancedComponent.displayName = \`withAuth(\${Component.name})\`\`
- Copia static methods con \`hoist-non-react-statics\`
- Pasa props no relacionadas al componente envuelto (\`...otherProps\`)
- Considera usar Hooks para nuevos proyectos, HOCs para legacy o casos específicos
- HOCs aún son relevantes en 2024 para: Error Boundaries, component interception, third-party library integration

**💡 Evolución:**
HOCs → Render Props → Hooks. Cada uno resolvió problemas del anterior. HOCs siguen siendo valiosos en el toolbox de desarrolladores senior.
`;


const filePaths = [
  'src/app/patterns/higher-order-component/_client_example.tsx',
];

async function getCodeContent() {
  const codeContent = await Promise.all(
    filePaths.map(async (filePath) => {
      const fullPath = path.join(process.cwd(), filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      return { filePath, content };
    })
  );
  return codeContent;
}

function StyledText({ text }: { text: string }) {
  const renderLineContent = (lineText: string, lineIndex: number) => {
    // First, handle existing bold text (**)
    const parts = lineText.split(/(\*(.*?)\*)/g);
    const processedParts = parts.map((part, partPartIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={`${lineIndex}-${partPartIndex}`} className="font-bold text-cyan-400">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Now, handle text before a colon if it's not already bold
      const colonParts = part.split(/([^:]+?:)/g); // Split by text ending with a colon
      return colonParts.map((colonPart, colonPartIndex) => {
        if (colonPart.endsWith(':') && colonPart.length > 1) { // Ensure it's not just a colon
          return (
            <span key={`${lineIndex}-${partPartIndex}-${colonPartIndex}`} className="font-bold text-blue-500">
              {colonPart}
            </span>
          );
        }
        return <span key={`${lineIndex}-${partPartIndex}-${colonPartIndex}`}>{colonPart}</span>;
      });
    });
    return processedParts;
  };

  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith('- ')) {
      const listItemContent = line.trim().substring(2);
      currentList.push(
        <li key={index} className="mb-1">
          {renderLineContent(listItemContent, index)}
        </li>
      );
    } else {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${index - 1}`} className="list-disc pl-5 mb-2">{currentList}</ul>);
        currentList = [];
      }
      // Check if this line is a list title
      const isListTitle = (index + 1 < lines.length && lines[index + 1].trim().startsWith('- '));
      // Handle empty lines or lines that are just whitespace
      if (line.trim() !== '') {
        elements.push(
          <p key={index} className={isListTitle ? "font-bold text-white text-lg mb-2" : "mb-2"}>
            {renderLineContent(line, index)}
          </p>
        );
      }
    }
  });

  // Add any remaining list items
  if (currentList.length > 0) {
    elements.push(<ul key={`ul-final`} className="list-disc pl-5 mb-2">{currentList}</ul>);
  }

  return <>{elements}</>;
}

export default async function HigherOrderComponentPage() {
  const codeContent = await getCodeContent();

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Higher-Order Component Pattern</h2>
        <div className="mb-4">
          <StyledText text={description} />
        </div>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <MyPage />
      </div>
    </div>
  );
}
