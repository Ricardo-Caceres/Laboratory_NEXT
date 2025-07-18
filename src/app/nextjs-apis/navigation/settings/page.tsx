'use client';

import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Settings Page</h1>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
