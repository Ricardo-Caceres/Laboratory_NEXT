
# Compound Components Pattern

The Compound Components pattern is a way to create more expressive and flexible components. It allows you to create a set of components that work together to perform a task, sharing implicit state between them.

### When to use it
-   When you have a complex component that has multiple children with a strong relationship.
-   When you want to give the user more control over the structure and rendering of the component's parts.
-   Examples: A custom `select` component, a tab bar, or an accordion.

### Example: A Custom Accordion

Here is an example of an `Accordion` component built with the Compound Components pattern.

**1. Create the Context**

We use `Context` to share the state between the parent `Accordion` and its children.

```tsx
// devkit/examples/patterns/compound-components/AccordionContext.tsx
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
```

**2. Create the Compound Components**

```tsx
// devkit/examples/patterns/compound-components/Accordion.tsx
'use client';

import { ReactNode } from 'react';
import { AccordionProvider, useAccordion } from './AccordionContext';

// Main Accordion Component (Wrapper)
function Accordion({ children }: { children: ReactNode }) {
  return (
    <AccordionProvider>
      <div className="accordion">{children}</div>
    </AccordionProvider>
  );
}

// Accordion Item
function Item({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;

  return <div className="accordion-item">{children}</div>;
}

// Accordion Header (Trigger)
function Header({ children, label }: { children: ReactNode; label: string }) {
  const { toggleItem } = useAccordion();
  return (
    <div className="accordion-header" onClick={() => toggleItem(label)}>
      {children}
    </div>
  );
}

// Accordion Body (Content)
function Body({ children, label }: { children: ReactNode; label: string }) {
  const { openItem } = useAccordion();
  const isOpen = openItem === label;
  return isOpen ? <div className="accordion-body">{children}</div> : null;
}

// Attach children components as properties of the main component
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
```

**3. Usage**

```tsx
// Usage example
import Accordion from '@/devkit/examples/patterns/compound-components/Accordion';

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
```
