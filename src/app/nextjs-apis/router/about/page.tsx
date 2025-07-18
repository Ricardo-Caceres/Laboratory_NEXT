'use client';

import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
