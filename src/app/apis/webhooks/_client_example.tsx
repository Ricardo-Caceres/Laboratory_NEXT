'use client';

import { useState } from 'react';

interface WebhookEvent {
  id: number;
  event: string;
  status: 'pending' | 'success' | 'failed';
  timestamp: string;
  payload: string;
}

export default function WebhooksExample() {
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [webhookUrl, setWebhookUrl] = useState('https://example.com/webhook');

  const sendWebhook = (eventType: string) => {
    const newEvent: WebhookEvent = {
      id: Date.now(),
      event: eventType,
      status: 'pending',
      timestamp: new Date().toLocaleTimeString(),
      payload: JSON.stringify({ event: eventType, data: { id: 123 } }),
    };

    setEvents(prev => [newEvent, ...prev.slice(0, 9)]);

    // Simulate webhook delivery
    setTimeout(() => {
      setEvents(prev => prev.map(e => 
        e.id === newEvent.id 
          ? { ...e, status: Math.random() > 0.2 ? 'success' : 'failed' }
          : e
      ));
    }, 1000);
  };

  const getStatusColor = (status: WebhookEvent['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100';
      case 'success': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100';
      case 'failed': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100';
    }
  };

  const getStatusIcon = (status: WebhookEvent['status']) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'success': return '✓';
      case 'failed': return '✗';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Webhooks Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Webhook Configuration:</h3>
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Webhook URL:</label>
          <input
            type="text"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full p-2 border border-[var(--border)] rounded bg-[var(--background)] text-sm font-mono"
          />
        </div>
      </div>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Trigger Events:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            'payment.succeeded',
            'payment.failed',
            'user.created',
            'user.updated',
            'order.placed',
            'order.shipped',
          ].map((event) => (
            <button
              key={event}
              onClick={() => sendWebhook(event)}
              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded text-sm transition-colors"
            >
              {event}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Webhook Events:</h3>
        {events.length === 0 && (
          <p className="text-sm opacity-70 italic">No events yet. Trigger an event above.</p>
        )}
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{getStatusIcon(event.status)}</span>
                <div>
                  <p className="font-semibold">{event.event}</p>
                  <p className="text-xs opacity-70">{event.timestamp}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
            </div>
            <details className="text-xs">
              <summary className="cursor-pointer opacity-70 hover:opacity-100">View Payload</summary>
              <pre className="mt-2 p-2 bg-[var(--background)] rounded overflow-x-auto">
                {event.payload}
              </pre>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
