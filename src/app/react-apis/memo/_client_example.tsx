'use client';

import React, { useState } from 'react';

const MemoizedGreeting = React.memo(function MemoizedGreeting({ name }: { name: string }) {
  console.log(`Rendering MemoizedGreeting for ${name}`);
  return <p className="text-[var(--foreground)]">Hello, {name}!</p>;
});

const RegularGreeting = ({ name }: { name: string }) => {
  console.log(`Rendering RegularGreeting for ${name}`);
  return <p className="text-[var(--foreground)]">Hello, {name}!</p>;
};

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const fixedName = "Alice";

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-[var(--panel)] border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">React.memo Demo</h2>
        <p className="text-base mb-4 text-[var(--foreground)] opacity-80">
          React.memo es un componente de orden superior que memoriza el resultado de un componente funcional, 
          volviendo a renderizarlo solo si sus props han cambiado. Esto puede mejorar el rendimiento.
        </p>
        
        <div className="mb-6 p-4 bg-[var(--background)] rounded border border-[var(--border)]">
          <p className="text-lg mb-3 font-semibold text-[var(--foreground)]">Count: {count}</p>
          <button 
            className="px-4 py-2 rounded font-medium transition-colors bg-[var(--primary)] hover:opacity-90 text-white"
            onClick={() => setCount(count + 1)}
          >
            Increment Count
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">✅ Memoized Component</h3>
            <MemoizedGreeting name={fixedName} />
            <p className="text-sm mt-2 opacity-70 text-[var(--foreground)]">
              No re-renders when count changes
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">❌ Regular Component</h3>
            <RegularGreeting name={fixedName} />
            <p className="text-sm mt-2 opacity-70 text-[var(--foreground)]">
              Re-renders on every count change
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-[var(--code-bg)] border border-[var(--border)]">
        <p className="text-sm text-[var(--foreground)] opacity-80">
          💡 <strong>Tip:</strong> Abre la consola del navegador para ver qué componentes se renderizan cuando incrementas el contador.
        </p>
      </div>
    </div>
  );
}
