
# `React.cloneElement`

`React.cloneElement` is a React API that allows you to clone and return a new React element using `element` as the starting point. The new element will have the props of the original element, with the new props merged in shallowly. New children will replace existing children.

### When to use it
-   When you need to modify the props or children of an existing React element, typically a child passed via `props.children`.
-   Commonly used in component composition patterns where a parent component needs to inject additional props or behavior into its children without directly modifying the child's source code.

### Syntax

```typescript
React.cloneElement(
  element,
  [props],
  [...children]
)
```

-   `element`: The React element to clone.
-   `props`: An object containing new props to merge with the original element's props.
-   `...children`: New children to replace the original element's children.

### Example

This example shows a `Wrapper` component that clones its children and injects an `onClick` handler and a new `style` prop.

```tsx
'use client';

import React from 'react';

interface WrapperProps {
  children: React.ReactElement; // Expecting a single React element child
}

function Wrapper({ children }: WrapperProps) {
  const handleClick = () => {
    alert('Button clicked from Wrapper!');
  };

  // Clone the child element and inject new props
  const clonedChild = React.cloneElement(children, {
    onClick: handleClick, // Add a new onClick handler
    style: { ...children.props.style, border: '2px solid blue', padding: '10px' }, // Merge styles
  });

  return (
    <div style={{ border: '1px dashed gray', padding: '20px', margin: '10px' }}>
      <h3>Wrapper Component</h3>
      {clonedChild}
    </div>
  );
}

export default function CloneElementExample() {
  return (
    <div>
      <h1>React.cloneElement Example</h1>
      <Wrapper>
        <button style={{ background: 'lightgreen' }}>Click Me</button>
      </Wrapper>
      <Wrapper>
        <p style={{ color: 'purple' }}>This is a paragraph.</p>
      </Wrapper>
    </div>
  );
}
```

### Key Points
-   `cloneElement` is useful for extending or modifying existing elements without direct access to their source.
-   It preserves the original element's `key` and `ref`.
-   It performs a shallow merge of props. If you have nested objects in props, they will be replaced, not merged deeply.
-   Use it judiciously, as it can sometimes make the component hierarchy harder to reason about if overused.
