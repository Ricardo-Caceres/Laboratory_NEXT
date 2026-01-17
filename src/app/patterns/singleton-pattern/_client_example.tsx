'use client';

import { useState, useEffect } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

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

// Singleton Pattern - Logger
class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
  }

  public getLogs(): string[] {
    return [...this.logs];
  }

  public clear(): void {
    this.logs = [];
  }
}

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  const [config, setConfig] = useState(ConfigManager.getInstance().getAll());
  const [logs, setLogs] = useState<string[]>([]);
  const [logMessage, setLogMessage] = useState('');

  useEffect(() => {
    const logger = Logger.getInstance();
    logger.log('Component mounted');
    setLogs(logger.getLogs());
  }, []);

  const updateConfig = (key: string, value: string): void => {
    const configManager = ConfigManager.getInstance();
    configManager.set(key, value);
    setConfig(configManager.getAll());
    
    const logger = Logger.getInstance();
    logger.log(`Config updated: ${key} = ${value}`);
    setLogs(logger.getLogs());
  };

  const addLog = (): void => {
    if (logMessage.trim()) {
      const logger = Logger.getInstance();
      logger.log(logMessage);
      setLogs(logger.getLogs());
      setLogMessage('');
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-200">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 sm:p-8 rounded-lg">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Singleton Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">One instance, global access</p>
            </div>

            <div className="space-y-6">
              {/* Config Manager Singleton */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">⚙️ Config Manager (Singleton)</h3>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-20">Theme:</span>
                    <select
                      value={config.theme}
                      onChange={(e) => updateConfig('theme', e.target.value)}
                      className="flex-1 px-3 py-1 border border-blue-300 rounded"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-20">Language:</span>
                    <select
                      value={config.language}
                      onChange={(e) => updateConfig('language', e.target.value)}
                      className="flex-1 px-3 py-1 border border-blue-300 rounded"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-gray-600">✓ Same instance shared across all components</p>
              </div>

              {/* Logger Singleton */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-3">📝 Logger (Singleton)</h3>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={logMessage}
                    onChange={(e) => setLogMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addLog()}
                    placeholder="Enter log message..."
                    className="flex-1 px-3 py-2 border border-green-300 rounded-lg"
                  />
                  <button
                    onClick={addLog}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Log
                  </button>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs max-h-40 overflow-y-auto">
                  {logs.length === 0 ? (
                    <div className="text-gray-500">No logs yet...</div>
                  ) : (
                    logs.map((log, idx) => <div key={idx}>{log}</div>)
                  )}
                </div>
                <button
                  onClick={() => {
                    Logger.getInstance().clear();
                    setLogs([]);
                  }}
                  className="mt-2 text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Clear Logs
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Only one instance exists</li>
                <li>✓ Global access point</li>
                <li>✓ Lazy initialization</li>
                <li>✓ Perfect for config, cache, logging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
