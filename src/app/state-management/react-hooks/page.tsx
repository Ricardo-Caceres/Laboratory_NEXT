export default function ReactHooksPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-6">React Hooks Avanzados</h1>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useCallback - Memoización de Funciones</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useState, useCallback } from 'react';

// ❌ Sin useCallback - nueva función cada render
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {  // Nueva referencia cada render
    console.log('Clicked');
  };
  
  return <Child onClick={handleClick} />;
}

// ✅ Con useCallback - función estable
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // Solo crea función una vez
  
  // Con dependencia
  const increment = useCallback(() => {
    setCount(c => c + 1); // Usa función updater
  }, []); // No necesita count en deps
  
  return <Child onClick={handleClick} />;
}

// Caso de uso real: Event handlers en listas
function TodoList({ todos }: { todos: Todo[] }) {
  const handleDelete = useCallback((id: string) => {
    // API call para eliminar
    deleteTodo(id);
  }, []); // Función estable
  
  return todos.map(todo => (
    <TodoItem 
      key={todo.id}
      todo={todo}
      onDelete={handleDelete} // Mismo callback
    />
  ));
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useMemo - Memoización de Valores</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useMemo } from 'react';

function DataTable({ data, filters }: Props) {
  // ❌ Cálculo costoso cada render
  const filtered = data
    .filter(item => item.status === filters.status)
    .sort((a, b) => a.date - b.date);
  
  // ✅ Solo recalcula si data o filters cambian
  const filtered = useMemo(() => {
    return data
      .filter(item => item.status === filters.status)
      .sort((a, b) => a.date - b.date);
  }, [data, filters]);
  
  return <Table data={filtered} />;
}

// Memoizar objetos/arrays para estabilidad de referencia
function UserProfile({ userId }: { userId: string }) {
  const config = useMemo(() => ({
    userId,
    theme: 'dark',
    features: ['notifications', 'analytics']
  }), [userId]); // Objeto estable
  
  return <ProfileView config={config} />;
}

// ⚠️ No abuses de useMemo
// Solo para cálculos costosos o estabilidad de referencia
const value = useMemo(() => 2 + 2, []); // ❌ Overhead innecesario
const value = 2 + 2; // ✅ Simple es mejor`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useRef - Referencias Mutables</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useRef, useEffect } from 'react';

// 1. Acceder al DOM
function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  return <input ref={inputRef} />;
}

// 2. Guardar valores sin causar re-render
function Timer() {
  const intervalRef = useRef<NodeJS.Timeout>();
  
  const start = () => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  };
  
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  
  useEffect(() => stop, []); // Cleanup
  
  return <button onClick={start}>Start</button>;
}

// 3. Trackear valor anterior
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return <div>Now: {count}, Before: {prevCount}</div>;
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useImperativeHandle - Exponer API Imperative</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useImperativeHandle, forwardRef, useRef } from 'react';

// Componente hijo expone métodos al padre
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
    getValue: () => inputRef.current?.value
  }));
  
  return <input ref={inputRef} {...props} />;
});

// Uso en componente padre
function Form() {
  const inputRef = useRef<{
    focus: () => void;
    clear: () => void;
    getValue: () => string | undefined;
  }>(null);
  
  const handleSubmit = () => {
    const value = inputRef.current?.getValue();
    console.log(value);
    inputRef.current?.clear();
  };
  
  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useLayoutEffect - Sync con DOM</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useLayoutEffect, useRef, useState } from 'react';

// useEffect = async después del paint
// useLayoutEffect = sync antes del paint

function Tooltip() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // ✅ useLayoutEffect para medir DOM antes de pintar
  useLayoutEffect(() => {
    const rect = tooltipRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({
        x: rect.width / 2,
        y: rect.height
      });
    }
  }, []);
  
  return (
    <div 
      ref={tooltipRef}
      style={{ transform: \`translate(\${coords.x}px, \${coords.y}px)\` }}
    >
      Tooltip
    </div>
  );
}

// ⚠️ Usa useEffect por defecto
// Solo useLayoutEffect cuando necesites leer/escribir DOM
// antes de que el usuario vea cambios visuales`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useReducer - State Complejo</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useReducer } from 'react';

type State = {
  count: number;
  error: string | null;
  loading: boolean;
};

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'RESET' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1, error: null };
    case 'DECREMENT':
      return { ...state, count: state.count - 1, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET':
      return { count: 0, error: null, loading: false };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
    loading: false
  });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// useReducer vs useState:
// - State con múltiples valores relacionados → useReducer
// - Lógica de actualización compleja → useReducer
// - Testing más fácil → useReducer
// - State simple → useState`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useTransition - Concurrent Features</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useState, useTransition } from 'react';

function SearchResults() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Actualización urgente
    setInput(e.target.value);
    
    // Actualización no urgente (puede interrumpirse)
    startTransition(() => {
      setQuery(e.target.value); // Render pesado
    });
  };
  
  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <Spinner />}
      <ExpensiveList query={query} /> {/* No bloquea input */}
    </>
  );
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useDeferredValue - Defer Updates</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useState, useDeferredValue } from 'react';

function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {/* Usa valor diferido para render pesado */}
      <SlowList text={deferredText} />
    </>
  );
}

// Similar a useTransition pero para valores en lugar de updates`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>useId - Unique IDs</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useId } from 'react';

function PasswordField() {
  const id = useId(); // Genera ID único estable
  
  return (
    <>
      <label htmlFor={id}>Password:</label>
      <input id={id} type="password" />
    </>
  );
}

// Útil para accesibilidad y SSR
// Evita mismatch entre servidor y cliente`}
        </pre>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--success)', color: '#000' }}>
        <h3 className="text-xl font-semibold mb-2">🎯 Hooks Rules</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>✓ Solo llama Hooks en el top level (no en loops, conditions, nested functions)</li>
          <li>✓ Solo llama Hooks desde React function components o custom hooks</li>
          <li>✓ Los nombres de custom hooks deben empezar con "use"</li>
          <li>✓ Usa ESLint plugin: eslint-plugin-react-hooks</li>
          <li>✓ Dependencies en useEffect/useMemo/useCallback deben ser completas</li>
        </ul>
      </div>
    </div>
  );
}
