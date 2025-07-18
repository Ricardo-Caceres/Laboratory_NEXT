'use client';

import React from 'react';

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
      <div>
        <input
          type="text"
          ref={this.textInput}
          placeholder="Click button to focus"
        />
        <button onClick={this.focusTextInput}>
          Focus the text input
        </button>
      </div>
    );
  }
}

export default MyForm;
