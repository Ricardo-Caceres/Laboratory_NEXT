import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ConditionalRenderingPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Conditional Rendering"
        description="🔀 **Conditional Rendering** - Múltiples técnicas para mostrar/ocultar UI

Conditional Rendering es el patrón fundamental en React para renderizar diferentes UI basándose en condiciones. React ofrece múltiples técnicas, cada una con casos de uso específicos y trade-offs de legibilidad.

**🎯 Técnicas principales:**
- **&& Operator**: Para mostrar algo O nada
- **Ternary (?:)**: Para elegir entre DOS opciones  
- **If/Else**: Para lógica compleja o múltiples statements
- **Switch**: Para múltiples condiciones mutuamente exclusivas
- **Enums/Objects**: Para mapear estados a componentes

**✅ && Operator:**
\`\`\`tsx
{isLoggedIn && <Dashboard />}
{count > 0 && <Badge count={count} />}
\`\`\`

**✅ Ternary Operator:**
\`\`\`tsx
{isLoading ? <Spinner /> : <Content />}
{user ? <Welcome /> : <Login />}
\`\`\`

**✅ Object Mapping:**
\`\`\`tsx
const components = {
  loading: <Spinner />,
  error: <Error />,
  success: <Data />
};
return components[status];
\`\`\`

**⚠️ Cuidado con 0:**
\`\`\`tsx
{count && <Badge />}  // ❌ Renderiza '0'
{count > 0 && <Badge />}  // ✅ Correcto
\`\`\`"
        codeContent={[
          {
            filePath: 'patterns/conditional-basic.tsx',
            content: `// && Operator
{isLoggedIn && <Dashboard />}
{message && <Alert>{message}</Alert>}

// Ternary
{isLoading ? <Spinner /> : <Content />}

// Object Mapping
const statusComponents = {
  loading: <Spinner />,
  error: <Error />,
  success: <Data />
};
return statusComponents[status];`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

export const metadata = {
  title: 'Conditional Rendering Patterns | Design Patterns',
  description: 'Master different techniques for conditional rendering in React',
};
