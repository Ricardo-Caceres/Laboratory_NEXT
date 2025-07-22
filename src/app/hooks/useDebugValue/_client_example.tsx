'use client';

import useOnlineStatus from './useOnlineStatus';

export default function OnlineStatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">`useDebugValue` Hook Example</h1>
      <p className="text-lg mb-4">`useDebugValue` se puede usar para mostrar una etiqueta para Hooks personalizados en las React DevTools. Es útil para inspeccionar valores complejos en Hooks personalizados.</p>
      <h2 className={`flex items-center justify-center text-4xl font-bold ${isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        You are {isOnline ? 'online' : 'offline'}
      </h2>
    </div>
  );
}