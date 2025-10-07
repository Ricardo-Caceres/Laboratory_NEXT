import { readFileSync } from 'fs';
import path from 'path';
import CloneElementExample from './_client_example';

export default function CloneElementPage() {
  const filePath = 'src/app/react-apis/cloneElement/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <CloneElementExample codeContent={codeContent} />;
}
