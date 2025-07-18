import DeferredValueExample from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

export default function UseDeferredValuePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay filePaths={['src/app/hooks/useDeferredValue/_client_example.tsx', 'src/app/hooks/useDeferredValue/SlowList.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <DeferredValueExample />
      </div>
    </div>
  );
}
