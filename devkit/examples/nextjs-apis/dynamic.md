
# `next/dynamic`

`next/dynamic` is a utility provided by Next.js for dynamic imports, which enables code splitting and lazy loading of components. It's a more powerful and Next.js-specific alternative to `React.lazy` and `Suspense` for loading components on demand.

### When to use it
-   To reduce the initial JavaScript bundle size by loading components only when they are needed.
-   For components that are not critical for the initial page load (e.g., modals, admin panels, complex charts, rich text editors).
-   When you want to control whether a component is rendered on the server-side or client-side.

### Syntax

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/MyComponent'), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Optional: disable server-side rendering for this component
});

// In your render method:
<DynamicComponent />
```

### Options
-   `loader` (required): A function that returns a Promise that resolves to a React component. This is typically a dynamic `import()` call.
-   `loading` (optional): A React component to render while the dynamic component is loading. If not provided, nothing is rendered during loading.
-   `ssr` (optional): Boolean. If `false`, the component will only be rendered on the client-side. Defaults to `true`.
-   `suspense` (optional): Boolean. If `true`, it enables React Suspense for the component. Defaults to `false`.

### Example

This example demonstrates how to dynamically import a `HeavyComponent` and display a loading indicator while it's being fetched.

**1. Heavy Component (`HeavyComponent.tsx`)**

```tsx
// src/app/nextjs-apis/dynamic/HeavyComponent.tsx
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
      <h2>Heavy Component (Dynamically Loaded)</h2>
      {data ? <p>{data}</p> : <p>Loading heavy component data...</p>}
    </div>
  );
}
```

**2. Main Component (`page.tsx`)**

```tsx
'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import the HeavyComponent
const DynamicHeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading Heavy Component...</p>, // Show this while loading
  ssr: false, // Ensure it only loads on the client-side
});

export default function DynamicImportExample() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>Next.js Dynamic Import Example</h1>
      <button onClick={() => setShowComponent(true)}>
        Load Dynamic Component
      </button>

      {showComponent && <DynamicHeavyComponent />}
    </div>
  );
}
```

### Key Points
-   `next/dynamic` is the recommended way to implement code splitting in Next.js.
-   The `ssr: false` option is very useful for components that rely on browser-specific APIs or should only be rendered client-side.
-   It automatically handles the `Suspense` fallback if a `loading` component is provided.
