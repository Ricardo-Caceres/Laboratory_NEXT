'use client';

import { useState } from 'react';

// Example functions to test
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(isEven);
}

async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 100);
  });
}

export default function JestExample() {
  const [testResult, setTestResult] = useState<string>('');
  const [asyncResult, setAsyncResult] = useState<string>('');

  const runTests = () => {
    const results: string[] = [];
    
    // Test 1: Addition
    const sum = add(2, 3);
    results.push(`add(2, 3) = ${sum} ${sum === 5 ? '✅' : '❌'}`);
    
    // Test 2: Multiplication
    const product = multiply(4, 5);
    results.push(`multiply(4, 5) = ${product} ${product === 20 ? '✅' : '❌'}`);
    
    // Test 3: Even check
    const even = isEven(4);
    results.push(`isEven(4) = ${even} ${even === true ? '✅' : '❌'}`);
    
    // Test 4: Filter
    const filtered = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
    const expected = JSON.stringify([2, 4, 6]);
    results.push(`filterEvenNumbers([1,2,3,4,5,6]) = ${JSON.stringify(filtered)} ${JSON.stringify(filtered) === expected ? '✅' : '❌'}`);
    
    setTestResult(results.join('\n'));
  };

  const runAsyncTest = async () => {
    setAsyncResult('Testing...');
    const user = await fetchUser(123);
    const passed = user.id === 123 && user.name === 'User 123';
    setAsyncResult(`fetchUser(123) = ${JSON.stringify(user)} ${passed ? '✅' : '❌'}`);
  };

  return (
    <div className="space-y-8">
      {/* What is Jest */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is Jest?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue and more.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">⚡ Zero Config</h3>
            <p className="text-sm text-blue-800">Works out of the box for most JavaScript projects</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">📸 Snapshots</h3>
            <p className="text-sm text-green-800">Capture snapshots of React trees or data</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🎯 Great Mocking</h3>
            <p className="text-sm text-purple-800">Built-in mocking, spies, and stubs</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">⚡ Fast & Isolated</h3>
            <p className="text-sm text-amber-800">Tests run in parallel with isolated environments</p>
          </div>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Interactive Test Demo</h2>
        <p className="text-sm text-slate-600 mb-4">
          Click to run example tests and see results.
        </p>
        
        <button
          onClick={runTests}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4"
        >
          Run Synchronous Tests
        </button>

        {testResult && (
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <pre className="text-sm text-slate-900 whitespace-pre-wrap font-mono">{testResult}</pre>
          </div>
        )}

        <button
          onClick={runAsyncTest}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-4"
        >
          Run Async Test
        </button>

        {asyncResult && (
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 mt-4">
            <pre className="text-sm text-slate-900 whitespace-pre-wrap font-mono">{asyncResult}</pre>
          </div>
        )}
      </div>

      {/* Basic Test Examples */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Basic Test Structure</h2>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// math.test.ts
import { add, multiply } from './math';

describe('Math functions', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});`}
          </pre>
        </div>
      </div>

      {/* Matchers */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Common Matchers</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">Equality</h3>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(value).toBe(expected)</code>
              <p className="text-xs text-slate-600 mt-1">Exact equality (===)</p>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(obj).toEqual(expected)</code>
              <p className="text-xs text-slate-600 mt-1">Deep equality for objects</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">Truthiness</h3>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(value).toBeTruthy()</code>
              <p className="text-xs text-slate-600 mt-1">Truthy values</p>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(value).toBeFalsy()</code>
              <p className="text-xs text-slate-600 mt-1">Falsy values</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">Numbers</h3>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(num).toBeGreaterThan(3)</code>
              <p className="text-xs text-slate-600 mt-1">Greater than</p>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(num).toBeLessThan(5)</code>
              <p className="text-xs text-slate-600 mt-1">Less than</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">Strings</h3>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(str).toMatch(/pattern/)</code>
              <p className="text-xs text-slate-600 mt-1">Regex match</p>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <code className="text-xs font-mono">expect(str).toContain('text')</code>
              <p className="text-xs text-slate-600 mt-1">Contains substring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Async Testing */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Async Testing</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Async/Await</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`test('fetches user data', async () => {
  const data = await fetchUser(1);
  expect(data).toEqual({ id: 1, name: 'User 1' });
});`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Promises</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`test('fetches user data', () => {
  return fetchUser(1).then(data => {
    expect(data.id).toBe(1);
  });
});`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Resolves/Rejects</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`test('promise resolves', async () => {
  await expect(fetchUser(1)).resolves.toHaveProperty('id', 1);
});

test('promise rejects', async () => {
  await expect(fetchBadData()).rejects.toThrow('Error');
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* Setup/Teardown */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Setup & Teardown</h2>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`describe('Database tests', () => {
  beforeAll(() => {
    // Runs once before all tests
    connectDatabase();
  });

  afterAll(() => {
    // Runs once after all tests
    disconnectDatabase();
  });

  beforeEach(() => {
    // Runs before each test
    resetDatabase();
  });

  afterEach(() => {
    // Runs after each test
    cleanupTestData();
  });

  test('creates user', () => {
    // Test code
  });
});`}
          </pre>
        </div>
      </div>

      {/* Mocking */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Mocking</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Mock Functions</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`const mockFn = jest.fn();
mockFn('hello');
mockFn('world');

expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toHaveBeenCalledWith('hello');`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Mock Modules</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`jest.mock('./api');
import { fetchData } from './api';

test('calls API', () => {
  fetchData.mockResolvedValue({ data: 'test' });
  // Test code
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Write descriptive test names that explain what is being tested</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Follow AAA pattern: Arrange, Act, Assert</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Test one thing per test - keep tests focused and simple</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">beforeEach</code> to set up common test data</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Mock external dependencies to keep tests fast and isolated</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Run tests in watch mode during development: <code className="px-1 bg-white rounded text-xs">jest --watch</code></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
