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
