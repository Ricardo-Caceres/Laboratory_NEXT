import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ConditionalRenderingPage() {
  const codeContent = [{
    filePath: 'Conditional Rendering',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/conditional-rendering/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Conditional Rendering Patterns | Design Patterns',
  description: 'Master different techniques for conditional rendering in React',
};
