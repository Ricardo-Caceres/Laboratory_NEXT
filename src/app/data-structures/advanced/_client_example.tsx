'use client';

import { useState } from 'react';

export default function AdvancedDataStructuresExample() {
  const [bstValues, setBstValues] = useState<number[]>([50, 30, 70, 20, 40, 60, 80]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');

  const searchInBST = () => {
    const value = parseInt(searchValue);
    const found = bstValues.includes(value);
    setSearchResult(found ? `✓ Found ${value}` : `✗ ${value} not found`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Binary Search Tree Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">BST Visualization</h3>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              50
            </div>
          </div>
          <div className="flex justify-center gap-24">
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              30
            </div>
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              70
            </div>
          </div>
          <div className="flex justify-between w-full max-w-md">
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              20
            </div>
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              40
            </div>
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              60
            </div>
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">
              80
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Search in BST</h3>
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter value to search"
            className="flex-1 p-2 border border-[var(--border)] rounded bg-[var(--background)]"
          />
          <button
            onClick={searchInBST}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
        {searchResult && (
          <p className={`text-sm font-semibold ${searchResult.includes('✓') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {searchResult}
          </p>
        )}
      </div>

      <div className="mt-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Complexity Analysis:</h3>
        <div className="space-y-2 text-sm">
          <p><strong>Search:</strong> O(log n) average, O(n) worst case</p>
          <p><strong>Insert:</strong> O(log n) average, O(n) worst case</p>
          <p><strong>Delete:</strong> O(log n) average, O(n) worst case</p>
        </div>
      </div>
    </div>
  );
}
