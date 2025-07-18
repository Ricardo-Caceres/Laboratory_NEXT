'use client';

import React from 'react';

interface ItemProcessorProps {
  children: React.ReactNode;
}

function ItemProcessor({ children }: ItemProcessorProps) {
  return (
    <div>
      <h2>Processing Items:</h2>
      {
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div key={index} style={{ border: '1px solid green', margin: '5px', padding: '5px' }}>
                Valid Element: {child}
              </div>
            );
          } else {
            return (
              <div key={index} style={{ border: '1px solid red', margin: '5px', padding: '5px' }}>
                Not a React Element: {String(child)}
              </div>
            );
          }
        })
      }
    </div>
  );
}

export default function IsValidElementExample() {
  return (
    <ItemProcessor>
      <p>This is a paragraph element.</p>
      <span>This is a span element.</span>
      {"Just a string"}
      {12345}
      {null}
      {undefined}
      {[<button key="btn1">Button 1</button>, <button key="btn2">Button 2</button>]}
    </ItemProcessor>
  );
}
