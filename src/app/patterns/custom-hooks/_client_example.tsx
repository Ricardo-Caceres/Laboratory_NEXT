'use client';

import { useState, useEffect } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

// Custom Hook for fetching data
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom Hook for local storage
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useFetch<{ id: number; title: string }>('https://jsonplaceholder.typicode.com/todos/1');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Custom Hooks Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                🪝 **Custom Hooks** - La revolución que cambió React forever en 2019
                <br/><br/>
                Los Custom Hooks son la forma moderna y más poderosa de reutilizar lógica stateful en React. Permiten extraer comportamiento complejo (data fetching, subscriptions, timers, localStorage) en funciones reutilizables que cualquier componente puede consumir con una simple línea de código.
                <br/><br/>
                **🎯 Por qué son game-changers:**
                <br/>
                ✅ Zero wrapper hell - No más HOCs anidados o render props
                <br/>
                ✅ Composición natural - Combina hooks como bloques de LEGO
                <br/>
                ✅ TypeScript-first - Inferencia automática de tipos
                <br/>
                ✅ Testabilidad - Testea hooks aisladamente con @testing-library/react-hooks
                <br/><br/>
                **En este ejemplo:**
                <br/>
                📡 <strong>useFetch</strong> - Data fetching con loading/error states automáticos
                <br/>
                💾 <strong>useLocalStorage</strong> - Sincronización automática con localStorage
              </p>
            </div>

            <div className="space-y-6">
              {/* useFetch Demo */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">🌐</span> useFetch Hook
                </h3>
                {loading && <p className="text-sm text-gray-600">Loading...</p>}
                {error && <p className="text-sm text-red-600">Error: {error}</p>}
                {data && (
                  <div className="bg-white p-3 rounded border border-green-300">
                    <p className="text-sm font-medium text-gray-900">{data.title}</p>
                    <p className="text-xs text-gray-500 mt-1">ID: {data.id}</p>
                  </div>
                )}
              </div>

              {/* useLocalStorage Demo */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">💾</span> useLocalStorage Hook
                </h3>
                <div className="flex items-center gap-3">
                  <div className="bg-white px-6 py-3 rounded-lg border-2 border-blue-300 text-2xl font-bold text-gray-900">
                    {count}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCount(c => c + 1)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => setCount(c => c - 1)}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setCount(0)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">Value persists in localStorage</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3">🔥 Pattern Benefits:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Máxima Reutilización:</strong> Escribe lógica UNA vez, úsala en N componentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Composición Perfecta:</strong> Combina múltiples hooks sin anidación compleja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Testing Simplificado:</strong> Testea hooks aisladamente con renderHook()</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Type-Safe:</strong> TypeScript infiere tipos automáticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Código Limpio:</strong> Elimina HOCs, render props y class components</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-300">
                <p className="text-xs text-gray-600 italic">
                  💡 Pro Tip: Nombra tus hooks con "use" prefix. Es una convención que permite a React y linters validar las Rules of Hooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
