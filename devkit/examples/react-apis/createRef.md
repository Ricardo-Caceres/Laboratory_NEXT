
# `React.createRef`

`React.createRef` is a function that creates a ref object. Refs provide a way to access DOM nodes or React elements created in the render method.

### When to use it
-   Managing focus, text selection, or media playback.
-   Triggering imperative animations.
-   Integrating with third-party DOM libraries.

### Syntax

```typescript
const myRef = React.createRef();
```

### Example

This example demonstrates how to use `React.createRef` to focus an input element when a button is clicked. This approach is typically used with class components, whereas `useRef` is the equivalent for functional components.

```tsx
'use client';

import React from 'react';

class MyForm extends React.Component {
  constructor(props: {}) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef<HTMLInputElement>();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  textInput: React.RefObject<HTMLInputElement>;

  focusTextInput() {
    // Directly access the DOM node using the ref
    this.textInput.current?.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} // Attach the ref to the input element
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
```

### Key Points
-   `createRef` is primarily used with class components.
-   For functional components, `useRef` is the modern equivalent and generally preferred.
-   Refs should be used sparingly. Most interactions with React components should be handled declaratively through props and state.
