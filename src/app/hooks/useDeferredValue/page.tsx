import DeferredExample from './_client_example';
import dynamic from 'next/dynamic';

const UseDeferredValueDescription = dynamic(() => import('./_description').then(mod => ({ default: mod.UseDeferredValueDescription })));

export default function UseDeferredValuePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
        <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            useDeferredValue Hook
          </h1>
          <div className="text-sm sm:text-base">
            <UseDeferredValueDescription />
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[var(--background)] p-4 sm:p-6 min-h-[400px] lg:min-h-0">
        <div className="w-full max-w-4xl">
          <DeferredExample />
        </div>
      </div>
    </div>
  );
}
