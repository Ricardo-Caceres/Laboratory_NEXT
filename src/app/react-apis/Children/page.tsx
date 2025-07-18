'use client';

import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

function MyList({ children }: ListProps) {
  const childrenCount = React.Children.count(children);

  return (
    <div>
      <h2>List ({childrenCount} items)</h2>
      <ul>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return <li key={child.key || `item-${index}`}>{child}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default function ChildrenExample() {
  return (
    <MyList>
      <p>First item</p>
      <span>Second item</span>
      <div>Third item</div>
      {[<p key="a">Item A</p>, <p key="b">Item B</p>]}
    </MyList>
  );
}
