'use client';

import { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useReducer` Hook Example</h1>
      <p className="text-lg mb-4">`useReducer` es una alternativa a `useState` para manejar estados más complejos que involucran lógica de transición. Es útil cuando el estado tiene múltiples sub-valores o cuando el siguiente estado depende del anterior.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mx-2" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mx-2" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mx-2" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}