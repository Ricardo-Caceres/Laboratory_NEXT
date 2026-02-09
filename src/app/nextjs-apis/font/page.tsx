'use client';

import { Inter, Roboto_Mono, Playfair_Display } from 'next/font/google';

// Google Fonts with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

export default function FontExample() {
  return (
    <div className="space-y-8">
      {/* Google Fonts - Inter */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Google Font: Inter</h2>
        <p className="text-sm text-slate-600 mb-4">
          Variable font with all weights automatically optimized.
        </p>
        
        <div className={`p-4 bg-slate-50 rounded-lg ${inter.className}`}>
          <p className="text-2xl mb-2">The quick brown fox jumps over the lazy dog</p>
          <p className="text-sm text-slate-600">Automatically optimized and self-hosted by Next.js</p>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Use in component
<div className={inter.className}>
  Text with Inter font
</div>`}
          </pre>
        </div>
      </div>

      {/* Google Fonts - Roboto Mono */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Google Font: Roboto Mono (Specific Weights)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Only loads the specified weights (400 and 700).
        </p>
        
        <div className={`p-4 bg-slate-50 rounded-lg space-y-2 ${robotoMono.className}`}>
          <p className="text-lg font-normal">Font weight 400 - const myVariable = 'Hello World';</p>
          <p className="text-lg font-bold">Font weight 700 - function doSomething() return true;</p>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],  // Only these weights
  display: 'swap',
});`}
          </pre>
        </div>
      </div>

      {/* Google Fonts - Playfair Display */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Google Font: Playfair Display (Multiple Styles)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Demonstrates different weights and styles.
        </p>
        
        <div className={`p-4 bg-slate-50 rounded-lg space-y-3 ${playfair.className}`}>
          <p className="text-3xl font-normal">Elegant Serif Typography</p>
          <p className="text-2xl font-bold">Bold Headlines Stand Out</p>
          <p className="text-xl font-black">Extra Bold for Impact</p>
          <p className="text-lg italic">Italic style for emphasis</p>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});`}
          </pre>
        </div>
      </div>

      {/* CSS Variables Approach */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Using CSS Variables</h2>
        <p className="text-sm text-slate-600 mb-4">
          Export fonts as CSS variables for use anywhere in your app.
        </p>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-lg" style={{ fontFamily: 'var(--font-inter)' }}>
            <p className="text-lg">Using CSS variable: var(--font-inter)</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg" style={{ fontFamily: 'var(--font-roboto-mono)' }}>
            <p className="text-lg">Using CSS variable: var(--font-roboto-mono)</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
            <p className="text-lg">Using CSS variable: var(--font-playfair)</p>
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Define with variable
const inter = Inter({
  variable: '--font-inter',
});

// Add to layout.tsx
<body className={inter.variable}>

// Use in CSS/Tailwind
<div style={{ fontFamily: 'var(--font-inter)' }}>
<div className="font-[family-name:var(--font-inter)]">`}
          </pre>
        </div>
      </div>

      {/* Display Strategy */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Font Display Strategies</h2>
        <p className="text-sm text-slate-600 mb-4">
          Control how fonts are displayed during loading.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <code className="text-sm font-semibold text-blue-700">display: 'swap'</code>
            <p className="text-xs text-slate-600 mt-2">Shows fallback font first, swaps when custom font loads (recommended)</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <code className="text-sm font-semibold text-purple-700">display: 'optional'</code>
            <p className="text-xs text-slate-600 mt-2">Uses custom font only if it loads extremely quickly</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <code className="text-sm font-semibold text-green-700">display: 'block'</code>
            <p className="text-xs text-slate-600 mt-2">Hides text until font loads (max 3s)</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <code className="text-sm font-semibold text-amber-700">display: 'fallback'</code>
            <p className="text-xs text-slate-600 mt-2">Short block period, then swap</p>
          </div>
        </div>
      </div>

      {/* Preloading */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Preloading Fonts</h2>
        <p className="text-sm text-slate-600 mb-4">
          Preload critical fonts for faster rendering.
        </p>
        
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const inter = Inter({
  subsets: ['latin'],
  preload: true,  // Default: true
  display: 'swap',
});`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>next/font automatically self-hosts Google Fonts (no external requests)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">display: 'swap'</code> to prevent invisible text (FOIT)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Only load font weights you actually use to reduce bundle size</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Define fonts in a single file and export them for consistency</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use CSS variables to apply fonts globally via Tailwind or CSS</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Fonts are automatically optimized and cached by Next.js</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
