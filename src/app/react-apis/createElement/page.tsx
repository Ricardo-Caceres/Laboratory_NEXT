'use client';

import React from 'react';

export default function CreateElementExample() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello, React!'),
    React.createElement('p', null, 'This is a paragraph created with React.createElement.')
  );
}
