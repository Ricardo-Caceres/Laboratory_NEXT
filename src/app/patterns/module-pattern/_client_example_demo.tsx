'use client';

import { useState } from 'react';

// Module Pattern - Private/Public API
const CounterModule = (() => {
  let privateCount = 0;
  
  return {
    getCount: () => privateCount,
    increment: () => ++privateCount,
    decrement: () => --privateCount,
    reset: () => { privateCount = 0; return privateCount; }
  };
})();

export default function ModuleDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Module Pattern</h2>
          <p className="text-gray-600">Private state with public API</p>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
            <h3 className="font-bold mb-4 text-center">Counter Module (Encapsulated)</h3>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-indigo-600">{count}</div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  CounterModule.decrement();
                  setCount(CounterModule.getCount());
                }}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <button
                onClick={() => {
                  CounterModule.reset();
                  setCount(CounterModule.getCount());
                }}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => {
                  CounterModule.increment();
                  setCount(CounterModule.getCount());
                }}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded border border-yellow-200 text-sm">
            <p className="font-semibold mb-2">🔒 Private State</p>
            <p className="text-gray-700">
              The count variable is private (closure). Only accessible via public methods: 
              <code className="px-1 bg-yellow-100 rounded">increment()</code>,
              <code className="px-1 bg-yellow-100 rounded">decrement()</code>,
              <code className="px-1 bg-yellow-100 rounded">getCount()</code>
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center text-sm text-gray-700">
          💡 Module Pattern uses closures to create private scope
        </div>
      </div>
    </div>
  );
}
