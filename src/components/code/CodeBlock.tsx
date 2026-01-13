/**
 * CodeBlock Component
 * Displays a single code file with syntax highlighting
 */

'use client';

interface CodeBlockProps {
  filePath: string;
  content: string;
  codeRef?: (el: HTMLElement | null) => void;
}

/**
 * Single code block with file path and content
 */
export const CodeBlock = ({ filePath, content, codeRef }: CodeBlockProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <h2 className="text-sm sm:text-lg font-bold mb-2 break-all text-[var(--primary)]">
        {filePath}
      </h2>
      <pre className="overflow-x-auto">
        <code
          ref={codeRef}
          className="language-typescript text-xs sm:text-sm"
        >
          {content}
        </code>
      </pre>
    </div>
  );
};
