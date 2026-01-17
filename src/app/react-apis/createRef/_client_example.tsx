'use client';

import React from 'react';

class MyForm extends React.Component {
  textInput: React.RefObject<HTMLInputElement | null> = React.createRef<HTMLInputElement>();

  constructor(props: Record<string, never>) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current?.focus();
  }

  render() {
    return (
      <div className="p-6 rounded-lg bg-[var(--panel)] border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">React.createRef Demo</h2>
        <p className="text-base mb-6 text-[var(--foreground)] opacity-80">
          React.createRef crea una ref que puede adjuntarse a elementos React. Las refs proporcionan una forma de 
          acceder a nodos DOM o instancias de componentes React creados en el método render.
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="flex-1 border p-3 rounded bg-[var(--background)] border-[var(--border)] text-[var(--foreground)]"
              type="text"
              ref={this.textInput}
              placeholder="Click button to focus this input"
            />
            <button 
              className="px-6 py-3 rounded font-medium transition-colors bg-[var(--primary)] hover:opacity-90 text-white whitespace-nowrap"
              onClick={this.focusTextInput}
            >
              Focus Input
            </button>
          </div>
          
          <div className="p-4 bg-[var(--background)] rounded border border-[var(--border)]">
            <p className="text-sm text-[var(--foreground)] opacity-70">
              💡 <strong>Tip:</strong> Haz clic en el botón para ver cómo la ref accede directamente al input del DOM y le hace focus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default function CreateRefExample() {
  return (
    <div className="space-y-6">
      <MyForm />
    </div>
  );
}
