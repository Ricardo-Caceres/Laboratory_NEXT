import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ProviderPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Provider Pattern"
        description="🌐 **Provider Pattern** - Elimina prop drilling con React Context

El Provider Pattern usa React Context API para compartir datos a través del árbol de componentes sin pasar props manualmente en cada nivel. Es la base arquitectónica de Redux, React Query, Theme Providers, i18n y cualquier estado global.

**🎯 ¿Cuándo usarlo?**
- **Evitar prop drilling** (pasar props 5+ niveles)
- **Estado global** accesible desde cualquier componente
- **Temas** (dark/light mode)
- **Autenticación** (user data, permissions)
- **Internacionalización** (i18n, locale)
- **Feature flags** y configuración global

**🔑 Conceptos Clave:**
- **Context**: Contenedor de datos compartidos
- **Provider**: Componente que provee el valor del Context
- **Consumer/Hook**: Forma de acceder al Context (<code>useContext</code>)
- **Value**: Datos que se comparten
- **Re-render**: Componentes que usan Context se re-renderizan cuando value cambia

**✅ Ventajas:**
- 🚫 **No Prop Drilling**: Pasa datos directo a componentes profundos
- 🌍 **Global State**: Accesible desde cualquier parte del árbol
- 🧩 **Composable**: Múltiples Providers pueden anidarse
- 📦 **Encapsulated**: Lógica de estado centralizada
- 🎯 **Type-Safe**: TypeScript garantiza tipos correctos

**📐 Estructura:**
\`\`\`typescript
// 1. Crear Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Crear Provider Component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Crear Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// 4. Usar en componentes
function Button() {
  const { theme } = useTheme();
  return <button className={theme}>Click</button>;
}

// 5. Envolver app con Provider
<ThemeProvider>
  <App />
</ThemeProvider>
\`\`\`

**💡 Casos de Uso Reales:**
- **Redux**: <code>&lt;Provider store={store}&gt;</code>
- **React Query**: <code>&lt;QueryClientProvider&gt;</code>
- **React Router**: <code>&lt;BrowserRouter&gt;</code>
- **Auth0**: <code>&lt;Auth0Provider&gt;</code>
- **i18next**: <code>&lt;I18nextProvider&gt;</code>
- **Theme UI**: <code>&lt;ThemeProvider&gt;</code>

**🆚 Provider vs Props:**
| Aspect | Provider | Props |
|--------|----------|-------|
| Passing Data | Direct access | Through every level |
| Boilerplate | One Provider | Props at each level |
| Re-renders | Only consumers | All intermediates |
| Best For | Global state | Local/nearby data |

**⚠️ Consideraciones - Performance:**
```typescript
// ❌ BAD: Creates new object every render
<ThemeContext.Provider value={{ theme, setTheme }}>

// ✅ GOOD: Memoize value
const value = useMemo(() => ({ theme, setTheme }), [theme]);
<ThemeContext.Provider value={value}>
```

**⚠️ Consideraciones - Context Splitting:**
```typescript
// ❌ BAD: One massive context
<AppContext.Provider value={{ user, theme, locale, settings }}>

// ✅ GOOD: Split by concern
<UserProvider>
  <ThemeProvider>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </ThemeProvider>
</UserProvider>
```

**🔥 Best Practices:**
1. **Always create custom hook**: <code>useTheme()</code> vs <code>useContext(ThemeContext)</code>
2. **Throw error if no provider**: Catch usage outside Provider
3. **Memoize value**: Prevent unnecessary re-renders
4. **Split contexts**: Separate concerns (user, theme, etc)
5. **Colocate**: Provider cerca de donde se usa
6. **Type-safe**: Use TypeScript para value type

**🆚 Context vs State Management Libraries:**
- **Context**: Built-in, simple, suficiente para la mayoría
- **Redux/Zustand**: DevTools, middleware, time-travel debugging
- **Recomendación**: Start con Context, migrate si necesitas features avanzadas

**Ejemplo del código:**
ThemeProvider que comparte tema (light/dark/blue) globalmente. Cualquier componente puede cambiar tema con <code>useTheme()</code> sin prop drilling."
        codeContent={[
          {
            filePath: 'patterns/provider-basic.tsx',
            content: `import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define types
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// 2. Create Context with default undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  
  // Memoize value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Create custom hook with error handling
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// 5. Use in components (no prop drilling!)
function Button() {
  const { theme } = useTheme();
  
  return (
    <button className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      Click me
    </button>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle {theme}
    </button>
  );
}

// 6. Wrap app
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main>
        <Button />
        <ThemeToggle />
      </Main>
    </ThemeProvider>
  );
}`,
          },
          {
            filePath: 'patterns/provider-auth.tsx',
            content: `// Real-world: Auth Provider
import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token).then(setUser).finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);
  
  const login = async (email: string, password: string) => {
    const { token, user } = await authAPI.login(email, password);
    localStorage.setItem('token', token);
    setUser(user);
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be within AuthProvider');
  return context;
}

// Protected Route
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return <Spinner />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  return <>{children}</>;
}

// Admin-only Component
function AdminPanel() {
  const { user } = useAuth();
  
  if (user?.role !== 'admin') {
    return <div>Access Denied</div>;
  }
  
  return <div>Admin Panel</div>;
}`,
          },
          {
            filePath: 'patterns/provider-composition.tsx',
            content: `// Multiple Providers Composition
function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <LocaleProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </LocaleProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// Usage
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);

// Or use a Provider Composer utility
const composeProviders = (...providers: React.ComponentType<any>[]) => {
  return providers.reduce(
    (Prev, Curr) => ({ children }) => (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    )
  );
};

const AllProviders = composeProviders(
  QueryClientProvider,
  AuthProvider,
  ThemeProvider,
  LocaleProvider
);

root.render(
  <AllProviders>
    <App />
  </AllProviders>
);`,
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
  title: 'Provider Pattern | Design Patterns',
  description: '🌐 Context API Provider Pattern - Elimina prop drilling compartiendo estado global a través del árbol de componentes. La base arquitectónica de Redux, React Query, Theme Providers y i18n. Esencial para aplicaciones escalables',
};
