'use client';

import { useState } from 'react';

// Domain Layer - Business Logic (innermost layer)
interface User {
  id: string;
  name: string;
  email: string;
}

class UserEntity implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}

  validate(): boolean {
    return (
      this.name.length > 0 &&
      this.email.includes('@') &&
      this.email.includes('.')
    );
  }
}

// Use Cases Layer - Application Business Rules
interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}

class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new UserEntity(
      Math.random().toString(36).substr(2, 9),
      name,
      email
    );

    if (!user.validate()) {
      throw new Error('Invalid user data');
    }

    await this.repository.save(user);
    return user;
  }
}

class GetAllUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.findAll();
  }
}

// Infrastructure Layer - External Dependencies (outermost layer)
class InMemoryUserRepository implements IUserRepository {
  private users: Map<string, User> = new Map();

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}

// Presentation Layer - UI Components
export default function CleanArchitectureExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dependency Injection
  const repository = new InMemoryUserRepository();
  const createUserUseCase = new CreateUserUseCase(repository);
  const getAllUsersUseCase = new GetAllUsersUseCase(repository);

  const handleCreateUser = async () => {
    try {
      setError('');
      setSuccess('');
      
      await createUserUseCase.execute(name, email);
      const allUsers = await getAllUsersUseCase.execute();
      
      setUsers(allUsers);
      setName('');
      setEmail('');
      setSuccess('User created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-cyan-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Clean Architecture</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Separation of concerns with dependency rule
            </p>
          </div>

          {/* Architecture Layers Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 border-2 border-yellow-300 text-center">
              <div className="font-bold text-yellow-900 mb-1">Domain</div>
              <div className="text-xs text-yellow-700">Entities, Business Rules</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 border-2 border-orange-300 text-center">
              <div className="font-bold text-orange-900 mb-1">Use Cases</div>
              <div className="text-xs text-orange-700">Application Logic</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 border-2 border-blue-300 text-center">
              <div className="font-bold text-blue-900 mb-1">Interface</div>
              <div className="text-xs text-blue-700">Controllers, Presenters</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 border-2 border-green-300 text-center">
              <div className="font-bold text-green-900 mb-1">Infrastructure</div>
              <div className="text-xs text-green-700">DB, UI, External APIs</div>
            </div>
          </div>

          {/* Create User Form */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 shadow-lg mb-6">
            <h3 className="text-white font-semibold mb-4">Create New User</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border-2 border-cyan-300 focus:border-white focus:outline-none transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border-2 border-cyan-300 focus:border-white focus:outline-none transition-colors"
              />
              <button
                onClick={handleCreateUser}
                className="w-full px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg shadow-md hover:bg-cyan-50 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Create User
              </button>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-4">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-4">
              <p className="text-green-700 font-medium">{success}</p>
            </div>
          )}

          {/* Users List */}
          {users.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Users ({users.length})
              </h3>
              <div className="space-y-2">
                {users.map(user => (
                  <div key={user.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">{user.id}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <p className="text-sm text-gray-700">
              <strong className="text-cyan-700">Clean Architecture</strong> separates code into layers with the dependency rule: inner layers don&apos;t depend on outer layers. Domain entities and use cases are at the center, independent of frameworks and UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
