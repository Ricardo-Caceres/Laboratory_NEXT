'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageExample() {
  const [loadingState, setLoadingState] = useState<Record<string, boolean>>({});

  const handleLoadComplete = (id: string) => {
    setLoadingState((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-8">
      {/* Responsive Image with fill */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Responsive Image (fill)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Uses <code className="px-2 py-1 bg-slate-100 rounded text-xs">fill</code> prop to fill the parent container. Requires <code className="px-2 py-1 bg-slate-100 rounded text-xs">position: relative</code> on parent.
        </p>
        
        <div className="relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            fill
            className="object-contain"
            onLoad={() => handleLoadComplete('fill')}
          />
          {!loadingState.fill && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse text-slate-400">Loading...</div>
            </div>
          )}
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<div className="relative w-full h-64">
  <Image
    src="/next.svg"
    alt="Next.js Logo"
    fill
    className="object-contain"
  />
</div>`}
          </pre>
        </div>
      </div>

      {/* Fixed Size Image */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Fixed Dimensions</h2>
        <p className="text-sm text-slate-600 mb-4">
          Using explicit <code className="px-2 py-1 bg-slate-100 rounded text-xs">width</code> and <code className="px-2 py-1 bg-slate-100 rounded text-xs">height</code> for optimal performance.
        </p>
        
        <div className="flex items-center gap-6 flex-wrap">
          <div className="p-4 bg-slate-50 rounded-lg">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={120}
              height={30}
              onLoad={() => handleLoadComplete('vercel')}
            />
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <Image
              src="/globe.svg"
              alt="Globe Icon"
              width={40}
              height={40}
              onLoad={() => handleLoadComplete('globe')}
            />
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Image
  src="/vercel.svg"
  alt="Vercel Logo"
  width={120}
  height={30}
/>`}
          </pre>
        </div>
      </div>

      {/* Priority Loading */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Priority Loading</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">priority</code> prop for above-the-fold images to disable lazy loading.
        </p>
        
        <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden">
          <Image
            src="/file.svg"
            alt="File Icon"
            fill
            className="object-contain p-8"
            priority
            onLoad={() => handleLoadComplete('priority')}
          />
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Image
  src="/hero.jpg"
  alt="Hero Image"
  fill
  priority  // Disables lazy loading
/>`}
          </pre>
        </div>
      </div>

      {/* Object Fit Options */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Object Fit Options</h2>
        <p className="text-sm text-slate-600 mb-4">
          Different ways to fit images in their containers using CSS <code className="px-2 py-1 bg-slate-100 rounded text-xs">object-fit</code>.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['contain', 'cover', 'fill', 'scale-down'].map((fit) => (
            <div key={fit} className="space-y-2">
              <div className="relative w-full h-32 bg-slate-100 rounded-lg overflow-hidden">
                <Image
                  src="/window.svg"
                  alt={`Object fit: ${fit}`}
                  fill
                  className={`object-${fit}`}
                />
              </div>
              <p className="text-xs text-center text-slate-600 font-mono">{fit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Settings */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Quality Settings</h2>
        <p className="text-sm text-slate-600 mb-4">
          Control image quality with the <code className="px-2 py-1 bg-slate-100 rounded text-xs">quality</code> prop (1-100, default: 75).
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          {[50, 75, 95].map((quality) => (
            <div key={quality} className="space-y-2">
              <div className="relative w-full h-24 bg-slate-100 rounded-lg overflow-hidden">
                <Image
                  src="/next.svg"
                  alt={`Quality: ${quality}`}
                  fill
                  className="object-contain"
                  quality={quality}
                />
              </div>
              <p className="text-xs text-center text-slate-600">
                Quality: <span className="font-mono font-semibold">{quality}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Image
  src="/photo.jpg"
  quality={95}  // Higher quality, larger file
  width={800}
  height={600}
/>`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Always provide <code className="px-1 bg-white rounded text-xs">alt</code> text for accessibility</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">priority</code> for above-the-fold images</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Specify exact dimensions when possible to prevent layout shift</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Next.js automatically optimizes images (WebP, AVIF, lazy loading)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">fill</code> for responsive images with unknown dimensions</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
