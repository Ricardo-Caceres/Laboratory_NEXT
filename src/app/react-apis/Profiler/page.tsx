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
