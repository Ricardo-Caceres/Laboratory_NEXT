'use client';

import Image from 'next/image';


export default function ImageExample() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Image Optimization</h1>

      <h2 className="text-xl font-semibold mt-4 mb-2">Local Image (Static Import)</h2>
      <Image
        src="/next.svg"
        alt="Next.js Logo (Local)"
        width={200}
        height={100}
        priority
      />

      <h2 className="text-xl font-semibold mt-4 mb-2">External Image (URL)</h2>
      <Image
        src="https://via.placeholder.com/300x200.png?text=External+Image"
        alt="Placeholder Image (External)"
        width={300}
        height={200}
        loading="lazy"
      />

      <h2 className="text-xl font-semibold mt-4 mb-2">Image with `fill` prop</h2>
      <div className="relative w-96 h-64 border border-red-500">
        <Image
          src="https://via.placeholder.com/600x400.png?text=Fill+Image"
          alt="Fill Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
