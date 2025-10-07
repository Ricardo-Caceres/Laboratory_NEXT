'use client';

import React from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

interface PureGreetingProps {
  name: string;
  version: number;
}

class PureGreeting extends React.PureComponent<PureGreetingProps> {
  render() {
    console.log(`Rendering PureGreeting for ${this.props.name}, version ${this.props.version}`);
    return <p>Hello, {this.props.name}! (Version: {this.props.version})</p>;
  }
}

interface RegularGreetingProps {
  name: string;
  version: number;
}

class RegularGreeting extends React.Component<RegularGreetingProps> {
  render() {
    console.log(`Rendering RegularGreeting for ${this.props.name}, version ${this.props.version}`);
    return <p>Hello, {this.props.name}! (Version: {this.props.version})</p>;
  }
}

export default function PureComponentExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  const [count, setCount] = React.useState(0);
  const fixedName = "Bob";
  const fixedVersion = 1;

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
          <p className="text-lg mb-4">`React.PureComponent` es similar a `React.Component` pero implementa `shouldComponentUpdate` con una comparación superficial de props y state. Esto puede mejorar el rendimiento al evitar re-renders innecesarios.</p>
          <p className="text-lg mb-2">Count: {count}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increment Count</button>

          <h2 className="text-xl font-semibold mt-4 mb-2">Pure Component</h2>
          <PureGreeting name={fixedName} version={fixedVersion} />

          <h2 className="text-xl font-semibold mt-4 mb-2">Regular Component</h2>
          <RegularGreeting name={fixedName} version={fixedVersion} />

          <p className="text-lg mt-4">Check the console to see which components re-render when the count changes.</p>
        </div>
      </div>
    </div>
  );
}
