import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

interface ListProps {
  children: React.ReactNode;
}

function MyList({ children }: ListProps) {
  const childrenCount = React.Children.count(children);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">List ({childrenCount} items)</h2>
      <ul className="list-disc list-inside">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return <li key={child.key || `item-${index}`}>{child}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default function ChildrenExample() {
  const filePath = 'src/app/react-apis/Children/page.tsx';
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
          <h1 className="text-2xl font-bold mb-4">React.Children Example</h1>
          <p className="text-lg mb-4">`React.Children` proporciona utilidades para procesar la prop `children` de un componente, especialmente cuando es opaca o una colección.</p>
          <MyList>
            <p>First item</p>
            <span>Second item</span>
            <div>Third item</div>
            {[<p key="a">Item A</p>, <p key="b">Item B</p>]}
          </MyList>
        </div>
      </div>
    </div>
  );
}
