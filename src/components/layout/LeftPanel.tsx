/**
 * LeftPanel Component
 * Left side panel showing title, description, and code
 */

import { StyledText } from '../StyledText';
import CodeDisplay from '../CodeDisplay';
import type { CodeFile } from '@/lib/types/layout';

interface LeftPanelProps {
  title: string;
  description: string;
  codeContent: CodeFile[];
  variant?: 'hook' | 'architecture';
}

/**
 * Left panel with title, description, and code display
 */
export const LeftPanel = ({
  title,
  description,
  codeContent,
  variant = 'hook',
}: LeftPanelProps) => {
  const isHookVariant = variant === 'hook';

  return (
    <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-[var(--panel)]">
      <div className="mb-6 p-4 sm:p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          {title}
        </h1>
        <div className="text-sm sm:text-base text-[var(--foreground)]">
          <StyledText text={description} />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--foreground)]">
          Code Example:
        </h3>
      </div>

      <CodeDisplay codeContent={codeContent} />
    </div>
  );
};
