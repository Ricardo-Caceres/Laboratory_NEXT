import MouseTracker from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
🎨 **Render Props Pattern** - El puente entre HOCs y Hooks que democratizó la compartición de lógica en React

El patrón de Render Props es una técnica elegante y poderosa para compartir código entre componentes de React utilizando una prop cuya función es renderizar elementos. En lugar de pasar un componente ya renderizado o envolver con un HOC, pasas una FUNCIÓN que devuelve JSX, dándote control total sobre el renderizado mientras compartes lógica compleja.

**🎯 ¿Qué problema resuelve?**
Imagina que tienes lógica reutilizable (tracking de mouse, data fetching, form state) que necesitas en múltiples componentes pero cada uno la renderiza diferente. HOCs te fuerzan a una estructura rígida. Render Props te dan flexibilidad total: "Te doy los datos, tú decides cómo mostrarlos".

**⚙️ ¿Cómo funciona?**
En este ejemplo, el componente 'Mouse' no renderiza nada por sí mismo - es un "componente lógico". Rastrea la posición del mouse y pasa esos datos a través de su prop 'render'. El componente 'MouseTracker' utiliza esta prop para definir exactamente cómo quiere mostrar esa posición, desacoplando completamente la lógica (tracking) de la presentación (visualización).

Patrón típico:
\`\`\`jsx
<DataProvider render={data => (
  <YourCustomUI data={data} />
)} />
\`\`\`

**✨ Beneficios Clave:**
- **🎭 Máxima Flexibilidad:** El componente consumidor tiene control ABSOLUTO sobre qué y cómo renderizar. Zero restricciones.
- **♻️ Reutilización Sin Acoplamiento:** La lógica está completamente desacoplada de la presentación. Un componente, infinitas representaciones.
- **🔍 Transparencia:** A diferencia de HOCs, puedes ver exactamente qué se está pasando. No hay "magia" oculta en wrappers.
- **🧩 Composición Natural:** Se combina perfectamente con otros componentes y patrones sin crear wrapper hell.
- **💉 Dependency Injection:** Es esencialmente inyección de dependencias para el renderizado. El componente padre inyecta la estrategia de renderizado.
- **🎯 Props Explícitas:** Los datos fluyen de forma explícita y visible, no como props "mágicamente" inyectadas por HOCs.

**🏢 Casos de Uso Reales:**
- **React Router v4-v5:** <Route render={({ match }) => <Component match={match} />} />
- **Formik (antes de Hooks):** <Formik render={formikProps => <Form {...formikProps} />} />
- **React Motion:** <Motion render={interpolatedStyle => <div style={interpolatedStyle} />} />
- **Downshift:** Biblioteca de accesibilidad que usa render props extensivamente
- **React Apollo (GraphQL):** <Query query={QUERY} render={({ data }) => <View data={data} />} />

**🎨 Variantes del Patrón:**
1. **Render Prop Clásica:**
   \`\`\`jsx
   <Mouse render={mouse => <Display {...mouse} />} />
   \`\`\`

2. **Children as Function (más común):**
   \`\`\`jsx
   <Mouse>{mouse => <Display {...mouse} />}</Mouse>
   \`\`\`

3. **Named Function Props:**
   \`\`\`jsx
   <DataFetcher renderLoading={() => <Spinner />} renderSuccess={data => <List data={data} />} />
   \`\`\`

**⚠️ Consideraciones de Performance:**
- **Cuidado con inline functions:** \`render={() => <Component />}\` crea nueva función cada render
- **Solución:** Extrae a una función estable o usa useCallback (en el consumidor)
- **Pure Components:** Los componentes que usan render props pueden romper PureComponent si no se memorizan

**🆚 Render Props vs Hooks:**
En 2024, Custom Hooks han ganado popularidad porque:
- ✅ Hooks: Código más limpio, no requieren JSX anidado, mejor TypeScript inference
- ✅ Render Props: Útiles cuando necesitas renderizado condicional complejo, o composición visual explícita

**🔥 Tips Pro:**
- Usa TypeScript genéricos para type-safe render props:
  \`\`\`typescript
  interface Props<T> {
    render: (data: T) => React.ReactNode;
  }
  \`\`\`
- Considera proporcionar tanto render prop como hook para máxima flexibilidad
- Nombre tus render props descriptivamente: renderItem, renderHeader, renderEmpty
- Documenta claramente qué props recibe la render function

**💡 Cuándo usar Render Props en 2024:**
1. **Necesitas control visual explícito:** Cuando el consumidor debe decidir exactamente qué renderizar
2. **Múltiples puntos de renderizado:** renderHeader, renderBody, renderFooter
3. **Bibliotecas UI:** Cuando construyes componentes headless que otros estilizarán
4. **Migración gradual:** Transición de código legacy sin refactorizar todo a Hooks

**🧠 Concepto Mental:**
Piensa en Render Props como "Hollywood Principle" - "Don't call us, we'll call you". El componente te llama con datos, tú decides qué hacer con ellos.
`;


const filePaths = [
  'src/app/patterns/render-props/_client_example.tsx',
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

export default async function RenderPropsPage() {
  const codeContent = await getCodeContent();

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Render Props Pattern</h2>
        <div className="mb-4">
          <StyledText text={description} />
        </div>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <MouseTracker />
      </div>
    </div>
  );
}