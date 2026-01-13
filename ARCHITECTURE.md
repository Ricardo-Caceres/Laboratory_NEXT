# Arquitectura y Estándares de Desarrollo
# DevKit Laboratory - Enero 2026

## Tabla de Contenidos
1. [Principios de Arquitectura](#principios-de-arquitectura)
2. [Patrones Implementados](#patrones-implementados)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Estándares de Código](#estándares-de-código)
5. [Guías de Desarrollo](#guías-de-desarrollo)

## Principios de Arquitectura

### SOLID Principles

#### 1. Single Responsibility Principle (SRP)
Cada componente, función o módulo tiene una única responsabilidad.

**Ejemplo en el proyecto:**
```typescript
// ❌ Componente con múltiples responsabilidades
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  // Fetching user
  useEffect(() => { fetchUser() }, []);
  // Fetching posts
  useEffect(() => { fetchPosts() }, []);
  
  return (
    <div>
      <UserProfile user={user} />
      <PostsList posts={posts} />
    </div>
  );
};

// ✅ Responsabilidades separadas
const UserDashboard = () => {
  return (
    <div>
      <UserProfileContainer />
      <PostsListContainer />
    </div>
  );
};

const UserProfileContainer = () => {
  const { user, loading } = useUser();
  if (loading) return <Spinner />;
  return <UserProfileView user={user} />;
};
```

#### 2. Open/Closed Principle (OCP)
Abierto para extensión, cerrado para modificación.

**Ejemplo en el proyecto:**
```typescript
// ✅ Extensible mediante props y composición
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
}

export const Button = ({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded`}
    >
      {children}
    </button>
  );
};
```

#### 3. Liskov Substitution Principle (LSP)
Los subtipos deben ser sustituibles por sus tipos base.

**Ejemplo en el proyecto:**
```typescript
// Interfaz base
interface Renderable {
  render: () => JSX.Element;
}

// Implementaciones que respetan el contrato
class Card implements Renderable {
  render() {
    return <div className="card">Card Content</div>;
  }
}

class Modal implements Renderable {
  render() {
    return <div className="modal">Modal Content</div>;
  }
}

// Función que acepta cualquier Renderable
const renderComponent = (component: Renderable) => {
  return component.render();
};
```

#### 4. Interface Segregation Principle (ISP)
Interfaces específicas mejor que generales.

**Ejemplo en el proyecto:**
```typescript
// ❌ Interfaz muy grande
interface ComponentProps {
  title: string;
  onClick?: () => void;
  data?: any[];
  loading?: boolean;
  error?: Error;
  onSubmit?: (data: FormData) => void;
}

// ✅ Interfaces segregadas
interface TitleProps {
  title: string;
}

interface ClickableProps {
  onClick: () => void;
}

interface DataProps<T> {
  data: T[];
  loading: boolean;
  error?: Error;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

// Componentes usan solo lo que necesitan
const Title = ({ title }: TitleProps) => <h1>{title}</h1>;
const ClickableCard = ({ onClick, title }: ClickableProps & TitleProps) => {/*...*/};
```

#### 5. Dependency Inversion Principle (DIP)
Depender de abstracciones, no de implementaciones concretas.

**Ejemplo en el proyecto:**
```typescript
// ✅ Abstracción mediante interfaces
interface DataFetcher {
  fetch: (id: string) => Promise<Data>;
}

class APIFetcher implements DataFetcher {
  async fetch(id: string) {
    const response = await fetch(`/api/data/${id}`);
    return response.json();
  }
}

class MockFetcher implements DataFetcher {
  async fetch(id: string) {
    return mockData[id];
  }
}

// Componente depende de la abstracción
const DataDisplay = ({ fetcher }: { fetcher: DataFetcher }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetcher.fetch('123').then(setData);
  }, [fetcher]);
  
  return <div>{/* render data */}</div>;
};
```

## Patrones Implementados

### 1. Container/Presentational Pattern

**Propósito:** Separar lógica de negocio de la presentación visual.

**Implementación:**
```typescript
// Container - Maneja estado y lógica
const UserListContainer = () => {
  const { users, loading, error, refetch } = useUsers();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;
  if (users.length === 0) return <EmptyState />;
  
  return <UserListView users={users} />;
};

// Presentational - Solo UI
interface UserListViewProps {
  users: User[];
}

const UserListView = ({ users }: UserListViewProps) => (
  <ul className="user-list">
    {users.map(user => (
      <li key={user.id}>
        <UserCard user={user} />
      </li>
    ))}
  </ul>
);
```

### 2. Compound Components Pattern

**Propósito:** Crear componentes flexibles mediante composición.

**Implementación:**
```typescript
interface TabsContextValue {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export const Tabs = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.List = ({ children }: PropsWithChildren) => (
  <div className="tabs-list" role="tablist">{children}</div>
);

Tabs.Tab = ({ index, children }: { index: number; children: ReactNode }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');
  
  const isActive = context.activeTab === index;
  
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => context.setActiveTab(index)}
      className={isActive ? 'active' : ''}
    >
      {children}
    </button>
  );
};

Tabs.Panel = ({ index, children }: { index: number; children: ReactNode }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Panel must be used within Tabs');
  
  if (context.activeTab !== index) return null;
  
  return (
    <div role="tabpanel" className="tab-panel">
      {children}
    </div>
  );
};

// Uso
<Tabs>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel index={0}>Content 1</Tabs.Panel>
  <Tabs.Panel index={1}>Content 2</Tabs.Panel>
</Tabs>
```

### 3. Custom Hooks Pattern

**Propósito:** Reutilizar lógica con estado entre componentes.

**Implementación:**
```typescript
interface UseToggleReturn {
  isOn: boolean;
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
}

/**
 * Hook para manejar estados booleanos
 */
export const useToggle = (initialValue = false): UseToggleReturn => {
  const [isOn, setIsOn] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setIsOn(prev => !prev);
  }, []);
  
  const setOn = useCallback(() => {
    setIsOn(true);
  }, []);
  
  const setOff = useCallback(() => {
    setIsOn(false);
  }, []);
  
  return { isOn, toggle, setOn, setOff };
};

// Uso en componentes
const Modal = () => {
  const { isOn: isOpen, toggle, setOff } = useToggle(false);
  
  return (
    <>
      <button onClick={toggle}>Open Modal</button>
      {isOpen && <ModalContent onClose={setOff} />}
    </>
  );
};
```

### 4. Factory Pattern

**Propósito:** Crear objetos sin especificar la clase exacta.

**Implementación:**
```typescript
interface Notification {
  id: string;
  message: string;
  render: () => JSX.Element;
}

class SuccessNotification implements Notification {
  constructor(public id: string, public message: string) {}
  
  render() {
    return (
      <div className="notification success">
        <CheckIcon /> {this.message}
      </div>
    );
  }
}

class ErrorNotification implements Notification {
  constructor(public id: string, public message: string) {}
  
  render() {
    return (
      <div className="notification error">
        <XIcon /> {this.message}
      </div>
    );
  }
}

class NotificationFactory {
  static create(type: 'success' | 'error', message: string): Notification {
    const id = crypto.randomUUID();
    
    switch (type) {
      case 'success':
        return new SuccessNotification(id, message);
      case 'error':
        return new ErrorNotification(id, message);
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

// Uso
const notification = NotificationFactory.create('success', 'Saved!');
```

### 5. Observer Pattern

**Propósito:** Notificar a múltiples objetos sobre cambios.

**Implementación:**
```typescript
type Observer<T> = (data: T) => void;

class Observable<T> {
  private observers: Set<Observer<T>> = new Set();
  
  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    
    // Retorna función de cleanup
    return () => {
      this.observers.delete(observer);
    };
  }
  
  notify(data: T): void {
    this.observers.forEach(observer => observer(data));
  }
}

// Implementación con React
const useObservable = <T,>(observable: Observable<T>) => {
  const [data, setData] = useState<T | null>(null);
  
  useEffect(() => {
    const unsubscribe = observable.subscribe(setData);
    return unsubscribe;
  }, [observable]);
  
  return data;
};

// Uso
const userObservable = new Observable<User>();

const UserProfile = () => {
  const user = useObservable(userObservable);
  
  return <div>{user?.name}</div>;
};
```

## Estructura del Proyecto

### Organización de Carpetas

```
Laboratory_NEXT/
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── layout.tsx               # Layout raíz con Navbar y Breadcrumbs
│   │   ├── page.tsx                 # Homepage
│   │   ├── hooks/                   # Ejemplos de React Hooks
│   │   │   ├── useState/
│   │   │   │   └── page.tsx
│   │   │   ├── useEffect/
│   │   │   └── ...
│   │   ├── patterns/                # Design Patterns
│   │   │   ├── factory-pattern/
│   │   │   ├── observer-pattern/
│   │   │   └── ...
│   │   └── architectures/           # Software Architectures
│   │       ├── clean-architecture/
│   │       ├── hexagonal-architecture/
│   │       └── ...
│   ├── components/                  # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── CodeDisplay.tsx
│   │   ├── HookPageLayout.tsx
│   │   └── ArchitecturePageLayout.tsx
│   └── lib/                         # Utilidades (crear según necesidad)
│       ├── utils/
│       ├── hooks/
│       ├── constants/
│       └── types/
├── public/                          # Assets estáticos
├── .cursorrules                     # Reglas para Cursor AI
├── .claude                          # Reglas para Claude AI
├── .agents                          # Guías para AI Agents
├── README.md                        # Documentación principal
└── package.json                     # Dependencias
```

### Convenciones de Archivos

- **Componentes:** PascalCase (`UserProfile.tsx`)
- **Hooks:** camelCase con prefijo `use` (`useLocalStorage.ts`)
- **Utilidades:** camelCase (`formatDate.ts`)
- **Páginas:** `page.tsx` (App Router)
- **Layouts:** `layout.tsx` (App Router)
- **Loading:** `loading.tsx` (App Router)
- **Errors:** `error.tsx` (App Router)

## Estándares de Código

### TypeScript

```typescript
// ✅ Siempre usar tipos estrictos
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// ✅ Tipos explícitos en funciones
const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

// ✅ Generics con restricciones
function identity<T extends object>(arg: T): T {
  return arg;
}

// ❌ Evitar any
const badFunction = (data: any) => {}; // PROHIBIDO

// ✅ Usar unknown si el tipo es realmente desconocido
const parseData = (data: unknown): ParsedData => {
  if (!isValidData(data)) {
    throw new Error('Invalid data');
  }
  return data as ParsedData;
};
```

### React Components

```typescript
// ✅ Componente funcional con tipos
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

// ✅ Exportar tipos para reutilización
export type { ButtonProps };
```

### Next.js 15 App Router

```typescript
// ✅ Server Component (por defecto)
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <ProductDetails product={product} />
    </div>
  );
}

// ✅ Metadata estática
export const metadata: Metadata = {
  title: 'Products - DevKit Laboratory',
  description: 'Browse our products',
};

// ✅ Metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  
  return {
    title: `${product.name} - DevKit Laboratory`,
    description: product.description,
  };
}

// ✅ Client Component cuando sea necesario
'use client';

export const InteractiveComponent = () => {
  const [count, setCount] = useState(0);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

## Guías de Desarrollo

### Performance

#### Optimización de Renders
```typescript
// ✅ Memoizar componentes costosos
const ExpensiveComponent = memo(({ data }: Props) => {
  return <ComplexVisualization data={data} />;
});

// ✅ useMemo para cálculos costosos
const sortedAndFilteredData = useMemo(() => {
  return data
    .filter(item => item.active)
    .sort((a, b) => a.priority - b.priority);
}, [data]);

// ✅ useCallback para callbacks
const handleDelete = useCallback((id: string) => {
  deleteItem(id);
}, [deleteItem]);
```

#### Code Splitting
```typescript
// ✅ Dynamic imports para componentes pesados
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Deshabilitar SSR si no es necesario
});
```

### Accesibilidad

```typescript
// ✅ Elementos semánticos
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <section>
      <h2>Section</h2>
    </section>
  </article>
</main>

// ✅ ARIA labels
<button
  onClick={handleClose}
  aria-label="Close modal"
  aria-pressed={isActive}
>
  <CloseIcon aria-hidden="true" />
</button>

// ✅ Form accessibility
<label htmlFor="email">Email</label>
<input
  type="email"
  id="email"
  aria-describedby="email-hint"
  aria-invalid={hasError}
  aria-required
/>
<span id="email-hint">We'll never share your email</span>
```

### Testing (Preparación Futura)

```typescript
// ✅ Tests de hooks
import { renderHook, act } from '@testing-library/react';

describe('useToggle', () => {
  it('should toggle value', () => {
    const { result } = renderHook(() => useToggle());
    
    expect(result.current.isOn).toBe(false);
    
    act(() => {
      result.current.toggle();
    });
    
    expect(result.current.isOn).toBe(true);
  });
});

// ✅ Tests de componentes
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Click me'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Checklist de Calidad

Antes de cada commit:

### Funcionalidad
- [ ] Cumple con los requisitos
- [ ] Maneja casos extremos
- [ ] Gestión de errores implementada
- [ ] Estados de carga implementados
- [ ] Estados vacíos considerados

### Código
- [ ] Sigue principios SOLID
- [ ] Clean Code aplicado
- [ ] No hay duplicación de código
- [ ] Separación de responsabilidades
- [ ] Componentes < 200 líneas

### TypeScript
- [ ] No usa `any`
- [ ] Funciones tipadas
- [ ] Interfaces de props definidas
- [ ] Tipos de retorno explícitos
- [ ] Generics apropiados

### React
- [ ] Dependencias de hooks correctas
- [ ] Cleanup en useEffect cuando necesario
- [ ] Sin re-renders innecesarios
- [ ] Memoización apropiada
- [ ] Keys en listas

### Next.js
- [ ] Server/Client components correctos
- [ ] Metadata proporcionada
- [ ] Imágenes optimizadas
- [ ] Estados de carga
- [ ] Error boundaries

### Accesibilidad
- [ ] HTML semántico
- [ ] ARIA labels donde se necesiten
- [ ] Navegación por teclado
- [ ] Contraste de colores
- [ ] Indicadores de foco

### Performance
- [ ] Sin renders innecesarios
- [ ] Listas grandes virtualizadas
- [ ] Imágenes con lazy loading
- [ ] Code splitting apropiado
- [ ] Tamaño de bundle considerado

### Seguridad
- [ ] Sin secretos en código
- [ ] Input validado
- [ ] Output sanitizado
- [ ] Protección CSRF
- [ ] Prevención XSS

---

**Documento:** Arquitectura y Estándares
**Proyecto:** DevKit Laboratory
**Versión:** 2.0
**Última actualización:** Enero 2026
