'use client';

import { useState, useRef } from 'react';

export default function ControlledUncontrolledDemo() {
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
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Controlled vs Uncontrolled</h2>
          <p className="text-gray-600">Two ways to handle form inputs in React</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controlled Component */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-xl">🎮</span> Controlled
            </h3>
            <form onSubmit={handleControlledSubmit} className="space-y-3">
              <input
                type="text"
                value={controlledValue}
                onChange={(e) => setControlledValue(e.target.value)}
                placeholder="Type here..."
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-600">
                <strong>Current value:</strong> {controlledValue || '(empty)'}
              </p>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
              {controlledSubmitted && (
                <div className="mt-2 p-2 bg-blue-100 rounded text-sm">
                  ✅ Submitted: <strong>{controlledSubmitted}</strong>
                </div>
              )}
            </form>
            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>• React controls value</p>
              <p>• Updates on every keystroke</p>
              <p>• Single source of truth</p>
            </div>
          </div>

          {/* Uncontrolled Component */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-xl">📋</span> Uncontrolled
            </h3>
            <form onSubmit={handleUncontrolledSubmit} className="space-y-3">
              <input
                ref={uncontrolledRef}
                type="text"
                defaultValue=""
                placeholder="Type here..."
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <p className="text-xs text-gray-600">
                <strong>Current value:</strong> (access via ref)
              </p>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
              {uncontrolledSubmitted && (
                <div className="mt-2 p-2 bg-green-100 rounded text-sm">
                  ✅ Submitted: <strong>{uncontrolledSubmitted}</strong>
                </div>
              )}
            </form>
            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>• DOM controls value</p>
              <p>• Access via ref</p>
              <p>• Less re-renders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
