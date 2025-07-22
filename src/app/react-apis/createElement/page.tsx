import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

export default function CreateElementExample() {
  const filePath = 'src/app/react-apis/createElement/page.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        {React.createElement(
          'div',
          { className: 'container mx-auto py-8' },
          React.createElement('h1', { className: 'text-2xl font-bold mb-4' }, 'Hello, React!'),
          React.createElement('p', { className: 'text-lg mb-4' }, '`React.createElement` es el método fundamental para crear elementos React. Se utiliza para describir lo que quieres renderizar en la interfaz de usuario.'),
          React.createElement('p', { className: 'text-lg' }, 'This is a paragraph created with React.createElement.')
        )}
      </div>
    </div>
  );
}
