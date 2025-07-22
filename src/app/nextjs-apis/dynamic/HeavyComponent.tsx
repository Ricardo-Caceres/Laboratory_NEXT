'use client';

import { useEffect, useState } from 'react';

export default function HeavyComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData('Data from HeavyComponent loaded!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border border-dashed border-gray-400 p-5 mt-5">
      <h2 className="text-xl font-semibold mb-2">Heavy Component (Dynamically Loaded)</h2>
      {data ? <p className="text-lg">{data}</p> : <p className="text-lg text-gray-500">Loading heavy component data...</p>}
    </div>
  );
}
