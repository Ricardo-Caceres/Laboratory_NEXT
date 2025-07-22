'use client';

import { useRef } from 'react';
import MyInput, { MyInputHandle } from './MyInput';

export default function ParentComponent() {
  const inputRef = useRef<MyInputHandle>(null);

  const handleClick = () => {
    inputRef.current?.focusInput();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useImperativeHandle` Hook Example</h1>
      <p className="text-lg mb-4">`useImperativeHandle` personaliza el valor de la instancia que se expone a los componentes padre cuando se usa `ref`. Es útil cuando se necesita exponer solo ciertas funciones o propiedades de un componente hijo a su padre, en lugar de la instancia completa del DOM o del componente.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4" onClick={handleClick}>
        Focus Input from Parent
      </button>
    </div>
  );
}