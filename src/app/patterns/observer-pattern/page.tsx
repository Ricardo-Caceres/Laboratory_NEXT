import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ObserverPatternPage() {
  const codeContent = [{
    filePath: 'Observer Pattern',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/observer-pattern/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Observer Pattern | Design Patterns',
  description: 'Implement the Observer pattern for event-driven architecture',
};
