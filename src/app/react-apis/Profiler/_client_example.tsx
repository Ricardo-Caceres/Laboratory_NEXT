'use client';

import React, { useState, Profiler } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <p className="text-lg mb-2">Count: {count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
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

export default function ProfilerExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.Profiler Example</h1>
          <p className="text-lg mb-4">`React.Profiler` mide el rendimiento de renderizado de un árbol de React. Permite recopilar información sobre cuánto tiempo tardan los componentes en renderizarse y cuándo lo hacen.</p>
          <p className="text-lg mb-4">Open your browser's developer console to see the profiling logs.</p>
          <Profiler id="CounterProfiler" onRender={onRenderCallback}>
            <Counter />
          </Profiler>
        </div>
      </div>
    </div>
  );
}
