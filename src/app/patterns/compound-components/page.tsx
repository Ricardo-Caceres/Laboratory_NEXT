import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

const description = `
El patrón de Componentes Compuestos (Compound Components) permite crear componentes que trabajan juntos para lograr una funcionalidad compartida, pero que internamente mantienen su estado y lógica. Esto proporciona una API flexible y expresiva para los consumidores del componente, permitiéndoles organizar y estructurar la interfaz de usuario de una manera declarativa.

En este ejemplo, el componente 'Accordion' es un componente compuesto que expone 'Accordion.Item', 'Accordion.Header' y 'Accordion.Body'. Estos subcomponentes se comunican implícitamente a través de un contexto compartido ('AccordionContext'), lo que les permite coordinar su comportamiento (por ejemplo, qué elemento del acordeón está abierto) sin pasar props explícitamente a través de múltiples niveles.

Beneficios:
- **Flexibilidad:** Los consumidores tienen control total sobre la estructura y el orden de los subcomponentes.
- **Separación de preocupaciones:** La lógica interna del acordeón se encapsula, mientras que la presentación se delega a los subcomponentes.
- **Reusabilidad:** Los subcomponentes pueden ser reutilizados en diferentes contextos o con diferentes estilos.
`;

export default function CompoundComponentsPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Compound Components Pattern</h2>
        <p className="mb-4 whitespace-pre-wrap">{description}</p>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay filePaths={['src/app/patterns/compound-components/_client_example.tsx', 'src/app/patterns/compound-components/AccordionContext.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MyPage />
      </div>
    </div>
  );
}
