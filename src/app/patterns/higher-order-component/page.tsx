import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
El patrón de Componente de Orden Superior (Higher-Order Component - HOC) es una técnica avanzada en React para reutilizar la lógica de componentes. Los HOCs son funciones que toman un componente como entrada y devuelven un nuevo componente con props o comportamientos adicionales.

En este ejemplo, 'withAuth' es un HOC que añade lógica de autenticación a cualquier componente que envuelva. Si el usuario no está autenticado, muestra un mensaje; de lo contrario, renderiza el componente envuelto. Esto permite reutilizar la lógica de autenticación sin duplicar código en cada componente que necesite protección.

Beneficios:
- **Reutilización de lógica:** Evita la duplicación de código al compartir lógica entre componentes.
- **Separación de preocupaciones:** Separa la lógica de presentación de la lógica de negocio o de datos.
- **Componibilidad:** Permite combinar múltiples HOCs para construir componentes complejos.
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
    <div class="flex min-h-screen">
      <div class="w-1/2 p-4 overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4">Higher-Order Component Pattern</h2>
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
