'use client';

import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick, renderCount }: { onClick: () => void; renderCount: number }) => {
  return (
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-purple-700">Child Component</span>
        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
          Renders: {renderCount}
        </span>
      </div>
      <button 
        className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg active:scale-95 transition-all duration-200"
        onClick={onClick}
      >
        Click Me (Memoized Callback)
      </button>
    </div>
  );
});

ChildComponent.displayName = 'ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const handleClickWithCallback = useCallback(() => {
    const newLog = `Memoized callback clicked at ${new Date().toLocaleTimeString()}`;
    setLogs(prev => [newLog, ...prev].slice(0, 3));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useCallback Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Optimize performance by memoizing callback functions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 shadow-lg mb-8">
            <div className="text-center">
              <p className="text-6xl sm:text-7xl font-bold text-white mb-2">{count}</p>
              <p className="text-purple-100 text-lg">Parent Render Count</p>
            </div>
          </div>

          <button 
            className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200 mb-6"
            onClick={() => setCount(count + 1)}
          >
            Re-render Parent ({count} renders)
          </button>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <ChildComponent 
              onClick={handleClickWithCallback}
              renderCount={count}
            />
          </div>

          {logs.length > 0 && (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Activity Log:</h3>
              <ul className="space-y-1">
                {logs.map((log, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    {log}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm text-gray-700">
              <strong className="text-purple-700">useCallback</strong> returns a memoized callback function. The child component won&apos;t re-render unnecessarily because the callback reference stays the same.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
