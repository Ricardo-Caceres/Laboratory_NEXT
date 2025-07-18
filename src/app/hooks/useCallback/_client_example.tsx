'use client';

import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent rendered');
  return <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={onClick}>Click me</button>;
});

ChildComponent.displayName = 'ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-lg text-gray-700 mb-2">Count: {count}</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4 mx-2" onClick={() => setCount(count + 1)}>Increment Count</button>
      <p className="text-lg text-gray-700 mb-2">The child component below will not re-render when the count changes.</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
