import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function CustomHooksPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Custom Hooks Pattern"
        description="🎣 **Custom Hooks** - Reutiliza lógica con estado entre componentes

Custom Hooks son funciones JavaScript que empiezan con <code>use</code> y pueden llamar otros Hooks. Son la forma moderna y recomendada de compartir lógica stateful en React, reemplazando HOCs y Render Props en la mayoría de casos.

**🎯 ¿Cuándo crear un Custom Hook?**
- **Lógica duplicada** en múltiples componentes
- **Combinar hooks** existentes en un patrón reutilizable  
- **Abstraer comportamiento complejo** (data fetching, subscriptions)
- **Lógica de formularios** (validation, submission)
- **Side effects** repetitivos (localStorage, window events)

**🔑 Conceptos Clave:**
- **Naming**: SIEMPRE empieza con <code>use</code>
- **Composition**: Puede usar otros hooks (useState, useEffect, etc)
- **Reusability**: Lógica compartida entre componentes
- **State Independence**: Cada uso del hook tiene su propio state
- **Return**: Puede retornar valores, funciones, o ambos

**✅ Ventajas:**
- ♻️ **Reusable**: Lógica compartida sin HOCs ni Render Props
- 🧹 **Clean**: Componentes más simples, hook maneja complejidad
- 🧪 **Testeable**: Puedes testear hooks con <code>@testing-library/react-hooks</code>
- 📦 **Composable**: Combina hooks pequeños en más complejos
- 🎯 **Single Responsibility**: Un hook = una responsabilidad

**📐 Estructura:**
\`\`\`typescript
function useCustomHook(initialValue) {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [state]);
  
  const helper = () => {
    // Helper functions
  };
  
  return { state, setState, helper };
}

// Usage
function Component() {
  const { state, helper } = useCustomHook(0);
  return <div>{state}</div>;
}
\`\`\`

**💡 Custom Hooks Comunes:**
- **useFetch**: Data fetching con loading/error states
- **useLocalStorage**: Sync state con localStorage
- **useDebounce**: Debounce value changes
- **useWindowSize**: Track window dimensions
- **useIntersectionObserver**: Lazy loading, infinite scroll
- **useAuth**: Authentication state
- **useForm**: Form handling con validation

**🔥 Best Practices:**
1. **Name with 'use'**: React enforces Hook rules
2. **Return object**: <code>{ data, loading }</code> mejor que array
3. **Document params**: TypeScript + JSDoc
4. **Handle cleanup**: Return cleanup en useEffect
5. **Avoid side effects on render**: Solo en useEffect
6. **Keep focused**: Un hook = un propósito

**⚠️ Rules of Hooks:**
- ✅ Solo en top level (no en loops/conditions)
- ✅ Solo en React functions (components/hooks)
- ❌ No en class components
- ❌ No en event handlers

**🆚 Custom Hooks vs Utilities:**
```typescript
// ❌ Utility function (sin hooks)
function formatDate(date) {
  return date.toLocaleDateString();
}

// ✅ Custom Hook (usa hooks)
function useFormattedDate(date) {
  const [locale, setLocale] = useState('en-US');
  return date.toLocaleDateString(locale);
}
```

**Ejemplo del código:**
<code>useFetch</code> para data fetching y <code>useLocalStorage</code> para persistir state automáticamente."
        codeContent={[
          {
            filePath: 'hooks/use-fetch.ts',
            content: `// Custom Hook: Data Fetching
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(\`HTTP error \${response.status}\`);
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, loading, error, refetch: fetchData };
}

// Usage
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error } = useFetch<User>(\`/api/users/\${userId}\`);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  
  return <div>{user?.name}</div>;
}`,
          },
          {
            filePath: 'hooks/use-local-storage.ts',
            content: `// Custom Hook: LocalStorage Sync
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize from localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });
  
  // Update localStorage when value changes
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };
  
  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);
  
  return [storedValue, setValue] as const;
}

// Usage
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current: {theme}
    </button>
  );
}`,
          },
          {
            filePath: 'hooks/use-debounce.ts',
            content: `// Custom Hook: Debounce
import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage: Search with debounce
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearch) {
      // API call only after user stops typing for 500ms
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`,
          },
          {
            filePath: 'hooks/use-window-size.ts',
            content: `// Custom Hook: Window Size
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage: Responsive rendering
function ResponsiveComponent() {
  const { width } = useWindowSize();
  
  return (
    <div>
      {width < 768 ? <MobileView /> : <DesktopView />}
      <p>Window width: {width}px</p>
    </div>
  );
}`,
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
  title: 'Custom Hooks Pattern | Design Patterns',
  description: 'Learn how to extract and reuse stateful logic with custom React hooks',
};
