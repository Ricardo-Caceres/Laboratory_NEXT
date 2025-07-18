'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (label: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion');
  }
  return context;
}

export function AccordionProvider({ children }: { children: ReactNode }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setOpenItem(prev => (prev === label ? null : label));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
}
