
# `React.Profiler`

`React.Profiler` is a component that measures the rendering performance of a React tree. It can be used to identify performance bottlenecks in your application.

### When to use it
-   During development, to analyze and optimize the performance of your React components.
-   To understand how often and why components re-render.

### Syntax

```tsx
<Profiler id="myProfiler" onRender={callback}>
  {/* Your components here */}
</Profiler>
```

-   `id`: A string that identifies the part of the UI you are profiling.
-   `onRender`: A callback function that React calls whenever a component within the profiled tree "commits" an update. The callback receives several arguments:
    -   `id`: The `id` prop of the `Profiler` tree that just committed.
    -   `phase`: Either "mount" (if the component tree just mounted for the first time) or "update" (if it re-rendered).
    -   `actualDuration`: Time spent rendering the `Profiler`'s children and their descendants for the current update.
    -   `baseDuration`: Estimated time to render the entire subtree without memoization.
    -   `startTime`: Timestamp when React began rendering the current update.
    -   `commitTime`: Timestamp when React committed the current update.
    -   `interactions`: A `Set` of interactions that were active during this update.

### Example

This example demonstrates how to use `React.Profiler` to measure the rendering performance of a simple counter component.

```tsx
'use client';

import React, { useState, Profiler } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function onRenderCallback(
  id: string,
  phase: "mount" | "update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<unknown>
) {
  console.log(`Profiler ID: ${id}`);
  console.log(`Phase: ${phase}`);
  console.log(`Actual Duration: ${actualDuration.toFixed(2)}ms`);
  console.log(`Base Duration: ${baseDuration.toFixed(2)}ms`);
  console.log('---');
}

export default function ProfilerExample() {
  return (
    <div>
      <h1>React.Profiler Example</h1>
      <p>Open your browser's developer console to see the profiling logs.</p>
      <Profiler id="CounterProfiler" onRender={onRenderCallback}>
        <Counter />
      </Profiler>
    </div>
  );
}
```

### Key Points
-   `Profiler` is a development-only tool and is automatically disabled in production builds.
-   It's most effective when used in conjunction with the React DevTools Profiler tab, which provides a visual representation of the profiling data.
-   It helps you pinpoint components that are re-rendering too often or taking too long to render.
