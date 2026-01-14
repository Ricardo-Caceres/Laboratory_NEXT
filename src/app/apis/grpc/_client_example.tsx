'use client';

import { useState } from 'react';

interface GRPCCall {
  id: number;
  method: string;
  status: 'pending' | 'success' | 'streaming' | 'error';
  duration?: string;
  response?: string;
}

export default function GRPCExample() {
  const [calls, setCalls] = useState<GRPCCall[]>([]);

  const makeGRPCCall = (method: string, isStream: boolean = false) => {
    const newCall: GRPCCall = {
      id: Date.now(),
      method,
      status: 'pending',
    };

    setCalls(prev => [newCall, ...prev.slice(0, 4)]);

    setTimeout(() => {
      setCalls(prev => prev.map(c => 
        c.id === newCall.id
          ? {
              ...c,
              status: isStream ? 'streaming' : 'success',
              duration: `${Math.floor(Math.random() * 50 + 10)}ms`,
              response: isStream 
                ? 'Streaming data...' 
                : '{ id: 1, name: "John Doe" }',
            }
          : c
      ));
    }, 500);
  };

  const getStatusColor = (status: GRPCCall['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100';
      case 'success': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100';
      case 'streaming': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100';
      case 'error': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">gRPC Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Comparison:</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">REST</p>
            <p className="opacity-70">HTTP/1.1</p>
            <p className="opacity-70">JSON</p>
            <p className="opacity-70">Text-based</p>
          </div>
          <div>
            <p className="font-semibold mb-2">gRPC</p>
            <p className="text-[var(--primary)] font-semibold">HTTP/2</p>
            <p className="text-[var(--primary)] font-semibold">Protobuf</p>
            <p className="text-[var(--primary)] font-semibold">Binary</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Performance</p>
            <p className="text-green-600 dark:text-green-400">7x faster</p>
            <p className="text-green-600 dark:text-green-400">10x smaller</p>
            <p className="text-green-600 dark:text-green-400">Streaming</p>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">gRPC Methods:</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => makeGRPCCall('GetUser')}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
          >
            GetUser (Unary)
          </button>
          <button
            onClick={() => makeGRPCCall('ListUsers', true)}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
          >
            ListUsers (Stream)
          </button>
          <button
            onClick={() => makeGRPCCall('CreateUser')}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
          >
            CreateUser
          </button>
          <button
            onClick={() => makeGRPCCall('UpdateUser')}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded"
          >
            UpdateUser
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Call History:</h3>
        {calls.length === 0 && (
          <p className="text-sm opacity-70 italic">No calls yet. Try a method above.</p>
        )}
        {calls.map((call) => (
          <div
            key={call.id}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold">{call.method}</p>
                {call.duration && (
                  <p className="text-xs opacity-70">{call.duration}</p>
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(call.status)}`}>
                {call.status}
              </span>
            </div>
            {call.response && (
              <pre className="text-xs bg-[var(--background)] p-2 rounded overflow-x-auto">
                {call.response}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
