'use client';

import React, { useState, useTransition } from 'react';

function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul className="max-h-52 overflow-y-auto border border-gray-300 p-2">
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function StartTransitionExample() {
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
    <div className="space-y-6">
      
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.startTransition Example</h1>
          <p className="text-lg mb-4">`React.startTransition` permite marcar actualizaciones de estado como transiciones. Esto ayuda a mantener la interfaz de usuario responsiva durante operaciones de renderizado costosas.</p>
          <input
            className="border p-2 w-80 mb-4"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search items..."
          />
          {isPending && <p className="text-blue-500">Loading...</p>}
          <SlowList query={displayValue} />
        </div>
      </div>
  );
}
