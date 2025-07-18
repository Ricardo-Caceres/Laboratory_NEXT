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
    <h1 className={`flex items-center justify-center min-h-screen text-4xl font-bold ${isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      You are {isOnline ? 'online' : 'offline'}
    </h1>
  );
}