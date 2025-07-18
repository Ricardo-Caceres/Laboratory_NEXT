'use client';

import { useState, useEffect, ReactNode } from 'react';

interface MouseProps {
  render: (state: { x: number; y: number }) => ReactNode;
}

function Mouse({ render }: MouseProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return render(position);
}

export default function MouseTracker() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Move the mouse around!</h1>
      <Mouse
        render={({ x, y }) => (
          <p className="text-xl text-blue-600 font-semibold">The current mouse position is ({x}, {y})</p>
        )}
      />
    </div>
  );
}
