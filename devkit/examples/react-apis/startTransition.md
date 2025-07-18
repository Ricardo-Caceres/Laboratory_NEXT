
# `React.startTransition`

`React.startTransition` is a React API that allows you to mark a state update as a "transition." Transitions are non-urgent updates that can be interrupted by more urgent updates (like user input). This helps keep the UI responsive during potentially slow re-renders.

### When to use it
-   When you have a state update that might cause a slow re-render, and you want to keep the UI interactive during that re-render.
-   To differentiate between urgent updates (e.g., typing into an input) and non-urgent updates (e.g., filtering a long list, rendering a complex chart).

### Syntax

```typescript
React.startTransition(() => {
  // State updates inside this callback are marked as transitions
  setSomeState(newValue);
});
```

### Example

This example uses `React.startTransition` to keep the input responsive while a potentially slow list filters in the background. The `isPending` state from `useTransition` is often used in conjunction with `startTransition` to show a loading indicator.

```tsx
'use client';

import React, { useState, useTransition } from 'react';

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

export default function StartTransitionExample() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [isPending, startTransition] = useTransition(); // useTransition provides isPending

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    // Mark this update as a transition
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
```

### Key Points
-   `startTransition` is a standalone API, while `useTransition` is a hook that provides `startTransition` and `isPending`.
-   Updates wrapped in `startTransition` are non-blocking and will yield to more urgent updates.
-   It's part of React's Concurrent Features, designed to improve user experience by keeping the UI responsive.
