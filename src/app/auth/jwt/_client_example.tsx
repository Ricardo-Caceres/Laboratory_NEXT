'use client';

import { useState } from 'react';

interface User {
  id: number;
  email: string;
  name: string;
}

export default function JWTAuthExample() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = () => {
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate JWT authentication
    setTimeout(() => {
      // Simulate token generation
      const mockToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(
        JSON.stringify({
          userId: 1,
          email: credentials.email,
          exp: Date.now() + 86400000,
        })
      )}.signature`;

      const mockUser: User = {
        id: 1,
        email: credentials.email,
        name: credentials.email.split('@')[0],
      };

      setToken(mockToken);
      setUser(mockUser);
      setIsLoading(false);
      setCredentials({ email: '', password: '' });
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    setToken('');
  };

  const decodeToken = () => {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      
      const payload = JSON.parse(atob(parts[1]));
      return payload;
    } catch {
      return null;
    }
  };

  const tokenPayload = token ? decodeToken() : null;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">JWT Authentication Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">JWT Flow:</h3>
        <div className="space-y-1 text-sm">
          <p>1. User submits credentials</p>
          <p>2. Server validates and creates JWT</p>
          <p>3. Client stores token</p>
          <p>4. Token sent with each request</p>
          <p>5. Server verifies token signature</p>
        </div>
      </div>

      {!user ? (
        <div className="p-6 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-4">Login</h3>
          
          <div className="space-y-3 mb-4">
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="Email"
              className="w-full p-3 border border-[var(--border)] rounded bg-[var(--background)]"
            />
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Password"
              className="w-full p-3 border border-[var(--border)] rounded bg-[var(--background)]"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 mb-3">{error}</p>
          )}

          <button
            onClick={login}
            disabled={isLoading}
            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>

          <p className="text-xs opacity-70 mt-3 text-center">
            Demo: Use any email and password
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-6 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Authenticated User</h3>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs rounded-full">
                Logged In
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm">
                <strong>ID:</strong> {user.id}
              </p>
              <p className="text-sm">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-sm">
                <strong>Email:</strong> {user.email}
              </p>
            </div>

            <button
              onClick={logout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="p-6 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">JWT Token</h3>
            <div className="bg-[var(--background)] p-3 rounded font-mono text-xs break-all mb-3">
              {token}
            </div>

            {tokenPayload && (
              <>
                <h4 className="font-semibold mb-2 text-sm">Decoded Payload:</h4>
                <pre className="bg-[var(--background)] p-3 rounded text-xs overflow-auto">
                  {JSON.stringify(tokenPayload, null, 2)}
                </pre>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
