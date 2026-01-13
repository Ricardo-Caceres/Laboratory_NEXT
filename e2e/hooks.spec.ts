/**
 * E2E Tests for Hooks Section
 * Tests React Hooks examples and interactive demos
 */

import { test, expect } from '@playwright/test';

test.describe('Hooks Section', () => {
  test('should display hooks overview page', async ({ page }) => {
    await page.goto('/hooks');
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/hooks/i);
  });

  test('should navigate to useState example', async ({ page }) => {
    await page.goto('/hooks');
    
    const useStateLink = page.getByRole('link', { name: /useState/i }).first();
    await useStateLink.click();
    
    await expect(page).toHaveURL(/\/hooks\/use-state/i);
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    // Should have code blocks
    const codeBlock = page.locator('pre, code').first();
    await expect(codeBlock).toBeVisible();
  });

  test('should display breadcrumbs on hook pages', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    const breadcrumb = page.getByRole('navigation', { name: /breadcrumb/i });
    await expect(breadcrumb).toBeVisible();
    
    // Should show path: Home > Hooks > useState
    await expect(breadcrumb.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(breadcrumb.getByText(/hooks/i)).toBeVisible();
  });

  test('should be able to navigate between different hooks', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    // Navigate to useEffect
    await page.goto('/hooks/use-effect');
    await expect(page).toHaveURL(/\/hooks\/use-effect/i);
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should have syntax highlighted code', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    // Code should have syntax highlighting classes
    const highlightedCode = page.locator('.hljs, [class*="language-"]').first();
    await expect(highlightedCode).toBeVisible();
  });
});

test.describe('Hooks - Mobile View', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('should display hooks on mobile', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should have scrollable code blocks', async ({ page }) => {
    await page.goto('/hooks/use-state');
    
    const codeContainer = page.locator('pre').first();
    await expect(codeContainer).toBeVisible();
    
    // Should be scrollable if content overflows
    const isScrollable = await codeContainer.evaluate((el) => {
      return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    });
    
    // Code blocks often need scrolling on mobile
    expect(isScrollable).toBeTruthy();
  });
});
