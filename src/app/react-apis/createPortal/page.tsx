import { readFileSync } from 'fs';
import path from 'path';
import PortalExample from './_client_example';

export default function PortalExamplePage() {
  const pagePath = 'src/app/react-apis/createPortal/_client_example.tsx';
  const modalPath = 'src/app/react-apis/createPortal/Modal.tsx';
  const codeContent = [
    {
      filePath: pagePath,
      content: readFileSync(path.join(process.cwd(), pagePath), 'utf-8'),
    },
    {
      filePath: modalPath,
      content: readFileSync(path.join(process.cwd(), modalPath), 'utf-8'),
    },
  ];

  return <PortalExample codeContent={codeContent} />;
}