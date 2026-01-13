/**
 * BasePageLayout Component
 * Reusable layout for Hook and Architecture pages
 * 
 * Features:
 * - Two-column layout (left: code, right: example)
 * - Responsive design
 * - Variant support for different styling
 * 
 * Follows SOLID principles:
 * - Single Responsibility: Only handles layout structure
 * - Open/Closed: Extensible via variant prop
 * - Eliminates duplication between HookPageLayout and ArchitecturePageLayout
 */

import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import type { CodeFile } from '@/lib/types/layout';

interface BasePageLayoutProps {
  title: string;
  description: string;
  codeContent: CodeFile[];
  ClientExample: React.ComponentType;
  variant?: 'hook' | 'architecture';
}

/**
 * Base layout component for page layouts
 * Reused by HookPageLayout and ArchitecturePageLayout
 */
export const BasePageLayout = ({
  title,
  description,
  codeContent,
  ClientExample,
  variant = 'hook',
}: BasePageLayoutProps) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <LeftPanel
        title={title}
        description={description}
        codeContent={codeContent}
        variant={variant}
      />
      
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
};
