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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">`useInsertionEffect` Hook Example</h1>
      <p className="text-lg mb-4">`useInsertionEffect` es un Hook que se ejecuta de forma síncrona después de que el DOM ha sido actualizado, pero antes de que el navegador haya tenido la oportunidad de pintar esos cambios. Es útil para inyectar estilos dinámicamente en el DOM.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300" onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}>Change Color</button>
      <p className="text-sm text-gray-500 mt-4 text-center max-w-md">Open your browser&apos;s developer tools and inspect the head section to see the dynamically injected style tag.</p>
    </div>
  );
}