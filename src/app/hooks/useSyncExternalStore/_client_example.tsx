'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}

export default function OnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">`useSyncExternalStore` Hook Example</h1>
      <p className="text-lg mb-4">`useSyncExternalStore` es un Hook para leer y suscribirse a fuentes de datos externas en React, como APIs de navegador o sistemas de gestión de estado. Es útil para asegurar que los componentes de React puedan leer valores de fuentes externas de forma síncrona.</p>
      <h2 className={`flex items-center justify-center text-4xl font-bold ${isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        You are {isOnline ? 'online' : 'offline'}
      </h2>
    </div>
  );
}