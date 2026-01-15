import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));
const RxJSDescription = dynamic(() => import('./_description').then(mod => ({ default: mod.RxJSDescription })));

export default function RxJSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
        <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            RxJS con React/Next.js - Guía Completa
          </h1>
          <div className="text-sm sm:text-base text-[var(--foreground)]">
            <RxJSDescription />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--foreground)]">
            Code Example:
          </h3>
        </div>

        <div className="bg-[var(--panel)] text-[var(--foreground)] p-3 sm:p-4 rounded-lg overflow-auto max-h-[400px] sm:max-h-[600px] lg:max-h-[calc(100vh-20rem)] border border-[var(--border)]">
          <p className="text-[var(--foreground)] opacity-70">Ver ejemplos de código en el panel derecho</p>
        </div>
      </div>
      
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
