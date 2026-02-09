'use client';

// Example pure functions for unit testing
function calculateTotal(items: { price: number; quantity: number }[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export default function UnitTestingExample() {
  const testItems = [
    { price: 10, quantity: 2 },
    { price: 25, quantity: 1 },
    { price: 5, quantity: 3 },
  ];

  return (
    <div className="space-y-8">
      {/* What is Unit Testing */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is Unit Testing?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Unit testing focuses on testing individual units of code (functions, classes, components) in isolation. Each test should be independent, fast, and test one specific behavior.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">⚡ Fast</h3>
            <p className="text-sm text-blue-800">Tests run in milliseconds, thousands per minute</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🎯 Isolated</h3>
            <p className="text-sm text-green-800">No external dependencies, mocked if needed</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">📋 Specific</h3>
            <p className="text-sm text-purple-800">Each test covers one specific behavior</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">🔄 Repeatable</h3>
            <p className="text-sm text-amber-800">Same input always produces same output</p>
          </div>
        </div>
      </div>

      {/* Example Functions */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Example: Pure Functions</h2>
        <p className="text-sm text-slate-600 mb-4">
          Pure functions are ideal candidates for unit testing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">calculateTotal()</p>
            <p className="text-sm text-slate-600 mb-2">Input: {JSON.stringify(testItems)}</p>
            <p className="text-sm text-green-700">Output: {formatCurrency(calculateTotal(testItems))}</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">validateEmail()</p>
            <p className="text-sm text-slate-600 mb-2">Input: "user@example.com"</p>
            <p className="text-sm text-green-700">Output: {validateEmail('user@example.com') ? 'Valid ✅' : 'Invalid ❌'}</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">isPrime()</p>
            <p className="text-sm text-slate-600 mb-2">Input: 17</p>
            <p className="text-sm text-green-700">Output: {isPrime(17) ? 'Prime ✅' : 'Not Prime ❌'}</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 mb-2">formatCurrency()</p>
            <p className="text-sm text-slate-600 mb-2">Input: 1234.5</p>
            <p className="text-sm text-green-700">Output: {formatCurrency(1234.5)}</p>
          </div>
        </div>
      </div>

      {/* Test Examples */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Unit Test Examples</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Testing calculateTotal()</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`describe('calculateTotal', () => {
  it('should calculate total for single item', () => {
    const items = [{ price: 10, quantity: 2 }];
    expect(calculateTotal(items)).toBe(20);
  });

  it('should calculate total for multiple items', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 25, quantity: 1 },
    ];
    expect(calculateTotal(items)).toBe(45);
  });

  it('should return 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });
});`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Testing validateEmail()</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`describe('validateEmail', () => {
  it('should accept valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should reject email without @', () => {
    expect(validateEmail('userexample.com')).toBe(false);
  });

  it('should reject email without domain', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('should reject empty string', () => {
    expect(validateEmail('')).toBe(false);
  });
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* What to Unit Test */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What to Unit Test</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-green-900 text-sm">✅ DO Test:</h3>
            <div className="space-y-1">
              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800">Pure functions</div>
              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800">Business logic</div>
              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800">Data transformations</div>
              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800">Validation functions</div>
              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800">Utility functions</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-red-900 text-sm">❌ DON'T Test:</h3>
            <div className="space-y-1">
              <div className="p-3 bg-red-50 rounded-lg text-sm text-red-800">Third-party libraries</div>
              <div className="p-3 bg-red-50 rounded-lg text-sm text-red-800">Framework internals</div>
              <div className="p-3 bg-red-50 rounded-lg text-sm text-red-800">Simple getters/setters</div>
              <div className="p-3 bg-red-50 rounded-lg text-sm text-red-800">Trivial code</div>
            </div>
          </div>
        </div>
      </div>

      {/* AAA Pattern */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">AAA Pattern (Arrange-Act-Assert)</h2>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`test('should format currency correctly', () => {
  // ARRANGE: Set up test data
  const amount = 1234.567;
  
  // ACT: Execute the function
  const result = formatCurrency(amount);
  
  // ASSERT: Verify the result
  expect(result).toBe('$1234.57');
});`}
          </pre>
        </div>
      </div>

      {/* Test Coverage */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Code Coverage</h2>
        <p className="text-sm text-slate-600 mb-4">
          Measures how much of your code is executed during tests.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Line Coverage</h3>
            <p className="text-sm text-blue-800">% of lines executed</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Branch Coverage</h3>
            <p className="text-sm text-green-800">% of if/else branches tested</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">Function Coverage</h3>
            <p className="text-sm text-purple-800">% of functions called</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Statement Coverage</h3>
            <p className="text-sm text-amber-800">% of statements executed</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-50 rounded border border-amber-200">
          <p className="text-sm text-amber-800">
            💡 Aim for 70-80% coverage, but don't obsess over 100%. Focus on critical paths.
          </p>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Test one behavior per test - keep tests focused and simple</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use descriptive test names: "should X when Y"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Follow AAA pattern: Arrange, Act, Assert</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Tests should be independent - no shared state between tests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Mock external dependencies (APIs, databases, file system)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Run unit tests frequently - they should be fast ({'<'} 100ms each)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
