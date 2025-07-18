
# `useCallback` Hook

The `useCallback` hook memoizes a callback function, preventing it from being recreated on every render. It is useful for optimizing performance, especially when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders.

### When to use it
-   When passing callbacks to optimized child components that are wrapped in `React.memo`.
-   When the callback is a dependency of another hook like `useEffect`.

### Example

In this example, `useCallback` prevents the `handleClick` function from being recreated every time the `ParentComponent` re-renders, which in turn prevents the `ChildComponent` from re-rendering unnecessarily.

```tsx
'use client';

import { useState, useCallback, memo } from 'react';

// A child component that only re-renders if its props change.
const ChildComponent = memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

ChildComponent.displayName = 'ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, a new handleClick function would be created on every render,
  // causing ChildComponent to re-render every time.
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    // This function depends on nothing from the component scope, so the dependency array is empty.
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
```

### Key Points
-   `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.
-   The dependency array `deps` should include all values from the component scope that are used inside the callback.
-   Overusing `useCallback` can be counterproductive, as it adds complexity. Use it only when you have a specific performance problem.
