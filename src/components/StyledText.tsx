/**
 * StyledText Component
 * Renders formatted text with markdown-like styling
 * 
 * Features:
 * - Bold text: **text**
 * - List items: - item
 * - Colored titles (text ending with :)
 * - Auto-detects list titles
 * 
 * Refactored to follow SOLID principles:
 * - Single Responsibility: Only renders styled text
 * - Uses utility functions for parsing logic
 * - Small, focused functions
 * 
 * @example
 * <StyledText text="**Bold** text\n- List item\nTitle:\n- Another item" />
 */

import React from 'react';
import {
  processColonText,
  isListTitleLine,
  isListItem,
  getListItemContent,
} from '@/lib/utils/textStyling';

interface StyledTextProps {
  text: string;
}

/**
 * Render a single line with styling
 */
const renderLine = (
  line: string,
  lineIndex: number,
  isListTitle: boolean
): React.ReactNode[] => {
  // Process bold text first
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.flatMap((part, partIndex) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${lineIndex}-${partIndex}`} className="font-bold text-cyan-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    
    // Process colon highlighting for non-bold parts
    return processColonText(part, lineIndex * 100 + partIndex, isListTitle);
  });
};

/**
 * StyledText Component
 * Parses and renders formatted text
 */
export function StyledText({ text }: StyledTextProps) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    // Handle list items
    if (isListItem(line)) {
      const content = getListItemContent(line);
      currentList.push(
        <li key={index} className="mb-1">
          {renderLine(content, index, false)}
        </li>
      );
      return;
    }

    // Flush current list before processing non-list line
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${index}`} className="list-disc pl-5 mb-2">
          {currentList}
        </ul>
      );
      currentList = [];
    }

    // Skip empty lines
    if (line.trim() === '') {
      return;
    }

    // Check if this line is a list title
    const isTitle = isListTitleLine(lines, index);

    // Render regular paragraph
    elements.push(
      <p
        key={index}
        className={
          isTitle
            ? 'font-bold text-white text-lg mb-2'
            : 'mb-2 text-white'
        }
      >
        {renderLine(line, index, isTitle)}
      </p>
    );
  });

  // Flush any remaining list items
  if (currentList.length > 0) {
    elements.push(
      <ul key="ul-final" className="list-disc pl-5 mb-2">
        {currentList}
      </ul>
    );
  }

  return <>{elements}</>;
}
