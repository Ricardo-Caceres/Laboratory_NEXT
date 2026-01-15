import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';
const ClientExample = dynamic(() => import('./_client_example'));
const createElementDescription = dynamic(() => import('./_description').then(mod => ({ default: mod.createElementDescription })));
export default function createElementPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
        <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">createElement</h1>
          <div className="text-sm sm:text-base"><createElementDescription /></div>
        </div>
      </div>
      <RightPanel><ClientExample /></RightPanel>
    </div>
  );
}
