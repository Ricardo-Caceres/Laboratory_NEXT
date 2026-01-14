import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function E2ETestingPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="End-to-End (E2E) Testing"
        description="**E2E Testing** validates complete user workflows from start to finish, testing the entire application stack including frontend, backend, and database.

**Key Concepts:**
- Test real user scenarios
- Full application stack
- Browser automation
- User interactions
- Complete workflows

**Popular Tools:**
- **Playwright**: Modern, cross-browser
- **Cypress**: Developer-friendly
- **Selenium**: Industry standard
- **Puppeteer**: Chrome/Chromium

**Best Practices:**
- Test critical user paths
- Keep tests stable
- Use data-testid attributes
- Avoid brittle selectors"
        codeContent={[
          {
            filePath: 'e2e/login.spec.ts',
            content: `import { test, expect } from '@playwright/test';

test.describe('User Login Flow', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Navigate to login page
    await page.goto('/login');

    // Fill login form
    await page.fill('[data-testid="email-input"]', 'user@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');

    // Click login button
    await page.click('[data-testid="login-button"]');

    // Verify redirect to dashboard
    await expect(page).toHaveURL('/dashboard');

    // Verify user is logged in
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
    await expect(page.locator('text=Welcome, User')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="email-input"]', 'wrong@example.com');
    await page.fill('[data-testid="password-input"]', 'wrongpassword');
    await page.click('[data-testid="login-button"]');

    // Verify error message
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('text=Invalid credentials')).toBeVisible();

    // Verify still on login page
    await expect(page).toHaveURL('/login');
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/login');

    // Try to submit without filling fields
    await page.click('[data-testid="login-button"]');

    // Verify validation errors
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });
});`,
          },
          {
            filePath: 'e2e/checkout.spec.ts',
            content: `import { test, expect } from '@playwright/test';

test.describe('E-commerce Checkout Flow', () => {
  test('complete purchase flow', async ({ page }) => {
    // 1. Browse products
    await page.goto('/products');
    await expect(page.locator('[data-testid="product-list"]')).toBeVisible();

    // 2. Add product to cart
    await page.click('[data-testid="add-to-cart-btn"]');
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');

    // 3. Go to cart
    await page.click('[data-testid="cart-icon"]');
    await expect(page).toHaveURL('/cart');

    // 4. Proceed to checkout
    await page.click('[data-testid="checkout-btn"]');
    await expect(page).toHaveURL('/checkout');

    // 5. Fill shipping info
    await page.fill('[name="firstName"]', 'John');
    await page.fill('[name="lastName"]', 'Doe');
    await page.fill('[name="address"]', '123 Main St');
    await page.fill('[name="city"]', 'New York');
    await page.fill('[name="zipCode"]', '10001');

    // 6. Fill payment info
    await page.fill('[name="cardNumber"]', '4242424242424242');
    await page.fill('[name="expiry"]', '12/25');
    await page.fill('[name="cvv"]', '123');

    // 7. Complete order
    await page.click('[data-testid="place-order-btn"]');

    // 8. Verify success
    await expect(page).toHaveURL(/\\/order-confirmation/);
    await expect(page.locator('text=Order Confirmed')).toBeVisible();
    await expect(page.locator('[data-testid="order-number"]')).toBeVisible();
  });
});`,
          },
          {
            filePath: 'e2e/cypress-example.cy.ts',
            content: `// Cypress E2E Test Example
describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should register new user successfully', () => {
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');
    cy.get('[data-testid="password-input"]').type('SecurePass123!');
    cy.get('[data-testid="confirm-password"]').type('SecurePass123!');

    cy.get('[data-testid="register-button"]').click();

    // Verify success
    cy.url().should('include', '/welcome');
    cy.contains('Registration Successful').should('be.visible');
  });

  it('should validate password strength', () => {
    cy.get('[data-testid="password-input"]').type('weak');

    cy.contains('Password must be at least 8 characters').should('be.visible');
  });

  it('should check if email already exists', () => {
    cy.get('[data-testid="email-input"]').type('existing@example.com');
    cy.get('[data-testid="email-input"]').blur();

    cy.contains('Email already registered').should('be.visible');
  });
});`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">E2E Testing Overview</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Testing Tools Comparison:</h3>
            <div className="space-y-3">
              {[
                { name: 'Playwright', pros: 'Cross-browser, fast, modern', cons: 'Newer, smaller community' },
                { name: 'Cypress', pros: 'Developer-friendly, great DX', cons: 'Chrome-only (improving)' },
                { name: 'Selenium', pros: 'Industry standard, mature', cons: 'Complex setup, slower' },
              ].map((tool) => (
                <div key={tool.name} className="p-3 bg-[var(--background)] rounded">
                  <p className="font-semibold">{tool.name}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">✓ {tool.pros}</p>
                  <p className="text-sm text-red-600 dark:text-red-400">✗ {tool.cons}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">What to Test:</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Critical user flows</li>
                <li>✓ Login/Registration</li>
                <li>✓ Checkout process</li>
                <li>✓ Form submissions</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Best Practices:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Use data-testid</li>
                <li>• Wait for elements</li>
                <li>• Isolate test data</li>
                <li>• Run in CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}
