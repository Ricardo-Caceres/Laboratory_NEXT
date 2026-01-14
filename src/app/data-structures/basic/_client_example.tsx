'use client';

import { useState } from 'react';

export default function DataStructuresExample() {
  const [stack, setStack] = useState<number[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');

  const pushToStack = () => {
    if (inputValue) {
      setStack([...stack, parseInt(inputValue)]);
      setInputValue('');
    }
  };

  const popFromStack = () => {
    setStack(stack.slice(0, -1));
  };

  const enqueue = () => {
    if (inputValue) {
      setQueue([...queue, parseInt(inputValue)]);
      setInputValue('');
    }
  };

  const dequeue = () => {
    setQueue(queue.slice(1));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Data Structures Demo</h2>

      <div className="mb-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="p-2 border border-[var(--border)] rounded bg-[var(--background)] mr-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stack */}
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-3">Stack (LIFO)</h3>
          <div className="flex gap-2 mb-4">
            <button
              onClick={pushToStack}
              className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
            >
              Push
            </button>
            <button
              onClick={popFromStack}
              disabled={stack.length === 0}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Pop
            </button>
          </div>
          <div className="min-h-[200px] border border-[var(--border)] rounded p-2 bg-[var(--background)]">
            <div className="flex flex-col-reverse gap-1">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-[var(--primary)] text-white text-center rounded font-mono"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs opacity-70 mt-2">Top: {stack[stack.length - 1] || 'empty'}</p>
        </div>

        {/* Queue */}
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-3">Queue (FIFO)</h3>
          <div className="flex gap-2 mb-4">
            <button
              onClick={enqueue}
              className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
            >
              Enqueue
            </button>
            <button
              onClick={dequeue}
              disabled={queue.length === 0}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Dequeue
            </button>
          </div>
          <div className="min-h-[200px] border border-[var(--border)] rounded p-2 bg-[var(--background)]">
            <div className="flex flex-col gap-1">
              {queue.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-[var(--primary)] text-white text-center rounded font-mono"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs opacity-70 mt-2">Front: {queue[0] || 'empty'}</p>
        </div>
      </div>
    </div>
  );
}
