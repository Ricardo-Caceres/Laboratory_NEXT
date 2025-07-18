import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button style={{ padding: '10px 20px', cursor: 'pointer' }} {...props}>
      {children}
    </button>
  );
}
