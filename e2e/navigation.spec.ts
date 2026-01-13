/**
 * E2E Tests for Navigation
 * Tests navigation bar functionality across different viewports
 */

import { test, expect } from '@playwright/test';

test.describe('Navigation - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all main navigation items', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    
    await expect(nav.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(nav.getByText(/hooks/i).first()).toBeVisible();
    await expect(nav.getByText(/patterns/i).first()).toBeVisible();
    await expect(nav.getByText(/architectures/i).first()).toBeVisible();
  });

  test('should navigate between main sections', async ({ page }) => {
    // Navigate to Hooks
    await page.getByRole('link', { name: /hooks/i }).first().click();
    await expect(page).toHaveURL(/\/hooks/);
    
    // Navigate to Patterns
    await page.getByRole('link', { name: /patterns/i }).first().click();
    await expect(page).toHaveURL(/\/patterns/);
    
    // Navigate back to Home
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should highlight active navigation item', async ({ page }) => {
    await page.goto('/hooks');
    
    const activeLink = page.locator('[aria-current="page"]').first();
    await expect(activeLink).toBeVisible();
  });
});

test.describe('Navigation - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should show mobile menu button', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /menu/i }).or(page.getByTestId('mobile-menu-button'));
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    const menuButton = page.getByRole('button').first();
    
    // Open menu
    await menuButton.click();
    await page.waitForTimeout(300); // Wait for animation
    
    // Check if mobile menu items are visible
    const mobileNav = page.locator('[data-testid="mobile-nav"]').or(page.locator('nav').nth(1));
    await expect(mobileNav).toBeVisible();
  });

  test('should navigate from mobile menu', async ({ page }) => {
    const menuButton = page.getByRole('button').first();
    await menuButton.click();
    await page.waitForTimeout(300);
    
    // Click on a link in mobile menu
    await page.getByRole('link', { name: /hooks/i }).first().click();
    await expect(page).toHaveURL(/\/hooks/);
  });
});

test.describe('Navigation - Accessibility', () => {
  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Tab through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Enter should activate link
    await page.keyboard.press('Enter');
    
    // Should navigate somewhere
    await expect(page).not.toHaveURL('/');
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/');
    
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
    await expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });
});
