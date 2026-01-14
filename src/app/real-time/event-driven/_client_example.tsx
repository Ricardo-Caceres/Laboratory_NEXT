'use client';

import { useState } from 'react';

// Simple event bus simulation
const events: { [key: string]: string[] } = {};

export default function EventDrivenExample() {
  const [eventLog, setEventLog] = useState<string[]>([]);
  const [customEvent, setCustomEvent] = useState('');
  const [customData, setCustomData] = useState('');

  const emitEvent = (eventName: string, data?: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] Event: "${eventName}" ${data ? `with data: "${data}"` : ''}`;
    setEventLog(prev => [logMessage, ...prev.slice(0, 9)]);
  };

  const handlePredefinedEvent = (eventName: string) => {
    emitEvent(eventName, `Sample data for ${eventName}`);
  };

  const handleCustomEvent = () => {
    if (customEvent.trim()) {
      emitEvent(customEvent, customData || undefined);
      setCustomEvent('');
      setCustomData('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Event-Driven Architecture Demo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-3">Emit Predefined Events:</h3>
          <div className="space-y-2">
            <button
              onClick={() => handlePredefinedEvent('user:login')}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
            >
              User Login
            </button>
            <button
              onClick={() => handlePredefinedEvent('data:updated')}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Data Updated
            </button>
            <button
              onClick={() => handlePredefinedEvent('notification:new')}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
            >
              New Notification
            </button>
          </div>
        </div>

        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-3">Emit Custom Event:</h3>
          <div className="space-y-2">
            <input
              type="text"
              value={customEvent}
              onChange={(e) => setCustomEvent(e.target.value)}
              placeholder="Event name (e.g., cart:add)"
              className="w-full p-2 border border-[var(--border)] rounded bg-[var(--background)] text-sm"
            />
            <input
              type="text"
              value={customData}
              onChange={(e) => setCustomData(e.target.value)}
              placeholder="Event data (optional)"
              className="w-full p-2 border border-[var(--border)] rounded bg-[var(--background)] text-sm"
            />
            <button
              onClick={handleCustomEvent}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Emit Custom Event
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Event Log:</h3>
        <div className="space-y-1 max-h-64 overflow-y-auto">
          {eventLog.length === 0 && (
            <p className="text-sm opacity-70 italic">No events emitted yet. Click a button above to emit an event.</p>
          )}
          {eventLog.map((log, index) => (
            <div key={index} className="text-sm font-mono p-2 bg-[var(--background)] rounded">
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
