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
    <div className="last:mb-0">
      <div className="bg-[var(--background)] border border-[var(--border)] rounded-t-lg px-4 py-2">
        <h2 className="text-xs sm:text-sm font-semibold break-all text-[var(--primary)] font-mono">
          📄 {filePath}
        </h2>
      </div>
      <div className="bg-[var(--code-bg)] border-x border-b border-[var(--border)] rounded-b-lg">
        <pre className="overflow-x-auto p-4">
          <code
            ref={codeRef}
            className="language-typescript text-xs sm:text-sm"
          >
            {content}
          </code>
        </pre>
      </div>
    </div>
  );
};
