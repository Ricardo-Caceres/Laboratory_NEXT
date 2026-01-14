'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { StyledText } from '../../../components/StyledText';

const description = `
# Custom Hooks Patterns - Guía Definitiva para Nivel Elite

## 📚 ¿QUÉ son los Custom Hooks?

Los Custom Hooks son **funciones JavaScript que encapsulan lógica reutilizable** utilizando los hooks de React. Son la forma moderna de compartir comportamiento entre componentes.

**Definición Formal:**
Una función que:
1. ✅ Comienza con el prefijo "use" (convención obligatoria)
2. ✅ Puede llamar a otros Hooks de React (useState, useEffect, etc.)
3. ✅ Retorna valores, funciones, o ambos según necesidad
4. ✅ Extrae lógica stateful fuera de los componentes
5. ✅ Permite composición de comportamientos

---

## ⏰ CUÁNDO Usar Custom Hooks - Casos Específicos

### ✅ ÚSALOS CUANDO:

**1. Detectas Código Repetido (DRY Violation)**
\`\`\`typescript
// 🔴 ANTES: Repetido en 5 componentes
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setUser);
  }, []);
}

// 🟢 DESPUÉS: Un solo hook reutilizable
function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setUser);
  }, []);
  return { user, loading };
}
\`\`\`

**2. Componente con Demasiada Lógica (>100 líneas)**
- Múltiples useState/useEffect mezclados
- Lógica de negocio oscurece la UI
- Testing difícil o imposible
- Code review complicado

**3. Necesitas Testear Lógica Aisladamente**
\`\`\`typescript
// ✅ Hook testeable sin renderizar UI
import { renderHook } from '@testing-library/react-hooks';

test('useCounter increments', () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
\`\`\`

**4. Composición de Múltiples Comportamientos**
\`\`\`typescript
// Combinar hooks para funcionalidad compleja
function useAuthenticatedFetch(url) {
  const { token } = useAuth();
  const { data, error } = useFetch(url, { 
    headers: { Authorization: \`Bearer \${token}\` } 
  });
  const cache = useCache(url);
  return { data: cache.get(data), error };
}
\`\`\`

**5. Sincronizar con Sistemas Externos**
- WebSockets
- Browser APIs (localStorage, geolocation, etc.)
- Third-party libraries
- Event listeners

### ❌ NO LOS USES CUANDO:

**1. Lógica Usada Una Sola Vez**
- Código específico de un componente
- No hay beneficio de abstracción
- Premature optimization

**2. Solo Necesitas Pasar Datos (No Estado)**
\`\`\`typescript
// 🔴 INNECESARIO: No hay lógica stateful
function useUserName(user) {
  return user?.name || 'Guest';
}

// 🟢 MEJOR: Simple función helper
function getUserName(user) {
  return user?.name || 'Guest';
}
\`\`\`

**3. El Problema es Prop Drilling (Usa Context)**
\`\`\`typescript
// 🔴 MAL: Pasar datos por 5 niveles con hook
function useTheme() {
  const [theme] = useState('dark');
  return theme;
}

// 🟢 BIEN: Context para estado global
const ThemeContext = createContext();
\`\`\`

---

## 🎯 CÓMO Crear Custom Hooks - Patrones y Principios

### Principio 1: Single Responsibility Principle (SRP)
\`\`\`typescript
// ❌ MAL: Hace demasiadas cosas
function useEverything() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [cart, setCart] = useState([]);
  // ... esto es imposible de mantener
}

// ✅ BIEN: Un hook, una responsabilidad
function useUser() { /* solo manejo de usuario */ }
function usePosts() { /* solo manejo de posts */ }
function useTheme() { /* solo manejo de tema */ }
function useCart() { /* solo manejo de carrito */ }
\`\`\`

### Principio 2: API Consistente y Predecible

**Opción A: Retornar Objeto (para valores relacionados)**
\`\`\`typescript
function useAuth() {
  return { 
    user,        // Estado
    login,       // Acción
    logout,      // Acción
    isAuthenticated,  // Estado derivado
    error        // Estado de error
  };
}

// Uso: Destructuring con nombres claros
const { user, login, isAuthenticated } = useAuth();
\`\`\`

**Opción B: Retornar Array (para valores independientes)**
\`\`\`typescript
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle, setValue] as const;
}

// Uso: Nombres personalizables
const [isOpen, toggleOpen, setIsOpen] = useToggle();
\`\`\`

### Principio 3: Cleanup y Memory Leaks

**Regla de Oro: Todo setup necesita cleanup**
\`\`\`typescript
// ✅ Cleanup de Event Listeners
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // 🔑 SIEMPRE cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// ✅ Cleanup de Subscriptions
function useWebSocket(url: string) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => setData(event.data);
    
    // 🔑 Cerrar conexión
    return () => ws.close();
  }, [url]);
  
  return data;
}

// ✅ Cleanup de Timers
function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    // 🔑 Limpiar interval
    return () => clearInterval(id);
  }, [callback, delay]);
}
\`\`\`

### Principio 4: Type Safety con TypeScript

\`\`\`typescript
// 🏆 Hook con tipos completos
interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
  refetch: () => Promise<void>;
}

function useFetch<T = unknown>(url: string): UseFetchReturn<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const refetch = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
    }
  }, [url]);

  useEffect(() => { refetch(); }, [refetch]);

  return { ...state, refetch };
}

// Uso con tipos inferidos
const { data, loading } = useFetch<User[]>('/api/users');
//      ^? User[] | null
\`\`\`

---

## 📍 DÓNDE Organizarlos en tu Arquitectura

### Estructura Recomendada

\`\`\`
src/
├── hooks/
│   ├── index.ts              // Barrel export
│   │
│   ├── /auth                 // Dominio: Autenticación
│   │   ├── useAuth.ts
│   │   ├── usePermissions.ts
│   │   └── useSession.ts
│   │
│   ├── /data                 // Dominio: Data Fetching
│   │   ├── useFetch.ts
│   │   ├── useQuery.ts
│   │   ├── useMutation.ts
│   │   └── useCache.ts
│   │
│   ├── /ui                   // Dominio: UI State
│   │   ├── useModal.ts
│   │   ├── useToast.ts
│   │   ├── useDisclosure.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── /form                 // Dominio: Forms
│   │   ├── useForm.ts
│   │   ├── useValidation.ts
│   │   └── useFieldArray.ts
│   │
│   └── /utils                // Utilities
│       ├── useDebounce.ts
│       ├── useThrottle.ts
│       ├── usePrevious.ts
│       └── useLocalStorage.ts
│
├── features/
│   └── dashboard/
│       └── hooks/            // Hooks específicos de feature
│           └── useDashboardData.ts
\`\`\`

### Niveles de Alcance

**1. Global Hooks (/hooks/)**
- Reutilizables en toda la app
- Agnósticos del dominio
- Ejemplo: useDebounce, useLocalStorage

**2. Feature Hooks (/features/X/hooks/)**
- Específicos de una feature
- Lógica de negocio del módulo
- Ejemplo: useDashboardData, useCheckoutFlow

**3. Page Hooks (/app/page/hooks/)**
- Solo para esa página
- Último recurso (considera feature hook)

---

## 💡 POR QUÉ Son Críticos para Arquitectura Elite

### 1. Separation of Concerns (SoC)

**Antes de Custom Hooks:**
\`\`\`tsx
// 🔴 Todo mezclado: UI + Logic + Data
function UserDashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/user').then(/* ... */);
  }, []);
  
  useEffect(() => {
    fetch('/api/posts').then(/* ... */);
  }, []);
  
  return (/* 100 líneas de JSX */);
}
\`\`\`

**Después de Custom Hooks:**
\`\`\`tsx
// 🟢 Separado: UI limpia, lógica en hooks
function UserDashboard() {
  const { user, loading: userLoading } = useUser();
  const { posts, loading: postsLoading } = usePosts();
  
  if (userLoading || postsLoading) return <Loading />;
  
  return (/* UI clara y enfocada */);
}
\`\`\`

### 2. Testability

\`\`\`typescript
// ✅ Test del hook sin UI
describe('useAuth', () => {
  it('should login user', async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login('user@test.com', 'pass');
    });
    
    expect(result.current.isAuthenticated).toBe(true);
  });
});

// ✅ Test del componente con mock
function UserProfile() {
  const { user } = useAuth();
  return <div>{user.name}</div>;
}

// Mock del hook completo
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { name: 'Test User' } })
}));
\`\`\`

### 3. Composición sobre Herencia

\`\`\`typescript
// 🏆 Combinar hooks = Super poderes
function useAuthenticatedData(url: string) {
  const { token, isAuthenticated } = useAuth();
  const { data, error, loading } = useFetch(url, {
    headers: { Authorization: \`Bearer \${token}\` },
    enabled: isAuthenticated
  });
  const cachedData = useCache(\`auth-\${url}\`, data);
  const optimisticUpdate = useOptimisticUpdate(cachedData);
  
  return { data: optimisticUpdate, error, loading };
}
\`\`\`

---

## 🏆 Patrones Avanzados para Developers Elite

### 1. Factory Pattern (Hook que retorna Hook)

\`\`\`typescript
// 🔥 Crear hooks configurables
function createFetchHook<T>(baseUrl: string) {
  return function useFetch(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    
    useEffect(() => {
      fetch(\`\${baseUrl}\${endpoint}\`)
        .then(res => res.json())
        .then(setData);
    }, [endpoint]);
    
    return data;
  };
}

// Uso
const useAPIFetch = createFetchHook<APIResponse>('https://api.example.com');
const data = useAPIFetch('/users');
\`\`\`

### 2. State Machine Pattern

\`\`\`typescript
type State = 'idle' | 'loading' | 'success' | 'error';

function useAsyncStateMachine<T>() {
  const [state, setState] = useState<State>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (promise: Promise<T>) => {
    setState('loading');
    try {
      const result = await promise;
      setData(result);
      setState('success');
    } catch (err) {
      setError(err as Error);
      setState('error');
    }
  }, []);

  return { state, data, error, execute };
}
\`\`\`

### 3. Dependency Injection Pattern

\`\`\`typescript
// 🎯 Inyectar servicios en hooks
interface UserService {
  getUser: (id: string) => Promise<User>;
}

function useUser(service: UserService, userId: string) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    service.getUser(userId).then(setUser);
  }, [service, userId]);
  
  return user;
}

// Testing fácil con mock service
const mockService = { getUser: jest.fn() };
const { result } = renderHook(() => useUser(mockService, '123'));
\`\`\`

### 4. Reducer + Actions Pattern (Redux-like)

\`\`\`typescript
function useComplexState<T>() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const actions = useMemo(() => ({
    add: (item: T) => dispatch({ type: 'ADD', payload: item }),
    remove: (id: string) => dispatch({ type: 'REMOVE', payload: id }),
    update: (id: string, data: Partial<T>) => 
      dispatch({ type: 'UPDATE', payload: { id, data } })
  }), []);
  
  return [state, actions] as const;
}
\`\`\`

---

## 🎓 Best Practices - Checklist Completo

### Naming
- ✅ Prefijo "use" obligatorio
- ✅ Nombres descriptivos: \`useUserAuthentication\` no \`useUA\`
- ✅ Verbos para acciones: \`useToggle\`, \`useFetch\`
- ✅ Sustantivos para estado: \`useUser\`, \`useTheme\`

### Performance
- ✅ Memoiza callbacks con \`useCallback\`
- ✅ Memoiza valores calculados con \`useMemo\`
- ✅ Evita recrear objetos en cada render
- ✅ Dependencies array correctas

### Error Handling
- ✅ Siempre maneja errores (try/catch)
- ✅ Retorna estado de error
- ✅ Logging apropiado
- ✅ Fallbacks y valores por defecto

### Documentation
\`\`\`typescript
/**
 * Hook para manejar autenticación de usuarios
 * 
 * @param {string} redirectUrl - URL de redirección post-login
 * @returns {Object} Estado y métodos de autenticación
 * @returns {User | null} user - Usuario actual
 * @returns {boolean} isAuthenticated - Estado de autenticación
 * @returns {Function} login - Función para iniciar sesión
 * @returns {Function} logout - Función para cerrar sesión
 * 
 * @example
 * const { user, login, logout } = useAuth('/dashboard');
 * 
 * await login(email, password);
 * if (user) {
 *   console.log('Logged in:', user.name);
 * }
 */
function useAuth(redirectUrl: string) { /* ... */ }
\`\`\`

---

## 📊 Decision Tree: ¿Cuándo Usar Qué?

\`\`\`
¿Necesitas lógica stateful?
│
├─ NO ──> Función Helper Regular
│         (No necesitas un hook)
│
└─ SÍ ──> ¿Se usa en múltiples componentes?
    │
    ├─ NO ──> ¿Es lógica compleja (>50 líneas)?
    │   │
    │   ├─ NO ──> useState/useEffect en componente
    │   │
    │   └─ SÍ ──> Custom Hook para separación
    │
    └─ SÍ ──> ¿Es estado global?
        │
        ├─ SÍ ──> Context API o State Management
        │         (Redux, Zustand, Jotai)
        │
        └─ NO ──> Custom Hook ✅
                  (¡Este es el caso ideal!)
\`\`\`

---

## 🚀 Casos de Uso Reales del Mundo Empresarial

### E-commerce
- \`useCart()\` - Manejo de carrito
- \`useCheckout()\` - Proceso de compra
- \`useProductFilters()\` - Filtrado de productos

### SaaS Dashboard
- \`useAuth()\` - Autenticación
- \`useSubscription()\` - Estado de suscripción
- \`useAnalytics()\` - Tracking de eventos

### Social Media
- \`useInfiniteScroll()\` - Carga infinita
- \`useRealTimeUpdates()\` - WebSocket updates
- \`useLikeButton()\` - Optimistic updates
`;

// ===== EJEMPLO 1: useDebounce - Anti-pattern de renders excesivos =====
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler); // 🔑 Cleanup del timer
  }, [value, delay]);

  return debouncedValue;
}

// ===== EJEMPLO 2: usePrevious - Tracking de cambios =====
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  
  useEffect(() => {
    ref.current = value; // Se actualiza DESPUÉS del render
  }, [value]);
  
  return ref.current; // Retorna el valor ANTES del render
}

// ===== EJEMPLO 3: useToggle - Estado booleano con superpoderes =====
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  // 🔑 useCallback para evitar recrear funciones
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  // 🔑 useMemo para evitar recrear objeto
  return useMemo(
    () => ({ value, toggle, setTrue, setFalse, setValue }),
    [value, toggle, setTrue, setFalse]
  );
}

// ===== EJEMPLO 4: useIntersectionObserver - Lazy loading & Analytics =====
function useIntersectionObserver(
  ref: React.RefObject<HTMLDivElement | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);
    return () => observer.disconnect(); // 🔑 Cleanup del observer
  }, [ref, options]);

  return isIntersecting;
}

// ===== EJEMPLO 5: useMediaQuery - Responsive sin CSS =====
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener); // 🔑 Cleanup
  }, [query]);

  return matches;
}

// ===== EJEMPLO 6: useLocalStorage - Persistencia automática =====
function useLocalStorage<T>(key: string, initialValue: T) {
  // State lazy initialization para leer localStorage solo una vez
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Función para actualizar state y localStorage
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}

// ===== EJEMPLO 7: useAsync - State machine para operaciones asíncronas =====
interface UseAsyncState<T> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}

function useAsync<T>() {
  const [state, setState] = useState<UseAsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  const execute = useCallback(async (promise: Promise<T>) => {
    setState({ status: 'loading', data: null, error: null });
    try {
      const data = await promise;
      setState({ status: 'success', data, error: null });
      return data;
    } catch (error) {
      setState({ status: 'error', data: null, error: error as Error });
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ status: 'idle', data: null, error: null });
  }, []);

  return { ...state, execute, reset };
}

// ===== EJEMPLO 8: useInterval - setInterval que no causa bugs =====
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) return;
    
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id); // 🔑 Cleanup
  }, [delay]);
}

// ===== EJEMPLO 9: useOnClickOutside - Cerrar modals/dropdowns =====
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// ===== COMPONENTE PRINCIPAL CON TODOS LOS EJEMPLOS =====
export default function CustomHooksAdvancedPage() {
  // Demo 1: useDebounce
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const previousSearch = usePrevious(searchTerm);
  
  // Demo 2: useToggle
  const modalState = useToggle(false);
  const dropdownState = useToggle(false);
  
  // Demo 3: useMediaQuery
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Demo 4: useIntersectionObserver
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contentRef, { threshold: 0.5 });
  
  // Demo 5: useLocalStorage
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('app-theme', 'dark');
  
  // Demo 6: useAsync
  const asyncState = useAsync<{ fact: string }>();
  const fetchCatFact = useCallback(async () => {
    await asyncState.execute(
      fetch('https://catfact.ninja/fact').then(res => res.json())
    );
  }, [asyncState]);
  
  // Demo 7: useInterval
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useInterval(() => setCounter(c => c + 1), isRunning ? 1000 : null);
  
  // Demo 8: useOnClickOutside
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => dropdownState.setFalse());

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Theory Section */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <div className="mb-6 p-6 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            🎣 Custom Hooks Patterns - Guía Definitiva
          </h1>
          <StyledText text={description} />
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto" style={{ background: 'var(--panel)' }}>
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Header con Device Info */}
          <div className="p-4 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--primary)' }}>
            <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
              📱 Dispositivo: <span style={{ color: 'var(--primary)' }}>
                {isDesktop && '🖥️ Desktop'}
                {isMobile && '📱 Mobile'}
                {!isDesktop && !isMobile && '💻 Tablet'}
              </span>
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Tema guardado en localStorage: <strong>{theme}</strong>
            </p>
          </div>

          {/* Demo 1: useDebounce */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              1️⃣ useDebounce Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Search inputs, Autocomplete, API calls costosas
            </p>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe para buscar..."
              className="w-full p-3 rounded mb-3"
              style={{ border: '1px solid var(--border)', background: 'var(--panel)', color: 'var(--foreground)' }}
            />
            <div className="space-y-2 text-sm">
              <p style={{ color: 'var(--foreground)' }}>
                <strong>Valor Actual (cada keystroke):</strong> {searchTerm || '(vacío)'}
              </p>
              <p style={{ color: 'var(--success)' }}>
                <strong>✅ Valor Debounced (500ms):</strong> {debouncedSearch || '(vacío)'}
              </p>
              <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
                💡 El valor debounced se actualiza 500ms DESPUÉS de dejar de escribir. Perfecto para evitar 100 API calls mientras el usuario escribe "React".
              </p>
            </div>
          </div>

          {/* Demo 2: usePrevious */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              2️⃣ usePrevious Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Animaciones, Comparaciones, Tracking de cambios
            </p>
            <div className="space-y-2 text-sm">
              <p style={{ color: 'var(--foreground)' }}>
                <strong>Búsqueda Anterior:</strong>{' '}
                <span style={{ color: 'var(--error)' }}>{previousSearch || '(ninguna)'}</span>
              </p>
              <p style={{ color: 'var(--foreground)' }}>
                <strong>Búsqueda Actual:</strong>{' '}
                <span style={{ color: 'var(--success)' }}>{searchTerm || '(vacío)'}</span>
              </p>
              {previousSearch && searchTerm && previousSearch !== searchTerm && (
                <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', border: '1px solid var(--success)' }}>
                  🔄 Cambió de "{previousSearch}" a "{searchTerm}"
                </p>
              )}
              <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
                💡 Útil para: Detectar cambios, animar transiciones, analytics, undo/redo
              </p>
            </div>
          </div>

          {/* Demo 3: useToggle */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              3️⃣ useToggle Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Modals, Dropdowns, Feature flags, Dark mode
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={modalState.toggle}
                className="px-4 py-2 rounded font-medium text-white"
                style={{ background: 'var(--primary)' }}
              >
                Toggle
              </button>
              <button
                onClick={modalState.setTrue}
                className="px-4 py-2 rounded font-medium text-white"
                style={{ background: 'var(--success)' }}
              >
                Abrir
              </button>
              <button
                onClick={modalState.setFalse}
                className="px-4 py-2 rounded font-medium text-white"
                style={{ background: 'var(--error)' }}
              >
                Cerrar
              </button>
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)' }}>
              <strong>Estado del Modal:</strong>{' '}
              <span style={{ color: modalState.value ? 'var(--success)' : 'var(--error)' }}>
                {modalState.value ? '✅ ABIERTO' : '❌ CERRADO'}
              </span>
            </p>
            {modalState.value && (
              <div className="mt-3 p-4 rounded animate-fade-in" style={{ background: 'var(--panel)', border: '2px solid var(--success)' }}>
                <p className="text-sm font-medium mb-2" style={{ color: 'var(--success)' }}>
                  🎉 Modal está abierto!
                </p>
                <p className="text-xs" style={{ color: 'var(--foreground)' }}>
                  Este contenido solo se renderiza cuando el estado es true. Usa "Cerrar" o "Toggle" para ocultarlo.
                </p>
              </div>
            )}
            <p className="text-xs mt-3 p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 Mejor que useState(false) porque ofrece toggle, setTrue, setFalse en un solo hook
            </p>
          </div>

          {/* Demo 4: useLocalStorage */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              4️⃣ useLocalStorage Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: User preferences, Settings, Offline-first apps
            </p>
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setTheme('light')}
                className="px-4 py-2 rounded font-medium"
                style={{ 
                  background: theme === 'light' ? 'var(--primary)' : 'var(--panel)',
                  color: theme === 'light' ? 'white' : 'var(--foreground)',
                  border: '1px solid var(--border)'
                }}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className="px-4 py-2 rounded font-medium"
                style={{ 
                  background: theme === 'dark' ? 'var(--primary)' : 'var(--panel)',
                  color: theme === 'dark' ? 'white' : 'var(--foreground)',
                  border: '1px solid var(--border)'
                }}
              >
                🌙 Dark
              </button>
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)' }}>
              <strong>Tema actual:</strong> <span style={{ color: 'var(--primary)' }}>{theme}</span>
            </p>
            <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 Recarga la página! El tema persiste automáticamente en localStorage. SSR-safe (no crashea en server-side).
            </p>
          </div>

          {/* Demo 5: useAsync */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              5️⃣ useAsync Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: API calls, File uploads, Cualquier operación asíncrona
            </p>
            <button
              onClick={fetchCatFact}
              disabled={asyncState.status === 'loading'}
              className="px-4 py-2 rounded font-medium text-white mb-3"
              style={{ 
                background: asyncState.status === 'loading' ? '#666' : 'var(--primary)',
                cursor: asyncState.status === 'loading' ? 'not-allowed' : 'pointer'
              }}
            >
              {asyncState.status === 'loading' ? '⏳ Cargando...' : '🐱 Get Cat Fact'}
            </button>
            
            {asyncState.status === 'success' && asyncState.data && (
              <div className="p-3 rounded mb-2" style={{ background: 'var(--panel)', border: '1px solid var(--success)' }}>
                <p className="text-sm" style={{ color: 'var(--success)' }}>
                  ✅ <strong>Éxito:</strong>
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--foreground)' }}>
                  {asyncState.data.fact}
                </p>
              </div>
            )}
            
            {asyncState.status === 'error' && asyncState.error && (
              <div className="p-3 rounded mb-2" style={{ background: 'var(--panel)', border: '1px solid var(--error)' }}>
                <p className="text-sm" style={{ color: 'var(--error)' }}>
                  ❌ <strong>Error:</strong> {asyncState.error.message}
                </p>
              </div>
            )}
            
            <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 State machine con 4 estados: idle → loading → success/error. Evita race conditions y memory leaks.
            </p>
          </div>

          {/* Demo 6: useInterval */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              6️⃣ useInterval Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Real-time updates, Polling, Timers, Auto-refresh
            </p>
            <div className="flex items-center gap-3 mb-3">
              <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
                {counter}
              </p>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-4 py-2 rounded font-medium text-white"
                style={{ background: isRunning ? 'var(--error)' : 'var(--success)' }}
              >
                {isRunning ? '⏸️ Pause' : '▶️ Start'}
              </button>
              <button
                onClick={() => setCounter(0)}
                className="px-4 py-2 rounded font-medium"
                style={{ background: 'var(--panel)', border: '1px solid var(--border)', color: 'var(--foreground)' }}
              >
                🔄 Reset
              </button>
            </div>
            <p className="text-xs p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 setInterval sin bugs! Limpia automáticamente, no causa memory leaks, actualiza callback en cada render.
            </p>
          </div>

          {/* Demo 7: useOnClickOutside con Dropdown */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              7️⃣ useOnClickOutside Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Dropdowns, Modals, Popovers, Context menus
            </p>
            <div className="relative">
              <button
                onClick={dropdownState.toggle}
                className="px-4 py-2 rounded font-medium text-white"
                style={{ background: 'var(--primary)' }}
              >
                {dropdownState.value ? '▼ Cerrar Dropdown' : '▶ Abrir Dropdown'}
              </button>
              
              {dropdownState.value && (
                <div 
                  ref={dropdownRef}
                  className="absolute mt-2 p-4 rounded shadow-lg z-10"
                  style={{ background: 'var(--panel)', border: '2px solid var(--primary)', minWidth: '250px' }}
                >
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    🎯 Click fuera para cerrar
                  </p>
                  <ul className="space-y-1 text-sm" style={{ color: 'var(--foreground)' }}>
                    <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Opción 1</li>
                    <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Opción 2</li>
                    <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Opción 3</li>
                  </ul>
                </div>
              )}
            </div>
            <p className="text-xs mt-3 p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 Detecta clicks fuera del elemento. Perfecto UX para cerrar modals/dropdowns sin botón de cerrar.
            </p>
          </div>

          {/* Demo 8: useIntersectionObserver */}
          <div 
            ref={contentRef}
            className="p-6 rounded-lg"
            style={{ 
              background: 'var(--background)', 
              border: `2px solid ${isVisible ? 'var(--success)' : 'var(--border)'}`,
              transition: 'all 0.3s ease'
            }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              8️⃣ useIntersectionObserver Hook
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Caso de uso: Lazy loading images, Infinite scroll, Analytics, Animations
            </p>
            <div 
              className={`p-4 rounded transition-all duration-300 ${isVisible ? 'scale-105' : 'scale-100'}`}
              style={{ 
                background: isVisible ? 'var(--success)' : 'var(--panel)',
                opacity: isVisible ? 1 : 0.6 
              }}
            >
              <p className="text-lg font-bold text-center" style={{ color: 'white' }}>
                {isVisible ? '👀 ¡Estoy visible (50% threshold)!' : '😴 No estoy visible'}
              </p>
            </div>
            <p className="text-xs mt-3 p-2 rounded" style={{ background: 'var(--panel)', color: 'var(--foreground)' }}>
              💡 Scroll hacia arriba/abajo para ver el cambio. Más performante que scroll events. Perfect para lazy loading!
            </p>
          </div>

          {/* Best Practices Summary */}
          <div className="p-6 rounded-lg" style={{ background: 'var(--background)', border: '2px solid var(--primary)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              📋 Cuándo Usar Cada Hook - Cheat Sheet
            </h3>
            <div className="space-y-3 text-sm" style={{ color: 'var(--foreground)' }}>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useDebounce:</strong> Search, autocomplete, resize handlers, cualquier cosa que se ejecute muchas veces
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ usePrevious:</strong> Animaciones, comparar valores, undo/redo, tracking
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useToggle:</strong> Modals, sidebars, accordions, cualquier estado on/off
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useLocalStorage:</strong> User settings, preferences, offline-first, cache
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useAsync:</strong> API calls, file uploads, cualquier Promise
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useInterval:</strong> Polling APIs, timers, auto-refresh, real-time updates
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useOnClickOutside:</strong> Dropdowns, modals, popovers, context menus
              </div>
              <div className="p-2 rounded" style={{ background: 'var(--panel)' }}>
                <strong>✅ useIntersectionObserver:</strong> Lazy loading, infinite scroll, analytics, viewport-based animations
              </div>
            </div>
            
            <div className="mt-4 p-3 rounded" style={{ background: 'var(--success)', border: '1px solid var(--border)' }}>
              <p className="text-sm font-bold text-white">
                🏆 Pro Tip: Todos estos hooks son production-ready. Cópialos, úsalos, adáptalos a tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
