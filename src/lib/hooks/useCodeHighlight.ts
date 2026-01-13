/**
 * Custom hook for code syntax highlighting
 * Manages highlight.js highlighting of code blocks
 */

import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

interface UseCodeHighlightParams {
  enabled: boolean;
  content: unknown[];
}

/**
 * Hook to apply syntax highlighting to code blocks
 * Automatically highlights when content changes
 */
export const useCodeHighlight = ({ enabled, content }: UseCodeHighlightParams) => {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!enabled || content.length === 0) return;

    codeRefs.current.forEach((codeRef) => {
      if (codeRef && !codeRef.dataset.highlighted) {
        hljs.highlightElement(codeRef);
        codeRef.dataset.highlighted = 'true';
      }
    });
  }, [enabled, content]);

  return { codeRefs };
};
