'use client';

import React from 'react';

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
      <div className="p-6 rounded-lg bg-[var(--panel)] border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Class Component Demo</h2>
        <p className="text-base mb-6 text-[var(--foreground)] opacity-80">
          React.Component es la clase base para definir componentes de clase en React. 
          Permite manejar el estado interno y el ciclo de vida.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-[var(--background)] rounded border border-[var(--border)]">
            <p className="text-lg mb-2 text-[var(--foreground)]">{message}</p>
            <p className="text-lg font-semibold text-[var(--foreground)]">Count: {count}</p>
          </div>
          
          <button 
            className="px-6 py-3 rounded font-medium transition-colors bg-[var(--primary)] hover:opacity-90 text-white"
            onClick={this.handleClick}
          >
            Increment Counter
          </button>
          
          <div className="p-4 bg-[var(--code-bg)] rounded border border-[var(--border)]">
            <p className="text-sm text-[var(--foreground)] opacity-70">
              💡 <strong>Tip:</strong> Abre la consola para ver los logs del ciclo de vida (componentDidMount).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default function ComponentExample() {
  return (
    <div className="space-y-6">
      <MyComponent message="Hello from Class Component!" />
    </div>
  );
}
