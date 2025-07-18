'use client';

import { useId } from 'react';

export default function AccessibleInput() {
  const id = useId();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <label htmlFor={id + '-firstName'} className="block text-lg font-medium text-gray-700 mb-1 mt-4">First Name:</label>
      <input id={id + '-firstName'} type="text" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <label htmlFor={id + '-lastName'} className="block text-lg font-medium text-gray-700 mb-1 mt-4">Last Name:</label>
      <input id={id + '-lastName'} type="text" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
}