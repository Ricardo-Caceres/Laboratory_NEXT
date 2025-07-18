
# `useSyncExternalStore` Hook

The `useSyncExternalStore` hook is a React Hook for reading from an external data source that is not managed by React (e.g., a browser API, a third-party state management library). It ensures that your components can efficiently subscribe to external stores and that React can correctly batch updates.

### When to use it
-   When integrating with external state management libraries (like Redux, Zustand, or custom global stores).
-   When subscribing to browser APIs (like `window.localStorage`, `navigator.onLine`).
-   To avoid tearing (where different parts of the UI show different values from the same external store).

### Example

This example demonstrates how to use `useSyncExternalStore` to subscribe to the browser's online status, which is an external data source.

```tsx
'use client';

import { useSyncExternalStore } from 'react';

// 1. Define the subscription function
function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

// 2. Define the snapshot function
function getSnapshot() {
  return navigator.onLine;
}

// 3. Define the optional getServerSnapshot function (for SSR)
function getServerSnapshot() {
  // For browser APIs, this typically returns the initial client-side value
  // or a default value if not available on the server.
  return true; // Assume online on server for initial render
}

export default function OnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <h1>You are {isOnline ? 'online' : 'offline'}</h1>
  );
}
```

### Key Points
-   `useSyncExternalStore` takes three arguments:
    1.  `subscribe`: A function that takes a callback and returns an unsubscribe function.
    2.  `getSnapshot`: A function that returns the current value of the store.
    3.  `getServerSnapshot` (optional): A function that returns the initial snapshot for server-side rendering. This is crucial for avoiding hydration mismatches.
-   It's designed to be used by library authors or when you need to integrate with non-React state.
