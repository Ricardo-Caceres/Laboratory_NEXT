import { readFileSync } from 'fs';
import path from 'path';

interface CodeDisplayProps {
  filePaths: string[];
}

export default function CodeDisplay({ filePaths }: CodeDisplayProps) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-h-[calc(100vh-4rem)]">
      {filePaths.map((filePath, index) => {
        let codeContent: string = '';
        try {
          const absolutePath = path.join(process.cwd(), filePath);
          codeContent = readFileSync(absolutePath, 'utf-8');
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          codeContent = `Error: Could not read file ${filePath}`;
        }
        return (
          <div key={index} className="mb-4 last:mb-0">
            <h2 className="text-lg font-bold mb-2">{filePath}</h2>
            <pre><code className="language-typescript">{codeContent}</code></pre>
          </div>
        );
      })}
    </div>
  );
}