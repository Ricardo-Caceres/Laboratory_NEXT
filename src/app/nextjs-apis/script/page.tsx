'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function ScriptExample() {
  const [afterInteractiveLoaded, setAfterInteractiveLoaded] = useState(false);
  const [lazyLoaded, setLazyLoaded] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  return (
    <div className="space-y-8">
      {/* Strategy: afterInteractive */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">afterInteractive (Default)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Loads after the page becomes interactive. Best for analytics and tag managers.
        </p>
        
        <Script
          src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            setAfterInteractiveLoaded(true);
            console.log('Lodash loaded (afterInteractive)');
          }}
          onError={() => setErrorOccurred(true)}
        />

        <div className={`p-4 rounded-lg border ${afterInteractiveLoaded ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
          <p className="text-sm font-semibold mb-1">
            {afterInteractiveLoaded ? '✅ Script Loaded' : '⏳ Loading...'}
          </p>
          {afterInteractiveLoaded && (
            <p className="text-xs text-green-600">Lodash is now available globally</p>
          )}
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Script
  src="https://www.googletagmanager.com/gtag/js"
  strategy="afterInteractive"
  onLoad={() => console.log('Loaded!')}
/>`}
          </pre>
        </div>
      </div>

      {/* Strategy: lazyOnload */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">lazyOnload</h2>
        <p className="text-sm text-slate-600 mb-4">
          Loads during browser idle time. Best for chat widgets, social media embeds, ads.
        </p>
        
        <Script
          src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            setLazyLoaded(true);
            console.log('Axios loaded (lazyOnload)');
          }}
        />

        <div className={`p-4 rounded-lg border ${lazyLoaded ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
          <p className="text-sm font-semibold mb-1">
            {lazyLoaded ? '✅ Script Loaded' : '⏳ Will load during idle time...'}
          </p>
          {lazyLoaded && (
            <p className="text-xs text-green-600">Axios is now available globally</p>
          )}
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Script
  src="https://widget.intercom.io/widget/..."
  strategy="lazyOnload"
  onLoad={() => console.log('Chat loaded')}
/>`}
          </pre>
        </div>
      </div>

      {/* Strategy: beforeInteractive */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">beforeInteractive</h2>
        <p className="text-sm text-slate-600 mb-4">
          Loads before Next.js hydrates. Must be placed in <code className="px-2 py-1 bg-slate-100 rounded text-xs">_document.tsx</code>. Use for critical scripts.
        </p>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700 mb-2">⚠️ beforeInteractive scripts must be in _document.tsx</p>
          <p className="text-xs text-blue-600">Used for polyfills, feature detection, or critical third-party scripts</p>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// In _document.tsx
<Script
  src="/polyfills.js"
  strategy="beforeInteractive"
/>`}
          </pre>
        </div>
      </div>

      {/* Inline Scripts */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Inline Scripts</h2>
        <p className="text-sm text-slate-600 mb-4">
          Execute inline JavaScript with the same loading strategies.
        </p>
        
        <Script
          id="inline-example"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Inline script executed!');
              window.myCustomConfig = { theme: 'dark', version: '1.0' };
            `,
          }}
        />

        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-700 mb-2">✅ Inline script has been injected</p>
          <p className="text-xs text-purple-600">Check console for log message and window.myCustomConfig</p>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Script
  id="config-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: \`
      window.config = { apiUrl: '/api' };
    \`
  }}
/>`}
          </pre>
        </div>
      </div>

      {/* Event Handlers */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Event Handlers</h2>
        <p className="text-sm text-slate-600 mb-4">
          Track loading states with <code className="px-2 py-1 bg-slate-100 rounded text-xs">onLoad</code>, <code className="px-2 py-1 bg-slate-100 rounded text-xs">onReady</code>, and <code className="px-2 py-1 bg-slate-100 rounded text-xs">onError</code>.
        </p>
        
        <div className="space-y-2">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <code className="text-sm text-green-700">onLoad</code>
            <p className="text-xs text-green-600 mt-1">Fires when script first loads</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <code className="text-sm text-blue-700">onReady</code>
            <p className="text-xs text-blue-600 mt-1">Fires after load and every route change</p>
          </div>
          
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <code className="text-sm text-red-700">onError</code>
            <p className="text-xs text-red-600 mt-1">Fires if script fails to load</p>
          </div>
        </div>

        {errorOccurred && (
          <div className="mt-3 p-3 bg-red-50 rounded border border-red-200">
            <p className="text-sm text-red-700">❌ Script loading error occurred</p>
          </div>
        )}

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Script
  src="..."
  onLoad={() => console.log('Loaded')}
  onReady={() => console.log('Ready')}
  onError={() => console.log('Error')}
/>`}
          </pre>
        </div>
      </div>

      {/* Loading Strategies Comparison */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">When to Use Each Strategy</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">beforeInteractive</h3>
            <p className="text-sm text-blue-800 mb-2">Use for: Polyfills, bot detection, cookie consent</p>
            <code className="text-xs text-blue-600">Must be in _document.tsx or root layout</code>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">afterInteractive (default)</h3>
            <p className="text-sm text-green-800 mb-2">Use for: Analytics, tag managers, A/B testing</p>
            <code className="text-xs text-green-600">Loads after page becomes interactive</code>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">lazyOnload</h3>
            <p className="text-sm text-amber-800 mb-2">Use for: Chat widgets, social embeds, ads, non-critical features</p>
            <code className="text-xs text-amber-600">Loads during browser idle time</code>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">lazyOnload</code> for non-critical scripts to improve performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Always provide <code className="px-1 bg-white rounded text-xs">id</code> for inline scripts to prevent duplicates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use event handlers to track loading state and handle errors</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Prefer <code className="px-1 bg-white rounded text-xs">Script</code> over <code className="px-1 bg-white rounded text-xs">{'<script>'}</code> for automatic optimization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Scripts are automatically deduplicated across pages</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
