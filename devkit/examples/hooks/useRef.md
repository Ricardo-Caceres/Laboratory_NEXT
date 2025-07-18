
# `useRef` Hook

The `useRef` hook is a versatile hook that can be used to hold a mutable value that does not cause a re-render when it changes. It can also be used to access DOM elements directly.

### When to use it
1.  **Accessing DOM Elements:** To manage focus, text selection, or media playback.
2.  **Storing a Mutable Value:** To keep track of a value across renders without causing a re-render (e.g., storing a timer ID).

### Example 1: Accessing a DOM Element

This example shows how to use `useRef` to focus an input element when a button is clicked.

```tsx
'use client';

import { useRef } from 'react';

export default function FocusInput() {
  // Create a ref to store the input DOM element
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Access the DOM element via inputRef.current
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

### Example 2: Storing a Mutable Value

This example shows how to use `useRef` to store the previous value of a state variable.

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';

export default function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>();

  useEffect(() => {
    // The ref is updated *after* the render, so it holds the previous value.
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Key Points
-   `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument.
-   Updating a ref does **not** trigger a re-render.
-   The value of the ref persists for the full lifetime of the component.
