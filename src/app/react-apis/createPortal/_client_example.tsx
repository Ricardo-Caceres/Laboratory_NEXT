'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import CodeDisplay from '../../../components/CodeDisplay';

export default function PortalExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.createPortal Example</h1>
          <p className="text-lg mb-4">`React.createPortal` permite renderizar hijos en un nodo DOM que existe fuera de la jerarquía del componente padre. Esto es útil para modales, tooltips, y otros elementos que necesitan salirse del flujo normal del DOM.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>This is a Modal!</h2>
            <p>This content is rendered outside the main DOM hierarchy.</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}
