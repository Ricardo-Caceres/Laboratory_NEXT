'use client';

import React, { useState, useEffect } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
    return () => {
      console.log('Effect cleanup ran');
    };
  }, []);

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <p className="text-lg mb-2">Count: {count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default function StrictModeExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <React.StrictMode>
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Strict Mode Enabled</h1>
            <p className="text-lg mb-4">`React.StrictMode` es una herramienta para resaltar problemas potenciales en una aplicación. No renderiza ninguna UI visible. Activa comprobaciones y advertencias adicionales para sus descendientes.</p>
            <MyComponent />
          </div>
        </React.StrictMode>
      </div>
    </div>
  );
}
