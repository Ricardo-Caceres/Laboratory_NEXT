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
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse
        render={({ x, y }) => (
          <p>The current mouse position is ({x}, {y})</p>
        )}
      />
    </div>
  );
}
