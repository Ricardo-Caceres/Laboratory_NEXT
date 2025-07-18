
# `useDeferredValue` Hook

The `useDeferredValue` hook lets you defer updating a part of the UI. It's similar to debouncing, but it works with React's concurrent rendering capabilities.

### When to use it
-   When you have a UI that updates frequently (e.g., a search input) and you want to keep the UI responsive while a potentially expensive re-render happens in the background.
-   To prioritize urgent updates (like typing into an input) over less urgent updates (like filtering a long list).

### Example

This example shows how `useDeferredValue` can be used to defer the rendering of a filtered list, keeping the input responsive.

```tsx
'use client';

import { useState, useDeferredValue } from 'react';

// Simulate a slow component that renders a large list
function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #eee', padding: '10px' }}>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function DeferredValueExample() {
  const [inputValue, setInputValue] = useState('');
  // Defer the value of inputValue for the SlowList component
  const deferredQuery = useDeferredValue(inputValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search items..."
        style={{ padding: '8px', width: '300px' }}
      />
      <p>Input Value: {inputValue}</p>
      <p>Deferred Query: {deferredQuery}</p>
      <SlowList query={deferredQuery} />
    </div>
  );
}
```

### Key Points
-   `useDeferredValue` returns a deferred version of the value passed to it.
-   React will try to update the UI with the urgent value first, and then update the deferred value in the background.
-   It's a performance optimization and should be used when you notice UI unresponsiveness due to expensive renders.
