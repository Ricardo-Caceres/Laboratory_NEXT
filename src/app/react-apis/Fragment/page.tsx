'use client';

import React from 'react';

function Column() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}

export default function TableExample() {
  return (
    <table>
      <tbody>
        <tr>
          <Column />
        </tr>
        <tr>
          {['item1', 'item2'].map(item => (
            <React.Fragment key={item}>
              <td>{item} - Col 1</td>
              <td>{item} - Col 2</td>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
