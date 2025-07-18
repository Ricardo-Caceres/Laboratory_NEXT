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
    <div>
      <h1>Next.js Dynamic Import Example</h1>
      <button onClick={() => setShowComponent(true)}>
        Load Dynamic Component
      </button>

      {showComponent && <DynamicHeavyComponent />}
    </div>
  );
}
