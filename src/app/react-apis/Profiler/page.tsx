import { readFileSync } from 'fs';
import path from 'path';
import ProfilerExample from './_client_example';

export default function ProfilerExamplePage() {
  const filePath = 'src/app/react-apis/Profiler/_client_example.tsx';
  const codeContent = [{
    filePath: filePath,
    content: readFileSync(path.join(process.cwd(), filePath), 'utf-8'),
  }];

  return <ProfilerExample codeContent={codeContent} />;
}