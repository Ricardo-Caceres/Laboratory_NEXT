import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';
import { readFileSync } from 'fs';
import path from 'path';

class MyForm extends React.Component {
  constructor(props: {}) {
    super(props);
    this.textInput = React.createRef<HTMLInputElement>();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  textInput: React.RefObject<HTMLInputElement>;

  focusTextInput() {
    this.textInput.current?.focus();
  }

  render() {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">React.createRef Example</h1>
        <p className="text-lg mb-4">`React.createRef` crea una ref que puede adjuntarse a elementos React. Las refs proporcionan una forma de acceder a nodos DOM o instancias de componentes React creados en el método `render`.</p>
        <input
          className="border p-2 mr-2"
          type="text"
          ref={this.textInput}
          placeholder="Click button to focus"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.focusTextInput}>
          Focus the text input
        </button>
      </div>
    );
  }
}

export default function CreateRefExample() {
  const filePath = 'src/app/react-apis/createRef/page.tsx';
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
        <MyForm />
      </div>
    </div>
  );
}
