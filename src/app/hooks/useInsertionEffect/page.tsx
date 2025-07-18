'use client';

import { useInsertionEffect, useRef, useState } from 'react';

function useDynamicStyles(styleString: string) {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useInsertionEffect(() => {
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }
    styleRef.current.innerHTML = styleString;

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [styleString]);
}

export default function MyStyledComponent() {
  const [color, setColor] = useState('blue');

  useDynamicStyles(`
    .my-dynamic-text {
      color: ${color};
      font-size: 20px;
    }
  `);

  return (
    <div>
      <p className="my-dynamic-text">This text is dynamically styled.</p>
      <button onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}>Change Color</button>
      <p>Open your browser's developer tools and inspect the head section to see the dynamically injected style tag.</p>
    </div>
  );
}
