import Counter from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';

export default function UseStatePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay filePaths={['src/app/hooks/useState/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <Counter />
      </div>
    </div>
  );
}
