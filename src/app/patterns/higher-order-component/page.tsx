import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function HigherOrderComponentPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Higher-Order Component (HOC)"
        description="🎭 **Higher-Order Component (HOC)** - El patrón de composición funcional que transformó React antes de los Hooks

El patrón de Componente de Orden Superior es una técnica avanzada y poderosa en React para reutilizar lógica de componentes mediante composición funcional. Los HOCs son funciones puras que toman un componente como entrada y devuelven un nuevo componente mejorado con props, comportamientos o capacidades adicionales, sin modificar el componente original.

**🎯 ¿Qué problema resuelve?**
Antes de React Hooks (pre-2019), los HOCs eran LA solución estándar para compartir lógica entre componentes. ¿Necesitas autenticación en 10 componentes? ¿Logging? ¿Conexión a Redux? ¿Manejo de suscripciones? Los HOCs te permitían escribir esa lógica UNA vez y aplicarla a CUALQUIER componente mediante composición.

**⚙️ ¿Cómo funciona?**
En este ejemplo, 'withAuth' es un HOC que añade lógica de autenticación a cualquier componente que envuelva. Recibe un componente (WrappedComponent), retorna un nuevo componente que verifica autenticación, y solo renderiza el componente original si el usuario está autenticado. Es una función que recibe una función (componente) y retorna una función (componente mejorado).

**Patrón típico:**
<code>const EnhancedComponent = withHOC(OriginalComponent);</code>

**✨ Beneficios Clave:**
- **♻️ Máxima Reutilización:** Escribe lógica cross-cutting UNA vez, aplícala a N componentes. Zero duplicación.
- **🧩 Composición Pura:** Múltiples HOCs se pueden componer: withAuth(withLogging(withData(Component))). Es matemáticamente elegante.
- **🔒 No Invasivo:** El componente original nunca se modifica. El HOC crea una nueva versión mejorada.
- **🎯 Separación de Preocupaciones:** Lógica de negocio (autenticación, data fetching) completamente separada de UI.
- **🧪 Testing Simplificado:** Puedes testear el HOC aisladamente, y los componentes envueltos sin la lógica del HOC.
- **📦 Props Injection:** Inyecta props automáticamente sin que el componente original las solicite explícitamente.

**🏢 Casos de Uso Reales (antes de Hooks):**
- **connect()** en Redux - El HOC más famoso de React
- **withRouter()** en React Router
- **withStyles()** en Material UI v3/v4
- Authentication guards: withAuth, withPermissions
- Data fetching: withData, withSubscription
- Analytics: withTracking, withPageView
- Performance: withMemo, withErrorBoundary

**⚠️ Limitaciones y Problemas:**
- **Wrapper Hell:** compose(withA, withB, withC, withD)(Component) crea profundidad en DevTools
- **Ref Forwarding:** Requiere React.forwardRef para pasar refs correctamente
- **Props Collision:** Múltiples HOCs pueden inyectar props con el mismo nombre
- **Static Methods:** No se copian automáticamente (requiere hoist-non-react-statics)
- **Debugging:** El stack puede ser confuso con múltiples HOCs anidados

**🆚 HOCs vs Hooks (2024):**
En aplicaciones modernas, Custom Hooks han reemplazado a HOCs para la mayoría de casos de uso:
- ✅ Hooks: Mejor composición, no hay wrapper hell, refs funcionan naturalmente
- ✅ HOCs: Útiles cuando necesitas interceptar el ciclo completo de renderizado, o envolver componentes de terceros que no controlas

**🔥 Tips Pro:**
- Usa <code>displayName</code> para debugging
- Copia static methods con <code>hoist-non-react-statics</code>
- Pasa props no relacionadas al componente envuelto
- Considera usar Hooks para nuevos proyectos, HOCs para legacy o casos específicos
- HOCs aún son relevantes en 2024 para: Error Boundaries, component interception, third-party library integration

**💡 Evolución:**
HOCs → Render Props → Hooks. Cada uno resolvió problemas del anterior. HOCs siguen siendo valiosos en el toolbox de desarrolladores senior."
        codeContent={[
          {
            filePath: 'patterns/hoc-basic.tsx',
            content: `// Higher-Order Component básico
import { ComponentType } from 'react';

// HOC que añade autenticación
function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function AuthenticatedComponent(props: P) {
    const isAuthenticated = checkAuth(); // Lógica compartida
    
    if (!isAuthenticated) {
      return <div>Please log in</div>;
    }
    
    // Renderiza el componente original con todas sus props
    return <WrappedComponent {...props} />;
  };
}

// Componente simple
function Dashboard() {
  return <div>Dashboard Content</div>;
}

// Componente mejorado con autenticación
const ProtectedDashboard = withAuth(Dashboard);

// Uso
<ProtectedDashboard />

// ✨ El componente Dashboard no sabe nada de autenticación
// ✨ La lógica de auth está centralizada y reutilizable`,
          },
          {
            filePath: 'patterns/hoc-props-injection.tsx',
            content: `// HOC que inyecta props
function withUserData<P extends object>(
  WrappedComponent: ComponentType<P & { user: User }>
) {
  return function WithUserDataComponent(props: P) {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
      // Fetch user data
      fetchUser().then(setUser);
    }, []);
    
    if (!user) return <div>Loading...</div>;
    
    // Inyecta prop 'user' al componente
    return <WrappedComponent {...props} user={user} />;
  };
}

// Componente que recibe user como prop
function UserProfile({ user }: { user: User }) {
  return <div>Welcome, {user.name}!</div>;
}

// HOC inyecta automáticamente la prop 'user'
const ProfileWithData = withUserData(UserProfile);

// Uso - no necesitas pasar 'user' manualmente
<ProfileWithData />`,
          },
          {
            filePath: 'patterns/hoc-composition.tsx',
            content: `// Composición de múltiples HOCs
import { compose } from 'redux'; // o tu propia implementación

// Múltiples HOCs
const withAuth = (Component) => (props) => {
  // Lógica de autenticación
  return <Component {...props} isAuth={true} />;
};

const withLogging = (Component) => (props) => {
  useEffect(() => {
    console.log('Component rendered', props);
  });
  return <Component {...props} />;
};

const withTheme = (Component) => (props) => {
  const theme = useTheme();
  return <Component {...props} theme={theme} />;
};

// Componente base
function Dashboard(props) {
  return <div>Dashboard</div>;
}

// Composición manual (anidación)
const Enhanced = withAuth(withLogging(withTheme(Dashboard)));

// Composición con compose (más elegante)
const Enhanced = compose(
  withAuth,
  withLogging,
  withTheme
)(Dashboard);

// Uso
<Enhanced />

// ✨ Dashboard recibe props de los 3 HOCs
// ✨ Lógica de auth, logging y theme reutilizable`,
          },
          {
            filePath: 'patterns/hoc-vs-hooks.tsx',
            content: `// HOC vs Custom Hook - Mismo objetivo, diferente approach

// ❌ Approach antiguo con HOC
function withWindowSize(Component) {
  return function WithWindowSize(props) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
      const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return <Component {...props} windowSize={size} />;
  };
}

const MyComponentWithSize = withWindowSize(MyComponent);

// ✅ Approach moderno con Custom Hook
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

function MyComponent() {
  const windowSize = useWindowSize();
  return <div>Width: {windowSize.width}</div>;
}

// ✨ Hooks: Más simple, sin wrapper, mejor TypeScript
// ✨ HOCs: Útiles para wrapping completo del componente`,
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
  title: 'Higher-Order Component (HOC) | React Patterns',
  description: 'Patrón de Componente de Orden Superior - Función que toma un componente y devuelve un componente mejorado con lógica adicional'
};
