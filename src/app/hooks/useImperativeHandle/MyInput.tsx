'use client';

import { useRef, useImperativeHandle, forwardRef } from 'react';

interface MyInputProps {
  placeholder?: string;
}

export interface MyInputHandle {
  focusInput: () => void;
}

const MyInput = forwardRef<MyInputHandle, MyInputProps>(({ placeholder }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} placeholder={placeholder} style={{ padding: '8px', border: '1px solid #ccc' }} />;
});

MyInput.displayName = 'MyInput';

export default MyInput;
