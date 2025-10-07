import Counter from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useState** es el Hook más básico y fundamental de React. Permite agregar estado local a componentes funcionales. Antes de los Hooks, solo los componentes de clase podían tener estado.

Características principales:
- **Estado local:** Cada componente mantiene su propio estado independiente
- **Re-renderizado:** Cuando el estado cambia, React re-renderiza el componente automáticamente
- **Inicialización:** Puedes inicializar el estado con un valor o una función
- **Actualizaciones:** El estado se actualiza de forma asíncrona y puede basarse en el valor anterior

Casos de uso comunes:
- Formularios y inputs controlados
- Toggles y switches
- Contadores y acumuladores
- Estados de UI simples (modales, dropdowns, etc.)

**Sintaxis:**
\`const [state, setState] = useState(initialValue);\`

En este ejemplo, creamos un contador simple que demuestra cómo usar useState para manejar el estado de un número que puede incrementarse o decrementarse.
`;

const filePaths = [
  'src/app/hooks/useState/_client_example.tsx',
];

export default function UseStatePage() {
  return (
    <HookPageLayout
      title="useState Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={Counter}
    />
  );
}
