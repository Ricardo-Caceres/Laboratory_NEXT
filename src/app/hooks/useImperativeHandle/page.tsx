import ParentComponent from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useImperativeHandle** es un Hook avanzado que personaliza el valor de la instancia que se expone a los componentes padres cuando se usa con forwardRef. Permite controlar exactamente qué métodos o propiedades son accesibles desde el componente padre.

Características principales:
- **Control de API:** Define qué se expone al componente padre
- **Encapsulación:** Oculta la implementación interna
- **Customización de ref:** Crea una interfaz personalizada
- **Abstracción:** Permite exponer solo métodos específicos

Casos de uso comunes:
- Librerías de componentes que necesitan exponer APIs específicas
- Componentes de formulario con métodos de validación
- Componentes con lógica compleja que necesitan control externo
- Integración con librerías imperativas de terceros
- Componentes multimedia (video, audio) con controles personalizados

**Sintaxis:**
\`useImperativeHandle(ref, () => ({ /* API personalizada */ }), [deps]);\`

**Requisitos:**
- Debe usarse con \`React.forwardRef\`
- El componente padre debe pasar un ref

**Patrón típico:**
\`\`\`typescript
const Component = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => { /* lógica */ },
    reset: () => { /* lógica */ }
  }));
  return <div>...</div>;
});
\`\`\`

**Ventajas:**
- Mayor control sobre la API expuesta
- Mejor encapsulación
- Facilita el testing
- Documentación más clara de capacidades

**Cuándo NO usarlo:**
- Para la mayoría de casos (usa props y callbacks normales)
- Cuando puedes resolver el problema con props
- Si no necesitas acceso imperativo desde el padre

**Importante:**
- Prefiere el flujo de datos declarativo (props/state)
- Usa este Hook solo cuando realmente necesites acceso imperativo
- Documenta bien la API que expones

En este ejemplo, demostramos cómo useImperativeHandle permite que un componente padre controle el focus de un input en un componente hijo, exponiendo solo el método \`focusInput\` en lugar de toda la referencia del DOM.
`;

export default function UseImperativeHandlePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useImperativeHandle Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useImperativeHandle/_client_example.tsx', 'src/app/hooks/useImperativeHandle/MyInput.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <ParentComponent />
      </div>
    </div>
  );
}
