'use client';

import { useState, useEffect } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

// Presentational Component - Only handles UI
function UserListPresentation({ users, loading, error }: { 
  users: Array<{ id: number; name: string; email: string }>;
  loading: boolean;
  error: string | null;
}) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// Container Component - Handles business logic and data fetching
function UserListContainer() {
  const [users, setUsers] = useState<Array<{ id: number; name: string; email: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data.slice(0, 5));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return <UserListPresentation users={users} loading={loading} error={error} />;
}

export default function ClientExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Container/Presentational Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Separating business logic from UI presentation</p>
            </div>

            <UserListContainer />

            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Clear separation of concerns</li>
                <li>✓ Easier testing (test logic and UI separately)</li>
                <li>✓ Better reusability of presentation components</li>
                <li>✓ Simpler component maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
