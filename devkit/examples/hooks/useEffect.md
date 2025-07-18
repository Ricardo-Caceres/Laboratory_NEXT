
# `useEffect` Hook

The `useEffect` hook lets you perform side effects in functional components. Side effects are operations that affect other components, like fetching data, subscribing to events, or manually changing the DOM.

### When to use it
-   Fetching data from an API.
-   Setting up or cleaning up subscriptions (e.g., event listeners).
-   Manually interacting with the DOM.

### Example

A component that fetches data from an API when it mounts.

```tsx
'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
}

export default function DataFetcher() {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function will run after the component mounts.
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setData(posts);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
      setLoading(false);
    }

    fetchData();

    // The return function is a cleanup function.
    // It runs when the component unmounts or before the effect runs again.
    return () => {
      // Cleanup logic here (e.g., cancel subscriptions)
    };
  }, []); // The empty dependency array `[]` means this effect runs only once.

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
```

### Dependency Array
-   `[]`: The effect runs once after the initial render.
-   `[var1, var2]`: The effect runs after the initial render and whenever `var1` or `var2` changes.
-   No array: The effect runs after every render.
