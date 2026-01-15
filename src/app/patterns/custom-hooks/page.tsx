import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));
const CustomHooksDescription = dynamic(() => import('./_description').then(mod => ({ default: mod.CustomHooksDescription })));

export default function CustomHooksPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
        <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            Custom Hooks Pattern
          </h1>
          <div className="text-sm sm:text-base">
            <CustomHooksDescription />
          </div>
        </div>
      </div>
      
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
