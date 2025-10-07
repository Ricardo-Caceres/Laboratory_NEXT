import { readFileSync } from 'fs';
import path from 'path';
import PureComponentExample from './_client_example';

export default function PureComponentPage() {
  const filePath = 'src/app/react-apis/PureComponent/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <PureComponentExample codeContent={codeContent} />;
}
