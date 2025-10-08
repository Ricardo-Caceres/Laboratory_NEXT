'use client';

import { useState, useMemo } from 'react';

function expensiveCalculation(num: number): number {
  console.log('Running expensive calculation...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result = num * 2;
  }
  return result;
}

function calculatePrimes(max: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

export default function MemoExample() {
  const [number, setNumber] = useState(5);
  const [rerender, setRerender] = useState(false);
  const [calculationTime, setCalculationTime] = useState(0);

  const primes = useMemo(() => {
    const start = performance.now();
    const result = calculatePrimes(number * 1000);
    const end = performance.now();
    setCalculationTime(end - start);
    return result;
  }, [number]);

  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 sm:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useMemo Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Memoize expensive calculations to improve performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-8 shadow-lg mb-8">
            <div className="text-center">
              <p className="text-6xl sm:text-7xl font-bold text-white mb-2">{number}</p>
              <p className="text-orange-100 text-lg">Input Number</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-700 font-semibold mb-1">Doubled (Memoized)</p>
              <p className="text-3xl font-bold text-blue-900">{doubledNumber}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-purple-700 font-semibold mb-1">Primes Found</p>
              <p className="text-3xl font-bold text-purple-900">{primes.length}</p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-amber-800">Calculation Time:</span>
              <span className="text-lg font-bold text-amber-900">{calculationTime.toFixed(2)}ms</span>
            </div>
            <div className="mt-2 w-full bg-amber-200 rounded-full h-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(calculationTime / 100 * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button 
              className="px-6 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              onClick={() => setNumber(number + 1)}
            >
              Increase Number
            </button>
            <button 
              className="px-6 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              onClick={() => setRerender(!rerender)}
            >
              Force Re-render
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
            <p className="text-xs text-gray-600">
              <strong>Note:</strong> When you force a re-render without changing the number, the expensive calculation won&apos;t run again because it&apos;s memoized!
            </p>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-gray-700">
              <strong className="text-orange-700">useMemo</strong> returns a memoized value. It only recalculates when dependencies change, avoiding expensive computations on every render.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}