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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">`useMemo` Hook Example</h1>
      <p className="text-lg mb-4">`useMemo` devuelve un valor memorizado. Solo recalculará el valor memorizado cuando una de las dependencias haya cambiado. Esto es útil para evitar cálculos costosos en cada renderizado.</p>
      <p className="text-lg text-gray-700 mb-2">Doubled Number (memoized): {doubledNumber}</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={() => setRerender(!rerender)}>
        Force Re-render
      </button>
      <p className="text-sm text-gray-500 mt-4">Forcing a re-render will not re-run the expensive calculation unless the number has changed.</p>
    </div>
  );
}