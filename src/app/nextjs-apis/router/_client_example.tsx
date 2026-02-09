'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RouterExample() {
  const router = useRouter();
  const [inputPath, setInputPath] = useState('/nextjs-apis/router/about');

  return (
    <div className="space-y-8">
      {/* Basic Navigation */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Programmatic Navigation</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.push()</code> to navigate programmatically.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => router.push('/nextjs-apis/router/about')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to About
          </button>
          
          <button
            onClick={() => router.push('/nextjs-apis/router/product/123')}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to Product 123
          </button>
          
          <button
            onClick={() => router.push('/nextjs-apis/router/dynamic-route?tab=settings&view=grid')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Go with Query Params
          </button>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const router = useRouter();

// Navigate to route
router.push('/about');

// With query params
router.push('/products?category=electronics');`}
          </pre>
        </div>
      </div>

      {/* Custom Input Navigation */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Navigate to Custom Path</h2>
        <p className="text-sm text-slate-600 mb-4">
          Enter a path and navigate programmatically.
        </p>
        
        <div className="flex gap-3">
          <input
            type="text"
            value={inputPath}
            onChange={(e) => setInputPath(e.target.value)}
            placeholder="/path/to/page"
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => router.push(inputPath)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Navigate
          </button>
        </div>
      </div>

      {/* Back and Forward */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Browser History Navigation</h2>
        <p className="text-sm text-slate-600 mb-4">
          Navigate through browser history using <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.back()</code> and <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.forward()</code>.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <button
            onClick={() => router.forward()}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            Forward
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`router.back();     // Go back one page
router.forward();  // Go forward one page`}
          </pre>
        </div>
      </div>

      {/* Refresh */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Refresh Current Route</h2>
        <p className="text-sm text-slate-600 mb-4">
          Refresh the current route using <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.refresh()</code> to refetch data without full page reload.
        </p>
        
        <button
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh Route
        </button>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`router.refresh();  // Refetch data for current route`}
          </pre>
        </div>
      </div>

      {/* Replace */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Replace History</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.replace()</code> to navigate without adding to history stack.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => router.push('/nextjs-apis/router/about')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Push (adds to history)
          </button>
          
          <button
            onClick={() => router.replace('/nextjs-apis/router/about')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Replace (no history)
          </button>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Good for login redirects
router.replace('/dashboard');  // User can't go back to login`}
          </pre>
        </div>
      </div>

      {/* Prefetch */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Prefetch Routes</h2>
        <p className="text-sm text-slate-600 mb-4">
          Manually prefetch a route using <code className="px-2 py-1 bg-slate-100 rounded text-xs">router.prefetch()</code>.
        </p>
        
        <button
          onClick={() => {
            router.prefetch('/nextjs-apis/router/product/999');
            alert('Route prefetched! Navigation will be instant.');
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Prefetch Product Route
        </button>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Prefetch before user clicks
router.prefetch('/products/123');`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">Link</code> for most navigation (better for SEO and accessibility)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">router.push()</code> for conditional navigation (after form submit, etc.)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">router.replace()</code> for login/logout flows</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">router.refresh()</code> to refetch server data without full reload</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span><code className="px-1 bg-white rounded text-xs">useRouter</code> only works in Client Components</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
