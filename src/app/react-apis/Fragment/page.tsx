import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

function Column() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}

export default function TableExample() {
  const filePath = 'src/app/react-apis/Fragment/page.tsx';
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
          <h1 className="text-2xl font-bold mb-4">React.Fragment Example</h1>
          <p className="text-lg mb-4">`React.Fragment` permite agrupar una lista de hijos sin añadir nodos extra al DOM. Esto es útil cuando un componente necesita devolver múltiples elementos pero no quieres envolverlos en un `div` adicional.</p>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Column 1</th>
                <th className="border border-gray-300 px-4 py-2">Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Column />
              </tr>
              <tr>
                {['item1', 'item2'].map(item => (
                  <React.Fragment key={item}>
                    <td className="border border-gray-300 px-4 py-2">{item} - Col 1</td>
                    <td className="border border-gray-300 px-4 py-2">{item} - Col 2</td>
                  </React.Fragment>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
