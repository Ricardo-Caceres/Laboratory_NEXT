import HomePage from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

const description = `
Feature-Sliced Design (FSD) es una metodología de arquitectura para aplicaciones frontend que organiza el código por características (features) y por capas (layers). Su objetivo principal es hacer que el código sea escalable, mantenible y fácil de entender, especialmente en proyectos grandes.

Los principios clave de FSD incluyen:
- **Separación por características:** El código se agrupa por la funcionalidad que implementa (ej. autenticación, perfil de usuario, lista de productos).
- **Separación por capas:** Cada característica se divide en capas con responsabilidades específicas (ej. UI, lógica de negocio, API).
- **Reglas de importación:** Las capas superiores pueden importar de las inferiores, pero no al revés, lo que crea una dependencia unidireccional y previene ciclos.

En este ejemplo, tenemos:
- **entities/post:** Define la estructura de datos de un post y su componente de tarjeta (PostCard).
- **widgets/PostList:** Un componente de UI más grande que utiliza la entidad Post para mostrar una lista de posts.
- **app/page.tsx (ahora _client_example.tsx):** La página principal que integra el widget PostList.

Este enfoque ayuda a mantener la coherencia y la modularidad del código, facilitando el desarrollo en equipo y la evolución del proyecto.
`;

export default function FeatureSlicedDesignPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Feature-Sliced Design Architecture</h2>
        <p className="mb-4 whitespace-pre-wrap">{description}</p>
        <h3 className="text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay filePaths={[
          'src/app/architectures/feature-sliced-design/_client_example.tsx',
          'src/app/architectures/feature-sliced-design/widgets/PostList/ui/PostList.tsx',
          'src/app/architectures/feature-sliced-design/entities/post/ui/PostCard.tsx',
          'src/app/architectures/feature-sliced-design/entities/post/model/types.ts',
        ]} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <HomePage />
      </div>
    </div>
  );
}
