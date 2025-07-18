
# `useLayoutEffect` Hook

The `useLayoutEffect` hook is similar to `useEffect`, but it fires synchronously after all DOM mutations. This means it runs *before* the browser paints the screen.

### When to use it
-   When you need to perform DOM measurements (e.g., getting the size or position of an element) and then make synchronous DOM changes based on those measurements.
-   To prevent visual inconsistencies or flickering when a DOM update needs to happen immediately after a render.

### Example

This example demonstrates how `useLayoutEffect` can be used to measure the width of a div and adjust its style immediately, preventing a flicker.

```tsx
'use client';

import { useState, useRef, useLayoutEffect } from 'react';

export default function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      // Measure the width of the div after it has been rendered to the DOM
      const newWidth = divRef.current.offsetWidth;
      if (newWidth !== width) {
        // Synchronously update the state, which will cause a re-render
        // This happens before the browser paints, so no flicker.
        setWidth(newWidth);
        console.log('useLayoutEffect: Div width measured and updated:', newWidth);
      }
    }
  }, [width]); // Re-run if width changes (to ensure it stabilizes)

  return (
    <div>
      <div
        ref={divRef}
        style={{
          background: 'lightblue',
          padding: '20px',
          margin: '20px',
          border: '1px solid blue',
          width: width === 0 ? 'auto' : `${width}px` // Initial width can be auto
        }}
      >
        This div's width is: {width}px
      </div>
      <p>Resize your browser window to see the effect.</p>
    </div>
  );
}
```

### Key Differences from `useEffect`
-   `useEffect` runs asynchronously after the browser has painted.
-   `useLayoutEffect` runs synchronously after DOM mutations but *before* the browser paints.
-   If you need to modify the DOM and then measure it, `useLayoutEffect` is often preferred to avoid visual glitches.
