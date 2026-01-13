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
    <div
      className={`w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto ${
        isHookVariant
          ? 'bg-gradient-to-br from-slate-900 to-slate-800'
          : 'bg-white'
      }`}
    >
      {isHookVariant ? (
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="text-sm sm:text-base">
            <StyledText text={description} />
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <div className="mb-4 text-sm sm:text-base text-gray-700">
            <StyledText text={description} />
          </div>
        </>
      )}

      <div className="mb-4">
        <h3
          className={`text-lg sm:text-xl font-bold mb-2 ${
            isHookVariant ? 'text-white' : 'text-gray-900'
          }`}
        >
          Code Example:
        </h3>
      </div>

      <CodeDisplay codeContent={codeContent} />
    </div>
  );
};
