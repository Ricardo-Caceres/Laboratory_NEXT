/**
 * Layout types for page layouts
 * Shared types for HookPageLayout and ArchitecturePageLayout
 */

export interface CodeFile {
  filePath: string;
  content: string;
}

export interface PageLayoutProps {
  title: string;
  description: string;
  filePaths: string[];
  ClientExample: React.ComponentType;
}

export interface LeftPanelProps {
  title: string;
  description: string;
  codeContent: CodeFile[];
  variant?: 'hook' | 'architecture';
}

export interface RightPanelProps {
  children: React.ReactNode;
}
