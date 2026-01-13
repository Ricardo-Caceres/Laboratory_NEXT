# 📋 Quick Reference - Development Standards
# DevKit Laboratory - Enero 2026

## 🚀 Quick Start

### Before Writing Code
1. ✅ Review `.cursorrules` for daily guidelines
2. ✅ Check `ARCHITECTURE.md` for patterns
3. ✅ Use checklist before committing

### File Locations
- **Daily Guide:** `.cursorrules`
- **Architecture:** `ARCHITECTURE.md`
- **AI Context:** `.claude`, `.agents`
- **Changes:** `CHANGELOG.md`

## 🎯 SOLID Quick Reference

```typescript
// S - Single Responsibility
// ✅ One component, one responsibility
const UserProfile = ({ user }) => <div>{user.name}</div>;
const UserPosts = ({ posts }) => <ul>{posts.map(...)}</ul>;

// O - Open/Closed
// ✅ Extend via props, not modification
const Button = ({ variant = 'primary' }) => (
  <button className={`btn-${variant}`}>Click</button>
);

// L - Liskov Substitution
// ✅ Subtypes work wherever parent works
interface Renderable { render: () => JSX.Element }

// I - Interface Segregation
// ✅ Small, specific interfaces
interface Clickable { onClick: () => void }
interface Labeled { label: string }

// D - Dependency Inversion
// ✅ Depend on abstractions
const Component = ({ fetcher }: { fetcher: DataFetcher }) => {};
```

## 📝 Naming Conventions

```typescript
// Components - PascalCase
export const UserProfile = () => {};

// Hooks - camelCase with 'use'
export const useLocalStorage = () => {};

// Utils - camelCase
export const formatDate = () => {};

// Constants - UPPER_SNAKE_CASE
export const API_BASE_URL = 'https://...';

// Types/Interfaces - PascalCase
interface UserProps {}
type ButtonVariant = 'primary' | 'secondary';
```

## 🔧 TypeScript Rules

```typescript
// ✅ DO
interface Props {
  name: string;
  onClick: () => void;
}

const add = (a: number, b: number): number => a + b;

// ❌ DON'T
const bad = (data: any) => {}; // No 'any'
const foo = (x) => {}; // No implicit any
```

## ⚛️ React Patterns

### Component Structure
```typescript
// ✅ Functional component with types
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
};
```

### Custom Hooks
```typescript
// ✅ Hook with types and cleanup
export const useToggle = (initial = false) => {
  const [isOn, setIsOn] = useState(initial);
  
  const toggle = useCallback(() => {
    setIsOn(prev => !prev);
  }, []);
  
  return { isOn, toggle };
};
```

### useEffect
```typescript
// ✅ With cleanup and correct dependencies
useEffect(() => {
  const controller = new AbortController();
  
  fetchData(id, controller.signal)
    .then(setData)
    .catch(error => {
      if (error.name !== 'AbortError') {
        console.error(error);
      }
    });
    
  return () => controller.abort();
}, [id]); // Correct dependencies
```

## 🏗️ Next.js 15 Patterns

### Server Component (Default)
```typescript
// No 'use client' = Server Component
export default async function Page({ params }) {
  const data = await fetchData(params.id);
  return <DataView data={data} />;
}
```

### Client Component
```typescript
'use client';

export const Interactive = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
};
```

### Metadata
```typescript
// Static
export const metadata = {
  title: 'Page Title',
  description: 'Description',
};

// Dynamic
export async function generateMetadata({ params }) {
  const data = await fetchData(params.id);
  return { title: data.title };
}
```

## 🎨 Common Patterns

### Container/Presentational
```typescript
// Container - Logic
const UserContainer = () => {
  const { user, loading } = useUser();
  if (loading) return <Spinner />;
  return <UserView user={user} />;
};

// Presentational - UI only
const UserView = ({ user }) => (
  <div>{user.name}</div>
);
```

### Compound Components
```typescript
const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
```

## ⚡ Performance

```typescript
// ✅ useMemo for expensive calculations
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// ✅ useCallback for callbacks
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ✅ React.memo for components
const Heavy = memo(({ data }) => {
  return <ExpensiveRender data={data} />;
});

// ✅ Dynamic imports
const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <Spinner />
});
```

## ♿ Accessibility

```typescript
// ✅ Semantic HTML
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// ✅ ARIA labels
<button
  onClick={handleClose}
  aria-label="Close modal"
  aria-pressed={isActive}
>
  <CloseIcon />
</button>

// ✅ Form accessibility
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-describedby="hint"
  aria-invalid={hasError}
/>
```

## 🔒 Security

```typescript
// ✅ Environment variables
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// ❌ Never hardcode
const apiKey = 'secret123'; // FORBIDDEN

// ✅ Validate input
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ✅ Sanitize output
import DOMPurify from 'dompurify';
const safe = DOMPurify.sanitize(userInput);
```

## ✅ Commit Checklist

Before `git commit`:

### Code Quality
- [ ] No `any` types
- [ ] All functions typed
- [ ] Props interfaces defined
- [ ] No console.logs
- [ ] No hardcoded values
- [ ] No duplicated code

### React
- [ ] useEffect dependencies correct
- [ ] Cleanup functions present
- [ ] Keys on list items
- [ ] No index as key
- [ ] Memoization appropriate

### Next.js
- [ ] Server/Client components correct
- [ ] Metadata provided
- [ ] Images optimized
- [ ] Loading states
- [ ] Error handling

### Standards
- [ ] Follows SOLID
- [ ] Clean Code applied
- [ ] Accessibility considered
- [ ] Security checked
- [ ] ESLint passes

### Build
- [ ] `yarn lint` passes
- [ ] `yarn build` succeeds
- [ ] No TypeScript errors

## 🚫 Common Anti-Patterns

```typescript
// ❌ Direct state mutation
state.items.push(item);

// ✅ Immutable update
setState({ items: [...state.items, item] });

// ❌ Index as key
{items.map((item, i) => <Item key={i} />)}

// ✅ Unique key
{items.map(item => <Item key={item.id} />)}

// ❌ Missing dependencies
useEffect(() => {
  fetchData(userId);
}, []); // Missing userId

// ✅ Correct dependencies
useEffect(() => {
  fetchData(userId);
}, [userId]);

// ❌ Using any
const getData = (data: any) => {};

// ✅ Using proper types
const getData = (data: User) => {};
```

## 📚 Where to Find More

### Architecture & Patterns
→ `ARCHITECTURE.md` - Complete guide

### Daily Development
→ `.cursorrules` - Daily reference

### AI Context
→ `.claude` - For Claude AI
→ `.agents` - For AI Agents

### Project Overview
→ `README.md` - General info
→ `CHANGELOG.md` - Version history

### This Session
→ `SESSION_2026-01-13.md` - What was done
→ `STANDARDS_SUMMARY.md` - Executive summary

## 🎯 Key Principles

1. **Keep it Simple** (KISS)
2. **Don't Repeat Yourself** (DRY)
3. **You Aren't Gonna Need It** (YAGNI)
4. **Composition over Inheritance**
5. **Explicit over Implicit**

## 🔄 ES2024+ Must Use

```typescript
// ✅ Optional chaining
const name = user?.profile?.name;

// ✅ Nullish coalescing
const count = value ?? 0;

// ✅ Async/await
const data = await fetchData();

// ✅ Destructuring
const { name, email } = user;

// ✅ Template literals
const msg = `Hello, ${name}!`;

// ✅ Arrow functions
const double = (x) => x * 2;

// ✅ Spread operator
const merged = { ...obj1, ...obj2 };
```

## 💡 Pro Tips

1. **Start with Server Components** - Only use 'use client' when needed
2. **Memoize Sparingly** - Don't optimize prematurely
3. **Type Everything** - No `any`, explicit returns
4. **Small Functions** - Max 20 lines
5. **Single Responsibility** - One thing per component
6. **Clean Up Effects** - Always return cleanup
7. **Proper Keys** - Never use index
8. **Accessible by Default** - Semantic HTML + ARIA

---

**Quick Reference v2.0.1**  
**Last Updated:** Enero 2026  
**Full Docs:** See ARCHITECTURE.md and .cursorrules
