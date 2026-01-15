'use client';

import { useReducer } from 'react';

type State = { on: boolean; clickCount: number };
type Action = { type: 'toggle' } | { type: 'reset' };

const defaultReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on, clickCount: state.clickCount + 1 };
    case 'reset':
      return { on: false, clickCount: 0 };
    default:
      return state;
  }
};

function useToggle({ 
  initialState = { on: false, clickCount: 0 },
  reducer = defaultReducer 
} = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const toggle = () => dispatch({ type: 'toggle' });
  const reset = () => dispatch({ type: 'reset' });
  
  return { ...state, toggle, reset };
}

export default function StateReducerDemo() {
  // Default toggle
  const defaultToggle = useToggle();
  
  // Custom reducer - limit to 4 clicks
  const limitedReducer = (state: State, action: Action) => {
    if (action.type === 'toggle' && state.clickCount >= 4) {
      return state; // Block toggle
    }
    return defaultReducer(state, action);
  };
  const limitedToggle = useToggle({ reducer: limitedReducer });

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">State Reducer Pattern</h2>
          <p className="text-gray-600">Inversion of control for state management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Default Reducer */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3">Default Reducer</h3>
            <button
              onClick={defaultToggle.toggle}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-2"
            >
              {defaultToggle.on ? '🔆 ON' : '🌙 OFF'}
            </button>
            <button
              onClick={defaultToggle.reset}
              className="w-full px-4 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors mb-3"
            >
              Reset
            </button>
            <p className="text-sm text-gray-700">
              Clicks: <strong>{defaultToggle.clickCount}</strong>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              ✓ Normal behavior - unlimited toggles
            </p>
          </div>

          {/* Custom Reducer */}
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-bold mb-3">Custom Reducer</h3>
            <button
              onClick={limitedToggle.toggle}
              disabled={limitedToggle.clickCount >= 4}
              className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-2"
            >
              {limitedToggle.on ? '🔆 ON' : '🌙 OFF'}
            </button>
            <button
              onClick={limitedToggle.reset}
              className="w-full px-4 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors mb-3"
            >
              Reset
            </button>
            <p className="text-sm text-gray-700">
              Clicks: <strong>{limitedToggle.clickCount}/4</strong>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              🔒 Custom logic - limited to 4 clicks
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center text-sm text-gray-700">
          💡 Custom reducer blocks toggle action after 4 clicks - user has full control over state logic
        </div>
      </div>
    </div>
  );
}
