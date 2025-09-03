import HomePage from './_client_example';
import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
Atomic Design es una metodología para construir sistemas de diseño robustos y jerárquicos. Descompone la interfaz de usuario en cinco niveles distintos:

1.  **Átomos:** Los bloques de construcción más pequeños (ej. botones, inputs, etiquetas).
2.  **Moléculas:** Grupos de átomos unidos que funcionan como una unidad (ej. un formulario de búsqueda con un input y un botón).
3.  **Organismos:** Grupos de moléculas y/o átomos que forman una sección distinta de una interfaz (ej. una cabecera con un logo y un formulario de búsqueda).
4.  **Plantillas:** Composiciones de organismos que forman el esqueleto de una página, sin contenido real.
5.  **Páginas:** Instancias de plantillas con contenido real, mostrando cómo se verá la interfaz final.

Este enfoque promueve la reutilización, la consistencia y la escalabilidad en el desarrollo de interfaces de usuario.
`;

const filePaths = [
  'src/app/architectures/atomic-design/_client_example.tsx',
  'src/app/architectures/atomic-design/components/atoms/Button.tsx',
  'src/app/architectures/atomic-design/components/atoms/Input.tsx',
  'src/app/architectures/atomic-design/components/molecules/SearchForm.tsx',
  'src/app/architectures/atomic-design/components/organisms/Header.tsx',
  'src/app/architectures/atomic-design/components/templates/MainLayout.tsx',
];

export default function AtomicDesignPage() {
  return (
    <ArchitecturePageLayout
      title="Atomic Design Architecture"
      description={description}
      filePaths={filePaths}
      ClientExample={HomePage}
    />
  );
}
