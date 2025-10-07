import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function CustomHooksPage() {
  const codeContent = [
    {
      filePath: 'Custom Hooks Example',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/custom-hooks/_client_example.tsx'), 'utf-8')
    }
  ];

  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Custom Hooks Pattern | Design Patterns',
  description: 'Learn how to extract and reuse stateful logic with custom React hooks',
};
