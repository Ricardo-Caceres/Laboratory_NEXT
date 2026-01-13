/**
 * HookPageLayout Component
 * Layout for React Hook documentation pages
 * 
 * Refactored to use BasePageLayout:
 * - Eliminates code duplication
 * - Uses shared utilities
 * - Follows DRY principle
 * 
 * @example
 * <HookPageLayout
 *   title="useState"
 *   description="Manage component state..."
 *   filePaths={['src/examples/useState.tsx']}
 *   ClientExample={UseStateExample}
 * />
 */

import React from 'react';
import { getCodeContent } from '@/lib/utils/getCodeContent';
import { BasePageLayout } from './layout/BasePageLayout';
import type { PageLayoutProps } from '@/lib/types/layout';

/**
 * Hook page layout (Server Component)
 * Fetches code content and renders with hook variant styling
 */
export default async function HookPageLayout({
  title,
  description,
  filePaths,
  ClientExample,
}: PageLayoutProps) {
  const codeContent = await getCodeContent(filePaths);

  return (
    <BasePageLayout
      title={title}
      description={description}
      codeContent={codeContent}
      ClientExample={ClientExample}
      variant="hook"
    />
  );
}
