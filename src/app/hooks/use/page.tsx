'use client';

import { useState, Suspense } from 'react';

function fetchData(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

function DataDisplay() {
  const data = use(fetchData());
  return <p>{data}</p>;
}

export default function UseHookExample() {
  const [showData, setShowData] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">`use` Hook Example</h1>
      <p className="text-lg mb-4">El Hook `use` es una nueva característica de React que permite leer el valor de un recurso (como una Promise o un Contexto) directamente en la lógica de renderizado de tu componente. Simplifica la forma de manejar datos asíncronos y contextos.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowData(true)}>
        Load Data
      </button>
      {showData && (
        <Suspense fallback={<p className="text-lg mt-4">Loading data...</p>}>
          <DataDisplay />
        </Suspense>
      )}
    </div>
  );
}
