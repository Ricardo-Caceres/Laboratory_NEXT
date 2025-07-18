import { ReactNode } from 'react';
import Header from '@/app/architectures/atomic-design/components/organisms/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
    </div>
  );
}
