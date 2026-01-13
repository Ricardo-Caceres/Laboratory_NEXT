/**
 * Unit Tests for Breadcrumbs Component
 * Tests breadcrumb navigation rendering and accessibility
 */

import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '../Breadcrumbs';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Breadcrumbs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render on home page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    
    const { container } = render(<Breadcrumbs />);
    expect(container.firstChild).toBeNull();
  });

  it('should render breadcrumbs for single level path', () => {
    (usePathname as jest.Mock).mockReturnValue('/hooks');
    
    render(<Breadcrumbs />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Hooks')).toBeInTheDocument();
  });

  it('should render breadcrumbs for nested path', () => {
    (usePathname as jest.Mock).mockReturnValue('/hooks/use-state');
    
    render(<Breadcrumbs />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Hooks')).toBeInTheDocument();
    expect(screen.getByText('Use State')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    (usePathname as jest.Mock).mockReturnValue('/hooks');
    
    render(<Breadcrumbs />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
  });

  it('should mark current page with aria-current', () => {
    (usePathname as jest.Mock).mockReturnValue('/hooks/use-state');
    
    render(<Breadcrumbs />);
    
    const currentPage = screen.getByText('Use State');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });

  it('should handle paths with hyphens correctly', () => {
    (usePathname as jest.Mock).mockReturnValue('/hooks/use-effect');
    
    render(<Breadcrumbs />);
    
    expect(screen.getByText('Use Effect')).toBeInTheDocument();
  });
});
