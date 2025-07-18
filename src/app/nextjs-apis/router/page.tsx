'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RouterExample() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/nextjs-apis/router/about');
  };

  const navigateToProduct = () => {
    router.push('/nextjs-apis/router/product/123?name=Example Product');
  };

  return (
    <div>
      <h1>Home Page (next/navigation example)</h1>
      <button onClick={navigateToAbout}>
        Go to About Page
      </button>
      <br />
      <button onClick={navigateToProduct}>
        Go to Product Page (with query params)
      </button>
      <br />
      <Link href="/nextjs-apis/router/dynamic-route/456">
        Go to Dynamic Route (456)
      </Link>
    </div>
  );
}
