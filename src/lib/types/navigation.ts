/**
 * Navigation types for the application
 * Defines the structure of navigation items and categories
 */

export interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationCategory {
  [key: string]: NavigationItem[];
}

export type NavigationKeys = 
  | 'React Hooks'
  | 'Patterns'
  | 'Architectures'
  | 'State Management'
  | 'React APIs'
  | 'Next.js APIs'
  | 'Guides';
