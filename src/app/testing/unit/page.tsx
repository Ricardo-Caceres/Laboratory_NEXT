import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function UnitTestingPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Unit Testing"
        description="**Unit Testing** verifies individual units of code (functions, methods, components) in isolation to ensure they work correctly.

**Key Concepts:**
- Test smallest units of code
- Isolated from dependencies
- Fast execution
- High code coverage

**Testing Framework:**
- Jest (JavaScript/TypeScript)
- Vitest (Vite projects)
- Mocha + Chai
- React Testing Library

**Best Practices:**
- One assertion per test
- Descriptive test names
- Arrange-Act-Assert pattern
- Mock external dependencies
- Test edge cases"
        codeContent={[
          {
            filePath: 'unit/string-utils.test.ts',
            content: `import { capitalize, reverse, isPalindrome } from './string-utils';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('reverse', () => {
    it('should reverse string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    it('should be case insensitive', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });
  });
});`,
          },
          {
            filePath: 'unit/react-component.test.tsx',
            content: `import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('should render initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increment count when button clicked', () => {
    render(<Counter initialCount={0} />);
    const button = screen.getByText('Increment');
    
    fireEvent.click(button);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('should decrement count', () => {
    render(<Counter initialCount={5} />);
    const button = screen.getByText('Decrement');
    
    fireEvent.click(button);
    
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  it('should reset count', () => {
    render(<Counter initialCount={0} />);
    
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Reset'));
    
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Unit Testing Overview</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Testing Pyramid:</h3>
            <div className="space-y-2">
              <div className="bg-red-100 dark:bg-red-900 p-2 rounded text-center text-sm">
                E2E Tests (Slow, Expensive)
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded text-center">
                Integration Tests (Medium)
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded text-center font-semibold">
                Unit Tests (Fast, Cheap) ← Most tests here
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">What to Test:</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Pure functions</li>
                <li>✓ Business logic</li>
                <li>✓ Edge cases</li>
                <li>✓ Error handling</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Test Coverage:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Aim for 80%+</li>
                <li>• Focus on critical paths</li>
                <li>• Not just quantity</li>
                <li>• Quality matters</li>
              </ul>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}
