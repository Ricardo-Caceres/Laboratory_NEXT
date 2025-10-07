'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useState Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Click the buttons to increment, decrement, or reset the counter
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 shadow-lg mb-8">
            <div className="text-center">
              <p className="text-6xl sm:text-7xl font-bold text-white mb-2">{count}</p>
              <p className="text-blue-100 text-lg">Current Count</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button 
              className="px-6 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              onClick={() => setCount(count + 1)}
            >
              <span className="text-2xl">+</span>
              <span>Increment</span>
            </button>
            <button 
              className="px-6 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              onClick={() => setCount(count - 1)}
            >
              <span className="text-2xl">−</span>
              <span>Decrement</span>
            </button>
            <button 
              className="px-6 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              onClick={() => setCount(0)}
            >
              <span className="text-xl">↻</span>
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>useState</strong> is the most basic React Hook that lets you add state to functional components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
