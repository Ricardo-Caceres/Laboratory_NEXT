'use client';

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
    return () => {
      console.log('Effect cleanup ran');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default function StrictModeExample() {
  return (
    <React.StrictMode>
      <h1>Strict Mode Enabled</h1>
      <MyComponent />
    </React.StrictMode>
  );
}
