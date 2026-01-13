/**
 * Text styling utilities
 * Parse and style markdown-like text with bold, colors, and lists
 */

import type { ReactNode } from 'react';

/**
 * Check if a line ends with colon (title pattern)
 */
const endsWithColon = (text: string): boolean => {
  return text.trim().endsWith(':') && text.trim().length > 1;
};

/**
 * Process bold text (**text**)
 */
export const processBoldText = (text: string, lineIndex: number): ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${lineIndex}-bold-${index}`} className="font-bold text-cyan-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${lineIndex}-text-${index}`}>{part}</span>;
  });
};

/**
 * Process text with colon highlighting (key: value pattern)
 */
export const processColonText = (
  text: string, 
  lineIndex: number,
  isListTitle: boolean
): ReactNode[] => {
  if (isListTitle) {
    return [<span key={`${lineIndex}-plain`}>{text}</span>];
  }

  const colonParts = text.split(/([^:]+?:)/g);
  
  return colonParts.map((part, index) => {
    if (endsWithColon(part)) {
      return (
        <span key={`${lineIndex}-colon-${index}`} className="font-bold text-blue-500">
          {part}
        </span>
      );
    }
    return <span key={`${lineIndex}-part-${index}`}>{part}</span>;
  });
};

/**
 * Check if next line starts a list
 */
export const isListTitleLine = (lines: string[], currentIndex: number): boolean => {
  const nextLine = lines[currentIndex + 1];
  return nextLine?.trim().startsWith('- ') ?? false;
};

/**
 * Check if line is a list item
 */
export const isListItem = (line: string): boolean => {
  return line.trim().startsWith('- ');
};

/**
 * Extract list item content (remove '- ' prefix)
 */
export const getListItemContent = (line: string): string => {
  return line.trim().substring(2);
};
