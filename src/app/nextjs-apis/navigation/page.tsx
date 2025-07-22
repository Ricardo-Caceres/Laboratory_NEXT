'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavigationHooksExample() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Navigation Hooks Example</h1>
      <nav className="mt-4">
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <Link className="text-blue-500 hover:underline" href="/nextjs-apis/navigation/dashboard">
              Go to Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link className="text-blue-500 hover:underline" href="/nextjs-apis/navigation/products/123?category=electronics">
              Go to Product 123 (Electronics)
            </Link>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => router.push('/nextjs-apis/navigation/settings')}>
              Go to Settings (Programmatic)
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
