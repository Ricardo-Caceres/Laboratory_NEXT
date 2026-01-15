import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function SingletonPatternPage() {
  const codeContent = [{
    filePath: 'Singleton Pattern',
    content: await readFile(path.join(process.cwd(), 'src/app/patterns/singleton-pattern/_client_example.tsx'), 'utf-8')
  }];
  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Singleton Pattern | Design Patterns',
  description: '🔒 El patrón clásico de GoF para garantizar UNA única instancia global - Perfecto para config managers, loggers, caches y connection pools en JavaScript/TypeScript',
};
