'use client';

import React, { useRef } from 'react';
import MyInput from './MyInput';

export default function ParentComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Focus me!" />
      <button onClick={handleClick} style={{ marginLeft: '10px', padding: '10px 15px' }}>
        Focus Input
      </button>
    </div>
  );
}
