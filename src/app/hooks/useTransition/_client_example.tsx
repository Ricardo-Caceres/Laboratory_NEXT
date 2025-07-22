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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useTransition` Hook Example</h1>
      <p className="text-lg mb-4">`useTransition` te permite marcar actualizaciones de estado como transiciones. Las transiciones son actualizaciones de UI que no bloquean el navegador, lo que ayuda a mantener la aplicación responsiva durante operaciones de renderizado costosas.</p>
      {isPending && <p className="text-lg text-gray-600 mb-2">Loading...</p>}
      <SlowList query={displayValue} />
    </div>
  );
}