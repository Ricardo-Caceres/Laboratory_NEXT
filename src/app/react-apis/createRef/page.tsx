import { readFileSync } from 'fs';
import path from 'path';
import CreateRefExample from './_client_example';

export default function CreateRefPage() {
  const filePath = 'src/app/react-apis/createRef/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <CreateRefExample codeContent={codeContent} />;
}
