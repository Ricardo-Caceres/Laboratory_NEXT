'use client';

import React, { useState } from 'react';

const MemoizedGreeting = React.memo(({ name }: { name: string }) => {
  console.log(`Rendering MemoizedGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
});

const RegularGreeting = ({ name }: { name: string }) => {
  console.log(`Rendering RegularGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
};

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const fixedName = "Alice";

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Memoized Component</h2>
      <MemoizedGreeting name={fixedName} />

      <h2>Regular Component</h2>
      <RegularGreeting name={fixedName} />

      <p>Check the console to see which components re-render when the count changes.</p>
    </div>
  );
}
