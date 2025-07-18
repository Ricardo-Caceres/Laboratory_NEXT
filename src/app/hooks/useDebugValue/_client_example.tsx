'use client';

import useOnlineStatus from './useOnlineStatus';

export default function OnlineStatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <h1 className={`flex items-center justify-center min-h-screen text-4xl font-bold ${isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      You are {isOnline ? 'online' : 'offline'}
    </h1>
  );
}