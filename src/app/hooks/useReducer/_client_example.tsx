'use client';

import { useReducer } from 'react';

interface State {
  count: number;
  history: string[];
}

type Action = 
  | { type: 'increment' } 
  | { type: 'decrement' } 
  | { type: 'reset' }
  | { type: 'incrementBy'; payload: number };

function reducer(state: State, action: Action): State {
  const timestamp = new Date().toLocaleTimeString();
  switch (action.type) {
    case 'increment':
      return { 
        count: state.count + 1,
        history: [...state.history, `+1 at ${timestamp}`]
      };
    case 'decrement':
      return { 
        count: state.count - 1,
        history: [...state.history, `-1 at ${timestamp}`]
      };
    case 'incrementBy':
      return { 
        count: state.count + action.payload,
        history: [...state.history, `+${action.payload} at ${timestamp}`]
      };
    case 'reset':
      return { 
        count: 0, 
        history: [`Reset at ${timestamp}`]
      };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, history: ['Started'] });

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="mb-6">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useReducer Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Complex state management with action history
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 shadow-lg text-center">
              <p className="text-purple-100 text-sm font-medium mb-2">Current Count</p>
              <p className="text-6xl sm:text-7xl font-bold text-white">{state.count}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Action History
              </h3>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {state.history.slice(-5).reverse().map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 bg-white px-3 py-2 rounded border border-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button 
              className="px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition-all"
              onClick={() => dispatch({ type: 'increment' })}
            >
              +1
            </button>
            <button 
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all"
              onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}
            >
              +5
            </button>
            <button 
              className="px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 active:scale-95 transition-all"
              onClick={() => dispatch({ type: 'decrement' })}
            >
              -1
            </button>
            <button 
              className="px-4 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:scale-95 transition-all"
              onClick={() => dispatch({ type: 'reset' })}
            >
              Reset
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>useReducer</strong> is an alternative to useState for managing complex state logic. It is especially useful when state updates depend on previous state or when you have multiple sub-values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
