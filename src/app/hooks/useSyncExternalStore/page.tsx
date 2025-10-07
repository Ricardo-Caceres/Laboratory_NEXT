import OnlineStatus from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

// These functions are examples for documentation purposes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSnapshot() {
  return navigator.onLine;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getServerSnapshot() {
  return true;
}

export default function UseSyncExternalStorePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay filePaths={['src/app/hooks/useSyncExternalStore/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <OnlineStatus />
      </div>
    </div>
  );
}
