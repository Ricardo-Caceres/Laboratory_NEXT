'use client';

import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

interface MyComponentProps {
  message: string;
}

interface MyComponentState {
  count: number;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { message } = this.props;
    const { count } = this.state;
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Class Component Example</h1>
        <p className="text-lg mb-4">`React.Component` es la clase base para definir componentes de clase en React. Permite manejar el estado interno y el ciclo de vida.</p>
        <p className="text-lg mb-2">{message}</p>
        <p className="text-lg mb-4">Count: {count}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default function ComponentExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <MyComponent message="Hello from Component!" />
      </div>
    </div>
  );
}
