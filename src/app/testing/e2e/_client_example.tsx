'use client';

import { useState } from 'react';

// Demo shopping flow
function ShoppingDemo() {
  const [cart, setCart] = useState<string[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];

  const addToCart = (product: string) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const checkout = () => {
    if (cart.length > 0) {
      setOrderPlaced(true);
      setTimeout(() => {
        setCart([]);
        setOrderPlaced(false);
      }, 3000);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Products</h3>
          <div className="space-y-2">
            {products.map((product) => (
              <div key={product} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-900">{product}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  data-testid={`add-${product.toLowerCase()}`}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Cart ({cart.length})</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-slate-500 italic">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-2 mb-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-slate-900">{item}</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={checkout}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                data-testid="checkout-btn"
              >
                Checkout
              </button>
            </>
          )}
          
          {orderPlaced && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
              ✅ Order placed successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function E2EExample() {
  return (
    <div className="space-y-8">
      {/* What is E2E Testing */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is E2E Testing?</h2>
        <p className="text-sm text-slate-600 mb-4">
          End-to-End (E2E) testing simulates real user scenarios by testing your entire application from start to finish. It validates that all integrated components work together correctly.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🎭 Real Browser</h3>
            <p className="text-sm text-blue-800">Tests run in actual browsers (Chrome, Firefox, etc.)</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">👤 User Perspective</h3>
            <p className="text-sm text-green-800">Tests complete user workflows and journeys</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🔗 Full Stack</h3>
            <p className="text-sm text-purple-800">Tests frontend, backend, database integration</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">🐛 Catch Integration Bugs</h3>
            <p className="text-sm text-amber-800">Find issues that unit tests miss</p>
          </div>
        </div>
      </div>

      {/* Demo Application */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Demo: Shopping Flow</h2>
        <p className="text-sm text-slate-600 mb-4">
          Try the shopping flow, then see how we would test it end-to-end.
        </p>
        
        <ShoppingDemo />
      </div>

      {/* Playwright Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Playwright Example</h2>
        <p className="text-sm text-slate-600 mb-4">
          Modern E2E testing with Playwright (recommended for Next.js).
        </p>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// e2e/shopping.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Shopping Flow', () => {
  test('should complete purchase workflow', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/shop');
    
    // Add products to cart
    await page.getByTestId('add-laptop').click();
    await page.getByTestId('add-mouse').click();
    
    // Verify cart has 2 items
    await expect(page.getByText('Cart (2)')).toBeVisible();
    
    // Proceed to checkout
    await page.getByTestId('checkout-btn').click();
    
    // Verify success message
    await expect(page.getByText(/order placed successfully/i)).toBeVisible();
    
    // Wait for cart to clear
    await page.waitForTimeout(3000);
    await expect(page.getByText('Cart is empty')).toBeVisible();
  });

  test('should allow removing items from cart', async ({ page }) => {
    await page.goto('http://localhost:3000/shop');
    
    // Add item
    await page.getByTestId('add-keyboard').click();
    await expect(page.getByText('Cart (1)')).toBeVisible();
    
    // Remove item
    await page.getByRole('button', { name: /remove/i }).click();
    await expect(page.getByText('Cart (0)')).toBeVisible();
  });
});`}
          </pre>
        </div>
      </div>

      {/* Cypress Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Cypress Example</h2>
        <p className="text-sm text-slate-600 mb-4">
          Alternative E2E framework with great developer experience.
        </p>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// cypress/e2e/shopping.cy.ts
describe('Shopping Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/shop');
  });

  it('should complete purchase workflow', () => {
    // Add products to cart
    cy.get('[data-testid="add-laptop"]').click();
    cy.get('[data-testid="add-mouse"]').click();
    
    // Verify cart
    cy.contains('Cart (2)').should('be.visible');
    
    // Checkout
    cy.get('[data-testid="checkout-btn"]').click();
    
    // Verify success
    cy.contains(/order placed successfully/i).should('be.visible');
  });

  it('should handle empty cart', () => {
    // Verify empty state
    cy.contains('Cart is empty').should('be.visible');
    
    // Checkout button should not exist
    cy.get('[data-testid="checkout-btn"]').should('not.exist');
  });
});`}
          </pre>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Common E2E Test Patterns</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">1. Navigation Flow</h3>
            <code className="text-xs text-slate-700 block">Test multi-page user journeys</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">2. Form Submission</h3>
            <code className="text-xs text-slate-700 block">Fill forms, validate, submit, verify results</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">3. Authentication Flow</h3>
            <code className="text-xs text-slate-700 block">Login, access protected routes, logout</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">4. CRUD Operations</h3>
            <code className="text-xs text-slate-700 block">Create, read, update, delete data</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">5. Error Handling</h3>
            <code className="text-xs text-slate-700 block">Test error states and recovery</code>
          </div>
        </div>
      </div>

      {/* Playwright vs Cypress */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Playwright vs Cypress</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">Playwright</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>✅ Multiple browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>✅ Built by Microsoft</li>
              <li>✅ Great for CI/CD</li>
              <li>✅ Fast parallel execution</li>
              <li>✅ Native TypeScript support</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3">Cypress</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>✅ Great DX with interactive UI</li>
              <li>✅ Time-travel debugging</li>
              <li>✅ Automatic waiting</li>
              <li>✅ Real-time reloads</li>
              <li>⚠️ Chrome/Edge/Firefox only</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Test critical user journeys, not every possible path</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">data-testid</code> attributes for stable selectors</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Keep E2E tests independent - each test should be able to run alone</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use Page Object Model pattern for maintainable tests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Run E2E tests in CI/CD pipeline before deployment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>E2E tests are slower - combine with fast unit tests for balance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
