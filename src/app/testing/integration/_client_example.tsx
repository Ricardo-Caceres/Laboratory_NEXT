'use client';

import { useState } from 'react';

// Simulated API service
class UserAPIService {
  private users = new Map<string, { id: string; name: string; email: string }>();

  async createUser(name: string, email: string) {
    await this.delay(500);
    const id = Math.random().toString(36).substr(2, 9);
    const user = { id, name, email };
    this.users.set(id, user);
    return user;
  }

  async getUser(id: string) {
    await this.delay(300);
    return this.users.get(id) || null;
  }

  async updateUser(id: string, updates: { name?: string; email?: string }) {
    await this.delay(400);
    const user = this.users.get(id);
    if (!user) throw new Error('User not found');
    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }

  async deleteUser(id: string) {
    await this.delay(300);
    return this.users.delete(id);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Component that integrates multiple services
function UserManagement() {
  const [api] = useState(() => new UserAPIService());
  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name || !email) return;
    setLoading(true);
    try {
      const user = await api.createUser(name, email);
      setUserId(user.id);
      setResult(`✅ User created: ${user.name} (ID: ${user.id})`);
      setName('');
      setEmail('');
    } catch (error) {
      setResult('❌ Error creating user');
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const user = await api.getUser(userId);
      if (user) {
        setResult(`✅ User found: ${user.name} (${user.email})`);
      } else {
        setResult('❌ User not found');
      }
    } catch (error) {
      setResult('❌ Error fetching user');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!userId || !name) return;
    setLoading(true);
    try {
      const user = await api.updateUser(userId, { name });
      setResult(`✅ User updated: ${user.name}`);
    } catch (error) {
      setResult('❌ Error updating user');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      await api.deleteUser(userId);
      setResult('✅ User deleted');
      setUserId('');
    } catch (error) {
      setResult('❌ Error deleting user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="px-3 py-2 border border-slate-300 rounded-lg"
            disabled={loading}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="px-3 py-2 border border-slate-300 rounded-lg"
            disabled={loading}
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleCreate}
            disabled={loading}
            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm"
          >
            Create
          </button>
          <button
            onClick={handleRead}
            disabled={loading || !userId}
            className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm"
          >
            Read
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading || !userId}
            className="px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            disabled={loading || !userId}
            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 text-sm"
          >
            Delete
          </button>
        </div>

        {userId && (
          <div className="p-3 bg-blue-50 rounded-lg text-sm">
            Current User ID: <code className="font-mono">{userId}</code>
          </div>
        )}

        {result && (
          <div className={`p-3 rounded-lg text-sm ${result.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {result}
          </div>
        )}

        {loading && (
          <div className="p-3 bg-slate-50 rounded-lg text-sm text-slate-600 text-center">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default function IntegrationTestingExample() {
  return (
    <div className="space-y-8">
      {/* What is Integration Testing */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is Integration Testing?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Integration testing verifies that different parts of your application work together correctly. It tests the interaction between components, services, APIs, and databases.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🔗 Multi-Component</h3>
            <p className="text-sm text-blue-800">Tests multiple units working together</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🌐 Real Dependencies</h3>
            <p className="text-sm text-green-800">May use actual APIs, databases (or test versions)</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">⚡ Slower than Unit</h3>
            <p className="text-sm text-purple-800">Takes longer but catches more bugs</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">🎯 Critical Paths</h3>
            <p className="text-sm text-amber-800">Focus on important user workflows</p>
          </div>
        </div>
      </div>

      {/* Testing Pyramid */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Testing Pyramid</h2>
        
        <div className="space-y-2">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-center">
            <p className="font-semibold text-amber-900 text-sm">E2E Tests (Few)</p>
            <p className="text-xs text-amber-700">Slow, expensive, full system</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
            <p className="font-semibold text-blue-900 text-sm">Integration Tests (Some)</p>
            <p className="text-xs text-blue-700">Medium speed, test component interactions</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
            <p className="font-semibold text-green-900 text-sm">Unit Tests (Many)</p>
            <p className="text-xs text-green-700">Fast, cheap, test isolated units</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Interactive Demo: CRUD Operations</h2>
        <p className="text-sm text-slate-600 mb-4">
          This component integrates UI + Service + "API" layers. Integration tests would verify they work together.
        </p>
        
        <UserManagement />
      </div>

      {/* Test Examples */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Integration Test Examples</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Testing Component + API Integration</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserManagement from './UserManagement';

describe('UserManagement Integration', () => {
  test('should create and retrieve user', async () => {
    const user = userEvent.setup();
    render(<UserManagement />);
    
    // Create user
    await user.type(screen.getByPlaceholderText(/name/i), 'John Doe');
    await user.type(screen.getByPlaceholderText(/email/i), 'john@example.com');
    await user.click(screen.getByRole('button', { name: /create/i }));
    
    // Verify creation
    await waitFor(() => {
      expect(screen.getByText(/user created/i)).toBeInTheDocument();
    });
    
    // Read user
    await user.click(screen.getByRole('button', { name: /read/i }));
    
    // Verify read
    await waitFor(() => {
      expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    });
  });
  
  test('should update user name', async () => {
    const user = userEvent.setup();
    render(<UserManagement />);
    
    // Create user first
    await user.type(screen.getByPlaceholderText(/name/i), 'Jane');
    await user.type(screen.getByPlaceholderText(/email/i), 'jane@test.com');
    await user.click(screen.getByRole('button', { name: /create/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/user created/i)).toBeInTheDocument();
    });
    
    // Update name
    await user.clear(screen.getByPlaceholderText(/name/i));
    await user.type(screen.getByPlaceholderText(/name/i), 'Jane Smith');
    await user.click(screen.getByRole('button', { name: /update/i }));
    
    // Verify update
    await waitFor(() => {
      expect(screen.getByText(/user updated.*Jane Smith/i)).toBeInTheDocument();
    });
  });
});`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Testing with Real Database (Test Container)</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { Pool } from 'pg';

describe('User Repository Integration', () => {
  let db: Pool;
  let repository: UserRepository;
  
  beforeAll(async () => {
    // Start test database container
    db = new Pool({ connectionString: process.env.TEST_DB_URL });
    repository = new UserRepository(db);
  });
  
  afterAll(async () => {
    await db.end();
  });
  
  beforeEach(async () => {
    // Clean database before each test
    await db.query('TRUNCATE TABLE users');
  });
  
  test('should save and retrieve user from database', async () => {
    const user = { name: 'Alice', email: 'alice@test.com' };
    
    // Save to real database
    const created = await repository.create(user);
    expect(created.id).toBeDefined();
    
    // Retrieve from database
    const retrieved = await repository.findById(created.id);
    expect(retrieved).toEqual(created);
  });
});`}
            </pre>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">Testing API Integration with MSW</p>
            <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock API server
const server = setupServer(
  rest.post('/api/users', (req, res, ctx) => {
    return res(ctx.json({ id: '123', name: 'Test User' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should handle API response correctly', async () => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'Test' }),
  });
  
  const data = await response.json();
  expect(data.id).toBe('123');
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* Unit vs Integration vs E2E */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Unit vs Integration vs E2E</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-3 font-semibold text-slate-900">Aspect</th>
                <th className="text-left p-3 font-semibold text-green-900">Unit</th>
                <th className="text-left p-3 font-semibold text-blue-900">Integration</th>
                <th className="text-left p-3 font-semibold text-amber-900">E2E</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Scope</td>
                <td className="p-3 text-green-800">Single function/class</td>
                <td className="p-3 text-blue-800">Multiple components</td>
                <td className="p-3 text-amber-800">Entire application</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Speed</td>
                <td className="p-3 text-green-800">Very fast ({'<'} 100ms)</td>
                <td className="p-3 text-blue-800">Medium (100-1000ms)</td>
                <td className="p-3 text-amber-800">Slow ({'>'} 1s)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Dependencies</td>
                <td className="p-3 text-green-800">All mocked</td>
                <td className="p-3 text-blue-800">Some real, some mocked</td>
                <td className="p-3 text-amber-800">All real</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Quantity</td>
                <td className="p-3 text-green-800">Many (100s-1000s)</td>
                <td className="p-3 text-blue-800">Some (10s-100s)</td>
                <td className="p-3 text-amber-800">Few (5-20)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Confidence</td>
                <td className="p-3 text-green-800">Low-Medium</td>
                <td className="p-3 text-blue-800">Medium-High</td>
                <td className="p-3 text-amber-800">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Follow the testing pyramid: many unit tests, some integration, few E2E</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use test databases/containers for realistic integration tests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Clean up data between tests to ensure independence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Test critical user workflows (signup, checkout, login)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use MSW (Mock Service Worker) for API mocking in integration tests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Run integration tests in CI/CD but keep them fast ({'<'} 5 minutes total)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
