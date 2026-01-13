/**
 * Utility for conditional className joining
 * Similar to clsx or classnames library
 * 
 * @param classes - Array of class strings or conditional objects
 * @returns Joined class string
 * 
 * @example
 * cn('base', isActive && 'active', 'text-white')
 * // 'base active text-white' if isActive is true
 * // 'base text-white' if isActive is false
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
};
