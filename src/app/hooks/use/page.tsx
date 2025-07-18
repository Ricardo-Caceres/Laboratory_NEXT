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
    <div>
      <button onClick={() => setShowData(true)}>
        Load Data
      </button>
      {showData && (
        <Suspense fallback={<div>Loading data...</div>}>
          <DataDisplay />
        </Suspense>
      )}
    </div>
  );
}
