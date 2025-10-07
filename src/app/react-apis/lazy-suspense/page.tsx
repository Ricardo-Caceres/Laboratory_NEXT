import { readFileSync } from 'fs';
import path from 'path';
import LazySuspenseExample from './_client_example';

export default function LazySuspensePage() {
  const pagePath = 'src/app/react-apis/lazy-suspense/_client_example.tsx';
  const heavyComponentPath = 'src/app/react-apis/lazy-suspense/HeavyComponent.tsx';
  const codeContent = [
    {
      filePath: pagePath,
      content: readFileSync(path.join(process.cwd(), pagePath), 'utf-8'),
    },
    {
      filePath: heavyComponentPath,
      content: readFileSync(path.join(process.cwd(), heavyComponentPath), 'utf-8'),
    },
  ];

  return <LazySuspenseExample codeContent={codeContent} />;
}
