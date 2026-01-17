'use client';

import React, { useRef } from 'react';
import MyInput from './MyInput';

export default function ParentComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-6">
      
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.forwardRef Example</h1>
          <p className="text-lg mb-4">`React.forwardRef` permite que los componentes pasen una ref que reciben a un componente hijo en el árbol. Esto es útil para reutilizar componentes que necesitan interactuar con el DOM.</p>
          <MyInput ref={inputRef} placeholder="Focus me!" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleClick}>
            Focus Input
          </button>
        </div>
      </div>
  );
}
