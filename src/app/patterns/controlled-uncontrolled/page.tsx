import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ControlledUncontrolledPage() {
  const codeContent = [
    {
      filePath: 'Controlled vs Uncontrolled',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/controlled-uncontrolled/_client_example.tsx'), 'utf-8')
    }
  ];

  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Controlled vs Uncontrolled Components | Design Patterns',
  description: 'Understanding the difference between controlled and uncontrolled form inputs',
};
