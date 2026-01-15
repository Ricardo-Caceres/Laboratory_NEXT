'use client';

import { useState, Suspense, use } from 'react';

function fetchData(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

function DataDisplay() {
  const data = use(fetchData());
  return <p className="text-lg mt-4 p-4 bg-green-100 rounded">{data}</p>;
}

export default function UseHookExample() {
  const [showData, setShowData] = useState(false);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">use Hook Demo (React 19)</h2>
      <p className="text-lg mb-4">Click the button to load data asynchronously using the use Hook with Suspense.</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" 
        onClick={() => setShowData(true)}
        disabled={showData}
      >
        {showData ? 'Data Loaded' : 'Load Data'}
      </button>
      {showData && (
        <Suspense fallback={<p className="text-lg mt-4 text-blue-600">Loading data...</p>}>
          <DataDisplay />
        </Suspense>
      )}
    </div>
  );
}
