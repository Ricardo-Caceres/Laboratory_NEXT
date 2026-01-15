'use client';

import { useState, useEffect } from 'react';

type EventCallback = (data?: string) => void;

class EventEmitter {
  private events: { [key: string]: EventCallback[] } = {};

  subscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event: string, data?: string) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}

const eventEmitter = new EventEmitter();

export default function ObserverDemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const unsubscribe = eventEmitter.subscribe('message', (data?: string) => {
      if (data) {
        setMessages(prev => [...prev, data]);
      }
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    if (inputValue.trim()) {
      eventEmitter.emit('message', `${new Date().toLocaleTimeString()}: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Observer Pattern</h2>
          <p className="text-gray-600">Event-driven communication demo</p>
        </div>

        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition-colors"
            >
              Send
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200 p-4 min-h-[200px] max-h-[300px] overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3">📬 Message Feed (Observers)</h3>
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No messages yet. Send one to see observers react!</p>
          ) : (
            <div className="space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-orange-200 text-sm animate-fadeIn">
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
