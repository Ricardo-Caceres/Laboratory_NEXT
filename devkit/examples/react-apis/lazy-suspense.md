
# `React.lazy` and `Suspense`

`React.lazy` and `Suspense` are features that allow you to implement code splitting in your React applications. Code splitting is a technique that helps reduce the bundle size of your application by loading components only when they are needed, rather than all at once.

### When to use it
-   For large applications where you want to improve initial load time.
-   When a component is not immediately needed on page load (e.g., a modal, a tab content, an admin panel).
-   To load third-party libraries or complex components on demand.

### `React.lazy`

`React.lazy` lets you render a dynamic import as a regular component. It takes a function that returns a Promise, which resolves to a module with a default export containing a React component.

### `Suspense`

`Suspense` is a component that lets you "wait" for some code to load and declaratively specify a loading indicator (fallback) while it's loading. It can wrap any component that might "suspend" (e.g., a component loaded with `React.lazy`).

### Example

This example demonstrates how to lazy-load a `HeavyComponent` and display a loading message using `Suspense` while it's being fetched.

**1. Heavy Component (`HeavyComponent.tsx`)**

```tsx
// src/app/react-apis/lazy-suspense/HeavyComponent.tsx
'use client';

import { useEffect, useState } from 'react';

export default function HeavyComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Simulate a heavy computation or data fetch
    const timer = setTimeout(() => {
      setData('Data from HeavyComponent loaded!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ border: '1px dashed gray', padding: '20px', marginTop: '20px' }}>
      <h2>Heavy Component</h2>
      {data ? <p>{data}</p> : <p>Loading heavy component data...</p>}
    </div>
  );
);
```

**2. Main Component (`page.tsx`)**

```tsx
'use client';

import React, { useState, Suspense } from 'react';

// Lazy-load the HeavyComponent
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

export default function LazySuspenseExample() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <div>
      <h1>Lazy Loading with Suspense</h1>
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Heavy Component
      </button>

      {showHeavyComponent && (
        // Wrap the lazy-loaded component with Suspense
        <Suspense fallback={<div>Loading Heavy Component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
```

### Key Points
-   `React.lazy` must be used with `Suspense`.
-   The `fallback` prop of `Suspense` can be any React element that you want to display while the lazy component is loading.
-   Error boundaries can be used to handle loading failures.
-   In Next.js, dynamic imports (`next/dynamic`) are often preferred as they provide more features like SSR control and named exports.
