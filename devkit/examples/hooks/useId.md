
# `useId` Hook

The `useId` hook is a React Hook for generating unique IDs that can be passed to accessibility attributes. It's primarily useful for generating unique IDs for elements that need to be associated with each other for accessibility purposes (e.g., `htmlFor` for labels, `aria-labelledby`, `aria-describedby`).

### When to use it
-   When you need a unique ID for an element in a component that might be rendered multiple times on the same page.
-   For associating labels with input fields, or describing elements with other elements, especially in reusable components.

### Example

This example shows how `useId` can be used to generate unique IDs for a label and an input field, ensuring accessibility even if the component is rendered multiple times.

```tsx
'use client';

import { useId } from 'react';

export default function AccessibleInput() {
  // Generate a unique ID for this component instance
  const id = useId();

  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />

      <br />

      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </div>
  );
}
```

### Key Points
-   `useId` generates a string that is guaranteed to be unique across the entire application.
-   It's stable across renders, meaning the same component instance will always get the same ID.
-   It's primarily for generating IDs for accessibility attributes, not for keys in lists (use `key` prop for that).
-   It avoids hydration mismatches when rendering on the server and client.
