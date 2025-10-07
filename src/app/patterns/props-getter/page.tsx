import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function PropsGetterPage() {
  const codeContent = [
    {
      filePath: 'Props Getter Pattern',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/props-getter/_client_example.tsx'), 'utf-8')
    }
  ];

  return <ClientExample codeContent={codeContent} />;
}

export const metadata = {
  title: 'Props Getter Pattern | Design Patterns',
  description: 'Learn the Props Getter pattern for easier prop spreading and composition',
};
