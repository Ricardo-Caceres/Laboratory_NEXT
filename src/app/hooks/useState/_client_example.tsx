'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">`useState` Hook Example</h1>
      <p className="text-lg mb-4">`useState` es un Hook que te permite añadir estado de React a componentes funcionales. Devuelve un par: el valor del estado actual y una función que lo actualiza.</p>
      <p className="text-2xl font-bold text-gray-800 mb-4">You clicked {count} times</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}