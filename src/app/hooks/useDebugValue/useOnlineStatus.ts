'use client';

import { useState, useEffect, useDebugValue } from 'react';

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useDebugValue(isOnline ? 'Online' : 'Offline', status => `Status: ${status}`);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
