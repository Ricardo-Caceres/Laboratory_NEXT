'use client';

import { useState } from 'react';

// Simulated Micro-Frontend Components
// In real apps, these would be loaded from different domains/bundles

// Product Catalog Micro-Frontend
function ProductCatalogMFE() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, team: 'Catalog Team' },
    { id: 2, name: 'Mouse', price: 29, team: 'Catalog Team' },
    { id: 3, name: 'Keyboard', price: 79, team: 'Catalog Team' },
  ]);

  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-blue-900">Product Catalog MFE</h3>
        <span className="text-xs px-2 py-1 bg-blue-200 text-blue-700 rounded">Catalog Team</span>
      </div>
      <div className="space-y-2">
        {products.map((product) => (
          <div key={product.id} className="p-3 bg-white rounded border border-blue-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-900">{product.name}</span>
              <span className="text-blue-600 font-semibold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Shopping Cart Micro-Frontend
function ShoppingCartMFE() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', quantity: 1, price: 999 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-green-900">Shopping Cart MFE</h3>
        <span className="text-xs px-2 py-1 bg-green-200 text-green-700 rounded">Cart Team</span>
      </div>
      <div className="space-y-2">
        {cartItems.map((item) => (
          <div key={item.id} className="p-3 bg-white rounded border border-green-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-900">{item.name} x{item.quantity}</span>
              <span className="text-green-600 font-semibold">${item.price * item.quantity}</span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-green-200">
          <div className="flex justify-between items-center font-semibold">
            <span className="text-green-900">Total:</span>
            <span className="text-green-700 text-lg">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// User Profile Micro-Frontend
function UserProfileMFE() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    team: 'Profile Team',
  });

  return (
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-purple-900">User Profile MFE</h3>
        <span className="text-xs px-2 py-1 bg-purple-200 text-purple-700 rounded">Profile Team</span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="p-3 bg-white rounded border border-purple-200">
          <p className="font-medium text-slate-900">{user.name}</p>
          <p className="text-slate-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

// Shell/Container Application
function ShellApplication() {
  return (
    <div className="p-6 bg-white rounded-lg border-2 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-4 text-center">Shell Application (Container)</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <ProductCatalogMFE />
        <ShoppingCartMFE />
        <UserProfileMFE />
      </div>
      <p className="text-xs text-slate-500 text-center mt-4">
        Each MFE can be developed, deployed, and scaled independently
      </p>
    </div>
  );
}

export default function MicroFrontendsExample() {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo'>('overview');

  return (
    <div className="space-y-8">
      {/* What are Micro-Frontends */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What are Micro-Frontends?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Micro-frontends extend the microservices concept to the frontend. Each team builds and deploys their own frontend application independently, which are then composed into a single user experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🎯 Team Autonomy</h3>
            <p className="text-sm text-blue-800">Each team owns their complete vertical slice (UI + API + DB)</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🚀 Independent Deployment</h3>
            <p className="text-sm text-green-800">Deploy features without coordinating with other teams</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🔧 Technology Freedom</h3>
            <p className="text-sm text-purple-800">Different teams can use different frameworks (React, Vue, Angular)</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">📦 Incremental Upgrades</h3>
            <p className="text-sm text-amber-800">Upgrade or rewrite parts without affecting the whole app</p>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Architecture Structure</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-100 rounded-lg border border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-3 text-center">Shell/Container App</h3>
            <p className="text-sm text-slate-600 text-center mb-4">Orchestrates micro-frontends, handles routing, shared UI</p>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 text-sm mb-1">MFE 1: Products</p>
                <p className="text-xs text-blue-700">Team A</p>
                <p className="text-xs text-blue-600">React 18</p>
              </div>
              
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <p className="font-semibold text-green-900 text-sm mb-1">MFE 2: Cart</p>
                <p className="text-xs text-green-700">Team B</p>
                <p className="text-xs text-green-600">Vue 3</p>
              </div>
              
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <p className="font-semibold text-purple-900 text-sm mb-1">MFE 3: Profile</p>
                <p className="text-xs text-purple-700">Team C</p>
                <p className="text-xs text-purple-600">Angular 17</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Interactive Demo</h2>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'demo'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Live Demo
          </button>
        </div>

        {activeTab === 'overview' ? (
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-700 mb-3">
              In this simulation, three independent teams built their own micro-frontends:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Catalog Team</strong>: Product listings and search</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span><strong>Cart Team</strong>: Shopping cart and checkout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Profile Team</strong>: User authentication and preferences</span>
              </li>
            </ul>
          </div>
        ) : (
          <ShellApplication />
        )}
      </div>

      {/* Implementation Approaches */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Implementation Approaches</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">1. Build-Time Integration</h3>
            <p className="text-sm text-blue-800 mb-2">MFEs are npm packages, composed at build time</p>
            <code className="text-xs text-blue-700 block">npm install @company/product-mfe @company/cart-mfe</code>
            <p className="text-xs text-blue-600 mt-2">✅ Simple • ❌ All teams must rebuild on changes</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">2. Run-Time Integration (iframe)</h3>
            <p className="text-sm text-green-800 mb-2">Each MFE loads in an iframe</p>
            <code className="text-xs text-green-700 block">{'<iframe src="https://products.example.com" />'}</code>
            <p className="text-xs text-green-600 mt-2">✅ True isolation • ❌ Communication overhead, SEO issues</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">3. Run-Time Integration (JavaScript)</h3>
            <p className="text-sm text-purple-800 mb-2">Load MFEs as JavaScript bundles at runtime</p>
            <code className="text-xs text-purple-700 block">const ProductMFE = await import('https://cdn.example.com/product-mfe.js')</code>
            <p className="text-xs text-purple-600 mt-2">✅ Independent deployment • ❌ More complex setup</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">4. Module Federation (Webpack 5)</h3>
            <p className="text-sm text-amber-800 mb-2">Share code and dependencies between MFEs</p>
            <code className="text-xs text-amber-700 block">ModuleFederationPlugin (webpack config)</code>
            <p className="text-xs text-amber-600 mt-2">✅ Best of both worlds • ✅ Recommended for most cases</p>
          </div>
        </div>
      </div>

      {/* Communication Patterns */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Inter-MFE Communication</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">Custom Events</h3>
            <pre className="text-xs text-slate-700">
{`// MFE A
window.dispatchEvent(
  new CustomEvent('product-added', {
    detail: { productId: 123 }
  })
);

// MFE B
window.addEventListener('product-added',
  (e) => updateCart(e.detail)
);`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">Shared State (Redux/Context)</h3>
            <pre className="text-xs text-slate-700">
{`// Shell app provides store
<Provider store={sharedStore}>
  <ProductMFE />
  <CartMFE />
</Provider>

// MFEs dispatch actions
dispatch({ type: 'ADD_TO_CART' });`}
            </pre>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="p-6 bg-red-50 rounded-lg border border-red-200">
        <h3 className="font-semibold text-red-900 mb-3">⚠️ Challenges to Consider</h3>
        <ul className="space-y-2 text-sm text-red-900">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">•</span>
            <span><strong>Overhead:</strong> More complex infrastructure and tooling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">•</span>
            <span><strong>Duplication:</strong> Multiple copies of React, shared libraries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">•</span>
            <span><strong>Consistency:</strong> Harder to maintain consistent UX across MFEs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-0.5">•</span>
            <span><strong>Testing:</strong> Integration testing becomes more complex</span>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use Module Federation for shared dependencies (React, UI libraries)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Create a design system for consistent UI across MFEs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Keep MFEs loosely coupled - communicate via events, not direct calls</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Define clear boundaries - each MFE should own a business domain</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Only use micro-frontends if you have multiple independent teams</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Consider monorepo with multiple apps instead if you're a small team</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
