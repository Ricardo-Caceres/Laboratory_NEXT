/**
 * Get code content from file paths
 * Server-side utility to read file contents
 * 
 * @param filePaths - Array of file paths relative to project root
 * @returns Array of code files with content
 * 
 * @example
 * const content = await getCodeContent([
 *   'src/components/Button.tsx',
 *   'src/hooks/useToggle.ts'
 * ]);
 */

import { promises as fs } from 'fs';
import path from 'path';

export interface CodeFile {
  filePath: string;
  content: string;
}

export async function getCodeContent(filePaths: string[]): Promise<CodeFile[]> {
  const codeContent = await Promise.all(
    filePaths.map(async (filePath) => {
      const fullPath = path.join(process.cwd(), filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      return { filePath, content };
    })
  );
  
  return codeContent;
}
