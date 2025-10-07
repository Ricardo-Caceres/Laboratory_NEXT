import { readFileSync } from 'fs';
import path from 'path';
import ComponentExample from './_client_example';

export default function ComponentPage() {
  const filePath = 'src/app/react-apis/Component/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <ComponentExample codeContent={codeContent} />;
}
