'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavigationHooksExample() {
  const router = useRouter();

  return (
    <div>
      <h1>Next.js Navigation Hooks Example</h1>
      <nav>
        <ul>
          <li>
            <Link href="/nextjs-apis/navigation/dashboard">
              Go to Dashboard
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/navigation/products/123?category=electronics">
              Go to Product 123 (Electronics)
            </Link>
          </li>
          <li>
            <button onClick={() => router.push('/nextjs-apis/navigation/settings')}>
              Go to Settings (Programmatic)
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
