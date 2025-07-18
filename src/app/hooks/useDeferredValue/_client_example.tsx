'use client';

import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList';

export default function DeferredValueExample() {
  const [inputValue, setInputValue] = useState('');
  const deferredQuery = useDeferredValue(inputValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
      <p className="text-lg text-gray-700 mb-2">Input Value: {inputValue}</p>
      <p className="text-lg text-gray-700 mb-2">Deferred Query: {deferredQuery}</p>
      <SlowList query={deferredQuery} />
    </div>
  );
}