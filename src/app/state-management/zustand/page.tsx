'use client';

import { create } from 'zustand';

interface CounterStore {
  count: number;
  history: string[];
  increment: () => void;
  decrement: () => void;
  incrementBy: (amount: number) => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  history: [],
  increment: () => set((state) => ({ 
    count: state.count + 1,
    history: [...state.history, `+1 at ${new Date().toLocaleTimeString()}`]
  })),
  decrement: () => set((state) => ({ 
    count: state.count - 1,
    history: [...state.history, `-1 at ${new Date().toLocaleTimeString()}`]
  })),
  incrementBy: (amount: number) => set((state) => ({ 
    count: state.count + amount,
    history: [...state.history, `+${amount} at ${new Date().toLocaleTimeString()}`]
  })),
  reset: () => set({ 
    count: 0,
    history: [`Reset at ${new Date().toLocaleTimeString()}`]
  }),
}));

export default function ZustandExample() {
  const { count, history, increment, decrement, incrementBy, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Zustand Counter</h1>
            <p className="text-base sm:text-lg text-gray-600">Simple, fast, and scalable state management</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 shadow-lg text-center">
              <p className="text-teal-100 text-sm font-medium mb-2">Zustand State Value</p>
              <p className="text-6xl sm:text-7xl font-bold text-white">{count}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Action History
              </h3>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {history.slice(-5).reverse().map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 bg-white px-3 py-2 rounded border border-gray-200">
                    {item}
                  </div>
                ))}
                {history.length === 0 && (
                  <p className="text-sm text-gray-400 text-center py-4">No actions yet</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <button 
              className="px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition-all"
              onClick={increment}
            >
              +1
            </button>
            <button 
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all"
              onClick={() => incrementBy(5)}
            >
              +5
            </button>
            <button 
              className="px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 active:scale-95 transition-all"
              onClick={decrement}
            >
              -1
            </button>
            <button 
              className="px-4 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:scale-95 transition-all"
              onClick={reset}
            >
              Reset
            </button>
          </div>

          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <h3 className="font-semibold text-gray-900 mb-2">Zustand Advantages:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Minimal boilerplate (no providers needed)</li>
              <li>✓ Hook-based API that feels natural</li>
              <li>✓ Can be used outside React components</li>
              <li>✓ Built-in TypeScript support</li>
              <li>✓ Tiny bundle size (~1KB)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
