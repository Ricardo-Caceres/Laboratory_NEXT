'use client';

import { useState, useRef, useLayoutEffect } from 'react';

export default function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const newWidth = divRef.current.offsetWidth;
      if (newWidth !== width) {
        setWidth(newWidth);
        console.log('useLayoutEffect: Div width measured and updated:', newWidth);
      }
    }
  }, [width]);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          background: 'lightblue',
          padding: '20px',
          margin: '20px',
          border: '1px solid blue',
          width: width === 0 ? 'auto' : `${width}px`
        }}
      >
        This div's width is: {width}px
      </div>
      <p>Resize your browser window to see the effect.</p>
    </div>
  );
}
