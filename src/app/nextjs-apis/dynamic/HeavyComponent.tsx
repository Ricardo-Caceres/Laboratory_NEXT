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
    <div style={{ border: '1px dashed gray', padding: '20px', marginTop: '20px' }}>
      <h2>Heavy Component (Dynamically Loaded)</h2>
      {data ? <p>{data}</p> : <p>Loading heavy component data...</p>}
    </div>
  );
}
