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
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Home Page (next/navigation example)</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" onClick={navigateToAbout}>
        Go to About Page
      </button>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" onClick={navigateToProduct}>
        Go to Product Page (with query params)
      </button>
      <br />
      <Link className="text-blue-500 hover:underline" href="/nextjs-apis/router/dynamic-route/456">
        Go to Dynamic Route (456)
      </Link>
    </div>
  );
}
