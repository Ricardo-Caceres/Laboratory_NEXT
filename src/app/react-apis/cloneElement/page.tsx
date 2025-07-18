'use client';

import React from 'react';

interface WrapperProps {
  children: React.ReactElement; // Expecting a single React element child
}

function Wrapper({ children }: WrapperProps) {
  const handleClick = () => {
    alert('Button clicked from Wrapper!');
  };

  const clonedChild = React.cloneElement(children, {
    onClick: handleClick,
    style: { ...children.props.style, border: '2px solid blue', padding: '10px' },
  });

  return (
    <div style={{ border: '1px dashed gray', padding: '20px', margin: '10px' }}>
      <h3>Wrapper Component</h3>
      {clonedChild}
    </div>
  );
}

export default function CloneElementExample() {
  return (
    <div>
      <h1>React.cloneElement Example</h1>
      <Wrapper>
        <button style={{ background: 'lightgreen' }}>Click Me</button>
      </Wrapper>
      <Wrapper>
        <p style={{ color: 'purple' }}>This is a paragraph.</p>
      </Wrapper>
    </div>
  );
}
