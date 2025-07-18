
# `useState` Hook

The `useState` hook allows you to add state to functional components.

### When to use it
Use `useState` when a component needs to keep track of some data that changes over time and should trigger a re-render when it does.

### Example

A simple counter component that uses `useState` to manage its count.

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  // The `useState` hook returns an array with two elements:
  // 1. The current state value.
  // 2. A function to update that state value.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, call setCount to update the state */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Key Points
-   `useState` takes the initial state as an argument.
-   The state update function (e.g., `setCount`) can be called with a new value or a function that receives the previous state and returns the new state (e.g., `setCount(prevCount => prevCount + 1)`).
-   Calling the update function triggers a re-render of the component with the new state value.
