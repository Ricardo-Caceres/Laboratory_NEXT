'use client';

import { useState, useTransition } from 'react';

// Simulate a slow component that renders a large list
function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #eee', padding: '10px' }}>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search items..."
        style={{ padding: '8px', width: '300px' }}
      />
      {isPending && <p>Loading...</p>}
      <SlowList query={displayValue} />
    </div>
  );
}
