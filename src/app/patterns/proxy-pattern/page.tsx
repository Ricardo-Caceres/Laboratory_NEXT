import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ProxyPatternPage() {
  const codeContent = [{
    filePath: 'Proxy Pattern',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/proxy-pattern/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Proxy Pattern | Design Patterns',
  description: 'Control access to objects with the Proxy pattern',
};
