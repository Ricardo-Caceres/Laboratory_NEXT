import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ProviderPatternPage() {
  const codeContent = [
    {
      filePath: 'ThemeContext.tsx',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/provider-pattern/ThemeContext.tsx'), 'utf-8')
    }
  ];

  return (
    <div>
      <ClientExample codeContent={codeContent} />
    </div>
  );
}

export const metadata = {
  title: 'Provider Pattern | Design Patterns',
  description: 'Learn about the Provider Pattern for sharing state across components',
};
