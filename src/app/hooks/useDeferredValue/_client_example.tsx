'use client';

import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList';

export default function DeferredValueExample() {
  const [inputValue, setInputValue] = useState('');
  const deferredQuery = useDeferredValue(inputValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useDeferredValue` Hook Example</h1>
      <p className="text-lg mb-4">`useDeferredValue` te permite aplazar la actualización de una parte de la UI. Es útil para mejorar la responsividad de la aplicación cuando hay actualizaciones de UI costosas que no son críticas.</p>
      <p className="text-lg text-gray-700 mb-2">Input Value: {inputValue}</p>
      <p className="text-lg text-gray-700 mb-2">Deferred Query: {deferredQuery}</p>
      <SlowList query={deferredQuery} />
    </div>
  );
}