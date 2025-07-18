'use client';

import { useState, useMemo } from 'react';

function expensiveCalculation(num: number): number {
  console.log('Running expensive calculation...');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function MemoExample() {
  const [number, setNumber] = useState(1);
  const [rerender, setRerender] = useState(false);

  const doubledNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <p>Current Number: {number}</p>
      <p>Doubled Number (memoized): {doubledNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <br />
      <button onClick={() => setRerender(!rerender)}>
        Force Re-render
      </button>
      <p>Forcing a re-render will not re-run the expensive calculation unless the number has changed.</p>
    </div>
  );
}
