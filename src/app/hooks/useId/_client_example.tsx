'use client';

import { useId } from 'react';

export default function AccessibleInput() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">`useId` Hook Example</h1>
      <p className="text-lg mb-4">`useId` es un Hook para generar IDs únicos y estables que pueden ser pasados a atributos de accesibilidad. Es útil para generar IDs que son consistentes entre el renderizado del servidor y el cliente.</p>
      <input id={id + '-firstName'} type="text" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <label htmlFor={id + '-lastName'} className="block text-lg font-medium text-gray-700 mb-1 mt-4">Last Name:</label>
      <input id={id + '-lastName'} type="text" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
}