
# Render Props Pattern

The Render Props pattern is a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

### When to use it
-   To share state or behavior between components.
-   When you want to give the consumer of your component full control over the rendering.
-   As an alternative to HOCs or Hooks for certain use cases.

**Note:** Like HOCs, the Render Props pattern has been largely superseded by React Hooks, which often provide a more straightforward way to share logic.

### Example: A `Mouse` Tracker

This example creates a `Mouse` component that tracks the mouse position and uses a render prop to let other components render something based on that position.

```tsx
// devkit/examples/patterns/render-props/Mouse.tsx
'use client';

import { useState, useEffect, ReactNode } from 'react';

interface MouseProps {
  render: (state: { x: number; y: number }) => ReactNode;
}

export default function Mouse({ render }: MouseProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Call the render prop with the current state
  return render(position);
}
```

### Usage

Here is how you would use the `Mouse` component to render the current mouse coordinates.

```tsx
// A component that displays the mouse position
import Mouse from '@/devkit/examples/patterns/render-props/Mouse';

export default function MouseTracker() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse
        render={({ x, y }) => (
          // This is the content that gets rendered by the Mouse component
          <p>The current mouse position is ({x}, {y})</p>
        )}
      />
    </div>
  );
}
```

### Alternative `children` as a Function

A common variation of this pattern is to use the `children` prop as the render function.

```tsx
// Mouse.tsx (alternative)
// interface MouseProps { children: (state: { x: number; y: number }) => ReactNode; }
// {children(position)}

// Usage (alternative)
// <Mouse>
//   {({ x, y }) => <p>The current mouse position is ({x}, {y})</p>}
// </Mouse>
```
