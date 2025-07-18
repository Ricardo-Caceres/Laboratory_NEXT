'use client';

import React, { useState, Suspense } from 'react';

const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

export default function LazySuspenseExample() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <div>
      <h1>Lazy Loading with Suspense</h1>
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Heavy Component
      </button>

      {showHeavyComponent && (
        <Suspense fallback={<div>Loading Heavy Component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
