'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

function NavigationContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [newParam, setNewParam] = useState('');
  const [newValue, setNewValue] = useState('');

  // Get all current params
  const allParams = Array.from(searchParams.entries());

  const addSearchParam = () => {
    if (!newParam || !newValue) return;
    
    const params = new URLSearchParams(searchParams.toString());
    params.set(newParam, newValue);
    router.push(`${pathname}?${params.toString()}`);
    setNewParam('');
    setNewValue('');
  };

  const removeParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="space-y-8">
      {/* usePathname */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">usePathname()</h2>
        <p className="text-sm text-slate-600 mb-4">
          Returns the current URL pathname.
        </p>
        
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-slate-700 mb-1">Current pathname:</p>
          <code className="text-blue-700 font-mono text-sm font-semibold">{pathname}</code>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const pathname = usePathname();
// Example: "/nextjs-apis/navigation"`}
          </pre>
        </div>
      </div>

      {/* useSearchParams */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">useSearchParams()</h2>
        <p className="text-sm text-slate-600 mb-4">
          Read and manipulate URL query parameters.
        </p>
        
        {/* Current Params Display */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-4">
          <p className="text-sm text-slate-700 mb-2 font-semibold">Current Search Params:</p>
          {allParams.length > 0 ? (
            <div className="space-y-2">
              {allParams.map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-2 bg-white rounded border border-green-200">
                  <code className="text-green-700 font-mono text-sm">
                    {key} = {value}
                  </code>
                  <button
                    onClick={() => removeParam(key)}
                    className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">No search params in URL</p>
          )}
        </div>

        {/* Add Param Form */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-700">Add Search Parameter:</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="key"
              value={newParam}
              onChange={(e) => setNewParam(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addSearchParam}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const searchParams = useSearchParams();

// Get a specific param
const tab = searchParams.get('tab');

// Check if param exists
const hasFilter = searchParams.has('filter');

// Get all params
const all = Array.from(searchParams.entries());`}
          </pre>
        </div>
      </div>

      {/* Quick Links with Params */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Test Links</h2>
        <p className="text-sm text-slate-600 mb-4">
          Click these to see search params in action:
        </p>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => router.push(`${pathname}?tab=profile&view=grid`)}
            className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
          >
            ?tab=profile&view=grid
          </button>
          
          <button
            onClick={() => router.push(`${pathname}?category=books&sort=price&order=asc`)}
            className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
          >
            ?category=books&sort=price&order=asc
          </button>
          
          <button
            onClick={() => router.push(`${pathname}?page=5&limit=20`)}
            className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm"
          >
            ?page=5&limit=20
          </button>
          
          <button
            onClick={() => router.push(pathname)}
            className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 text-sm"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Reading Specific Params */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Reading Specific Parameters</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">searchParams.get('tab')</p>
            <code className="text-slate-900 font-mono text-sm">
              {searchParams.get('tab') || 'null'}
            </code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">searchParams.get('view')</p>
            <code className="text-slate-900 font-mono text-sm">
              {searchParams.get('view') || 'null'}
            </code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">searchParams.get('page')</p>
            <code className="text-slate-900 font-mono text-sm">
              {searchParams.get('page') || 'null'}
            </code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-600 mb-1">searchParams.get('category')</p>
            <code className="text-slate-900 font-mono text-sm">
              {searchParams.get('category') || 'null'}
            </code>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Always wrap <code className="px-1 bg-white rounded text-xs">useSearchParams()</code> in <code className="px-1 bg-white rounded text-xs">{'<Suspense>'}</code> boundary</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">URLSearchParams</code> to manipulate params before navigating</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span><code className="px-1 bg-white rounded text-xs">usePathname()</code> returns pathname without query string</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>These hooks only work in Client Components</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use search params for filterable/shareable UI state (tabs, filters, pagination)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function NavigationExample() {
  return (
    <Suspense fallback={<div className="p-6 text-slate-600">Loading...</div>}>
      <NavigationContent />
    </Suspense>
  );
}
