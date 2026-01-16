'use client';

import { useState, useRef } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  // Controlled input state
  const [controlledValue, setControlledValue] = useState('');
  const [controlledSubmitted, setControlledSubmitted] = useState('');

  // Uncontrolled input ref
  const uncontrolledRef = useRef<HTMLInputElement>(null);
  const [uncontrolledSubmitted, setUncontrolledSubmitted] = useState('');

  const handleControlledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setControlledSubmitted(controlledValue);
  };

  const handleUncontrolledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uncontrolledRef.current) {
      setUncontrolledSubmitted(uncontrolledRef.current.value);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Controlled vs Uncontrolled</h1>
              <p className="text-base sm:text-lg text-gray-600">Two ways to handle form inputs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Controlled Component */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🎮</span> Controlled
                </h3>
                <form onSubmit={handleControlledSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={controlledValue}
                    onChange={(e) => setControlledValue(e.target.value)}
                    placeholder="Type here..."
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-600">Current: {controlledValue}</p>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
                {controlledSubmitted && (
                  <div className="mt-3 p-2 bg-blue-100 rounded text-sm">
                    Submitted: <strong>{controlledSubmitted}</strong>
                  </div>
                )}
              </div>

              {/* Uncontrolled Component */}
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Uncontrolled
                </h3>
                <form onSubmit={handleUncontrolledSubmit} className="space-y-3">
                  <input
                    type="text"
                    ref={uncontrolledRef}
                    defaultValue=""
                    placeholder="Type here..."
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-600">Value read on submit</p>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
                {uncontrolledSubmitted && (
                  <div className="mt-3 p-2 bg-purple-100 rounded text-sm">
                    Submitted: <strong>{uncontrolledSubmitted}</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Controlled Benefits:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>✓ React controls the value</li>
                  <li>✓ Easy validation on change</li>
                  <li>✓ Instant feedback</li>
                  <li>✓ Single source of truth</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Uncontrolled Benefits:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>✓ DOM controls the value</li>
                  <li>✓ Less re-renders</li>
                  <li>✓ Simpler for basic forms</li>
                  <li>✓ Good for file inputs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
