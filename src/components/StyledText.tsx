/**
 * StyledText Component
 * Renders formatted text with markdown-like styling and improved spacing
 * 
 * Features:
 * - Bold text: **text**
 * - List items: - item
 * - Colored titles (text ending with :)
 * - Auto-detects list titles
 * - Smart spacing between sections
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
        <strong key={`${lineIndex}-${partIndex}`} className="font-bold text-[var(--primary)]">
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
 * Parses and renders formatted text with improved spacing
 */
export function StyledText({ text }: StyledTextProps) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let previousWasListTitle = false;

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Handle list items
    if (isListItem(line)) {
      const content = getListItemContent(line);
      currentList.push(
        <li key={index} className="mb-2 leading-relaxed">
          {renderLine(content, index, false)}
        </li>
      );
      previousWasListTitle = false;
      return;
    }

    // Flush current list before processing non-list line
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${index}`} className="list-disc pl-6 mb-6 space-y-2">
          {currentList}
        </ul>
      );
      currentList = [];
    }

    // Handle empty lines - add spacing divider
    if (trimmedLine === '') {
      // Add spacing element if there's content before
      if (elements.length > 0) {
        elements.push(
          <div key={`space-${index}`} className="h-6"></div>
        );
      }
      return;
    }

    // Check if this line is a list title
    const isTitle = isListTitleLine(lines, index);

    // Add spacing before section titles
    const marginTop = isTitle && elements.length > 0 ? 'mt-8' : '';
    const marginBottom = isTitle ? 'mb-4' : 'mb-3';

    // Render regular paragraph
    elements.push(
      <p
        key={index}
        className={`${marginBottom} leading-relaxed ${
          isTitle
            ? `font-bold text-[var(--foreground)] text-lg ${marginTop}`
            : 'text-[var(--foreground)] opacity-90'
        }`}
      >
        {renderLine(line, index, isTitle)}
      </p>
    );

    previousWasListTitle = isTitle;
  });

  // Flush any remaining list items
  if (currentList.length > 0) {
    elements.push(
      <ul key="ul-final" className="list-disc pl-6 mb-6 space-y-2">
        {currentList}
      </ul>
    );
  }

  return <div className="space-y-1">{elements}</div>;
}
