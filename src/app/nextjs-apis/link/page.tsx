'use client';

import Link from 'next/link';

export default function NavigationExample() {
  return (
    <div>
      <h1>Next.js Link Example</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/about">
              About (Prefetched)
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/contact" prefetch={false}>
              Contact (No Prefetch)
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/dashboard">
              <button style={{ padding: '10px 15px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Go to Dashboard
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
