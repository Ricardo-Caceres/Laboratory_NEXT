'use client';

import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

interface CodeDisplayProps {
  codeContent?: { filePath: string; content: string }[];
  filePaths?: string[];
}

export default function CodeDisplay({ codeContent, filePaths }: CodeDisplayProps) {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);
  const [loadedContent, setLoadedContent] = useState<{ filePath: string; content: string }[]>([]);

  useEffect(() => {
    if (filePaths && filePaths.length > 0) {
      Promise.all(
        filePaths.map(async (filePath) => {
          const response = await fetch(`/api/get-file-content?path=${encodeURIComponent(filePath)}`);
          const data = await response.json();
          return { filePath, content: data.content || '' };
        })
      ).then(setLoadedContent);
    } else if (codeContent) {
      setLoadedContent(codeContent);
    }
  }, [filePaths, codeContent]);

  useEffect(() => {
    if (loadedContent.length > 0) {
      codeRefs.current.forEach((codeRef) => {
        if (codeRef) {
          hljs.highlightElement(codeRef);
        }
      });
    }
  }, [loadedContent]);

  if (loadedContent.length === 0) {
    return <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg text-sm sm:text-base">Loading code...</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg overflow-auto max-h-[400px] sm:max-h-[600px] lg:max-h-[calc(100vh-20rem)]">
      {loadedContent.map((file, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h2 className="text-sm sm:text-lg font-bold mb-2 break-all">{file.filePath}</h2>
          <pre className="overflow-x-auto">
            <code
              ref={(el) => { codeRefs.current[index] = el; }}
              className="language-typescript text-xs sm:text-sm"
            >
              {file.content}
            </code>
          </pre>
        </div>
      ))}
    </div>
  );
}
