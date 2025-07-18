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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        ref={divRef}
        className="bg-blue-200 p-5 m-5 border border-blue-500 text-blue-800 font-semibold text-center"
        style={{
          width: width === 0 ? 'auto' : `${width}px`
        }}
      >
        This div's width is: {width}px
      </div>
      <p className="text-lg text-gray-700 mt-4">Resize your browser window to see the effect.</p>
    </div>
  );
}