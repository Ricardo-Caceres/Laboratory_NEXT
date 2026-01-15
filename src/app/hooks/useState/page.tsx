import Counter from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useState** es el Hook más básico y fundamental de React. Permite agregar estado local a componentes funcionales. Antes de los Hooks, solo los componentes de clase podían tener estado.

**¿Qué es el estado?**

El estado es información que puede cambiar durante el ciclo de vida de un componente. Cuando el estado cambia, React automáticamente re-renderiza el componente para reflejar los nuevos valores.

**Características principales:**

- **Estado local:** Cada componente mantiene su propio estado independiente
- **Re-renderizado automático:** Cuando el estado cambia, React actualiza la UI
- **Inicialización flexible:** Puedes usar un valor directo o una función de inicialización
- **Actualizaciones asíncronas:** Las actualizaciones de estado pueden agruparse (batching)
- **Inmutabilidad:** Debes crear un nuevo estado en vez de modificar el anterior

**Casos de uso comunes:**

- Formularios y inputs controlados
- Toggles, switches y checkboxes
- Contadores y acumuladores
- Estados de UI (modales, dropdowns, tabs)
- Datos temporales antes de enviar a servidor

**Sintaxis básica:**

\`const [state, setState] = useState(initialValue);\`

- \`state\`: El valor actual del estado
- \`setState\`: Función para actualizar el estado
- \`initialValue\`: Valor inicial (puede ser cualquier tipo)

**Buenas prácticas:**

- Usa múltiples useState para estados independientes
- Nombra el setter como \`set\` + nombre del estado
- Para actualizaciones basadas en el valor anterior, usa la forma funcional
- Evita duplicar el estado (deriva valores cuando sea posible)

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
