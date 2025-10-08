'use client';

import { useState } from 'react';

// Old API format
interface LegacyUser {
  user_name: string;
  user_email: string;
  user_age: number;
}

// New API format
interface ModernUser {
  name: string;
  email: string;
  age: number;
  id: string;
}

// Adapter to convert legacy format to modern format
class UserAdapter {
  static adapt(legacyUser: LegacyUser): ModernUser {
    return {
      name: legacyUser.user_name,
      email: legacyUser.user_email,
      age: legacyUser.user_age,
      id: Math.random().toString(36).substr(2, 9)
    };
  }

  static adaptMany(legacyUsers: LegacyUser[]): ModernUser[] {
    return legacyUsers.map(user => this.adapt(user));
  }
}

// Legacy API service
class LegacyAPIService {
  static getUsers(): LegacyUser[] {
    return [
      { user_name: 'John Doe', user_email: 'john@example.com', user_age: 30 },
      { user_name: 'Jane Smith', user_email: 'jane@example.com', user_age: 25 },
      { user_name: 'Bob Johnson', user_email: 'bob@example.com', user_age: 35 },
    ];
  }
}

// Modern UserCard component that expects ModernUser format
function UserCard({ user }: { user: ModernUser }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-xs text-gray-500">ID: {user.id}</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {user.email}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {user.age} years old
        </div>
      </div>
    </div>
  );
}

export default function AdapterPatternExample() {
  const [users, setUsers] = useState<ModernUser[]>([]);
  const [showLegacyFormat, setShowLegacyFormat] = useState(false);
  const legacyUsers = LegacyAPIService.getUsers();

  const loadUsers = () => {
    // Use adapter to convert legacy format to modern format
    const adaptedUsers = UserAdapter.adaptMany(legacyUsers);
    setUsers(adaptedUsers);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Adapter Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Convert incompatible interfaces to work together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-red-900">Legacy API Format</h3>
              </div>
              <div className="bg-white/80 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-800">
{`{
  user_name: "John",
  user_email: "john@...",
  user_age: 30
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-green-900">Modern Format</h3>
              </div>
              <div className="bg-white/80 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-800">
{`{
  name: "John",
  email: "john@...",
  age: 30,
  id: "abc123"
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={loadUsers}
              className="flex-1 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Load Users (via Adapter)
            </button>
            <button
              onClick={() => setShowLegacyFormat(!showLegacyFormat)}
              className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              {showLegacyFormat ? 'Hide' : 'Show'} Raw Legacy Data
            </button>
          </div>

          {showLegacyFormat && (
            <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
              <pre className="text-green-400 text-xs font-mono">
                {JSON.stringify(legacyUsers, null, 2)}
              </pre>
            </div>
          )}

          {users.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Adapted Users ({users.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-700">
              <strong className="text-emerald-700">Adapter Pattern</strong> allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, converting the interface of one class into another that clients expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
