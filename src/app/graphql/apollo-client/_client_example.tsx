'use client';

import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function ApolloClientExample() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    setLoading(true);
    // Simulate Apollo Client query
    setTimeout(() => {
      setUsers([
        { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
        { id: '2', name: 'Bob Smith', email: 'bob@example.com' },
        { id: '3', name: 'Carol White', email: 'carol@example.com' },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Apollo Client Example</h2>
      
      <button
        onClick={fetchUsers}
        disabled={loading}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Fetch Users with Apollo'}
      </button>

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Users from GraphQL:</h3>
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg"
              >
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm opacity-70">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
