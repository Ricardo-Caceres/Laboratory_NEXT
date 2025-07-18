'use client';

import { useRef } from 'react';
import MyInput, { MyInputHandle } from './MyInput';

export default function ParentComponent() {
  const inputRef = useRef<MyInputHandle>(null);

  const handleClick = () => {
    inputRef.current?.focusInput();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick} style={{ marginLeft: '10px', padding: '10px 15px' }}>
        Focus Input from Parent
      </button>
    </div>
  );
}
