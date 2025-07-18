
# `useDebugValue` Hook

The `useDebugValue` hook can be used to display a custom label for custom hooks in React DevTools. It's purely for debugging purposes and doesn't affect the behavior of your code.

### When to use it
-   When building custom hooks and you want to provide more meaningful information about their internal state or derived values in React DevTools.

### Example

This example creates a custom hook `useOnlineStatus` that uses `useDebugValue` to show whether the user is online or offline in React DevTools.

**1. Custom Hook (`useOnlineStatus.ts`)**

```tsx
'use client';

import { useState, useEffect, useDebugValue } from 'react';

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  // Use useDebugValue to display a custom label in React DevTools
  // The second argument is an optional formatter function
  useDebugValue(isOnline ? 'Online' : 'Offline', status => `Status: ${status}`);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
```

**2. Component Using the Hook (`page.tsx`)**

```tsx
'use client';

import useOnlineStatus from './useOnlineStatus'; // Adjust path as needed

export default function OnlineStatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <h1>You are {isOnline ? 'online' : 'offline'}</h1>
  );
}
```

### How to see it in DevTools
1.  Open your browser's developer tools.
2.  Go to the "Components" tab.
3.  Select the `OnlineStatusIndicator` component.
4.  You should see `(Custom Hook)` next to `useOnlineStatus` with the debug value (e.g., `Status: Online`).
