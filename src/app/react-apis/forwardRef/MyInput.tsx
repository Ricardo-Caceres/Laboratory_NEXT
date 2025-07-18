'use client';

import React from 'react';

interface MyInputProps {
  placeholder?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({ placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={{ padding: '8px', border: '1px solid #ccc' }}
    />
  );
});

MyInput.displayName = 'MyInput';

export default MyInput;
