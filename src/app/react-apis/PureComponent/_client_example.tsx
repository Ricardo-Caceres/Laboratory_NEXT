'use client';

import React from 'react';

interface PureGreetingProps {
  name: string;
  version: number;
}

class PureGreeting extends React.PureComponent<PureGreetingProps> {
  render() {
    console.log(`Rendering PureGreeting for ${this.props.name}, version ${this.props.version}`);
    return (
      <p className="text-[var(--foreground)]">
        Hello, {this.props.name}! (Version: {this.props.version})
      </p>
    );
  }
}

interface RegularGreetingProps {
  name: string;
  version: number;
}

class RegularGreeting extends React.Component<RegularGreetingProps> {
  render() {
    console.log(`Rendering RegularGreeting for ${this.props.name}, version ${this.props.version}`);
    return (
      <p className="text-[var(--foreground)]">
        Hello, {this.props.name}! (Version: {this.props.version})
      </p>
    );
  }
}

export default function PureComponentExample() {
  const [count, setCount] = React.useState(0);
  const fixedName = "Bob";
  const fixedVersion = 1;

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-[var(--panel)] border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">React.PureComponent Demo</h2>
        <p className="text-base mb-6 text-[var(--foreground)] opacity-80">
          React.PureComponent es similar a React.Component pero implementa shouldComponentUpdate con una 
          comparación superficial de props y state. Esto puede mejorar el rendimiento al evitar re-renders innecesarios.
        </p>
        
        <div className="mb-6 p-4 bg-[var(--background)] rounded border border-[var(--border)]">
          <p className="text-lg mb-3 font-semibold text-[var(--foreground)]">Count: {count}</p>
          <button 
            className="px-4 py-2 rounded font-medium transition-colors bg-[var(--primary)] hover:opacity-90 text-white"
            onClick={() => setCount(count + 1)}
          >
            Increment Count
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">✅ Pure Component</h3>
            <PureGreeting name={fixedName} version={fixedVersion} />
            <p className="text-sm mt-2 opacity-70 text-[var(--foreground)]">
              No re-renders when count changes (props didn't change)
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">❌ Regular Component</h3>
            <RegularGreeting name={fixedName} version={fixedVersion} />
            <p className="text-sm mt-2 opacity-70 text-[var(--foreground)]">
              Re-renders on every parent update
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-[var(--code-bg)] border border-[var(--border)]">
        <p className="text-sm text-[var(--foreground)] opacity-80">
          💡 <strong>Tip:</strong> Abre la consola para ver qué componentes se renderizan cuando incrementas el contador.
        </p>
      </div>
    </div>
  );
}
