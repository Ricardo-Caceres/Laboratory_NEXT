
# `React.Fragment`

`React.Fragment` is a component that lets you group a list of children without adding extra nodes to the DOM. This is useful when you need to return multiple elements from a component but don't want to wrap them in an unnecessary `div` or other element.

### When to use it
-   When a component needs to return multiple elements, but you don't want to introduce an extra DOM node.
-   Especially useful in tables (`<tr>`, `<td>`) where adding a `div` would break the HTML structure.
-   When using CSS Flexbox or Grid, where adding an extra wrapper might interfere with the layout.

### Syntax

There are two ways to use Fragments:

1.  **Explicitly with `<React.Fragment>`:**
    ```tsx
    <React.Fragment>
      <ChildA />
      <ChildB />
    </React.Fragment>
    ```

2.  **Shorthand syntax (`<>`):** This is the most common and concise way.
    ```tsx
    <>
      <ChildA />
      <ChildB />
    </>
    ```
    *Note: The shorthand syntax does not support `key` props.* If you need to pass a `key` to a Fragment (e.g., when mapping over a list of items), you must use the explicit `<React.Fragment>` syntax.

### Example

This example shows a component returning multiple elements without an extra wrapper `div`.

```tsx
'use client';

import React from 'react';

function Column() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}

export default function TableExample() {
  return (
    <table>
      <tbody>
        <tr>
          <Column />
        </tr>
        <tr>
          {/* Using explicit Fragment with a key when mapping */}
          {['item1', 'item2'].map(item => (
            <React.Fragment key={item}>
              <td>{item} - Col 1</td>
              <td>{item} - Col 2</td>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
```

### Key Points
-   Fragments don't render any extra DOM elements, resulting in a flatter and potentially more performant DOM tree.
-   They are crucial for maintaining valid HTML structure in certain contexts (like tables).
-   Use the shorthand `<>` when no `key` is needed; otherwise, use `<React.Fragment key={...}>`.
