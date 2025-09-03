'use client';

import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

interface CodeDisplayProps {
  codeContent: { filePath: string; content: string }[];
}

export default function CodeDisplay({ codeContent }: CodeDisplayProps) {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (codeContent) {
      codeRefs.current.forEach((codeRef) => {
        if (codeRef) {
          hljs.highlightElement(codeRef);
        }
      });
    }
  }, [codeContent]);

  if (!codeContent) {
    return null;
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-h-[calc(100vh-4rem)]">
      {codeContent.map((file, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h2 className="text-lg font-bold mb-2">{file.filePath}</h2>
          <pre>
            <code
              ref={(el) => (codeRefs.current[index] = el)}
              className="language-typescript"
            >
              {file.content}
            </code>
          </pre>
        </div>
      ))}
    </div>
  );
}