
# `React.PureComponent`

`React.PureComponent` is similar to `React.Component` but implements `shouldComponentUpdate()` with a shallow prop and state comparison. This means that a `PureComponent` will re-render only if its props or state have shallowly changed.

### When to use it
-   As a performance optimization for class components when you know that your component renders the same result given the same props and state.
-   When you want to avoid unnecessary re-renders caused by parent component updates, but you don't want to manually implement `shouldComponentUpdate`.

### Syntax

```typescript
import React from 'react';

class MyPureComponent extends React.PureComponent<Props, State> {
  // ... same structure as React.Component
}
```

### Example

This example demonstrates how `React.PureComponent` can prevent a class component from re-rendering unnecessarily when its parent re-renders but its props and state remain shallowly equal.

```tsx
'use client';

import React from 'react';

interface PureGreetingProps {
  name: string;
  version: number;
}

// This component will only re-render if its props or state shallowly change.
class PureGreeting extends React.PureComponent<PureGreetingProps> {
  render() {
    console.log(`Rendering PureGreeting for ${this.props.name}, version ${this.props.version}`);
    return <p>Hello, {this.props.name}! (Version: {this.props.version})</p>;
  }
}

interface RegularGreetingProps {
  name: string;
  version: number;
}

// This component will re-render every time its parent re-renders.
class RegularGreeting extends React.Component<RegularGreetingProps> {
  render() {
    console.log(`Rendering RegularGreeting for ${this.props.name}, version ${this.props.version}`);
    return <p>Hello, {this.props.name}! (Version: {this.props.version})</p>;
  }
}

export default function PureComponentExample() {
  const [count, setCount] = React.useState(0);
  const fixedName = "Bob";
  const fixedVersion = 1;

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Pure Component</h2>
      <PureGreeting name={fixedName} version={fixedVersion} />

      <h2>Regular Component</h2>
      <RegularGreeting name={fixedName} version={fixedVersion} />

      <p>Check the console to see which components re-render when the count changes.</p>
    </div>
  );
}
```

### Key Points
-   `PureComponent` performs a shallow comparison of props and state. If your props or state contain complex data structures (objects, arrays) that are mutated rather than replaced, `PureComponent` might not prevent re-renders as expected.
-   For functional components, `React.memo` provides similar memoization capabilities.
-   Use it when performance is critical and you can guarantee shallow immutability of props and state.
