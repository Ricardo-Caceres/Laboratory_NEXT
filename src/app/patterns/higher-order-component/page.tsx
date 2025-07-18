import MyPage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

const description = `
El patrón de Componente de Orden Superior (Higher-Order Component - HOC) es una técnica avanzada en React para reutilizar la lógica de componentes. Los HOCs son funciones que toman un componente como entrada y devuelven un nuevo componente con props o comportamientos adicionales.

En este ejemplo, 'withAuth' es un HOC que añade lógica de autenticación a cualquier componente que envuelva. Si el usuario no está autenticado, muestra un mensaje; de lo contrario, renderiza el componente envuelto. Esto permite reutilizar la lógica de autenticación sin duplicar código en cada componente que necesite protección.

Beneficios:
- **Reutilización de lógica:** Evita la duplicación de código al compartir lógica entre componentes.
- **Separación de preocupaciones:** Separa la lógica de presentación de la lógica de negocio o de datos.
- **Componibilidad:** Permite combinar múltiples HOCs para construir componentes complejos.
`;

export default function HigherOrderComponentPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Higher-Order Component Pattern</h2>
        <p className="mb-4 whitespace-pre-wrap">{description}</p>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay filePaths={['src/app/patterns/higher-order-component/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MyPage />
      </div>
    </div>
  );
}
