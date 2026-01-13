import '@testing-library/jest-dom';
import { act } from 'react';

// Polyfill for React 19 act compatibility with testing-library
if (typeof (globalThis as any).IS_REACT_ACT_ENVIRONMENT === 'undefined') {
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
}

// Make React.act available globally for testing-library compatibility
if (typeof (globalThis as any).React === 'undefined') {
  (globalThis as any).React = { act };
}
