import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function LayoutPatternPage() {
  const codeContent = [{
    filePath: 'Layout Pattern',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/layout-pattern/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Layout Pattern | Design Patterns',
  description: 'Learn how to create reusable layout components',
};
