'use client';

import { useState } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

// Original object
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  password: 'secret123',
};

type UserType = typeof user;

// Proxy with access control
const createUserProxy = (target: UserType, logs: string[]) => {
  return new Proxy(target, {
    get(obj: UserType, prop: string) {
      logs.push(`Accessed property: ${prop}`);
      if (prop === 'password') {
        logs.push('⚠️ Blocked: Cannot access password');
        return '***HIDDEN***';
      }
      return obj[prop as keyof UserType];
    },
    set(obj: UserType, prop: string, value: string | number) {
      logs.push(`Set property: ${prop} = ${value}`);
      if (prop === 'age' && typeof value !== 'number') {
        logs.push('❌ Validation failed: age must be a number');
        return false;
      }
      (obj as Record<string, string | number>)[prop] = value;
      logs.push('✓ Property updated successfully');
      return true;
    },
  });
};

// Caching Proxy
const createCachingProxy = (target: { expensiveCalculation: (n: number) => number }, logs: string[]) => {
  const cache = new Map<string, number>();
  
  return new Proxy(target, {
    get(obj, prop: string) {
      if (typeof obj[prop as keyof typeof obj] === 'function') {
        return (...args: number[]) => {
          const cacheKey = `${prop}:${JSON.stringify(args)}`;
          
          if (cache.has(cacheKey)) {
            logs.push(`🎯 Cache HIT for ${prop}(${args})`);
            return cache.get(cacheKey)!;
          }
          
          logs.push(`💾 Cache MISS for ${prop}(${args}) - Computing...`);
          const result = (obj[prop as keyof typeof obj] as (...args: number[]) => number)(...args);
          cache.set(cacheKey, result);
          return result;
        };
      }
      return obj[prop as keyof typeof obj];
    },
  });
};

const calculator = {
  expensiveCalculation(n: number): number {
    return n * n * n;
  },
};

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  const [accessLogs, setAccessLogs] = useState<string[]>([]);
  const [cacheLogs, setCacheLogs] = useState<string[]>([]);
  const [calcInput, setCalcInput] = useState('5');
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const testUserProxy = (action: string) => {
    const logs: string[] = [];
    const proxy = createUserProxy(user, logs);
    
    switch (action) {
      case 'getName':
        void proxy.name;
        break;
      case 'getPassword':
        void proxy.password;
        break;
      case 'setAge':
        proxy.age = 31;
        break;
      case 'setInvalidAge':
        (proxy as Record<string, string | number>).age = 'thirty' as unknown as number;
        break;
    }
    
    setAccessLogs(logs);
  };

  const testCachingProxy = () => {
    const logs: string[] = [];
    const proxy = createCachingProxy(calculator, logs);
    const result = proxy.expensiveCalculation(Number(calcInput));
    setCalcResult(result);
    setCacheLogs(logs);
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-200">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-6 sm:p-8 rounded-lg">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-fuchsia-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Proxy Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Control object access and behavior</p>
            </div>

            <div className="space-y-6">
              {/* Access Control Proxy */}
              <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-gray-900 mb-3">🔒 Access Control Proxy</h3>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button onClick={() => testUserProxy('getName')} className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                    Get Name ✓
                  </button>
                  <button onClick={() => testUserProxy('getPassword')} className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                    Get Password ✗
                  </button>
                  <button onClick={() => testUserProxy('setAge')} className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Set Age (valid)
                  </button>
                  <button onClick={() => testUserProxy('setInvalidAge')} className="px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm">
                    Set Age (invalid)
                  </button>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                  {accessLogs.length === 0 ? (
                    <div className="text-gray-500">Click buttons to test...</div>
                  ) : (
                    accessLogs.map((log, idx) => <div key={idx}>{log}</div>)
                  )}
                </div>
              </div>

              {/* Caching Proxy */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">⚡ Caching Proxy</h3>
                <div className="flex gap-2 mb-3">
                  <input
                    type="number"
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                    className="flex-1 px-3 py-2 border border-blue-300 rounded-lg"
                    placeholder="Enter number"
                  />
                  <button
                    onClick={testCachingProxy}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    Calculate³
                  </button>
                </div>
                {calcResult !== null && (
                  <div className="bg-white p-3 rounded mb-2 text-center">
                    <span className="text-2xl font-bold text-gray-900">{calcResult}</span>
                  </div>
                )}
                <div className="bg-gray-900 text-cyan-400 p-3 rounded font-mono text-xs">
                  {cacheLogs.length === 0 ? (
                    <div className="text-gray-500">Calculate to see caching...</div>
                  ) : (
                    cacheLogs.map((log, idx) => <div key={idx}>{log}</div>)
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-2">Try calculating the same number twice!</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-fuchsia-50 rounded-lg border border-fuchsia-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Control access to objects</li>
                <li>✓ Add validation and logging</li>
                <li>✓ Implement caching transparently</li>
                <li>✓ Lazy loading and virtual proxies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
