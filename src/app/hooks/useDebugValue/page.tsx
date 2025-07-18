import OnlineStatusIndicator from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

export default function UseDebugValuePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay filePaths={['src/app/hooks/useDebugValue/_client_example.tsx', 'src/app/hooks/useDebugValue/useOnlineStatus.ts']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <OnlineStatusIndicator />
      </div>
    </div>
  );
}
