'use client';

import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function GraphQLBasicsExample() {
  const [query, setQuery] = useState(`{
  user(id: "1") {
    id
    name
    email
  }
}`);
  
  const [result, setResult] = useState<User | null>(null);

  const executeQuery = () => {
    // Simulated GraphQL query execution
    const mockData: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    };
    setResult(mockData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">GraphQL Query Example</h2>
      
      <div className="mb-4">
        <label className="block mb-2 font-semibold">GraphQL Query:</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border border-[var(--border)] rounded-lg font-mono text-sm bg-[var(--panel)]"
          rows={8}
        />
      </div>

      <button
        onClick={executeQuery}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Execute Query
      </button>

      {result && (
        <div className="mt-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">Result:</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
