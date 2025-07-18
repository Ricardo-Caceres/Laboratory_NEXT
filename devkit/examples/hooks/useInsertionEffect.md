
# `useInsertionEffect` Hook

The `useInsertionEffect` hook is a specialized hook primarily intended for CSS-in-JS libraries to inject styles into the DOM *before* any layout effects (`useLayoutEffect`) or regular effects (`useEffect`) fire. This ensures that styles are available before elements are measured or painted, preventing flashes of unstyled content (FOUC).

### When to use it
-   **Almost exclusively for CSS-in-JS libraries:** If you are not building a CSS-in-JS library, you likely won't need this hook.
-   To inject dynamic styles into the DOM synchronously before the browser paints.

### Example (Conceptual)

Since `useInsertionEffect` is highly specialized for CSS-in-JS libraries, a direct, runnable example for a typical application is not practical. However, conceptually, it would be used within a styling library's internal implementation like this:

```tsx
// Conceptual example within a CSS-in-JS library
import { useInsertionEffect, useRef } from 'react';

function useDynamicStyles(styleString: string) {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useInsertionEffect(() => {
    // This effect runs synchronously before DOM mutations and layout effects.
    // It's the ideal place to inject <style> tags.
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }
    styleRef.current.innerHTML = styleString;

    return () => {
      // Cleanup: remove the style tag when the component unmounts
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [styleString]); // Re-run if the style string changes
}

// How a user of the CSS-in-JS library might use it:
function MyStyledComponent() {
  const dynamicColor = 'blue';
  useDynamicStyles(`
    .my-dynamic-text {
      color: ${dynamicColor};
      font-size: 20px;
    }
  `);

  return <p className="my-dynamic-text">This text is dynamically styled.</p>;
}

export default MyStyledComponent;
```

### Key Points
-   It runs synchronously *before* `useLayoutEffect` and `useEffect`.
-   It does *not* have access to the DOM layout (e.g., `offsetWidth`, `offsetHeight`) because it runs before the browser has calculated layout.
-   Its primary purpose is to prevent FOUC by ensuring styles are injected as early as possible.
-   If you're not building a styling library, you probably don't need to use this hook directly.
