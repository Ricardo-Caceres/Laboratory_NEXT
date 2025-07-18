'use client';

import { useId } from 'react';

export default function AccessibleInput() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />

      <br />

      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </div>
  );
}
