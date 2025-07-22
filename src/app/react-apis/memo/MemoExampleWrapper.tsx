import { readFileSync } from 'fs';
import path from 'path';
import MemoExample from './page'; // Assuming page.tsx will be the client component

export default function MemoExampleWrapper() {
  const filePath = 'src/app/react-apis/memo/page.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <MemoExample codeContent={codeContent} />;
}