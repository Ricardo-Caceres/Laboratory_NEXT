import Counter from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

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

export default function UseStatePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useState Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useState/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <Counter />
      </div>
    </div>
  );
}
