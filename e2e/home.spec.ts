/**
 * E2E Tests for Home Page
 * Tests main landing page functionality and navigation
 */

import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load home page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/DevKit Laboratory/i);
  });

  test('should display navigation bar', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
  });

  test('should display hero section with title', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check Hooks link
    const hooksLink = page.getByRole('link', { name: /hooks/i }).first();
    await expect(hooksLink).toBeVisible();
    
    await hooksLink.click();
    await expect(page).toHaveURL(/\/hooks/);
  });

  test('should navigate to patterns page', async ({ page }) => {
    const patternsLink = page.getByRole('link', { name: /patterns/i }).first();
    await patternsLink.click();
    
    await expect(page).toHaveURL(/\/patterns/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should navigate to architectures page', async ({ page }) => {
    const archLink = page.getByRole('link', { name: /architectures/i }).first();
    await archLink.click();
    
    await expect(page).toHaveURL(/\/architectures/);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.+/);
  });
});
