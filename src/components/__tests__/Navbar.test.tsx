/**
 * Unit Tests for Navbar Component
 * Tests navigation state management and rendering
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar';

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock child components
jest.mock('../navigation/NavLogo', () => ({
  NavLogo: () => <div data-testid="nav-logo">Logo</div>,
}));

jest.mock('../navigation/DesktopNav', () => ({
  DesktopNav: () => <div data-testid="desktop-nav">Desktop Nav</div>,
}));

jest.mock('../navigation/MobileNav', () => ({
  MobileNav: () => <div data-testid="mobile-nav">Mobile Nav</div>,
}));

jest.mock('../navigation/MobileMenuButton', () => ({
  MobileMenuButton: ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button data-testid="mobile-menu-button" onClick={onClick}>
      {isOpen ? 'Close' : 'Open'}
    </button>
  ),
}));

describe('Navbar', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('should render navigation elements', () => {
    render(<Navbar />);
    
    expect(screen.getByTestId('nav-logo')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
  });

  it('should toggle mobile menu on button click', () => {
    render(<Navbar />);
    
    const button = screen.getByTestId('mobile-menu-button');
    
    // Mobile menu should not be visible initially
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(button);
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(button);
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<Navbar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('should be sticky positioned at top', () => {
    render(<Navbar />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('sticky', 'top-0', 'z-50');
  });
});
