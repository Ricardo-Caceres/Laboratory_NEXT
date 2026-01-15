import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ContainerPresentationalPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Container/Presentational Pattern"
        description="🎭 **Container/Presentational Pattern** - Separation of Concerns en React

El patrón Container/Presentational separa componentes en dos categorías: **Containers** (lógica y estado) y **Presentational** (UI pura). Popularizado por Dan Abramov en 2015, fue fundamental pre-Hooks y sigue siendo valioso para arquitecturas complejas.

**🎯 ¿Cuándo usarlo?**
- Separar **lógica de negocio** de **presentación**
- Maximizar **componentes reutilizables** sin lógica
- Facilitar **testing** independiente de UI y lógica
- Aplicaciones con **múltiples fuentes de datos**
- Migrar de **class components** a functional components gradualmente

**🔑 Conceptos Clave:**
- **Container (Smart)**: Maneja estado, data fetching, lógica de negocio
- **Presentational (Dumb)**: Solo UI, recibe todo vía props, stateless
- **Separation**: Lógica y presentación completamente desacopladas
- **Composition**: Containers componen Presentationals

**✅ Ventajas:**
- 🧪 **Testeable**: Presentational fácil de testear (pure functions)
- ♻️ **Reutilizable**: Presentational puede usarse en múltiples contexts
- 📦 **Mantenible**: Cambios de UI no afectan lógica y viceversa
- 🎯 **Single Responsibility**: Cada tipo una responsabilidad clara
- 👁️ **Legible**: Código más fácil de entender y razonar

**📐 Estructura:**
\`\`\`typescript
// Presentational Component (UI only)
function UserList({ users, onDelete }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// Container Component (Logic + Data)
function UserListContainer() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(u => u.id !== id));
    });
  };
  
  return <UserList users={users} onDelete={handleDelete} />;
}
\`\`\`

**💡 Casos de Uso Reales:**
- **Redux**: connect() HOC crea containers automáticamente
- **Apollo/GraphQL**: Query/Mutation components son containers
- **Form Libraries**: Formik separates form logic from UI
- **Data Tables**: Logic de sorting/filtering separada de tabla UI
- **Dashboard**: Widgets presentational, dashboard container

**🆚 Container/Presentational vs Hooks:**
Con Hooks (2019+), este patrón evolucionó:
- **Antes**: Container class, Presentational function
- **Ahora**: Custom Hooks (lógica) + Functional Components (UI)
- **Ventaja Hooks**: Menos boilerplate, más composición

**Patrón moderno equivalente:**
\`\`\`typescript
// Custom Hook (reemplaza Container logic)
function useUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => fetchUsers().then(setUsers), []);
  const deleteUser = (id) => { /* ... */ };
  return { users, deleteUser };
}

// Component (Presentational + hook)
function UserList() {
  const { users, deleteUser } = useUsers();
  return <ul>{/* ... */}</ul>;
}
\`\`\`

**⚠️ Consideraciones:**
- Con Hooks, menos necesario pero aún útil para componentes complejos
- No sobre-abstraer: a veces un componente simple es mejor
- Considerar Custom Hooks para nueva lógica compartida

**Ejemplo del código:**
Container fetches users de API, maneja loading/error states. Presentational solo renderiza la lista con estilos, completamente reusable."
        codeContent={[
          {
            filePath: 'patterns/container-presentational-basic.tsx',
            content: `// Presentational Component (Dumb/Pure UI)
interface UserListProps {
  users: Array<{ id: number; name: string; email: string }>;
  loading: boolean;
  error: string | null;
  onRefresh?: () => void;
}

function UserListPresentation({ 
  users, 
  loading, 
  error,
  onRefresh 
}: UserListProps) {
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return <ErrorMessage message={error} onRetry={onRefresh} />;
  }
  
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// Container Component (Smart/Stateful Logic)
function UserListContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <UserListPresentation 
      users={users}
      loading={loading}
      error={error}
      onRefresh={fetchUsers}
    />
  );
}

export default UserListContainer;`,
          },
          {
            filePath: 'patterns/modern-with-hooks.tsx',
            content: `// Modern approach: Custom Hook + Component
// Custom Hook (Container logic extracted)
function useUserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await fetch('/api/users').then(r => r.json());
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => { fetchUsers(); }, []);
  
  return { users, loading, error, refetch: fetchUsers };
}

// Component (still presentational but uses hook)
function UserList() {
  const { users, loading, error, refetch } = useUserList();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Or keep Presentational pure for maximum reusability
function UserListPure({ users }: { users: User[] }) {
  return (
    <div className="user-list">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

// Use in different contexts
function DashboardWidget() {
  const { users } = useUserList();
  return <UserListPure users={users.slice(0, 5)} />;
}

function FullUserPage() {
  const { users, loading } = useUserList();
  return loading ? <Spinner /> : <UserListPure users={users} />;
}`,
          },
          {
            filePath: 'patterns/testing-benefits.test.tsx',
            content: `// Testing benefits of separation
import { render, screen } from '@testing-library/react';

// ✅ Easy to test Presentational (no mocking needed)
describe('UserListPresentation', () => {
  it('renders users', () => {
    const users = [
      { id: 1, name: 'John', email: 'john@example.com' }
    ];
    
    render(<UserListPresentation users={users} loading={false} error={null} />);
    
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
  
  it('shows loading state', () => {
    render(<UserListPresentation users={[]} loading={true} error={null} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
  
  it('shows error state', () => {
    render(<UserListPresentation users={[]} loading={false} error="Failed" />);
    expect(screen.getByText(/Failed/)).toBeInTheDocument();
  });
});

// Container testing requires mocking fetch
describe('UserListContainer', () => {
  it('fetches and displays users', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'John', email: 'john@example.com' }])
      })
    ) as jest.Mock;
    
    render(<UserListContainer />);
    
    expect(await screen.findByText('John')).toBeInTheDocument();
  });
});`,
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
  title: 'Container/Presentational Pattern | Design Patterns',
  description: '🎭 Separation of Concerns en React - Divide componentes en Container (lógica/data) y Presentational (UI pura). Facilita testing, reutilización y mantenimiento. Patrón fundamental pre-Hooks que sigue siendo relevante en arquitecturas complejas',
};
