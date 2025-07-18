'use client';

import useOnlineStatus from './useOnlineStatus';

export default function OnlineStatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <h1>You are {isOnline ? 'online' : 'offline'}</h1>
  );
}
