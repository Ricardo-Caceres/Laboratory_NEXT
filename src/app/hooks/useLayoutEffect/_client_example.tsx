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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">`useLayoutEffect` Hook Example</h1>
      <p className="text-lg mb-4">`useLayoutEffect` es idéntico a `useEffect`, pero se ejecuta de forma síncrona inmediatamente después de que React ha realizado todas las mutaciones del DOM. Es útil para realizar mediciones del layout antes de que el navegador pinte la pantalla.</p>
      <p className="text-lg text-gray-700 mt-4">Resize your browser window to see the effect.</p>
    </div>
  );
}