'use client';

import { useState } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

// Module Pattern - Encapsulation with private and public members
const CounterModule = (() => {
  let privateCount = 0;
  const privateIncrement = (value: number) => privateCount += value;
  const privateDecrement = (value: number) => privateCount -= value;

  return {
    getCount: () => privateCount,
    increment: () => {
      privateIncrement(1);
      return privateCount;
    },
    decrement: () => {
      privateDecrement(1);
      return privateCount;
    },
    reset: () => {
      privateCount = 0;
      return privateCount;
    },
  };
})();

// Another module example - Calculator
const CalculatorModule = (() => {
  const add = (a: number, b: number) => a + b;
  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => b !== 0 ? a / b : 'Error: Division by zero';

  return { add, subtract, multiply, divide };
})();

export default function ClientExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  const [count, setCount] = useState(0);
  const [calcResult, setCalcResult] = useState<number | string>(0);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Module Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Encapsulation and private/public APIs</p>
            </div>

            <div className="space-y-6">
              {/* Counter Module */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">Counter Module</h3>
                <div className="bg-white p-4 rounded-lg mb-3 text-center">
                  <p className="text-4xl font-bold text-gray-900">{count}</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCount(CounterModule.increment())}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setCount(CounterModule.decrement())}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setCount(CounterModule.reset())}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Reset
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-2">✓ Private count variable, public methods only</p>
              </div>

              {/* Calculator Module */}
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-3">Calculator Module</h3>
                <div className="bg-white p-3 rounded-lg mb-3 text-center">
                  <p className="text-2xl font-bold text-gray-900">{calcResult}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setCalcResult(CalculatorModule.add(5, 3))} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    5 + 3
                  </button>
                  <button onClick={() => setCalcResult(CalculatorModule.subtract(10, 4))} className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                    10 - 4
                  </button>
                  <button onClick={() => setCalcResult(CalculatorModule.multiply(6, 7))} className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm">
                    6 × 7
                  </button>
                  <button onClick={() => setCalcResult(CalculatorModule.divide(20, 4))} className="px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm">
                    20 ÷ 4
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ True encapsulation with private variables</li>
                <li>✓ Clean public API</li>
                <li>✓ Avoids global namespace pollution</li>
                <li>✓ Singleton by default (IIFE)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
