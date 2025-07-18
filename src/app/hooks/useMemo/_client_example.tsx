'use client';

import { useState, useMemo } from 'react';

function expensiveCalculation(num: number): number {
  console.log('Running expensive calculation...');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function MemoExample() {
  const [number, setNumber] = useState(1);
  const [rerender, setRerender] = useState(false);

  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-lg text-gray-700 mb-2">Current Number: {number}</p>
      <p className="text-lg text-gray-700 mb-2">Doubled Number (memoized): {doubledNumber}</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={() => setRerender(!rerender)}>
        Force Re-render
      </button>
      <p className="text-sm text-gray-500 mt-4">Forcing a re-render will not re-run the expensive calculation unless the number has changed.</p>
    </div>
  );
}