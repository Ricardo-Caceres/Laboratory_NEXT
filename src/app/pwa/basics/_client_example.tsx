'use client';

import { useState, useEffect } from 'react';

export default function PWAExample() {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">PWA Features</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Status:</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
          <span>{isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'Offline Support', icon: '📱', desc: 'Works without internet' },
          { name: 'Installable', icon: '⬇️', desc: 'Add to home screen' },
          { name: 'Push Notifications', icon: '🔔', desc: 'Re-engage users' },
          { name: 'Fast Loading', icon: '⚡', desc: 'Cached resources' },
        ].map((feature) => (
          <div key={feature.name} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="font-semibold">{feature.name}</h3>
            </div>
            <p className="text-sm opacity-70">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
