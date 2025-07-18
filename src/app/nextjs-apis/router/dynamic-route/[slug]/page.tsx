'use client';

import { useParams } from 'next/navigation';

export default function DynamicRoutePage() {
  const params = useParams();
  const dynamicId = params.slug; // Assuming the folder is [slug]

  return (
    <div>
      <h1>Dynamic Route Page</h1>
      <p>Dynamic ID: {dynamicId}</p>
    </div>
  );
}
