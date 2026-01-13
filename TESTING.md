# Testing Guide

## Overview

This project uses comprehensive testing strategies covering unit, integration, and end-to-end testing.

## Testing Stack

### Unit & Integration Tests
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **@testing-library/jest-dom** - Custom matchers

### End-to-End Tests
- **Playwright** - E2E testing framework
- Multi-browser support (Chromium, Firefox, WebKit)
- Mobile viewport testing

## Running Tests

### Unit Tests

```bash
# Run tests in watch mode
yarn test

# Run tests once (CI mode)
yarn test:ci

# Run with coverage report
yarn test:coverage
```

### E2E Tests

First-time setup:
```bash
# Install Playwright browsers
yarn playwright:install
```

Running E2E tests:
```bash
# Run all E2E tests
yarn test:e2e

# Run with UI mode (recommended for development)
yarn test:e2e:ui

# Run in headed mode (see browser)
yarn test:e2e:headed
```

## Test Structure

### Unit Tests (`__tests__` directories)

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Navbar.test.tsx
│   │   ├── CodeDisplay.test.tsx
│   │   └── Breadcrumbs.test.tsx
│   └── ...
```

**Naming Convention**: `ComponentName.test.tsx`

**Example Unit Test**:
```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### E2E Tests (`e2e/` directory)

```
e2e/
├── home.spec.ts
├── navigation.spec.ts
├── hooks.spec.ts
└── ...
```

**Naming Convention**: `feature.spec.ts`

**Example E2E Test**:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button')).toBeVisible();
  });
});
```

## Testing Best Practices

### Unit Tests

1. **Test User Behavior, Not Implementation**
   ```typescript
   // ✅ Good - tests what user sees
   expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
   
   // ❌ Bad - tests implementation
   expect(component.state.isSubmitting).toBe(false);
   ```

2. **Use Proper Queries**
   - `getByRole` - Preferred for accessibility
   - `getByLabelText` - Form inputs
   - `getByText` - Text content
   - `getByTestId` - Last resort only

3. **Mock External Dependencies**
   ```typescript
   jest.mock('next/navigation', () => ({
     usePathname: jest.fn(),
   }));
   ```

4. **Test Accessibility**
   ```typescript
   const button = screen.getByRole('button');
   expect(button).toHaveAttribute('aria-label', 'Close');
   ```

### E2E Tests

1. **Wait for Elements Properly**
   ```typescript
   // ✅ Good - waits automatically
   await expect(page.getByRole('button')).toBeVisible();
   
   // ❌ Bad - arbitrary wait
   await page.waitForTimeout(1000);
   ```

2. **Use Semantic Locators**
   ```typescript
   // ✅ Good - uses role
   page.getByRole('navigation', { name: 'Main navigation' })
   
   // ❌ Bad - uses class
   page.locator('.nav-bar')
   ```

3. **Test Real User Flows**
   ```typescript
   test('user can complete purchase', async ({ page }) => {
     await page.goto('/products');
     await page.getByRole('button', { name: 'Add to cart' }).click();
     await page.getByRole('link', { name: 'Checkout' }).click();
     await expect(page).toHaveURL(/\/checkout/);
   });
   ```

4. **Handle Different Viewports**
   ```typescript
   test('mobile view', async ({ page }) => {
     await page.setViewportSize({ width: 375, height: 667 });
     // Test mobile-specific behavior
   });
   ```

## Code Coverage

Coverage reports are generated in `coverage/` directory.

**Target Coverage**:
- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

**View Coverage**:
```bash
yarn test:coverage
open coverage/lcov-report/index.html
```

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: yarn install
      - run: yarn test:ci

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: yarn install
      - run: yarn playwright:install
      - run: yarn test:e2e
```

## Debugging Tests

### Unit Tests

```bash
# Run specific test file
yarn test Navbar.test.tsx

# Run tests matching pattern
yarn test --testNamePattern="should render"

# Debug with Chrome DevTools
node --inspect-brk node_modules/.bin/jest --runInBand
```

### E2E Tests

```bash
# Run in headed mode (see browser)
yarn test:e2e:headed

# Run with UI mode (step through)
yarn test:e2e:ui

# Debug specific test
yarn test:e2e --debug home.spec.ts
```

## Writing New Tests

### Checklist for New Components

- [ ] Unit test for rendering
- [ ] Unit test for user interactions
- [ ] Unit test for edge cases
- [ ] Unit test for accessibility
- [ ] E2E test for main user flow (if applicable)

### Checklist for New Features

- [ ] E2E test for happy path
- [ ] E2E test for error states
- [ ] E2E test for mobile view
- [ ] E2E test for keyboard navigation

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Troubleshooting

### Common Issues

**Issue**: "Cannot find module"
```bash
# Clear Jest cache
yarn test --clearCache
```

**Issue**: Playwright browsers not installed
```bash
yarn playwright:install
```

**Issue**: Tests timeout
```typescript
// Increase timeout for specific test
test('slow test', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds
  // ...
});
```

**Issue**: Flaky E2E tests
```typescript
// Use proper waits
await expect(page.getByRole('button')).toBeVisible();

// Retry failed tests
test.describe.configure({ retries: 2 });
```
