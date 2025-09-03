import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
El patrón de Componentes Compuestos (Compound Components) permite crear componentes que trabajan juntos para lograr una funcionalidad compartida, pero que internamente mantienen su estado y lógica. Esto proporciona una API flexible y expresiva para los consumidores del componente, permitiéndoles organizar y estructurar la interfaz de usuario de una manera declarativa.

En este ejemplo, el componente 'Accordion' es un componente compuesto que expone 'Accordion.Item', 'Accordion.Header' y 'Accordion.Body'. Estos subcomponentes se comunican implícitamente a través de un contexto compartido ('AccordionContext'), lo que les permite coordinar su comportamiento (por ejemplo, qué elemento del acordeón está abierto) sin pasar props explícitamente a través de múltiples niveles.

Beneficios:
- **Flexibilidad:** Los consumidores tienen control total sobre la estructura y el orden de los subcomponentes.
- **Separación de preocupaciones:** La lógica interna del acordeón se encapsula, mientras que la presentación se delega a los subcomponentes.
- **Reusabilidad:** Los subcomponentes pueden ser reutilizados en diferentes contextos o con diferentes estilos.
`;

const filePaths = [
  'src/app/patterns/compound-components/_client_example.tsx',
  'src/app/patterns/compound-components/AccordionContext.tsx',
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
    const parts = lineText.split(/(\*\*(.*?)\*\*)/g);
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

export default async function CompoundComponentsPage() {
  const codeContent = await getCodeContent();

  return (
    <div class="flex min-h-screen">
      <div class="w-1/2 p-4 overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4">Compound Components Pattern</h2>
        <div class="mb-4">
          <StyledText text={description} />
        </div>
        <h3 class="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div class="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MyPage />
      </div>
    </div>
  );
}
