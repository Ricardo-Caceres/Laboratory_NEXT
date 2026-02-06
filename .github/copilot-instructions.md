# GitHub Copilot Instructions - DevKit Laboratory

## 🚨 Critical Rules

### Package Manager: YARN ONLY
**⚠️ MANDATORY: Use `yarn` for ALL package operations. Never use npm, pnpm, or bun.**

```bash
# ✅ Correct
yarn install
yarn add <package>
yarn remove <package>

# ❌ Never use
npm install
pnpm install
```

**Why**: Project uses Yarn. Other package managers will break `yarn.lock` and cause dependency conflicts.

### Git Operations
**NEVER execute git commands.** Only the repository owner runs git operations manually.
- Do not run: `git add`, `git commit`, `git push`, `git pull`
- After making changes: inform user, do not commit

## Build, Test, and Lint Commands

### Development
```bash
# Start development server (with Turbopack)
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

### Testing

**Unit Tests** (Jest + React Testing Library)
```bash
# Run in watch mode (development)
yarn test

# Run once with coverage (CI)
yarn test:ci

# Generate coverage report
yarn test:coverage

# Run specific test file
yarn test ComponentName.test.tsx

# Run tests matching pattern
yarn test --testNamePattern="should render"
```

**E2E Tests** (Playwright)
```bash
# First-time setup: install browsers
yarn playwright:install

# Run all E2E tests
yarn test:e2e

# Run with UI mode (recommended for debugging)
yarn test:e2e:ui

# Run in headed mode (see browser)
yarn test:e2e:headed
```

**Test Locations**:
- Unit tests: `src/**/__tests__/**/*.test.{ts,tsx}`
- E2E tests: `e2e/**/*.spec.ts`

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit + Zustand
- **Testing**: Jest, React Testing Library, Playwright
- **Package Manager**: Yarn 1.22.22

### Directory Structure
```
src/
├── app/                          # Next.js App Router pages
│   ├── hooks/                    # React Hooks examples
│   ├── patterns/                 # Design Patterns examples
│   ├── architectures/            # Software Architecture examples
│   ├── performance/              # Performance optimization
│   ├── security/                 # Frontend security
│   ├── testing/                  # Testing strategies
│   ├── state-management/         # State management examples
│   └── layout.tsx                # Root layout with Navbar
├── components/                   # Reusable components
│   ├── layout/                   # Layout components (LeftPanel, RightPanel)
│   ├── navigation/               # Navigation components (Navbar, Breadcrumbs)
│   ├── code/                     # Code display components
│   └── __tests__/                # Component unit tests
└── lib/                          # Utilities, hooks, constants

e2e/                              # Playwright E2E tests
```

### Key Architectural Patterns
This is a **learning platform/laboratory** showcasing:
- SOLID Principles in practice
- Container/Presentational pattern
- Compound Components pattern
- Custom Hooks pattern
- Factory pattern
- Observer pattern

See `ARCHITECTURE.md` for detailed examples.

## Code Conventions

### Module Structure: LeftPanel/RightPanel Layout
**ALL learning modules MUST use this standardized layout:**

```typescript
import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function ModulePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Module Title"
        description="**Markdown** formatted description with examples"
        codeContent={[{
          filePath: 'example.tsx',
          content: `// Code example here`
        }]}
      />
      <RightPanel>
        {/* Interactive examples or demonstrations */}
      </RightPanel>
    </div>
  );
}
```

### Design System

**Colors** (Tailwind classes):
```
Backgrounds: white, slate-50, slate-100
Text: slate-900 (headings), slate-700 (body), slate-600 (muted)
Borders: slate-200, slate-300
Primary: blue-600, blue-700
Success: green-600
Warning: orange-600
Error: red-600
```

**Design Rules**:
- ❌ NO gradients - use solid colors only
- ✅ HIGH contrast - WCAG AA minimum
- ✅ Code in `<CodeBlock>` or `<CodeDisplay>` components - never plain `<code>` tags
- ✅ Responsive design - mobile-first approach
- ✅ Semantic HTML with proper heading hierarchy

### TypeScript Standards

```typescript
// ✅ Always use strict types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// ✅ Explicit return types on functions
const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

// ❌ NEVER use `any`
const badFunction = (data: any) => {}; // PROHIBITED

// ✅ Use `unknown` if type is truly unknown
const parseData = (data: unknown): ParsedData => {
  if (!isValidData(data)) throw new Error('Invalid data');
  return data as ParsedData;
};
```

### React Component Standards

```typescript
// ✅ Functional components with explicit prop types
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

// ✅ Export types for reusability
export type { ButtonProps };
```

### Next.js App Router Patterns

```typescript
// ✅ Server Component (default)
export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = await fetchProduct(params.id);
  return <ProductDetails product={product} />;
}

// ✅ Client Component (when needed for interactivity)
'use client';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// ✅ Static metadata
export const metadata: Metadata = {
  title: 'Products - DevKit Laboratory',
  description: 'Browse our products',
};

// ✅ Dynamic metadata
export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return {
    title: `${product.name} - DevKit Laboratory`,
    description: product.description,
  };
}
```

### File Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with `use` prefix (`useLocalStorage.ts`)
- Utilities: camelCase (`formatDate.ts`)
- Pages: `page.tsx` (App Router convention)
- Layouts: `layout.tsx` (App Router convention)
- Tests: `ComponentName.test.tsx`, `feature.spec.ts`

### Performance Optimization

```typescript
// ✅ Memoize expensive components
const ExpensiveComponent = memo(({ data }: Props) => {
  return <ComplexVisualization data={data} />;
});

// ✅ useMemo for expensive calculations
const sortedData = useMemo(() => {
  return data.filter(item => item.active).sort((a, b) => a.priority - b.priority);
}, [data]);

// ✅ useCallback for stable function references
const handleDelete = useCallback((id: string) => {
  deleteItem(id);
}, [deleteItem]);

// ✅ Dynamic imports for code splitting
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false,
});
```

### Accessibility Requirements

```typescript
// ✅ Semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <section>
      <h2>Section</h2>
    </section>
  </article>
</main>

// ✅ ARIA labels where needed
<button
  onClick={handleClose}
  aria-label="Close modal"
  aria-pressed={isActive}
>
  <CloseIcon aria-hidden="true" />
</button>

// ✅ Form accessibility
<label htmlFor="email">Email</label>
<input
  type="email"
  id="email"
  aria-describedby="email-hint"
  aria-invalid={hasError}
  aria-required
/>
<span id="email-hint">We'll never share your email</span>
```

## Testing Conventions

### Unit Test Best Practices

```typescript
// ✅ Test user behavior, not implementation
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Click me' }));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// ✅ Use proper queries (priority order)
// 1. getByRole - best for accessibility
// 2. getByLabelText - for form inputs
// 3. getByText - for text content
// 4. getByTestId - last resort

// ✅ Test accessibility
const button = screen.getByRole('button');
expect(button).toHaveAttribute('aria-label', 'Close');
```

### E2E Test Best Practices

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should complete user flow', async ({ page }) => {
    await page.goto('/');
    
    // ✅ Use semantic locators
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // ✅ Wait for elements properly (auto-waits)
    await expect(page.getByRole('alert')).toBeVisible();
    
    // ✅ Assert navigation
    await expect(page).toHaveURL(/\/success/);
  });
});
```

## Quality Checklist

Before submitting changes:

### Code Quality
- [ ] Follows SOLID principles
- [ ] No code duplication
- [ ] Components under 200 lines
- [ ] Proper separation of concerns

### TypeScript
- [ ] No `any` types
- [ ] Functions have explicit return types
- [ ] Props interfaces defined
- [ ] Generics used appropriately

### React
- [ ] Correct hook dependencies
- [ ] Cleanup in useEffect when needed
- [ ] No unnecessary re-renders
- [ ] Proper keys on lists
- [ ] Server/Client components used correctly

### Design
- [ ] Uses LeftPanel/RightPanel layout (for learning modules)
- [ ] No gradients (solid colors only)
- [ ] High contrast (WCAG AA)
- [ ] Code uses proper components (`<CodeBlock>`, `<CodeDisplay>`)
- [ ] Mobile responsive
- [ ] Semantic HTML

### Accessibility
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

### Performance
- [ ] No unnecessary renders
- [ ] Memoization used appropriately
- [ ] Code splitting for heavy components
- [ ] Images optimized (use `next/image`)

## Additional Resources

- **Architecture Details**: See `ARCHITECTURE.md` for SOLID principles and design patterns
- **Testing Guide**: See `TESTING.md` for comprehensive testing documentation
- **AI Agent Rules**: See `.ai_instructions.md` for project-specific AI assistant rules
