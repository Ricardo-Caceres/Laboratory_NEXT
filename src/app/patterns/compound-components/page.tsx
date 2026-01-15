import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { promises as fs } from 'fs';
import path from 'path';

const description = `
🧩 **Compound Components Pattern** - El patrón arquitectónico que revoluciona la composición de componentes en React

El patrón de Componentes Compuestos es una de las técnicas más poderosas y elegantes para diseñar APIs de componentes en React. Permite crear familias de componentes que trabajan juntos de manera armoniosa, compartiendo estado implícito a través de Context API, mientras mantienen una API externa limpia, intuitiva y altamente flexible.

**🎯 ¿Qué problema resuelve?**
Cuando construyes componentes complejos como Accordions, Tabs, Dropdowns o Modals, típicamente te enfrentas a un dilema: ¿Pasas 50 props para cada caso de uso posible, o creas múltiples componentes específicos? Los Compound Components ofrecen una tercera vía superior: una API declarativa y componible.

**⚙️ ¿Cómo funciona?**
En este ejemplo, el componente 'Accordion' es un componente compuesto que expone 'Accordion.Item', 'Accordion.Header' y 'Accordion.Body'. Estos subcomponentes se comunican implícitamente a través de un contexto compartido ('AccordionContext'), coordinando su comportamiento (qué elemento está abierto) sin pasar props explícitamente a través de múltiples niveles. El usuario del componente nunca ve esta complejidad - solo ve una API intuitiva.

**✨ Beneficios Clave:**
- **🎨 Flexibilidad Total:** Los consumidores tienen control absoluto sobre la estructura, orden y presentación de los subcomponentes. Puedes reordenar, estilizar o incluso omitir subcomponentes según tus necesidades.
- **🔒 Encapsulación:** La lógica interna (estado, eventos, coordinación) está completamente encapsulada. Los cambios internos no rompen la API externa.
- **♻️ Reutilización Avanzada:** Los subcomponentes pueden ser reutilizados en diferentes contextos, combinados de formas inesperadas, o envueltos con estilos personalizados.
- **📖 API Intuitiva:** La API se lee como HTML semántico. Es auto-documentada y fácil de entender: <Accordion><Accordion.Item><Accordion.Header>...</Accordion.Header></Accordion.Item></Accordion>
- **🧪 Testabilidad:** Cada subcomponente puede ser testeado de forma aislada, y la lógica compartida está centralizada.
- **🎭 Inversion of Control:** El consumidor controla el renderizado, pero el componente gestiona la complejidad interna.

**🏢 Casos de Uso Reales:**
- Design Systems: Componentes UI complejos (React Aria, Radix UI, Headless UI)
- Form Libraries: React Hook Form, Formik
- Data Tables: TanStack Table
- Navigation: React Router (<Routes><Route /></Routes>)
- Layouts: Frameworks como Chakra UI, Material UI

**⚡ Cuándo NO usar este patrón:**
- Componentes simples con 2-3 props
- Cuando la relación entre componentes no es clara
- Si necesitas compatibilidad con frameworks que no soportan Context

**🔥 Tips Pro:**
- Combina con TypeScript para type-safe APIs
- Usa displayName para mejor debugging
- Considera agregar validación de children con React.Children
- Documenta qué subcomponentes son requeridos vs opcionales
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
    <div className="flex min-h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Compound Components Pattern</h2>
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
