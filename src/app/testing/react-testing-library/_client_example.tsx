'use client';

import { useState } from 'react';

// Example components to demonstrate testing concepts
function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <p className="text-lg mb-3">Count: <span data-testid="count-value">{count}</span></p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-3 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setSuccess(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        
        {error && (
          <div role="alert" className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {error}
          </div>
        )}
        
        {success && (
          <div role="alert" className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
            Login successful!
          </div>
        )}
        
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'Bob Johnson', role: 'User' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <h3 className="font-semibold text-slate-900 mb-3">Users</h3>
      <ul className="space-y-2" role="list">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 bg-slate-50 rounded-lg border border-slate-200"
            data-testid={`user-${user.id}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-900">{user.name}</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">{user.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactTestingLibraryExample() {
  return (
    <div className="space-y-8">
      {/* What is RTL */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is React Testing Library?</h2>
        <p className="text-sm text-slate-600 mb-4">
          React Testing Library (RTL) is a testing library that encourages testing React components the way users interact with them. It focuses on testing behavior, not implementation details.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">👤 User-Centric</h3>
            <p className="text-sm text-blue-800">Test components as users would interact with them</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🎯 Accessibility</h3>
            <p className="text-sm text-green-800">Encourages accessible components via semantic queries</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🔒 Maintainable</h3>
            <p className="text-sm text-purple-800">Less brittle tests that don't break on refactoring</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">🚀 Built-in Tools</h3>
            <p className="text-sm text-amber-800">Includes fireEvent, waitFor, and more utilities</p>
          </div>
        </div>
      </div>

      {/* Counter Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Example: Testing a Counter</h2>
        <p className="text-sm text-slate-600 mb-4">
          Try the component, then see how we would test it.
        </p>
        
        <Counter initialCount={5} />

        <div className="mt-4 p-4 bg-slate-50 rounded border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">Test Code:</p>
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('renders with initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('5');
  });

  test('increments count when increment button clicked', () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
  });

  test('decrements count when decrement button clicked', () => {
    render(<Counter initialCount={5} />);
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('4');
  });

  test('resets count to 0 when reset button clicked', () => {
    render(<Counter initialCount={10} />);
    const resetBtn = screen.getByRole('button', { name: /reset/i });
    
    fireEvent.click(resetBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });
});`}
          </pre>
        </div>
      </div>

      {/* Form Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Example: Testing a Form</h2>
        <p className="text-sm text-slate-600 mb-4">
          Form validation and submission testing.
        </p>
        
        <LoginForm />

        <div className="mt-4 p-4 bg-slate-50 rounded border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">Test Code:</p>
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('shows error when fields are empty', () => {
    render(<LoginForm />);
    const submitBtn = screen.getByRole('button', { name: /login/i });
    
    fireEvent.click(submitBtn);
    
    expect(screen.getByRole('alert')).toHaveTextContent(
      /email and password are required/i
    );
  });

  test('shows error when password is too short', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@test.com');
    await user.type(screen.getByLabelText(/password/i), '123');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    expect(screen.getByRole('alert')).toHaveTextContent(
      /password must be at least 6 characters/i
    );
  });

  test('shows success message on valid submission', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@test.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    expect(screen.getByRole('alert')).toHaveTextContent(/login successful/i);
  });
});`}
          </pre>
        </div>
      </div>

      {/* List Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Example: Testing Lists</h2>
        <p className="text-sm text-slate-600 mb-4">
          Querying and asserting on list items.
        </p>
        
        <UserList />

        <div className="mt-4 p-4 bg-slate-50 rounded border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">Test Code:</p>
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList', () => {
  test('renders all users', () => {
    render(<UserList />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
  });

  test('renders correct number of users', () => {
    render(<UserList />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('displays user roles', () => {
    render(<UserList />);
    
    const adminBadges = screen.getAllByText('Admin');
    const userBadges = screen.getAllByText('User');
    
    expect(adminBadges).toHaveLength(1);
    expect(userBadges).toHaveLength(2);
  });
});`}
          </pre>
        </div>
      </div>

      {/* Query Priority */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Query Priority (Use in Order)</h2>
        <p className="text-sm text-slate-600 mb-4">
          Follow this priority for accessible and maintainable tests.
        </p>
        
        <div className="space-y-2">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-900 text-sm">1. getByRole</p>
            <code className="text-xs text-green-700">screen.getByRole('button', {'{ name: /submit/i }'})</code>
            <p className="text-xs text-green-600 mt-1">✅ Best - Tests accessibility</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-900 text-sm">2. getByLabelText</p>
            <code className="text-xs text-blue-700">screen.getByLabelText(/email/i)</code>
            <p className="text-xs text-blue-600 mt-1">✅ Good for form inputs</p>
          </div>
          
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-900 text-sm">3. getByPlaceholderText</p>
            <code className="text-xs text-purple-700">screen.getByPlaceholderText(/search/i)</code>
            <p className="text-xs text-purple-600 mt-1">OK for inputs with placeholders</p>
          </div>
          
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-900 text-sm">4. getByText</p>
            <code className="text-xs text-amber-700">screen.getByText(/welcome/i)</code>
            <p className="text-xs text-amber-600 mt-1">Use for non-interactive content</p>
          </div>
          
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="font-semibold text-red-900 text-sm">5. getByTestId</p>
            <code className="text-xs text-red-700">screen.getByTestId('user-123')</code>
            <p className="text-xs text-red-600 mt-1">❌ Last resort - not user-facing</p>
          </div>
        </div>
      </div>

      {/* Query Variants */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Query Variants</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">getBy...</h3>
            <p className="text-xs text-slate-600">Returns element or throws error</p>
            <code className="text-xs text-slate-700 block mt-2">getByRole('button')</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">queryBy...</h3>
            <p className="text-xs text-slate-600">Returns element or null (no error)</p>
            <code className="text-xs text-slate-700 block mt-2">queryByRole('button')</code>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">findBy...</h3>
            <p className="text-xs text-slate-600">Returns promise (for async)</p>
            <code className="text-xs text-slate-700 block mt-2">await findByRole('button')</code>
          </div>
        </div>
      </div>

      {/* User Events */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">User Interactions</h2>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700 overflow-x-auto">
{`import userEvent from '@testing-library/user-event';

// Preferred: userEvent (more realistic)
const user = userEvent.setup();
await user.click(button);
await user.type(input, 'hello');
await user.clear(input);
await user.selectOptions(select, 'option1');

// Alternative: fireEvent (simpler, less realistic)
fireEvent.click(button);
fireEvent.change(input, { target: { value: 'hello' } });`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">getByRole</code> as your primary query method</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Avoid testing implementation details (state, props, method names)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">userEvent</code> instead of <code className="px-1 bg-white rounded text-xs">fireEvent</code> for more realistic interactions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Write tests that resemble how users interact with your app</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">screen</code> for cleaner code instead of destructuring render</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use <code className="px-1 bg-white rounded text-xs">waitFor</code> for async assertions and <code className="px-1 bg-white rounded text-xs">findBy</code> queries</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
