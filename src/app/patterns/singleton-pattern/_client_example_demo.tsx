'use client';

import { useState } from 'react';

// Singleton Pattern - Config Manager
class ConfigManager {
  private static instance: ConfigManager;
  private config: Record<string, string> = {
    theme: 'light',
    language: 'en',
    apiUrl: 'https://api.example.com',
  };

  private constructor() {}

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public get(key: string): string {
    return this.config[key] || '';
  }

  public set(key: string, value: string): void {
    this.config[key] = value;
  }

  public getAll(): Record<string, string> {
    return { ...this.config };
  }
}

export default function SingletonDemo() {
  const [, forceUpdate] = useState({});
  const config = ConfigManager.getInstance();

  const updateConfig = (key: string, value: string) => {
    config.set(key, value);
    forceUpdate({});
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Singleton Pattern</h2>
          <p className="text-gray-600">One instance shared globally</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h3 className="font-bold mb-3">Global Config (Singleton)</h3>
            <div className="space-y-2">
              {Object.entries(config.getAll()).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 min-w-[100px]">{key}:</span>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => updateConfig(key, e.target.value)}
                    className="flex-1 px-3 py-1 border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-2">Test Singleton</h3>
            <button
              onClick={() => {
                const instance1 = ConfigManager.getInstance();
                const instance2 = ConfigManager.getInstance();
                alert(`Same instance? ${instance1 === instance2 ? '✅ YES' : '❌ NO'}`);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Verify Single Instance
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600 p-3 bg-gray-100 rounded">
          💡 No matter how many times you call <code className="px-1 py-0.5 bg-gray-200 rounded">getInstance()</code>, 
          you get the same instance with shared state
        </div>
      </div>
    </div>
  );
}
