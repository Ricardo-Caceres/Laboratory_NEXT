'use client';

import React, { useState } from 'react';
import Modal from './Modal';

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
