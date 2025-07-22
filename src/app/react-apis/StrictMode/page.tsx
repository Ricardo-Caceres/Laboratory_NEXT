import { readFileSync } from 'fs';
import path from 'path';
import StrictModeExample from './_client_example';

export default function StrictModeExamplePage() {
  const filePath = 'src/app/react-apis/StrictMode/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <StrictModeExample codeContent={codeContent} />;
}