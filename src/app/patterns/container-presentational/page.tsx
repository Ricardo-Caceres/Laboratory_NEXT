import { readFile } from 'fs/promises';
import path from 'path';
import ClientExample from './_client_example';

export default async function ContainerPresentationalPage() {
  const codeContent = [
    {
      filePath: 'Container Component',
      content: await readFile(path.join(process.cwd(), 'src/app/patterns/container-presentational/_client_example.tsx'), 'utf-8')
    }
  ];

  return (
    <div>
      <ClientExample codeContent={codeContent} />
    </div>
  );
}

export const metadata = {
  title: 'Container/Presentational Pattern | Design Patterns',
  description: '🎭 Separation of Concerns en React - Divide componentes en Container (lógica/data) y Presentational (UI pura). Facilita testing, reutilización y mantenimiento. Patrón fundamental pre-Hooks que sigue siendo relevante en arquitecturas complejas',
};
