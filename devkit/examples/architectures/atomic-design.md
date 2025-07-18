
# Atomic Design Architecture

Atomic Design is a methodology for creating design systems. It breaks down user interfaces into fundamental building blocks and works up from there. This methodology is not specific to Next.js but can be applied to structure a Next.js project effectively.

### The Five Levels of Atomic Design
1.  **Atoms:** The basic building blocks of matter. In UI, atoms are the fundamental HTML elements like labels, inputs, buttons, etc.
2.  **Molecules:** Groups of atoms bonded together. These are small, reusable components like a search form (a label, input, and button).
3.  **Organisms:** Groups of molecules joined together to form a relatively complex, distinct section of an interface (e.g., a header).
4.  **Templates:** Page-level objects that place components into a layout. They focus on the page's content structure.
5.  **Pages:** Specific instances of templates. They are the highest level of fidelity and represent the final UI.

### Project Structure Example

Here is how you might structure a Next.js project using Atomic Design:

```
src/
|-- app/                # Next.js App Router (Pages)
|   |-- page.tsx
|   |-- layout.tsx
|   `-- ...
`-- components/         # Your UI components
    |-- atoms/
    |   |-- Button.tsx
    |   |-- Input.tsx
    |   `-- Heading.tsx
    |-- molecules/
    |   |-- SearchForm.tsx
    |   `-- NavMenu.tsx
    |-- organisms/
    |   |-- Header.tsx
    |   |-- Footer.tsx
    |   `-- ProductGrid.tsx
    `-- templates/
        |-- MainLayout.tsx
        `-- TwoColumnLayout.tsx
```

### Example Components

**Atom: `Button.tsx`**
```tsx
// src/components/atoms/Button.tsx
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
```

**Molecule: `SearchForm.tsx`**
```tsx
// src/components/molecules/SearchForm.tsx
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

export default function SearchForm() {
  return (
    <form>
      <Input type="search" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </form>
  );
}
```

**Organism: `Header.tsx`**
```tsx
// src/components/organisms/Header.tsx
import SearchForm from '@/components/molecules/SearchForm';
import NavMenu from '@/components/molecules/NavMenu';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>Logo</div>
      <NavMenu />
      <SearchForm />
    </header>
  );
}
```

**Template: `MainLayout.tsx`**
```tsx
// src/components/templates/MainLayout.tsx
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </div>
  );
}
```

**Page: `app/page.tsx`**
```tsx
// src/app/page.tsx
import MainLayout from '@/components/templates/MainLayout';
import ProductGrid from '@/components/organisms/ProductGrid';

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Welcome to our Store</h1>
      <ProductGrid />
    </MainLayout>
  );
}
```
