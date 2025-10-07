import MouseTracker from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
El patrón de Render Props (Propiedades de Renderizado) es una técnica para compartir código entre componentes de React utilizando una prop cuya función es renderizar algo. En lugar de pasar un componente ya renderizado, se pasa una función que devuelve un elemento React.

En este ejemplo, el componente 'Mouse' no renderiza nada por sí mismo, sino que pasa el estado actual de la posición del ratón a través de su prop 'render'. El componente 'MouseTracker' utiliza esta prop para definir cómo se debe renderizar la posición del ratón, desacoplando la lógica de seguimiento del ratón de su representación visual.

Beneficios:
- **Reutilización de lógica:** Permite compartir lógica de comportamiento (como el seguimiento del ratón) entre componentes sin acoplamiento.
- **Flexibilidad:** El componente que recibe la render prop tiene control total sobre cómo se renderiza la lógica compartida.
- **Componibilidad:** Se pueden combinar fácilmente con otros componentes y patrones.
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
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MouseTracker />
      </div>
    </div>
  );
}