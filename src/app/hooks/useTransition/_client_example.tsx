'use client';

import { useState, useTransition } from 'react';

// Simulate a slow component that renders a large list
function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul className="max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow-sm w-80">
      {filteredItems.map(item => <li key={item} className="py-1 text-gray-700">{item}</li>)}
    </ul>
  );
}

export default function TransitionExample() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    startTransition(() => {
      setDisplayValue(event.target.value);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search items..."
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-80"
      />
      {isPending && <p className="text-lg text-gray-600 mb-2">Loading...</p>}
      <SlowList query={displayValue} />
    </div>
  );
}