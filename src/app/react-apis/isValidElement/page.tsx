import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

interface ItemProcessorProps {
  children: React.ReactNode;
}

function ItemProcessor({ children }: ItemProcessorProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Processing Items:</h2>
      {
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div key={index} className="border border-green-500 m-1 p-1">
                Valid Element: {child}
              </div>
            );
          } else {
            return (
              <div key={index} className="border border-red-500 m-1 p-1">
                Not a React Element: {String(child)}
              </div>
            );
          }
        })
      }
    </div>
  );
}

export default function IsValidElementExample() {
  const filePath = 'src/app/react-apis/isValidElement/page.tsx';
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
          <h1 className="text-2xl font-bold mb-4">React.isValidElement Example</h1>
          <p className="text-lg mb-4">`React.isValidElement` verifica si un objeto es un elemento React. Devuelve `true` si el objeto es un elemento React, y `false` en caso contrario.</p>
          <ItemProcessor>
            <p>This is a paragraph element.</p>
            <span>This is a span element.</span>
            {"Just a string"}
            {12345}
            {null}
            {undefined}
            {[<button key="btn1">Button 1</button>, <button key="btn2">Button 2</button>]}
          </ItemProcessor>
        </div>
      </div>
    </div>
  );
}
