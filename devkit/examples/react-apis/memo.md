
# `React.memo`

`React.memo` is a higher-order component (HOC) that memoizes a functional component. It prevents a component from re-rendering if its props have not changed. This can be a performance optimization in certain scenarios.

### When to use it
-   When your component renders the same result given the same props.
-   When your component is expensive to render (e.g., performs complex calculations or renders a large number of DOM elements).
-   When the component's parent frequently re-renders, but the component itself doesn't need to update unless its specific props change.

### Syntax

```typescript
React.memo(Component, [arePropsEqual])
```

-   `Component`: The functional component you want to memoize.
-   `arePropsEqual` (optional): A custom comparison function. If provided, React will use this function to compare the old and new props. It should return `true` if the props are equal (meaning no re-render is needed) and `false` otherwise. By default, `React.memo` performs a shallow comparison of props.

### Example

This example demonstrates how `React.memo` can prevent a child component from re-rendering unnecessarily when its parent re-renders but its props remain the same.

```tsx
'use client';

import React, { useState } from 'react';

// This component will only re-render if its `name` prop changes.
const MemoizedGreeting = React.memo(({ name }: { name: string }) => {
  console.log(`Rendering MemoizedGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
});

// This component will re-render every time its parent re-renders.
const RegularGreeting = ({ name }: { name: string }) => {
  console.log(`Rendering RegularGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
};

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const fixedName = "Alice"; // This prop won't change

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
```

### Key Points
-   `React.memo` is a performance optimization, not a guarantee. Overusing it can sometimes lead to more overhead than benefit.
-   It only prevents re-renders if props are shallowly equal. For complex props (objects, arrays, functions), you might need `useMemo`, `useCallback`, or a custom `arePropsEqual` function.
-   It does not prevent re-renders if the component's own state or context changes.
