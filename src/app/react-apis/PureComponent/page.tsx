'use client';

import React from 'react';

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

export default function PureComponentExample() {
  const [count, setCount] = React.useState(0);
  const fixedName = "Bob";
  const fixedVersion = 1;

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Pure Component</h2>
      <PureGreeting name={fixedName} version={fixedVersion} />

      <h2>Regular Component</h2>
      <RegularGreeting name={fixedName} version={fixedVersion} />

      <p>Check the console to see which components re-render when the count changes.</p>
    </div>
  );
}
