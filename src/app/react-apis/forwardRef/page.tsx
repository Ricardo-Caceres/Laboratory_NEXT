import { readFileSync } from 'fs';
import path from 'path';
import ParentComponent from './_client_example';

export default function ForwardRefPage() {
  const pagePath = 'src/app/react-apis/forwardRef/_client_example.tsx';
  const myInputPath = 'src/app/react-apis/forwardRef/MyInput.tsx';
  const codeContent = [
    {
      filePath: pagePath,
      content: readFileSync(path.join(process.cwd(), pagePath), 'utf-8'),
    },
    {
      filePath: myInputPath,
      content: readFileSync(path.join(process.cwd(), myInputPath), 'utf-8'),
    },
  ];

  return <ParentComponent codeContent={codeContent} />;
}
