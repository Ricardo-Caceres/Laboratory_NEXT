import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';
const ClientExample = dynamic(() => import('./_client_example'));
const cloneElementDescription = dynamic(() => import('./_description').then(mod => ({ default: mod.cloneElementDescription })));
export default function cloneElementPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
        <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">cloneElement</h1>
          <div className="text-sm sm:text-base"><cloneElementDescription /></div>
        </div>
      </div>
      <RightPanel><ClientExample /></RightPanel>
    </div>
  );
}
