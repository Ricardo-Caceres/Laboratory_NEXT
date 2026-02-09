'use client';

import { useState } from 'react';

// ============================================
// EXAMPLE: Shopping Cart TDD
// ============================================

// Domain logic (built using TDD)
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...item, quantity });
    }
  }

  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  clear(): void {
    this.items = [];
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  applyDiscount(percentage: number): number {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    const total = this.getTotal();
    return total - (total * percentage / 100);
  }
}

// ============================================
// TDD SIMULATION COMPONENT
// ============================================

type TDDPhase = 'idle' | 'red' | 'green' | 'refactor';

interface TestCase {
  name: string;
  status: 'pass' | 'fail' | 'pending';
  code: string;
}

export default function TDDExample() {
  const [phase, setPhase] = useState<TDDPhase>('idle');
  const [currentStep, setCurrentStep] = useState(0);
  const [cart] = useState(new ShoppingCart());
  const [cartDisplay, setCartDisplay] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const steps: Array<{ phase: TDDPhase; description: string; tests: TestCase[] }> = [
    {
      phase: 'red',
      description: 'Write test for adding items to cart',
      tests: [
        {
          name: 'should add item to cart',
          status: 'fail',
          code: `test('should add item to cart', () => {
  const cart = new ShoppingCart();
  cart.addItem({ id: '1', name: 'Book', price: 10 });
  expect(cart.getItemCount()).toBe(1);
});
// ❌ FAILS: getItemCount is not implemented`
        }
      ]
    },
    {
      phase: 'green',
      description: 'Implement minimum code to make test pass',
      tests: [
        {
          name: 'should add item to cart',
          status: 'pass',
          code: `// Implementation
addItem(item: CartItem): void {
  this.items.push({ ...item, quantity: 1 });
}

getItemCount(): number {
  return this.items.length;
}
// ✅ Test passes!`
        }
      ]
    },
    {
      phase: 'red',
      description: 'Write test for calculating total',
      tests: [
        {
          name: 'should add item to cart',
          status: 'pass',
          code: `test('should add item to cart', () => {
  // ... (passing)
});`
        },
        {
          name: 'should calculate total price',
          status: 'fail',
          code: `test('should calculate total price', () => {
  const cart = new ShoppingCart();
  cart.addItem({ id: '1', name: 'Book', price: 10 });
  cart.addItem({ id: '2', name: 'Pen', price: 5 });
  expect(cart.getTotal()).toBe(15);
});
// ❌ FAILS: getTotal is not implemented`
        }
      ]
    },
    {
      phase: 'green',
      description: 'Implement getTotal method',
      tests: [
        {
          name: 'should add item to cart',
          status: 'pass',
          code: `// ✅ Passing`
        },
        {
          name: 'should calculate total price',
          status: 'pass',
          code: `// Implementation
getTotal(): number {
  return this.items.reduce((sum, item) => 
    sum + item.price, 0
  );
}
// ✅ All tests pass!`
        }
      ]
    },
    {
      phase: 'refactor',
      description: 'Refactor to support quantities',
      tests: [
        {
          name: 'All tests still passing',
          status: 'pass',
          code: `// Refactored implementation
getTotal(): number {
  return this.items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );
}

getItemCount(): number {
  return this.items.reduce((sum, item) => 
    sum + item.quantity, 0
  );
}
// ✅ Tests still pass with better code!`
        }
      ]
    }
  ];

  const runCycle = () => {
    setCurrentStep(0);
    animateStep(0);
  };

  const animateStep = (step: number) => {
    if (step >= steps.length) {
      setPhase('idle');
      return;
    }

    const currentStepData = steps[step];
    setPhase(currentStepData.phase);

    setTimeout(() => {
      animateStep(step + 1);
      setCurrentStep(step + 1);
    }, 2000);
  };

  // Interactive cart demo
  const handleAddItem = () => {
    cart.addItem({ id: Date.now().toString(), name: 'Product', price: 10 });
    setCartDisplay(cart.getItems());
    setTotal(cart.getTotal());
  };

  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
    setCartDisplay(cart.getItems());
    setTotal(cart.getTotal());
  };

  const handleClear = () => {
    cart.clear();
    setCartDisplay([]);
    setTotal(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Test-Driven Development (TDD)
          </h1>
          <p className="text-slate-700 mb-4">
            Write tests first, then write code to pass them. Follow the Red-Green-Refactor cycle.
          </p>
        </div>

        {/* TDD Cycle Visualization */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The TDD Cycle</h2>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className={`flex flex-col items-center ${phase === 'red' ? 'scale-110' : 'opacity-50'} transition-all`}>
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                ❌
              </div>
              <p className="mt-3 font-bold text-red-600">RED</p>
              <p className="text-sm text-slate-600">Write failing test</p>
            </div>

            <div className="text-4xl text-slate-400">→</div>

            <div className={`flex flex-col items-center ${phase === 'green' ? 'scale-110' : 'opacity-50'} transition-all`}>
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                ✓
              </div>
              <p className="mt-3 font-bold text-green-600">GREEN</p>
              <p className="text-sm text-slate-600">Make it pass</p>
            </div>

            <div className="text-4xl text-slate-400">→</div>

            <div className={`flex flex-col items-center ${phase === 'refactor' ? 'scale-110' : 'opacity-50'} transition-all`}>
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                🔧
              </div>
              <p className="mt-3 font-bold text-blue-600">REFACTOR</p>
              <p className="text-sm text-slate-600">Improve code</p>
            </div>
          </div>

          <button
            onClick={runCycle}
            disabled={phase !== 'idle'}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            {phase === 'idle' ? 'Start TDD Cycle Animation' : 'Running...'}
          </button>
        </div>

        {/* Step-by-Step Simulation */}
        {currentStep > 0 && currentStep <= steps.length && (
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded font-bold text-white ${
                steps[currentStep - 1].phase === 'red' ? 'bg-red-500' :
                steps[currentStep - 1].phase === 'green' ? 'bg-green-500' :
                'bg-blue-500'
              }`}>
                {steps[currentStep - 1].phase.toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Step {currentStep}: {steps[currentStep - 1].description}
              </h3>
            </div>

            {steps[currentStep - 1].tests.map((test, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={test.status === 'pass' ? 'text-green-600' : test.status === 'fail' ? 'text-red-600' : 'text-yellow-600'}>
                    {test.status === 'pass' ? '✓' : test.status === 'fail' ? '✗' : '⏸'}
                  </span>
                  <strong className="text-slate-900">{test.name}</strong>
                </div>
                <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  {test.code}
                </pre>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Demo */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Interactive Demo: ShoppingCart (Built with TDD)
          </h2>
          <p className="text-slate-700 mb-4">
            This ShoppingCart class was built using TDD. Every method has corresponding tests.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Cart Actions</h3>
              <div className="space-y-2 mb-4">
                <button
                  onClick={handleAddItem}
                  className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Add Product ($10)
                </button>
                <button
                  onClick={handleClear}
                  className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                <div className="flex justify-between mb-2">
                  <strong>Total Items:</strong>
                  <span>{cart.getItemCount()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <strong>Total Price:</strong>
                  <span className="text-green-600 font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-3">Cart Contents</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {cartDisplay.length === 0 && (
                  <p className="text-slate-600 text-center py-8">Cart is empty</p>
                )}
                {cartDisplay.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded">
                    <div>
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-600">
                        ${item.price} × {item.quantity}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Best Practices */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">✅ Benefits</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <strong className="text-green-900">Better Design</strong>
                <p className="text-green-800">Tests force you to think about API design first</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <strong className="text-blue-900">High Coverage</strong>
                <p className="text-blue-800">Code is covered by tests from the start</p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <strong className="text-purple-900">Confidence</strong>
                <p className="text-purple-800">Refactor without fear of breaking things</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <strong className="text-orange-900">Documentation</strong>
                <p className="text-orange-800">Tests serve as living documentation</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 Best Practices</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-slate-900">1. Test One Thing</strong>
                <p className="text-slate-700">Each test should verify a single behavior</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-slate-900">2. AAA Pattern</strong>
                <p className="text-slate-700">Arrange → Act → Assert structure</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-slate-900">3. Fast Tests</strong>
                <p className="text-slate-700">Unit tests should run in milliseconds</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                <strong className="text-slate-900">4. Descriptive Names</strong>
                <p className="text-slate-700">Test names should explain what they test</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Example: TDD Workflow</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-red-600 mb-2">🔴 RED: Write the test first</h3>
              <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`describe('ShoppingCart', () => {
  it('should remove item from cart', () => {
    // Arrange
    const cart = new ShoppingCart();
    cart.addItem({ id: '1', name: 'Book', price: 10 });
    
    // Act
    cart.removeItem('1');
    
    // Assert
    expect(cart.getItemCount()).toBe(0);
  });
});

// ❌ Test fails: removeItem is not implemented`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-green-600 mb-2">🟢 GREEN: Make it pass</h3>
              <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`class ShoppingCart {
  private items: CartItem[] = [];
  
  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}

// ✅ Test passes!`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 mb-2">🔵 REFACTOR: Improve (if needed)</h3>
              <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Code is already clean and simple
// No refactoring needed
// ✅ All tests still pass!`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
