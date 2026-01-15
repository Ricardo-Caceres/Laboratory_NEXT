'use client';

import { useState } from 'react';

export default function ProxyDemo() {
  const [accessLogs, setAccessLogs] = useState<string[]>([]);
  const [cacheLogs, setCacheLogs] = useState<string[]>([]);

  const testAccessControl = () => {
    const logs: string[] = [];
    const user = { name: 'John', password: 'secret123', age: 30 };
    
    const proxy = new Proxy(user, {
      get(obj, prop: string) {
        if (prop === 'password') {
          logs.push('⚠️ Blocked: Cannot access password');
          return '***HIDDEN***';
        }
        logs.push(`✓ Accessed: ${prop} = ${obj[prop as keyof typeof obj]}`);
        return obj[prop as keyof typeof obj];
      },
      set(obj, prop: string, value: any) {
        if (prop === 'age' && typeof value !== 'number') {
          logs.push('❌ Validation failed: age must be number');
          return false;
        }
        logs.push(`✓ Set: ${prop} = ${value}`);
        (obj as any)[prop] = value;
        return true;
      }
    });

    void proxy.name;
    void proxy.password;
    proxy.age = 31;
    try { (proxy as any).age = 'invalid'; } catch {}
    
    setAccessLogs(logs);
  };

  const testCaching = () => {
    const logs: string[]= [];
    const cache = new Map<number, number>();
    
    const calculator = {
      expensiveOp(n: number): number {
        return n * n * n;
      }
    };
    
    const proxy = new Proxy(calculator, {
      get(obj, prop: string) {
        if (prop === 'expensiveOp') {
          return (n: number) => {
            if (cache.has(n)) {
              logs.push(`🎯 Cache HIT for ${n}`);
              return cache.get(n)!;
            }
            logs.push(`💾 Cache MISS for ${n} - Computing...`);
            const result = obj[prop](n);
            cache.set(n, result);
            return result;
          };
        }
        return obj[prop as keyof typeof obj];
      }
    });

    proxy.expensiveOp(5);
    proxy.expensiveOp(5);
    proxy.expensiveOp(10);
    proxy.expensiveOp(5);
    
    setCacheLogs(logs);
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-violet-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Proxy Pattern</h2>
          <p className="text-gray-600">Control access with interceptors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-bold mb-3">🛡️ Access Control Proxy</h3>
            <button
              onClick={testAccessControl}
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors mb-3"
            >
              Test Access Control
            </button>
            <div className="bg-white rounded p-3 text-xs space-y-1 max-h-[150px] overflow-y-auto">
              {accessLogs.length === 0 ? (
                <p className="text-gray-400">Click button to test...</p>
              ) : (
                accessLogs.map((log, i) => (
                  <div key={i} className="font-mono">{log}</div>
                ))
              )}
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3">💾 Caching Proxy</h3>
            <button
              onClick={testCaching}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mb-3"
            >
              Test Caching
            </button>
            <div className="bg-white rounded p-3 text-xs space-y-1 max-h-[150px] overflow-y-auto">
              {cacheLogs.length === 0 ? (
                <p className="text-gray-400">Click button to test...</p>
              ) : (
                cacheLogs.map((log, i) => (
                  <div key={i} className="font-mono">{log}</div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center text-sm text-gray-700">
          💡 Proxy intercepts operations before they reach the real object
        </div>
      </div>
    </div>
  );
}
