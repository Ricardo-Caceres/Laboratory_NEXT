
# Higher-Order Component (HOC) Pattern

A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or logic. It is a pattern for reusing component logic.

### When to use it
-   To share logic between components without repeating code.
-   To add props or context to a component.
-   For abstracting away data fetching, subscriptions, or other side effects.

**Note:** While HOCs are a powerful pattern, React Hooks are often a simpler and more modern way to achieve the same goals.

### Example: `withAuth` HOC

This HOC checks if a user is authenticated. If they are, it renders the wrapped component; otherwise, it could render a loading state or a login prompt.

```tsx
// devkit/examples/patterns/hoc/withAuth.tsx
'use client';

import { ComponentType, useEffect, useState } from 'react';

// A mock authentication check
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async auth check
    setTimeout(() => {
      // In a real app, you would check a token or session
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  }, []);

  return { isAuthenticated, loading };
}

// The HOC function
export default function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const WithAuthComponent = (props: P) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for better debugging
  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
}
```

### Usage

Here is how you would use the `withAuth` HOC to protect a component.

```tsx
// A component that needs protection
function SecretDashboard() {
  return (
    <div>
      <h1>Secret Dashboard</h1>
      <p>Welcome, authenticated user!</p>
    </div>
  );
}

// Wrap the component with the HOC
const AuthenticatedDashboard = withAuth(SecretDashboard);

// Render the protected component
export default function MyPage() {
  return <AuthenticatedDashboard />;
}
```
