'use client';

import { useState } from 'react';

// ===== DOMAIN LAYER (Core Business Logic) =====
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}

// Business logic (independent of infrastructure)
class UserService {
  constructor(private repository: UserRepository) {}

  async createUser(name: string, email: string): Promise<User> {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
    };
    await this.repository.save(user);
    return user;
  }

  async getUser(id: string): Promise<User | null> {
    return this.repository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repository.findAll();
  }
}

// ===== ADAPTERS (Infrastructure) =====

// Secondary Adapter: In-Memory Repository (could be DB, API, etc.)
class InMemoryUserRepository implements UserRepository {
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

// Could easily swap with this:
// class PostgresUserRepository implements UserRepository { ... }
// class MongoUserRepository implements UserRepository { ... }
// class RestAPIUserRepository implements UserRepository { ... }

export default function HexagonalArchitectureExample() {
  const [repository] = useState(() => new InMemoryUserRepository());
  const [userService] = useState(() => new UserService(repository));
  
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const loadUsers = async () => {
    const allUsers = await userService.getAllUsers();
    setUsers(allUsers);
  };

  const handleCreateUser = async () => {
    if (!name || !email) {
      setMessage('❌ Name and email are required');
      return;
    }

    try {
      await userService.createUser(name, email);
      setMessage(`✅ User "${name}" created successfully`);
      setName('');
      setEmail('');
      await loadUsers();
    } catch (error) {
      setMessage('❌ Error creating user');
    }
  };

  return (
    <div className="space-y-8">
      {/* What is Hexagonal Architecture */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is Hexagonal Architecture?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Also known as <strong>Ports and Adapters</strong>, this architecture isolates core business logic from external concerns (databases, APIs, UI). The domain is at the center, and adapters connect it to the outside world.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🎯 Domain (Hexagon)</h3>
            <p className="text-sm text-blue-800">Core business logic, entities, use cases</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🔌 Ports</h3>
            <p className="text-sm text-green-800">Interfaces that define contracts</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🔄 Adapters</h3>
            <p className="text-sm text-purple-800">Implementations (DB, API, UI)</p>
          </div>
        </div>
      </div>

      {/* Diagram */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Architecture Layers</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <h3 className="font-semibold text-blue-900 mb-2">Domain Layer (Center)</h3>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Entities (User, Product)</div>
              <div>• Use Cases (UserService)</div>
              <div>• Business Rules</div>
              <div>• NO dependencies on infrastructure</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Ports (Interfaces)</h3>
              <div className="space-y-1 text-sm text-green-800">
                <div>• UserRepository interface</div>
                <div>• PaymentGateway interface</div>
                <div>• NotificationService interface</div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Adapters (Implementations)</h3>
              <div className="space-y-1 text-sm text-purple-800">
                <div>• InMemoryUserRepository</div>
                <div>• PostgresUserRepository</div>
                <div>• RestAPIAdapter</div>
                <div>• React UI Components</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Interactive Example: User Management</h2>
        <p className="text-sm text-slate-600 mb-4">
          This demo uses InMemoryUserRepository, but could easily swap to PostgreSQL, MongoDB, or REST API.
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCreateUser}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create User
            </button>
            <button
              onClick={loadUsers}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Load Users
            </button>
          </div>

          {message && (
            <div className={`p-3 rounded-lg ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}

          {users.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Users:</h3>
              {users.map((user) => (
                <div key={user.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-sm"><strong>{user.name}</strong></p>
                  <p className="text-xs text-slate-600">{user.email}</p>
                  <p className="text-xs text-slate-400">ID: {user.id}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Code Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Code Structure</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">1. Domain Layer (Port)</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Domain defines the contract (Port)
interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}

// Business logic depends ONLY on the port
class UserService {
  constructor(private repository: UserRepository) {}
  
  async createUser(name: string, email: string): Promise<User> {
    const user = { id: generateId(), name, email };
    await this.repository.save(user);
    return user;
  }
}`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">2. Adapters (Implementations)</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Adapter 1: In-Memory
class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();
  async save(user: User) { this.users.set(user.id, user); }
  // ...
}

// Adapter 2: PostgreSQL
class PostgresUserRepository implements UserRepository {
  async save(user: User) {
    await db.query('INSERT INTO users ...');
  }
  // ...
}

// Adapter 3: REST API
class RestAPIUserRepository implements UserRepository {
  async save(user: User) {
    await fetch('/api/users', { method: 'POST', body: JSON.stringify(user) });
  }
  // ...
}`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">3. Dependency Injection</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`// Inject the adapter you need
const repository = new InMemoryUserRepository();
// const repository = new PostgresUserRepository();
// const repository = new RestAPIUserRepository();

const userService = new UserService(repository);

// Business logic stays the same!
await userService.createUser('John', 'john@example.com');`}
            </pre>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Benefits</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">✅ Testability</h3>
            <p className="text-sm text-green-800">Easy to mock dependencies and test business logic in isolation</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">✅ Flexibility</h3>
            <p className="text-sm text-blue-800">Swap implementations without changing business logic</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">✅ Independence</h3>
            <p className="text-sm text-purple-800">Domain doesn't depend on frameworks or databases</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">✅ Maintainability</h3>
            <p className="text-sm text-amber-800">Clear separation of concerns makes code easier to maintain</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Keep domain layer free of external dependencies (no imports of DB, frameworks)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Define ports (interfaces) in the domain layer</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Implement adapters in separate modules/folders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use dependency injection to wire adapters to domain</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Test business logic with mock adapters</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
