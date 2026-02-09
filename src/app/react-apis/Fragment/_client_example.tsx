'use client';

import { Fragment, useState } from 'react';

// Example 1: Fragment vs div wrapper
function WithDiv() {
  return (
    <div>
      <span className="text-red-600 font-semibold">First</span>
      <span className="text-red-600 font-semibold">Second</span>
      <span className="text-red-600 font-semibold">Third</span>
    </div>
  );
}

function WithFragment() {
  return (
    <Fragment>
      <span className="text-green-600 font-semibold">First</span>
      <span className="text-green-600 font-semibold">Second</span>
      <span className="text-green-600 font-semibold">Third</span>
    </Fragment>
  );
}

// Example 2: Fragment with key (in lists)
interface Item {
  id: number;
  title: string;
  description: string;
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <dl className="space-y-4">
      {items.map((item) => (
        <Fragment key={item.id}>
          <dt className="font-bold text-lg text-gray-900">{item.title}</dt>
          <dd className="text-gray-600 ml-4 mb-2">{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

// Example 3: Short syntax <>
function ShortSyntaxExample() {
  return (
    <>
      <h4 className="font-semibold text-gray-900 mb-2">Using Short Syntax</h4>
      <p className="text-gray-600">No need to import Fragment!</p>
      <p className="text-gray-600">Just use {'<>'} and {'</>'}</p>
    </>
  );
}

// Example 4: Conditional rendering with Fragment
function ConditionalFragments({ showDetails }: { showDetails: boolean }) {
  return (
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <h4 className="font-semibold text-purple-900 mb-2">User Profile</h4>
      {showDetails ? (
        <Fragment>
          <p className="text-sm text-gray-700">Name: John Doe</p>
          <p className="text-sm text-gray-700">Email: john@example.com</p>
          <p className="text-sm text-gray-700">Role: Developer</p>
        </Fragment>
      ) : (
        <p className="text-sm text-gray-500 italic">Details hidden</p>
      )}
    </div>
  );
}

export default function FragmentExample() {
  const [showDetails, setShowDetails] = useState(true);
  const [items] = useState<Item[]>([
    { id: 1, title: 'React', description: 'A JavaScript library for building user interfaces' },
    { id: 2, title: 'Fragment', description: 'Group children without adding extra nodes to the DOM' },
    { id: 3, title: 'JSX', description: 'Syntax extension for JavaScript' },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 sm:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">React Fragment</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Group elements without adding extra DOM nodes
            </p>
          </div>

          <div className="space-y-8">
            {/* Example 1: Fragment vs div */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">1.</span>
                Fragment vs div - DOM Difference
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm font-semibold text-red-700 mb-3">❌ With div wrapper:</p>
                  <WithDiv />
                  <p className="text-xs text-red-600 mt-3">Creates extra {'<div>'} in DOM</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-700 mb-3">✅ With Fragment:</p>
                  <WithFragment />
                  <p className="text-xs text-green-600 mt-3">No extra DOM node created</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2 font-semibold">DOM Structure:</p>
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-red-600">{'<div>'}  ← Extra wrapper</div>
                  <div className="ml-4 text-gray-700">{'<span>First</span>'}</div>
                  <div className="ml-4 text-gray-700">{'<span>Second</span>'}</div>
                  <div className="ml-4 text-gray-700">{'<span>Third</span>'}</div>
                  <div className="text-red-600">{'</div>'}</div>
                  <div className="my-2 text-center text-gray-500">vs</div>
                  <div className="text-green-600">{'<span>First</span>'}  ← Direct children</div>
                  <div className="text-green-600">{'<span>Second</span>'}</div>
                  <div className="text-green-600">{'<span>Third</span>'}</div>
                </div>
              </div>
            </div>

            {/* Example 2: Fragment with key */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">2.</span>
                Fragment with Key (in lists)
              </h3>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <ItemList items={items} />
              </div>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-700 font-mono">
                  {'<Fragment key={item.id}>'}
                  <br />
                  {'  <dt>...</dt>'}
                  <br />
                  {'  <dd>...</dd>'}
                  <br />
                  {'</Fragment>'}
                </p>
              </div>
            </div>

            {/* Example 3: Short Syntax */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-purple-600">3.</span>
                Short Syntax {'<> </>'} 
              </h3>
              <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                <ShortSyntaxExample />
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Long Syntax:</p>
                  <code className="text-xs text-gray-600 font-mono">
                    {'<Fragment>...</Fragment>'}
                  </code>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-xs font-semibold text-purple-700 mb-2">Short Syntax:</p>
                  <code className="text-xs text-purple-600 font-mono">
                    {'<>...</>'}
                  </code>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 italic">
                Note: Short syntax can't have keys or attributes
              </p>
            </div>

            {/* Example 4: Conditional Rendering */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-orange-600">4.</span>
                Conditional Rendering with Fragment
              </h3>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mb-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all"
              >
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
              <ConditionalFragments showDetails={showDetails} />
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">When to Use Fragment:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">✅ Good Use Cases:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Returning multiple elements from a component</li>
                    <li>• Grouping children in lists (with key)</li>
                    <li>• Conditional rendering of multiple elements</li>
                    <li>• When div wrapper breaks layout (flex/grid)</li>
                    <li>• Semantic HTML structures (dl/dt/dd, table rows)</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-700 mb-2">⚠️ When div is Better:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Need to apply styles</li>
                    <li>• Need className or id</li>
                    <li>• Need event handlers</li>
                    <li>• Need refs</li>
                    <li>• Semantic grouping with meaning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">Fragment:</strong> Groups multiple elements without adding extra nodes to the DOM. Use <code className="px-2 py-1 bg-white rounded text-xs">{'<Fragment>'}</code> when you need keys, or <code className="px-2 py-1 bg-white rounded text-xs">{'<>'}</code> for short syntax.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
