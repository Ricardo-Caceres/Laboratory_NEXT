
# `useMemo` Hook

The `useMemo` hook memoizes the result of a calculation, preventing it from being re-computed on every render. It is useful for optimizing performance by caching expensive calculations.

### When to use it
-   When you have a computationally expensive calculation that you don't want to run on every render.
-   When you need to preserve the reference of an object or array across renders.

### Example

In this example, `useMemo` is used to memoize the result of an expensive calculation. The calculation will only re-run if the `number` state changes.

```tsx
'use client';

import { useState, useMemo } from 'react';

// A mock expensive function
function expensiveCalculation(num: number): number {
  console.log('Running expensive calculation...');
  // Simulate a delay
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function MemoExample() {
  const [number, setNumber] = useState(1);
  const [rerender, setRerender] = useState(false);

  // useMemo will only re-compute the memoized value when 'number' has changed.
  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <p>Current Number: {number}</p>
      <p>Doubled Number (memoized): {doubledNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <br />
      <button onClick={() => setRerender(!rerender)}>
        Force Re-render
      </button>
      <p>Forcing a re-render will not re-run the expensive calculation unless the number has changed.</p>
    </div>
  );
}
```

### Key Points
-   `useMemo` takes a function and a dependency array.
-   The function is executed during rendering.
-   The dependency array should include all values from the component scope that are used inside the calculation.
-   Like `useCallback`, `useMemo` should be used judiciously to avoid premature optimization.
