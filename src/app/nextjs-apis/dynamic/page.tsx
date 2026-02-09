'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Basic dynamic import
const DynamicHeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div className="p-4 bg-blue-50 rounded-lg animate-pulse">Loading component...</div>,
});

// Dynamic import with SSR disabled
const DynamicNoSSR = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div className="p-4 bg-amber-50 rounded-lg">Client-side only...</div>,
});

// Dynamic import with named export
const DynamicChart = dynamic(
  () => import('./HeavyComponent').then((mod) => mod.default),
  {
    loading: () => <div className="p-4 bg-green-50 rounded-lg">Loading chart...</div>,
  }
);

export default function DynamicImportExample() {
  const [showBasic, setShowBasic] = useState(false);
  const [showNoSSR, setShowNoSSR] = useState(false);
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="space-y-8">
      {/* Basic Dynamic Import */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Basic Dynamic Import</h2>
        <p className="text-sm text-slate-600 mb-4">
          Component is code-split and loaded only when needed. Shows loading state while fetching.
        </p>
        
        <button
          onClick={() => setShowBasic(!showBasic)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
        >
          {showBasic ? 'Hide' : 'Load'} Component
        </button>

        {showBasic && <DynamicHeavyComponent />}

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('./HeavyComponent'),
  {
    loading: () => <div>Loading...</div>
  }
);`}
          </pre>
        </div>
      </div>

      {/* No SSR */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Disable Server-Side Rendering</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">ssr: false</code> for components that rely on browser APIs.
        </p>
        
        <button
          onClick={() => setShowNoSSR(!showNoSSR)}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors mb-4"
        >
          {showNoSSR ? 'Hide' : 'Load'} Client-Only Component
        </button>

        {showNoSSR && <DynamicNoSSR />}

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const ClientOnly = dynamic(
  () => import('./MapComponent'),
  {
    ssr: false,  // Only render on client
    loading: () => <div>Loading map...</div>
  }
);`}
          </pre>
        </div>
      </div>

      {/* Named Exports */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Named Export Dynamic Import</h2>
        <p className="text-sm text-slate-600 mb-4">
          Import specific named exports from a module.
        </p>
        
        <button
          onClick={() => setShowChart(!showChart)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-4"
        >
          {showChart ? 'Hide' : 'Load'} Chart
        </button>

        {showChart && <DynamicChart />}

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const DynamicChart = dynamic(
  () => import('./charts').then(mod => mod.LineChart),
  { loading: () => <div>Loading chart...</div> }
);`}
          </pre>
        </div>
      </div>

      {/* Benefits */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Why Use Dynamic Imports?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">⚡ Faster Initial Load</h3>
            <p className="text-sm text-blue-800">Reduces initial JavaScript bundle size by code-splitting</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🎯 Load on Demand</h3>
            <p className="text-sm text-green-800">Only loads when component is actually needed</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🖥️ Client-Only Code</h3>
            <p className="text-sm text-purple-800">Perfect for browser-specific libraries (maps, charts)</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">📦 Smaller Bundles</h3>
            <p className="text-sm text-amber-800">Improves performance especially for large dependencies</p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Common Use Cases</h2>
        
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 text-sm">📊 Heavy Charts & Visualization Libraries</p>
            <code className="text-xs text-slate-600">Chart.js, D3.js, Three.js</code>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 text-sm">🗺️ Maps</p>
            <code className="text-xs text-slate-600">Leaflet, Mapbox, Google Maps</code>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 text-sm">📝 Rich Text Editors</p>
            <code className="text-xs text-slate-600">TinyMCE, Quill, Draft.js</code>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 text-sm">🎨 Heavy UI Libraries</p>
            <code className="text-xs text-slate-600">Large component libraries, animations</code>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="font-semibold text-slate-900 text-sm">🔐 Modals & Overlays</p>
            <code className="text-xs text-slate-600">Only load when user opens modal</code>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use for large dependencies (charts, editors, maps) to reduce initial bundle</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Set <code className="px-1 bg-white rounded text-xs">ssr: false</code> for components using window/document</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Always provide a loading component for better UX</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Don't overuse - only for actually heavy components</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Components are automatically code-split into separate chunks</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
