'use client';

import { useReducer } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

type State = { count: number; step: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; payload: number }
  | { type: 'reset' };

const defaultReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      return state;
  }
};

// Custom reducer that adds max limit
const customReducer = (state: State, action: Action): State => {
  const newState = defaultReducer(state, action);
  // Add custom logic: prevent count from going above 20
  if (newState.count > 20) {
    return { ...newState, count: 20 };
  }
  if (newState.count < 0) {
    return { ...newState, count: 0 };
  }
  return newState;
};

function Counter({ reducer = defaultReducer, title }: { reducer?: typeof defaultReducer; title: string }) {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  return (
    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="bg-white p-4 rounded-lg mb-3 text-center">
        <p className="text-4xl font-bold text-gray-900">{state.count}</p>
        <p className="text-sm text-gray-600">Step: {state.step}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          +{state.step}
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          -{state.step}
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          value={state.step}
          onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })}
          className="flex-1 px-3 py-2 border border-purple-300 rounded-lg"
          min="1"
        />
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-200">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 sm:p-8 rounded-lg">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-violet-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">State Reducer Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Give users control over state logic</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Counter reducer={defaultReducer} title="🎮 Default Behavior" />
              <Counter reducer={customReducer} title="🔒 Custom (Max: 20, Min: 0)" />
            </div>

            <div className="p-4 bg-violet-50 rounded-lg border border-violet-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Users can override internal state logic</li>
                <li>✓ Provides inversion of control</li>
                <li>✓ Maintains default behavior while allowing customization</li>
                <li>✓ Great for complex reusable components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
