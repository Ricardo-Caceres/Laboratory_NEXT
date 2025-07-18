import { ReactNode } from 'react';
import Header from '@/app/architectures/atomic-design/components/organisms/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
