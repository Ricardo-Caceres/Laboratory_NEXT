/**
 * Unit Tests for CodeDisplay Component
 * Tests code rendering, loading states, and error handling
 */

import { render, screen, waitFor } from '@testing-library/react';
import CodeDisplay from '../CodeDisplay';

// Mock hooks
jest.mock('@/lib/hooks/useCodeContent', () => ({
  useCodeContent: jest.fn(),
}));

jest.mock('@/lib/hooks/useCodeHighlight', () => ({
  useCodeHighlight: jest.fn(() => ({ codeRefs: { current: [] } })),
}));

import { useCodeContent } from '@/lib/hooks/useCodeContent';

describe('CodeDisplay', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display loading state', () => {
    (useCodeContent as jest.Mock).mockReturnValue({
      content: [],
      loading: true,
      error: null,
    });

    render(<CodeDisplay />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should display error state', () => {
    const errorMessage = 'Failed to load code';
    (useCodeContent as jest.Mock).mockReturnValue({
      content: [],
      loading: false,
      error: errorMessage,
    });

    render(<CodeDisplay />);
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('should display "No code to display" when content is empty', () => {
    (useCodeContent as jest.Mock).mockReturnValue({
      content: [],
      loading: false,
      error: null,
    });

    render(<CodeDisplay />);
    
    expect(screen.getByText('No code to display')).toBeInTheDocument();
  });

  it('should render code content when provided', async () => {
    const mockContent = [
      { filePath: 'test.ts', content: 'const test = "hello";' },
    ];

    (useCodeContent as jest.Mock).mockReturnValue({
      content: mockContent,
      loading: false,
      error: null,
    });

    render(<CodeDisplay codeContent={mockContent} />);
    
    await waitFor(() => {
      expect(screen.getByText('test.ts')).toBeInTheDocument();
    });
  });

  it('should handle multiple code files', async () => {
    const mockContent = [
      { filePath: 'file1.ts', content: 'const a = 1;' },
      { filePath: 'file2.ts', content: 'const b = 2;' },
    ];

    (useCodeContent as jest.Mock).mockReturnValue({
      content: mockContent,
      loading: false,
      error: null,
    });

    render(<CodeDisplay codeContent={mockContent} />);
    
    await waitFor(() => {
      expect(screen.getByText('file1.ts')).toBeInTheDocument();
      expect(screen.getByText('file2.ts')).toBeInTheDocument();
    });
  });
});
