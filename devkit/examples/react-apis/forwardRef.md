
# `React.forwardRef`

`React.forwardRef` is a React feature that lets components pass a ref they receive down to a child component. This is particularly useful when building reusable component libraries or when you need to manage focus, text selection, or media playback in a child component from its parent.

### When to use it
-   When you need to pass a ref from a parent component to a DOM element or a class component inside a functional child component.
-   When creating reusable components that need to expose a DOM node to their parent.

### Syntax

```typescript
React.forwardRef((props, ref) => {
  // ... render logic
  return <SomeComponent ref={ref} {...props} />;
});
```

-   The component wrapped with `forwardRef` receives `props` and `ref` as its arguments.
-   The `ref` argument is the ref object passed by the parent component.

### Example

This example shows how a parent component can focus an input element inside a functional child component using `forwardRef`.

**1. Child Component (`MyInput.tsx`)**

```tsx
'use client';

import React from 'react';

interface MyInputProps {
  placeholder?: string;
}

// Use React.forwardRef to pass the ref down to the actual input element
const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({ placeholder }, ref) => {
  return (
    <input
      ref={ref} // Attach the forwarded ref to the DOM element
      type="text"
      placeholder={placeholder}
      style={{ padding: '8px', border: '1px solid #ccc' }}
    />
  );
});

MyInput.displayName = 'MyInput'; // Good practice for debugging

export default MyInput;
```

**2. Parent Component (`page.tsx`)**

```tsx
'use client';

import React, { useRef } from 'react';
import MyInput from './MyInput'; // Adjust path as needed

export default function ParentComponent() {
  // Create a ref in the parent component
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Access the child's DOM node through the ref
    inputRef.current?.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Focus me!" />
      <button onClick={handleClick} style={{ marginLeft: '10px', padding: '10px 15px' }}>
        Focus Input
      </button>
    </div>
  );
}
```

### Key Points
-   `forwardRef` is necessary when you want a parent component to directly interact with a DOM node or a class component instance exposed by a functional child component.
-   It helps maintain the component encapsulation while providing necessary imperative access.
-   For functional components, `useImperativeHandle` can be used in conjunction with `forwardRef` to expose a more controlled API to the parent.
