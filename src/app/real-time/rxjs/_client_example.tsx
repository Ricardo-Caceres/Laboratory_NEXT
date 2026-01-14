'use client';

import { useState, useEffect } from 'react';

export default function RxJSExample() {
  const [values, setValues] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    // Simulate Observable stream
    const interval = setInterval(() => {
      setCurrentValue(prev => {
        const newValue = prev + 1;
        if (newValue % 2 === 0) {
          setValues(prevValues => [...prevValues, newValue * 2]);
        }
        return newValue;
      });
    }, 500);

    const timeout = setTimeout(() => {
      setIsRunning(false);
      setValues(prev => [...prev, -1]); // -1 indicates complete
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRunning]);

  const startObservable = () => {
    setValues([]);
    setCurrentValue(0);
    setIsRunning(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">RxJS Observable Example</h2>
      
      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <p className="text-sm mb-2">
          <strong>Stream:</strong> interval(500ms) → filter(even) → map(x * 2) → take(5s)
        </p>
        <p className="text-sm opacity-70">
          This observable emits values every 500ms, filters only even numbers, doubles them, and completes after 5 seconds.
        </p>
      </div>

      <button
        onClick={startObservable}
        disabled={isRunning}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 mb-6"
      >
        {isRunning ? 'Running...' : 'Start Observable'}
      </button>

      <div className="space-y-2">
        <h3 className="font-semibold">Emitted Values:</h3>
        <div className="flex flex-wrap gap-2">
          {values.map((value, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-lg font-mono ${
                value === -1
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                  : 'bg-[var(--primary)] text-white'
              }`}
            >
              {value === -1 ? 'Complete!' : value}
            </div>
          ))}
        </div>
        {values.length === 0 && !isRunning && (
          <p className="text-sm opacity-70 italic">No values emitted yet. Click "Start Observable" to begin.</p>
        )}
      </div>
    </div>
  );
}
