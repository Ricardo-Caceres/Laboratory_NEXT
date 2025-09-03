import React from 'react';

interface StyledTextProps {
  text: string;
}

export function StyledText({ text }: StyledTextProps) {
  const renderLineContent = (lineText: string, lineIndex: number, isListTitle: boolean = false) => {
    // First, handle existing bold text (**)
    const parts = lineText.split(/(\*\*[^*]+\*\*)/g);
    const processedParts = parts.map((part, partPartIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={`${lineIndex}-${partPartIndex}`} className="font-bold text-cyan-400">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Only apply blue color to text ending with colon if it's NOT a list title
      if (!isListTitle) {
        const colonParts = part.split(/([^:]+?:)/g); // Split by text ending with a colon
        return colonParts.map((colonPart, colonPartIndex) => {
          if (colonPart.endsWith(':') && colonPart.length > 1) { // Ensure it's not just a colon
            return (
              <span key={`${lineIndex}-${partPartIndex}-${colonPartIndex}`} className="font-bold text-blue-500">
                {colonPart}
              </span>
            );
          }
          return <span key={`${lineIndex}-${partPartIndex}-${colonPartIndex}`}>{colonPart}</span>;
        });
      }
      return <span key={`${lineIndex}-${partPartIndex}`}>{part}</span>;
    });
    return processedParts;
  };

  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith('- ')) {
      const listItemContent = line.trim().substring(2);
      currentList.push(
        <li key={index} className="mb-1">
          {renderLineContent(listItemContent, index, false)}
        </li>
      );
    } else {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${index - 1}`} className="list-disc pl-5 mb-2">{currentList}</ul>);
        currentList = [];
      }
      // Check if this line is a list title
      const isListTitle = (index + 1 < lines.length && lines[index + 1].trim().startsWith('- '));
      // Handle empty lines or lines that are just whitespace
      if (line.trim() !== '') {
        elements.push(
          <p key={index} className={isListTitle ? "font-bold text-white text-lg mb-2" : "mb-2 text-white"}>
            {renderLineContent(line, index, isListTitle)}
          </p>
        );
      }
    }
  });

  // Add any remaining list items
  if (currentList.length > 0) {
    elements.push(<ul key={`ul-final`} className="list-disc pl-5 mb-2">{currentList}</ul>);
  }

  return <>{elements}</>;
}
