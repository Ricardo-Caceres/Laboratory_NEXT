import { readFileSync } from 'fs';
import path from 'path';
import CreateContextExample from './_client_example';

export default function CreateContextExamplePage() {
  const pagePath = 'src/app/react-apis/createContext/_client_example.tsx';
  const themeContextPath = 'src/app/react-apis/createContext/ThemeContext.tsx';
  const codeContent = [
    {
      filePath: pagePath,
      content: readFileSync(path.join(process.cwd(), pagePath), 'utf-8'),
    },
    {
      filePath: themeContextPath,
      content: readFileSync(path.join(process.cwd(), themeContextPath), 'utf-8'),
    },
  ];

  return <CreateContextExample codeContent={codeContent} />;
}