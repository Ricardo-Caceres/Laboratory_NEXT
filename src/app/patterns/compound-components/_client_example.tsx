'use client';

import { ReactNode } from 'react';
import { AccordionProvider, useAccordion } from './AccordionContext';

function Accordion({ children }: { children: ReactNode }) {
  return (
    <AccordionProvider>
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {children}
      </div>
    </AccordionProvider>
  );
}

function Item({ children }: { children: ReactNode; label: string }) {
  return <div className="border-b border-gray-200 last:border-b-0">{children}</div>;
}

function Header({ children, label }: { children: ReactNode; label: string }) {
  const { toggleItem, openItem } = useAccordion();
  const isOpen = openItem === label;
  
  return (
    <div 
      className={`flex justify-between items-center p-5 cursor-pointer transition-colors ${
        isOpen 
          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
      }`}
      onClick={() => toggleItem(label)}
    >
      <span className="font-semibold text-lg">{children}</span>
      <svg 
        className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

function Body({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;
  return isOpen ? (
    <div className="p-5 text-gray-700 bg-gradient-to-b from-gray-50 to-white">
      {children}
    </div>
  ) : null;
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Compound Components Pattern</h1>
          <p className="text-lg text-gray-600">Click on each item to expand and collapse</p>
        </div>

        <Accordion>
          <Accordion.Item label="item-1">
            <Accordion.Header label="item-1">🎨 What is Compound Components?</Accordion.Header>
            <Accordion.Body label="item-1">
              <p className="mb-3">
                Compound Components is a React pattern where components work together to form a complete UI. 
                The parent component manages the state, while child components handle the presentation.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Flexible API for consumers</li>
                <li>Implicit state sharing</li>
                <li>Clean component composition</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item label="item-2">
            <Accordion.Header label="item-2">⚡ Benefits</Accordion.Header>
            <Accordion.Body label="item-2">
              <p className="mb-3">
                This pattern provides excellent flexibility and maintainability:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Better separation of concerns</li>
                <li>More intuitive API</li>
                <li>Easier to extend functionality</li>
                <li>Improved code reusability</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item label="item-3">
            <Accordion.Header label="item-3">🚀 Use Cases</Accordion.Header>
            <Accordion.Body label="item-3">
              <p className="mb-3">
                Perfect for building complex, reusable UI components:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Accordions & Dropdowns</li>
                <li>Tabs & Navigation</li>
                <li>Modal Dialogs</li>
                <li>Form Components</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600">
            <strong>Compound Components</strong> allow you to create flexible and intuitive APIs by having components work together implicitly.
          </p>
        </div>
      </div>
    </div>
  );
}
