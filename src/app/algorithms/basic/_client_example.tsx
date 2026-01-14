'use client';

import { useState } from 'react';

export default function AlgorithmsExample() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  const bubbleSort = () => {
    const arr = [...array];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    setSortedArray(arr);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bubble Sort Demo</h2>
      <div className="mb-4 flex gap-2">
        {array.map((num, idx) => (
          <div key={idx} className="w-12 h-12 bg-[var(--primary)] text-white rounded flex items-center justify-center font-bold">
            {num}
          </div>
        ))}
      </div>
      <button onClick={bubbleSort} className="bg-[var(--primary)] text-white font-bold py-2 px-4 rounded mb-4">
        Sort Array
      </button>
      {sortedArray.length > 0 && (
        <div className="flex gap-2">
          {sortedArray.map((num, idx) => (
            <div key={idx} className="w-12 h-12 bg-green-600 text-white rounded flex items-center justify-center font-bold">
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
