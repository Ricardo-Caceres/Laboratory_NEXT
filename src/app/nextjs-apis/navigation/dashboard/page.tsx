'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function DashboardPage() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Current Pathname: {pathname}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
