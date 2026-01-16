'use client';

import React, { useState, Suspense } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

export default function LazySuspenseExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Lazy Loading with Suspense</h1>
          <p className="text-lg mb-4">`React.lazy` permite renderizar un import dinámico como un componente normal. `Suspense` permite mostrar un fallback mientras los componentes hijos se cargan.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowHeavyComponent(true)}>
            Load Heavy Component
          </button>

          {showHeavyComponent && (
            <Suspense fallback={<div>Loading Heavy Component...</div>}>
              <HeavyComponent />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
