'use client';

import { useState } from 'react';

export function BigODemo() {
  const [arraySize, setArraySize] = useState(1000);
  const [results, setResults] = useState<{ operation: string; time: number; complexity: string }[]>([]);

  const runBenchmarks = () => {
    const arr = Array.from({ length: arraySize }, (_, i) => Math.floor(Math.random() * arraySize));
    const newResults: typeof results = [];

    // O(1) - Constant
    let start = performance.now();
    const first = arr[0];
    newResults.push({ operation: 'O(1) - Array access', time: performance.now() - start, complexity: 'O(1)' });

    // O(log n) - Binary Search
    const sorted = [...arr].sort((a, b) => a - b);
    start = performance.now();
    let left = 0, right = sorted.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid] === 500) break;
      if (sorted[mid] < 500) left = mid + 1;
      else right = mid - 1;
    }
    newResults.push({ operation: 'O(log n) - Binary search', time: performance.now() - start, complexity: 'O(log n)' });

    // O(n) - Linear Search
    start = performance.now();
    arr.find(x => x === 500);
    newResults.push({ operation: 'O(n) - Linear search', time: performance.now() - start, complexity: 'O(n)' });

    // O(n log n) - Sort
    start = performance.now();
    [...arr].sort((a, b) => a - b);
    newResults.push({ operation: 'O(n log n) - Sort', time: performance.now() - start, complexity: 'O(n log n)' });

    // O(n²) - Bubble sort (limited)
    const smallArr = arr.slice(0, 100);
    start = performance.now();
    for (let i = 0; i < smallArr.length; i++) {
      for (let j = 0; j < smallArr.length - i - 1; j++) {
        if (smallArr[j] > smallArr[j + 1]) {
          [smallArr[j], smallArr[j + 1]] = [smallArr[j + 1], smallArr[j]];
        }
      }
    }
    newResults.push({ operation: 'O(n²) - Bubble sort (100 items)', time: performance.now() - start, complexity: 'O(n²)' });

    setResults(newResults);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <h3 className="text-lg font-semibold mb-4">Benchmark de Complejidades</h3>
        
        <div className="mb-4">
          <label className="block mb-2">Tamaño del Array: {arraySize.toLocaleString()}</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button
          onClick={runBenchmarks}
          className="px-6 py-2 rounded font-semibold transition-colors"
          style={{ background: 'var(--primary)', color: 'white' }}
        >
          Ejecutar Benchmarks
        </button>
      </div>

      {results.length > 0 && (
        <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
          <h3 className="text-lg font-semibold mb-4">Resultados</h3>
          <div className="space-y-2">
            {results.map((result, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded" style={{ background: 'var(--background)' }}>
                <div>
                  <div className="font-medium">{result.operation}</div>
                  <div className="text-sm opacity-70">{result.complexity}</div>
                </div>
                <div className="font-mono font-semibold" style={{ color: 'var(--primary)' }}>
                  {result.time.toFixed(4)} ms
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 rounded-lg" style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-2">📊 Guía Rápida de Big O</h3>
        <div className="text-sm space-y-1 font-mono">
          <div>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)</div>
          <div className="mt-3 opacity-80">
            <div>✅ Excelente: O(1), O(log n)</div>
            <div>✅ Bueno: O(n), O(n log n)</div>
            <div>⚠️ Cuidado: O(n²)</div>
            <div>❌ Evitar: O(2ⁿ), O(n!)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
