import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ModulePatternPage() {
  const codeContent = [{
    filePath: 'Module Pattern',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/module-pattern/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Module Pattern | Design Patterns',
  description: 'Learn the Module pattern for encapsulation and private/public APIs',
};
