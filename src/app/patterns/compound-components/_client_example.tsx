'use client';

import { ReactNode } from 'react';
import { AccordionProvider, useAccordion } from './AccordionContext';

function Accordion({ children }: { children: ReactNode }) {
  return (
    <AccordionProvider>
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">{children}</div>
    </AccordionProvider>
  );
}

function Item({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;

  return <div className="border-b border-gray-200 last:border-b-0">{children}</div>;
}

function Header({ children, label }: { children: ReactNode; label: string }) {
  const { toggleItem } = useAccordion();
  return (
    <div className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700" onClick={() => toggleItem(label)}>
      {children}
    </div>
  );
}

function Body({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;
  return isOpen ? <div className="p-4 text-gray-600">{children}</div> : null;
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Accordion>
        <Accordion.Item label="item-1">
          <Accordion.Header label="item-1">Item 1</Accordion.Header>
          <Accordion.Body label="item-1">Content for item 1</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item label="item-2">
          <Accordion.Header label="item-2">Item 2</Accordion.Header>
          <Accordion.Body label="item-2">Content for item 2</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
