import React from 'react';
import CodeDisplay from './CodeDisplay';
import { StyledText } from './StyledText';
import { promises as fs } from 'fs';
import path from 'path';

interface ArchitecturePageLayoutProps {
  title: string;
  description: string;
  filePaths: string[];
  ClientExample: React.ComponentType;
}

async function getCodeContent(filePaths: string[]) {
  const codeContent = await Promise.all(
    filePaths.map(async (filePath) => {
      const fullPath = path.join(process.cwd(), filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      return { filePath, content };
    })
  );
  return codeContent;
}

export default async function ArchitecturePageLayout({
  title,
  description,
  filePaths,
  ClientExample,
}: ArchitecturePageLayoutProps) {
  const codeContent = await getCodeContent(filePaths);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      {/* Left Panel - Description and Code */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
        <div className="mb-4 text-sm sm:text-base">
          <StyledText text={description} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2">Code Example:</h3>
        <CodeDisplay codeContent={codeContent} />
      </div>
      
      {/* Right Panel - Live Example */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 min-h-[400px] lg:min-h-0">
        <div className="w-full max-w-4xl">
          <ClientExample />
        </div>
      </div>
    </div>
  );
}
