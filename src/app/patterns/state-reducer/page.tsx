import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function StateReducerPage() {
  const codeContent = [
    {
      filePath: 'State Reducer Pattern',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/state-reducer/_client_example.tsx'), 'utf-8')
    }
  ];

  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'State Reducer Pattern | Design Patterns',
  description: 'Give users control over internal state management with the State Reducer pattern',
};
