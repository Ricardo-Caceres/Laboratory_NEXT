'use client';

import Link from 'next/link';

export default function NavigationExample() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Link Example</h1>
      <nav className="mt-4">
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <Link className="text-blue-500 hover:underline" href="/">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link className="text-blue-500 hover:underline" href="/nextjs-apis/link/about">
              About (Prefetched)
            </Link>
          </li>
          <li className="mb-2">
            <Link className="text-blue-500 hover:underline" href="/nextjs-apis/link/contact" prefetch={false}>
              Contact (No Prefetch)
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/dashboard">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                Go to Dashboard
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
