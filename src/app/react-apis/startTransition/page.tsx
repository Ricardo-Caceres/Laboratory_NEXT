import { readFileSync } from 'fs';
import path from 'path';
import StartTransitionExample from './_client_example';

export default function StartTransitionPage() {
  const filePath = 'src/app/react-apis/startTransition/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <StartTransitionExample codeContent={codeContent} />;
}
