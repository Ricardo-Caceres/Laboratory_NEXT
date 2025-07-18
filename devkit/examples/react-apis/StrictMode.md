
# `React.StrictMode`

`React.StrictMode` is a tool for highlighting potential problems in an application. Like `Fragment`, `StrictMode` does not render any visible UI. It activates additional checks and warnings for its descendants.

### When to use it
-   During development, to identify common mistakes and deprecated patterns.
-   To prepare your application for future React features and APIs.

### Checks Performed by Strict Mode
-   Identifying components with unsafe lifecycles.
-   Warning about legacy string ref API usage.
-   Warning about deprecated findDOMNode usage.
-   Detecting unexpected side effects (by intentionally double-invoking certain functions like render, `useState` updater functions, `useEffect` cleanup).
-   Detecting legacy context API.
-   Warning about state mutation outside of an `useState` updater.

### Syntax

```tsx
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>
  );
}
```

You can enable Strict Mode for any part of your application. For example, you can wrap your entire application in `StrictMode` in `src/app/layout.tsx` (for Next.js App Router) or `src/pages/_app.tsx` (for Pages Router).

### Example

This example shows how to wrap a component in `StrictMode`. When running in development mode, you will see warnings in the console for potential issues.

```tsx
'use client';

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // This effect will run twice in development Strict Mode
  useEffect(() => {
    console.log('Effect ran');
    return () => {
      console.log('Effect cleanup ran');
    };
  }, []);

  // Example of a potential side effect (not recommended in real apps)
  // This will cause a warning in Strict Mode if not inside an updater function
  // let value = 0;
  // value++;

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
```

### Key Points
-   Strict Mode only runs in development mode; it has no impact on the production build.
-   It helps you write more robust and future-proof React code.
-   The double-invoking of effects and render functions is intentional to help you find side effects that might cause issues.
