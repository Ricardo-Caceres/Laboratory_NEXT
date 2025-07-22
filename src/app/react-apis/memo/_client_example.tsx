'use client';

import React, { useState } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

const MemoizedGreeting = React.memo(({ name }: { name: string }) => {
  console.log(`Rendering MemoizedGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
});

const RegularGreeting = ({ name }: { name: string }) => {
  console.log(`Rendering RegularGreeting for ${name}`);
  return <p>Hello, {name}!</p>;
};

export default function MemoExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  const [count, setCount] = useState(0);
  const fixedName = "Alice";

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
          <p className="text-lg mb-4">`React.memo` es un componente de orden superior que memoriza el resultado de un componente funcional, volviendo a renderizarlo solo si sus props han cambiado. Esto puede mejorar el rendimiento.</p>
          <p className="text-lg mb-2">Count: {count}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment Count</button>

          <h2 className="text-xl font-semibold mt-4 mb-2">Memoized Component</h2>
          <MemoizedGreeting name={fixedName} />

          <h2 className="text-xl font-semibold mt-4 mb-2">Regular Component</h2>
          <RegularGreeting name={fixedName} />

          <p className="text-lg mt-4">Check the console to see which components re-render when the count changes.</p>
        </div>
      </div>
    </div>
  );
}
