'use client';

import { useState, useEffect } from 'react';

// Custom Hook: useFetch
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

// Custom Hook: useLocalStorage
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

export default function CustomHooksDemo() {
  const { data: users, loading } = useFetch<Array<{ id: number; name: string }>>('https://jsonplaceholder.typicode.com/users');
  const [count, setCount] = useLocalStorage('demo-count', 0);

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Custom Hooks</h2>
          <p className="text-gray-600">Reusable stateful logic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* useFetch Demo */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>🎣</span> useFetch Hook
            </h3>
            {loading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-200 border-t-blue-600"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users?.slice(0, 3).map(user => (
                  <div key={user.id} className="p-2 bg-white rounded text-sm">
                    {user.name}
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs text-gray-600 mt-3">
              Fetches data with loading/error states
            </p>
          </div>

          {/* useLocalStorage Demo */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>💾</span> useLocalStorage Hook
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => setCount(count - 1)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="text-2xl font-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Persists to localStorage automatically. Reload page to test!
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center text-sm text-gray-700">
          💡 Both hooks encapsulate complex logic and can be reused across components
        </div>
      </div>
    </div>
  );
}
