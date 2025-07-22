'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicHeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading Heavy Component...</p>,
  ssr: false,
});

export default function DynamicImportExample() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Dynamic Import Example</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowComponent(true)}>
        Load Dynamic Component
      </button>

      {showComponent && <DynamicHeavyComponent />}
    </div>
  );
}
