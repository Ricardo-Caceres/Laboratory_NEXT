'use client';

import { useState, useEffect } from 'react';

interface Update {
  id: number;
  message: string;
  timestamp: string;
}

export default function RealTimeUIExample() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const messages = [
        'New user joined the channel',
        'Data updated successfully',
        'New message received',
        'File uploaded',
        'Task completed',
      ];
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      setUpdates(prev => [
        {
          id: Date.now(),
          message: randomMessage,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 9), // Keep only last 10
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Real-Time Updates</h2>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-sm">{isConnected ? 'Live' : 'Disconnected'}</span>
        </div>
      </div>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <p className="text-sm opacity-70">
          This demo simulates a real-time connection receiving updates every 3 seconds.
          In production, this would use WebSockets or Server-Sent Events.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold mb-3">Live Updates:</h3>
        {updates.length === 0 && (
          <p className="text-sm opacity-70 italic">Waiting for updates...</p>
        )}
        {updates.map((update) => (
          <div
            key={update.id}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg animate-fadeIn"
          >
            <div className="flex justify-between items-start">
              <p className="font-medium">{update.message}</p>
              <span className="text-xs opacity-70 ml-4">{update.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
