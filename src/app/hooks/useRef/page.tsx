'use client';

import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
