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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search items..."
        style={{ padding: '8px', width: '300px' }}
      />
      <p>Input Value: {inputValue}</p>
      <p>Deferred Query: {deferredQuery}</p>
      <SlowList query={deferredQuery} />
    </div>
  );
}
