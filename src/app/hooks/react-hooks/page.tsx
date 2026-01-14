import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'React Hooks - Guía Completa',
  description: 'Guía comprehensiva de todos los React Hooks'
};

export default function ReactHooksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">React Hooks - Guía Completa</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Referencia completa de todos los hooks de React con patrones y best practices.
        </p>
      </div>

      <section className="space-y-6">
        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Basic Hooks</h2>
          
          <div className="space-y-4">
            <Link href="/hooks/useState" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useState</h3>
              <p className="text-sm">Manejo de estado local en componentes funcionales</p>
            </Link>

            <Link href="/hooks/useEffect" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useEffect</h3>
              <p className="text-sm">Side effects, suscripciones y lifecycle</p>
            </Link>

            <Link href="/hooks/useContext" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useContext</h3>
              <p className="text-sm">Consumir context sin wrapper components</p>
            </Link>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Performance Hooks</h2>
          
          <div className="space-y-4">
            <Link href="/hooks/useMemo" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useMemo</h3>
              <p className="text-sm">Memoizar cálculos costosos</p>
            </Link>

            <Link href="/hooks/useCallback" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useCallback</h3>
              <p className="text-sm">Memoizar funciones para evitar re-renders</p>
            </Link>

            <Link href="/hooks/useTransition" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useTransition</h3>
              <p className="text-sm">Marcar actualizaciones como no urgentes</p>
            </Link>

            <Link href="/hooks/useDeferredValue" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useDeferredValue</h3>
              <p className="text-sm">Diferir actualización de valores no críticos</p>
            </Link>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Advanced Hooks</h2>
          
          <div className="space-y-4">
            <Link href="/hooks/useReducer" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useReducer</h3>
              <p className="text-sm">Estado complejo con lógica tipo Redux</p>
            </Link>

            <Link href="/hooks/useRef" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useRef</h3>
              <p className="text-sm">Referencias mutables y acceso al DOM</p>
            </Link>

            <Link href="/hooks/useImperativeHandle" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useImperativeHandle</h3>
              <p className="text-sm">Customizar ref expuesta de un componente</p>
            </Link>

            <Link href="/hooks/useLayoutEffect" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useLayoutEffect</h3>
              <p className="text-sm">Effect síncrono antes de paint</p>
            </Link>

            <Link href="/hooks/useInsertionEffect" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useInsertionEffect</h3>
              <p className="text-sm">Para librerías CSS-in-JS</p>
            </Link>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Utility Hooks</h2>
          
          <div className="space-y-4">
            <Link href="/hooks/useId" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useId</h3>
              <p className="text-sm">Generar IDs únicos para accesibilidad</p>
            </Link>

            <Link href="/hooks/useSyncExternalStore" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useSyncExternalStore</h3>
              <p className="text-sm">Suscribirse a stores externos</p>
            </Link>

            <Link href="/hooks/useDebugValue" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>useDebugValue</h3>
              <p className="text-sm">Etiquetar custom hooks en DevTools</p>
            </Link>

            <Link href="/hooks/use" className="block p-4" style={{ background: 'var(--background)', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--primary)' }}>use (React 19)</h3>
              <p className="text-sm">Leer valores de Promises y Context</p>
            </Link>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Custom Hooks Patterns</h2>
          
          <div className="space-y-4">
            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">useLocalStorage</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`}
              </pre>
            </div>

            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">useDebounce</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`}
              </pre>
            </div>

            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">useMediaQuery</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}`}
              </pre>
            </div>

            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">useAsync</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus('success');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}`}
              </pre>
            </div>

            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">usePrevious</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}`}
              </pre>
            </div>

            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 className="font-bold mb-2">useOnClickOutside</h3>
              <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
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
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Rules of Hooks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Solo llama hooks en el top level (no en loops, conditions, nested functions)</li>
          <li>✅ Solo llama hooks desde React functions (components o custom hooks)</li>
          <li>✅ Nombres de custom hooks deben empezar con "use"</li>
          <li>✅ Usa ESLint plugin: eslint-plugin-react-hooks</li>
        </ul>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Evita dependency arrays vacíos en useEffect si lees props/state</li>
          <li>Usa useCallback solo cuando necesites estabilidad de referencia</li>
          <li>useMemo para cálculos costosos, no para todo</li>
          <li>Extrae lógica compleja a custom hooks</li>
          <li>Prefiere múltiples useEffect pequeños sobre uno grande</li>
          <li>Cleanup functions en useEffect para evitar memory leaks</li>
          <li>useReducer para estado complejo relacionado</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
