'use client';

import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

ChildComponent.displayName = 'ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>The child component below will not re-render when the count changes.</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
