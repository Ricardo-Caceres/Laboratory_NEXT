import MouseTracker from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

const description = `
El patrón de Render Props (Propiedades de Renderizado) es una técnica para compartir código entre componentes de React utilizando una prop cuya función es renderizar algo. En lugar de pasar un componente ya renderizado, se pasa una función que devuelve un elemento React.

En este ejemplo, el componente 'Mouse' no renderiza nada por sí mismo, sino que pasa el estado actual de la posición del ratón a través de su prop 'render'. El componente 'MouseTracker' utiliza esta prop para definir cómo se debe renderizar la posición del ratón, desacoplando la lógica de seguimiento del ratón de su representación visual.

Beneficios:
- **Reutilización de lógica:** Permite compartir lógica de comportamiento (como el seguimiento del ratón) entre componentes sin acoplamiento.
- **Flexibilidad:** El componente que recibe la render prop tiene control total sobre cómo se renderiza la lógica compartida.
- **Componibilidad:** Se pueden combinar fácilmente con otros componentes y patrones.
`;

export default function RenderPropsPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Render Props Pattern</h2>
        <p className="mb-4 whitespace-pre-wrap">{description}</p>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay filePaths={['src/app/patterns/render-props/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MouseTracker />
      </div>
    </div>
  );
}
