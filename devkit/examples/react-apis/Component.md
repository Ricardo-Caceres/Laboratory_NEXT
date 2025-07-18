
# `React.Component` (Class Components)

`React.Component` is the base class for defining React class components. While functional components with Hooks are the modern and preferred way to write React components, class components are still widely used in older codebases and have some specific use cases (e.g., error boundaries).

### When to use it
-   When working with older React codebases that use class components.
-   For creating Error Boundaries (a specific type of class component).
-   When you need lifecycle methods that don't have direct Hook equivalents (though most can be replicated with `useEffect`).

### Basic Structure

```typescript
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

  // Lifecycle method: Called after the component is mounted
  componentDidMount() {
    console.log('Component did mount');
  }

  // Lifecycle method: Called when the component is about to unmount
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Event handler
  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  // Render method: Returns the JSX to be rendered
  render() {
    const { message } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Class Component Example</h1>
        <p>{message}</p>
        <p>Count: {count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

### Key Lifecycle Methods
-   **Mounting:**
    -   `constructor()`: For initializing state and binding event handlers.
    -   `static getDerivedStateFromProps(props, state)`: Rarely used. Returns an object to update state based on props.
    -   `render()`: The only required method. Returns JSX.
    -   `componentDidMount()`: Called after the component is rendered to the DOM. Good for data fetching, subscriptions.
-   **Updating:**
    -   `static getDerivedStateFromProps(props, state)`
    -   `shouldComponentUpdate(nextProps, nextState)`: For performance optimization. Returns `true` (re-render) or `false` (skip re-render).
    -   `render()`
    -   `getSnapshotBeforeUpdate(prevProps, prevState)`: Rarely used. Captures information from the DOM before it is potentially changed.
    -   `componentDidUpdate(prevProps, prevState, snapshot)`: Called after re-rendering. Good for DOM manipulation based on updates.
-   **Unmounting:**
    -   `componentWillUnmount()`: Called before component is removed from the DOM. Good for cleanup (e.g., removing event listeners).
-   **Error Handling:**
    -   `static getDerivedStateFromError(error)`: Renders a fallback UI after an error.
    -   `componentDidCatch(error, info)`: Logs error information.

### Key Points
-   Class components manage their own state using `this.state` and update it with `this.setState()`.
-   They have access to various lifecycle methods for managing side effects.
-   Functional components with Hooks are generally preferred for their simplicity and reusability.
