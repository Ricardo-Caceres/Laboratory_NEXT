/**
 * ArchitecturePageLayout Component
 * Layout for Software Architecture documentation pages
 * 
 * Refactored to use BasePageLayout:
 * - Eliminates code duplication with HookPageLayout
 * - Uses shared utilities
 * - Follows DRY principle
 * 
 * @example
 * <ArchitecturePageLayout
 *   title="Clean Architecture"
 *   description="Separation of concerns..."
 *   filePaths={['src/examples/clean-architecture.tsx']}
 *   ClientExample={CleanArchExample}
 * />
 */

import React from 'react';
import { getCodeContent } from '@/lib/utils/getCodeContent';
import { BasePageLayout } from './layout/BasePageLayout';
import type { PageLayoutProps } from '@/lib/types/layout';

/**
 * Architecture page layout (Server Component)
 * Fetches code content and renders with architecture variant styling
 */
export default async function ArchitecturePageLayout({
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
      variant="architecture"
    />
  );
}
