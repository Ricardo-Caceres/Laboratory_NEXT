'use client';

import { ReactNode } from 'react';
import { AccordionProvider, useAccordion } from './AccordionContext';

function Accordion({ children }: { children: ReactNode }) {
  return (
    <AccordionProvider>
      <div className="accordion">{children}</div>
    </AccordionProvider>
  );
}

function Item({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;

  return <div className="accordion-item">{children}</div>;
}

function Header({ children, label }: { children: ReactNode; label: string }) {
  const { toggleItem } = useAccordion();
  return (
    <div className="accordion-header" onClick={() => toggleItem(label)}>
      {children}
    </div>
  );
}

function Body({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;
  return isOpen ? <div className="accordion-body">{children}</div> : null;
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default function MyPage() {
  return (
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
  );
}
