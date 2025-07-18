'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = params.id; 
  const category = searchParams.get('category');

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <p>Category: {category}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
