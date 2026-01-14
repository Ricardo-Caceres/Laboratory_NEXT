'use client';

import { useState } from 'react';

interface Container {
  id: string;
  name: string;
  status: 'running' | 'stopped';
  image: string;
  ports: string;
}

export default function DockerExample() {
  const [containers, setContainers] = useState<Container[]>([
    { id: '1a2b3c', name: 'my-app', status: 'running', image: 'node:20-alpine', ports: '3000:3000' },
    { id: '4d5e6f', name: 'postgres', status: 'running', image: 'postgres:15', ports: '5432:5432' },
  ]);

  const toggleContainer = (id: string) => {
    setContainers(prev =>
      prev.map(container =>
        container.id === id
          ? { ...container, status: container.status === 'running' ? 'stopped' : 'running' }
          : container
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Docker Container Management</h2>
      
      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Quick Commands:</h3>
        <div className="space-y-1 text-sm font-mono">
          <p>$ docker ps -a</p>
          <p>$ docker build -t my-app .</p>
          <p>$ docker run -d -p 3000:3000 my-app</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Running Containers:</h3>
        {containers.map((container) => (
          <div
            key={container.id}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold">{container.name}</p>
                <p className="text-sm opacity-70 font-mono">ID: {container.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    container.status === 'running'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                  }`}
                >
                  {container.status}
                </span>
              </div>
            </div>
            <div className="text-sm space-y-1 mb-3 opacity-70">
              <p>Image: {container.image}</p>
              <p>Ports: {container.ports}</p>
            </div>
            <button
              onClick={() => toggleContainer(container.id)}
              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-bold py-1 px-3 rounded transition-colors"
            >
              {container.status === 'running' ? 'Stop' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
