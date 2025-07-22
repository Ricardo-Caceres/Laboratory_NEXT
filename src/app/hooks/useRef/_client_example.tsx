'use client';

import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useRef` Hook Example</h1>
      <p className="text-lg mb-4">`useRef` devuelve un objeto ref mutable cuya propiedad `.current` se inicializa con el argumento pasado. El objeto devuelto persistirá durante toda la vida del componente. Es útil para acceder directamente a elementos DOM o para almacenar valores mutables que no causan re-renders.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300" onClick={handleClick}>Focus Input</button>
    </div>
  );
}