
# `useReducer` Hook

The `useReducer` hook is an alternative to `useState` for managing complex state logic in React components. It is especially useful when the next state depends on the previous one and when the state logic is complex and involves multiple sub-values.

### When to use it
-   When you have complex state logic that involves multiple sub-values.
-   When the next state depends on the previous one.
-   To optimize performance for components that trigger deep updates.

### Example

A classic example is a counter with increment, decrement, and reset actions.

```tsx
'use client';

import { useReducer } from 'react';

// 1. Define the state shape
interface State {
  count: number;
}

// 2. Define the actions
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

// 3. Create the reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

// 4. Use the hook in the component
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

### Key Concepts
-   **Reducer:** A pure function that takes the current state and an action, and returns the new state.
-   **Action:** An object that describes what happened. It must have a `type` property.
-   **Dispatch:** A function that you call with an action to trigger a state update.
