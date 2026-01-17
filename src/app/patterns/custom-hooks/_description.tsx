'use client';

import { CodeBlock } from '@/components/CodeBlock';

export function CustomHooksDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Custom Hooks</strong> permiten extraer lógica de componentes en funciones reutilizables.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Son el patrón moderno preferido para compartir lógica stateful entre componentes.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Reglas de los Custom Hooks
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>El nombre debe empezar con "use" (useForm, useAuth, etc.)</li>
          <li>Solo pueden ser llamados desde componentes funcionales o custom hooks</li>
          <li>Deben seguir las Rules of Hooks</li>
          <li>Pueden usar otros hooks (useState, useEffect, etc.)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas sobre HOCs y Render Props
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Sin wrapper hell:</strong> No agregan componentes extra al árbol</li>
          <li><strong>Más simple:</strong> JavaScript plano, sin componentes</li>
          <li><strong>Composición fácil:</strong> Llama múltiples hooks sin anidar</li>
          <li><strong>Type-safe:</strong> TypeScript funciona perfectamente</li>
          <li><strong>Testeable:</strong> Puedes testear hooks en aislamiento</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>useForm:</strong> Manejo de formularios</li>
          <li><strong>useAuth:</strong> Autenticación y autorización</li>
          <li><strong>useFetch:</strong> Data fetching</li>
          <li><strong>useLocalStorage:</strong> Persistencia local</li>
          <li><strong>useDebounce:</strong> Debouncing de valores</li>
          <li><strong>useMediaQuery:</strong> Responsive design</li>
          <li><strong>useKeyPress:</strong> Keyboard shortcuts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo 1: useLocalStorage
        </h2>
        <CodeBlock
          filename="useLocalStorage.js"
          code={`// useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State para almacenar el valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Función para actualizar el valor
  const setValue = (value) => {
    try {
      // Permitir que value sea una función como useState
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Uso en componente
function App() {
  const [name, setName] = useLocalStorage('name', 'John');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo 2: useFetch
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch cuando cambia la URL

  return { data, loading, error };
}

// Uso en componente
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`/api/users/\${userId}\`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo 3: useDebounce
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Configurar timeout
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar timeout si value cambia antes del delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Uso en componente de búsqueda
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Hacer API call solo después del debounce
      fetch(\`/api/search?q=\${debouncedSearchTerm}\`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo 4: useMediaQuery
        </h2>
        <CodeBlock
          filename="example.jsx"
          code={`// useMediaQuery.js
import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Listener callback
    const listener = (e) => setMatches(e.matches);

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// Uso en componente responsive
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}

// O usar directamente
function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header>
      {isMobile ? <HamburgerMenu /> : <FullNavigation />}
    </header>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Mejores prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Mantén hooks enfocados en una sola responsabilidad</li>
          <li>Retorna objetos o arrays según el caso</li>
          <li>Documenta las dependencias y efectos secundarios</li>
          <li>Usa TypeScript para type safety</li>
          <li>Considera performance (usa useMemo/useCallback cuando sea necesario)</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Mejor práctica:</strong> Custom Hooks son el patrón preferido en React moderno. Usa hooks en lugar de HOCs o Render Props siempre que sea posible.
        </p>
      </div>
    </div>
  );
}
