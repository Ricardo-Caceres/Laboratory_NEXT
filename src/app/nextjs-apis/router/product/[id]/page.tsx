'use client';

import { useRouter, useSearchParams, useParams } from 'next/navigation';

export default function ProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const id = params.id;
  const name = searchParams.get('name');

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
