'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  status: 'idle' | 'loading' | 'success' | 'error';
}

export default function TanStackQueryExample() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'success' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'success' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const fetchUsers = () => {
    setIsLoading(true);
    // Simulate TanStack Query fetch
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'success' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'success' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'success' },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const createUser = () => {
    if (!newUser.name || !newUser.email) return;

    const user: User = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      status: 'loading',
    };

    setUsers([...users, user]);

    // Simulate mutation
    setTimeout(() => {
      setUsers(prev =>
        prev.map(u => (u.id === user.id ? { ...u, status: 'success' as const } : u))
      );
      setNewUser({ name: '', email: '' });
    }, 800);
  };

  const refetchUser = (id: number) => {
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, status: 'loading' as const } : u))
    );

    setTimeout(() => {
      setUsers(prev =>
        prev.map(u => (u.id === id ? { ...u, status: 'success' as const } : u))
      );
    }, 500);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">TanStack Query Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Query Features:</h3>
        <div className="space-y-1 text-sm">
          <p>✓ Automatic caching and background refetching</p>
          <p>✓ Mutations with optimistic updates</p>
          <p>✓ Query invalidation and refetching</p>
          <p>✓ Loading and error states</p>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={fetchUsers}
          disabled={isLoading}
          className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Fetching...' : 'Fetch Users (useQuery)'}
        </button>
      </div>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-3">Create User (useMutation):</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 border border-[var(--border)] rounded bg-[var(--background)] text-sm"
          />
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
            className="w-full p-2 border border-[var(--border)] rounded bg-[var(--background)] text-sm"
          />
          <button
            onClick={createUser}
            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Create User
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold mb-3">Users (Cached Data):</h3>
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg flex justify-between items-center"
          >
            <div className="flex-1">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm opacity-70">{user.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'loading'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                    : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                }`}
              >
                {user.status}
              </span>
              <button
                onClick={() => refetchUser(user.id)}
                className="text-sm text-[var(--primary)] hover:underline"
              >
                Refetch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
