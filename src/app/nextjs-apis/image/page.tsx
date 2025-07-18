'use client';

import Image from 'next/image';
import localImage from '@/public/next.svg';

export default function ImageExample() {
  return (
    <div>
      <h1>Next.js Image Optimization</h1>

      <h2>Local Image (Static Import)</h2>
      <Image
        src={localImage}
        alt="Next.js Logo (Local)"
        width={200}
        height={100}
        priority
      />

      <h2>External Image (URL)</h2>
      <Image
        src="https://via.placeholder.com/300x200.png?text=External+Image"
        alt="Placeholder Image (External)"
        width={300}
        height={200}
        loading="lazy"
      />

      <h2>Image with `fill` prop</h2>
      <div style={{ position: 'relative', width: '400px', height: '250px', border: '1px solid red' }}>
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
