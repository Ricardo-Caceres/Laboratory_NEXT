import React from 'react';
import CodeDisplay from './CodeDisplay';
import { StyledText } from './StyledText';
import { promises as fs } from 'fs';
import path from 'path';

interface HookPageLayoutProps {
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

export default async function HookPageLayout({
  title,
  description,
  filePaths,
  ClientExample,
}: HookPageLayoutProps) {
  const codeContent = await getCodeContent(filePaths);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
          <StyledText text={description} />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2">Code Example:</h3>
        </div>
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <ClientExample />
      </div>
    </div>
  );
}
