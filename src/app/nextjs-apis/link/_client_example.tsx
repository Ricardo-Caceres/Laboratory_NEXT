'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkExample() {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {/* Basic Link */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Basic Client-Side Navigation</h2>
        <p className="text-sm text-slate-600 mb-4">
          <code className="px-2 py-1 bg-slate-100 rounded text-xs">Link</code> component enables client-side navigation without full page reload.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/nextjs-apis/link/about"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to About
          </Link>
          
          <Link
            href="/nextjs-apis/link/contact"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to Contact
          </Link>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Link href="/about">
  About Page
</Link>`}
          </pre>
        </div>
      </div>

      {/* Active Link Styling */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Active Link Styling</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">usePathname()</code> to determine the active route and apply conditional styles.
        </p>
        
        <nav className="flex gap-2 p-4 bg-slate-50 rounded-lg">
          {[
            { href: '/nextjs-apis/link', label: 'Home' },
            { href: '/nextjs-apis/link/about', label: 'About' },
            { href: '/nextjs-apis/link/contact', label: 'Contact' },
            { href: '/nextjs-apis/link/dashboard', label: 'Dashboard' },
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`const pathname = usePathname();
const isActive = pathname === '/about';

<Link
  href="/about"
  className={isActive ? 'active' : ''}
>
  About
</Link>`}
          </pre>
        </div>
      </div>

      {/* Prefetching */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Prefetching Control</h2>
        <p className="text-sm text-slate-600 mb-4">
          Control prefetching behavior with <code className="px-2 py-1 bg-slate-100 rounded text-xs">prefetch</code> prop.
        </p>
        
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <Link
              href="/nextjs-apis/link/about"
              prefetch={true}
              className="text-green-700 font-semibold hover:underline"
            >
              Prefetch: true (default)
            </Link>
            <p className="text-xs text-green-600 mt-1">Route is prefetched when link enters viewport</p>
          </div>
          
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <Link
              href="/nextjs-apis/link/contact"
              prefetch={false}
              className="text-amber-700 font-semibold hover:underline"
            >
              Prefetch: false
            </Link>
            <p className="text-xs text-amber-600 mt-1">Route is only fetched on click</p>
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Link href="/about" prefetch={false}>
  No Prefetch
</Link>`}
          </pre>
        </div>
      </div>

      {/* Replace vs Push */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Replace vs Push</h2>
        <p className="text-sm text-slate-600 mb-4">
          Use <code className="px-2 py-1 bg-slate-100 rounded text-xs">replace</code> to replace history entry instead of pushing new one.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/nextjs-apis/link/about"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Push (default)
          </Link>
          
          <Link
            href="/nextjs-apis/link/contact"
            replace
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Replace History
          </Link>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Link href="/login" replace>
  Login (replace history)
</Link>`}
          </pre>
        </div>
      </div>

      {/* Scroll Behavior */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Scroll Behavior</h2>
        <p className="text-sm text-slate-600 mb-4">
          Control scroll behavior with <code className="px-2 py-1 bg-slate-100 rounded text-xs">scroll</code> prop.
        </p>
        
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/nextjs-apis/link/about"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Scroll to Top (default)
          </Link>
          
          <Link
            href="/nextjs-apis/link/contact"
            scroll={false}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            No Scroll
          </Link>
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`<Link href="/about" scroll={false}>
  Keep Scroll Position
</Link>`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">Link</code> for internal navigation (faster, preserves state)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">{'<a>'}</code> tag for external links</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Prefetching is automatic in production for better performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">replace</code> for authentication flows to prevent back button issues</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Combine with <code className="px-1 bg-white rounded text-xs">usePathname()</code> for active link styling</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
