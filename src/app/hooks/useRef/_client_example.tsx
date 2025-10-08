'use client';

import { useRef, useState } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

  const incrementWithoutRerender = () => {
    countRef.current += 1;
    alert(`Button clicked ${countRef.current} times (no re-render!)`);
  };

  const forceRerender = () => {
    setRenderCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useRef Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Access DOM elements and store mutable values
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 shadow-lg mb-8">
            <div className="text-center space-y-4">
              <div>
                <p className="text-teal-100 text-sm mb-1">Render Count (State)</p>
                <p className="text-4xl font-bold text-white">{renderCount}</p>
              </div>
              <div className="border-t border-teal-400/30 pt-4">
                <p className="text-teal-100 text-sm mb-1">Click Count (Ref - No Re-render)</p>
                <p className="text-4xl font-bold text-white">{countRef.current}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Input with Ref:
            </label>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
              placeholder="Type something here..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <button 
              className="px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              onClick={handleFocus}
            >
              Focus Input
            </button>
            <button 
              className="px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              onClick={incrementWithoutRerender}
            >
              Click (No Re-render)
            </button>
            <button 
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              onClick={forceRerender}
            >
              Force Re-render
            </button>
          </div>

          <div className="bg-teal-50 rounded-lg p-4 border border-teal-200 mb-4">
            <h3 className="font-semibold text-teal-900 mb-2">Current Input Value:</h3>
            <p className="text-gray-700 break-words">{inputValue || '(empty)'}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">
              <strong className="text-teal-700">useRef</strong> returns a mutable ref object that persists for the lifetime of the component. Changes to ref.current don&apos;t trigger re-renders!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}