/**
 * CodeDisplay Component
 * Displays code files with syntax highlighting
 * 
 * Refactored to follow SOLID principles:
 * - Single Responsibility: Only displays code, delegates fetching and highlighting
 * - Dependency Inversion: Depends on custom hooks
 * - Open/Closed: Extensible via props
 * 
 * @example
 * // With direct content
 * <CodeDisplay codeContent={[{ filePath: 'file.ts', content: '...' }]} />
 * 
 * // With file paths (fetches content)
 * <CodeDisplay filePaths={['src/file1.ts', 'src/file2.ts']} />
 */

'use client';

import 'highlight.js/styles/github-dark.css';
import { useCodeContent } from '@/lib/hooks/useCodeContent';
import { useCodeHighlight } from '@/lib/hooks/useCodeHighlight';
import { CodeBlock } from './code/CodeBlock';
import { LoadingSpinner } from './code/LoadingSpinner';
import { ErrorDisplay } from './code/ErrorDisplay';

interface CodeFile {
  filePath: string;
  content: string;
}

interface CodeDisplayProps {
  codeContent?: CodeFile[];
  filePaths?: string[];
}

/**
 * CodeDisplay Container Component
 * Manages code fetching, highlighting, and rendering
 */
export default function CodeDisplay({ codeContent, filePaths }: CodeDisplayProps) {
  const { content, loading, error } = useCodeContent({ codeContent, filePaths });
  const { codeRefs } = useCodeHighlight({ 
    enabled: !loading && !error, 
    content 
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (content.length === 0) {
    return (
      <div className="bg-gray-800 text-slate-400 p-4 rounded-lg text-center">
        No code to display
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg overflow-auto max-h-[400px] sm:max-h-[600px] lg:max-h-[calc(100vh-20rem)]">
      {content.map((file, index) => (
        <CodeBlock
          key={file.filePath}
          filePath={file.filePath}
          content={file.content}
          codeRef={(el) => { codeRefs.current[index] = el; }}
        />
      ))}
    </div>
  );
}
