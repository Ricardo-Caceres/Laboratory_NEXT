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
      <MyInput ref={inputRef} placeholder="Type something..." />
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mt-4" onClick={handleClick}>
        Focus Input from Parent
      </button>
    </div>
  );
}