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

  return (
    <input ref={inputRef} placeholder={placeholder} className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
  );
});

MyInput.displayName = 'MyInput';

export default MyInput;
