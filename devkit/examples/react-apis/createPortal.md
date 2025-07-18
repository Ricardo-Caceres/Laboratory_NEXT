
# `React.createPortal`

`React.createPortal` provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is particularly useful for modals, tooltips, and other overlays that need to be rendered at the top level of the DOM to avoid z-index or overflow issues with parent components.

### When to use it
-   For modals, dialogs, popovers, and tooltips that need to escape the styling or positioning constraints of their parent components.
-   When you need to render content into a different part of the DOM tree.

### Syntax

```typescript
ReactDOM.createPortal(child, container)
```

-   `child`: Any renderable React child, such as an element, string, or fragment.
-   `container`: A DOM element that exists outside the DOM hierarchy of the parent component.

### Example

This example demonstrates how to create a simple modal that renders its content into a `div` element outside the main application root.

**1. Modal Component (`Modal.tsx`)**

```tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const modalRootRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure the modal root element exists in the DOM
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
    modalRootRef.current = modalRoot;
    setMounted(true);

    return () => {
      // Clean up the modal root if this is the last modal using it
      if (modalRoot && !modalRoot.hasChildNodes()) {
        document.body.removeChild(modalRoot);
      }
    };
  }, []);

  if (!mounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}> {/* Prevent click from closing modal */}
        {children}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}>X</button>
      </div>
    </div>,
    modalRootRef.current! // Assert that it's not null after mounted check
  );
}
```

**2. Main Component (`page.tsx`)**

```tsx
'use client';

import React, { useState } from 'react';
import Modal from './Modal'; // Adjust path as needed

export default function PortalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React.createPortal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>This is a Modal!</h2>
        <p>This content is rendered outside the main DOM hierarchy.</p>
      </Modal>
    </div>
  );
}
```

### Key Points
-   Portals allow you to break out of the parent component's DOM hierarchy while maintaining the React component tree hierarchy (event bubbling still works).
-   They are essential for creating accessible and correctly positioned overlays.
-   Ensure the `container` DOM node exists before rendering the portal.
