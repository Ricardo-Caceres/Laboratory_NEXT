import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

interface WrapperProps {
  children: React.ReactElement; // Expecting a single React element child
}

function Wrapper({ children }: WrapperProps) {
  const handleClick = () => {
    alert('Button clicked from Wrapper!');
  };

  const clonedChild = React.cloneElement(children, {
    onClick: handleClick,
    style: { ...children.props.style, border: '2px solid blue', padding: '10px' },
  });

  return (
    <div className="border border-dashed border-gray-400 p-5 m-2">
      <h3 className="text-xl font-semibold mb-2">Wrapper Component</h3>
      {clonedChild}
    </div>
  );
}

export default function CloneElementExample() {
  const filePath = 'src/app/react-apis/cloneElement/page.tsx';
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
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.cloneElement Example</h1>
          <p className="text-lg mb-4">`React.cloneElement` clona y devuelve un nuevo elemento React usando un elemento como punto de partida. Esto permite inyectar nuevas props o modificar las existentes.</p>
          <Wrapper>
            <button style={{ background: 'lightgreen' }}>Click Me</button>
          </Wrapper>
          <Wrapper>
            <p style={{ color: 'purple' }}>This is a paragraph.</p>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
