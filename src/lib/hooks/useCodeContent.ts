/**
 * Custom hook for code content fetching
 * Handles both direct content and file path fetching
 */

import { useState, useEffect } from 'react';

export interface CodeFile {
  filePath: string;
  content: string;
}

interface UseCodeContentParams {
  codeContent?: CodeFile[];
  filePaths?: string[];
}

interface UseCodeContentReturn {
  content: CodeFile[];
  loading: boolean;
  error: Error | null;
}

/**
 * Hook to fetch and manage code content
 * Supports both direct content and fetching from file paths
 */
export const useCodeContent = ({ 
  codeContent, 
  filePaths 
}: UseCodeContentParams): UseCodeContentReturn => {
  const [content, setContent] = useState<CodeFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);

        if (codeContent) {
          // Direct content provided
          setContent(codeContent);
        } else if (filePaths && filePaths.length > 0) {
          // Fetch from file paths
          const results = await Promise.all(
            filePaths.map(async (filePath) => {
              const response = await fetch(
                `/api/get-file-content?path=${encodeURIComponent(filePath)}`
              );
              
              if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
              }
              
              const data = await response.json();
              return { filePath, content: data.content || '' };
            })
          );
          setContent(results);
        } else {
          setContent([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [codeContent, filePaths]);

  return { content, loading, error };
};
