'use client';

import { useState } from 'react';

// ============================================
// CYPRESS E2E TESTING EXAMPLES
// ============================================

export default function CypressExample() {
  const [activeTab, setActiveTab] = useState<'intro' | 'commands' | 'best-practices' | 'demo'>('intro');
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<Array<{ id: number; text: string; completed: boolean }>>([]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const examples = {
    basic: `// cypress/e2e/login.cy.ts
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login successfully with valid credentials', () => {
    // Type into inputs
    cy.get('[data-testid="email-input"]').type('user@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    
    // Click button
    cy.get('[data-testid="login-button"]').click()
    
    // Verify redirect
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome back').should('be.visible')
  })

  it('should show error with invalid credentials', () => {
    cy.get('[data-testid="email-input"]').type('wrong@example.com')
    cy.get('[data-testid="password-input"]').type('wrongpass')
    cy.get('[data-testid="login-button"]').click()
    
    cy.get('[data-testid="error-message"]')
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })
})`,
    
    api: `// Testing with API requests
describe('API Integration', () => {
  it('should fetch and display user data', () => {
    // Intercept API call
    cy.intercept('GET', '/api/users/1', {
      statusCode: 200,
      body: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      }
    }).as('getUser')

    cy.visit('/users/1')
    
    // Wait for API call
    cy.wait('@getUser')
    
    // Verify data is displayed
    cy.contains('John Doe').should('be.visible')
    cy.contains('john@example.com').should('be.visible')
  })

  it('should handle API errors', () => {
    cy.intercept('GET', '/api/users/1', {
      statusCode: 404,
      body: { error: 'User not found' }
    }).as('getUserError')

    cy.visit('/users/1')
    cy.wait('@getUserError')
    
    cy.contains('User not found').should('be.visible')
  })
})`,

    commands: `// Custom commands (cypress/support/commands.ts)
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      getBySel(selector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login')
    cy.get('[data-testid="email-input"]').type(email)
    cy.get('[data-testid="password-input"]').type(password)
    cy.get('[data-testid="login-button"]').click()
    cy.url().should('include', '/dashboard')
  })
})

Cypress.Commands.add('getBySel', (selector) => {
  return cy.get(\`[data-testid="\${selector}"]\`)
})

// Usage in tests
describe('Dashboard', () => {
  beforeEach(() => {
    cy.login('user@example.com', 'password123')
    cy.visit('/dashboard')
  })

  it('should display user dashboard', () => {
    cy.getBySel('user-greeting').should('be.visible')
  })
})`,

    config: `// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    
    // Video & Screenshots
    video: true,
    screenshotOnRunFailure: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  // Component testing
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})`
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Cypress E2E Testing
          </h1>
          <p className="text-slate-700 mb-4">
            Fast, reliable testing for anything that runs in a browser. 
            Write E2E tests with a delightful developer experience.
          </p>
          <div className="flex gap-2">
            <code className="px-3 py-1 bg-slate-900 text-green-400 rounded text-sm">
              npm install cypress --save-dev
            </code>
            <code className="px-3 py-1 bg-slate-900 text-green-400 rounded text-sm">
              npx cypress open
            </code>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="flex border-b border-slate-200">
            {[
              { id: 'intro', label: 'Introduction' },
              { id: 'commands', label: 'Commands' },
              { id: 'best-practices', label: 'Best Practices' },
              { id: 'demo', label: 'Live Demo' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'intro' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Cypress?</h2>
                  <p className="text-slate-700 mb-4">
                    Cypress is a next-generation front-end testing tool built for the modern web. 
                    It addresses the key pain points developers face when testing modern applications.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <h3 className="font-bold text-green-900 mb-2">✅ Advantages</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Real-time reloading as you write tests</li>
                      <li>• Automatic waiting (no sleep/wait needed)</li>
                      <li>• Time-travel debugging</li>
                      <li>• Network traffic control (intercept/stub)</li>
                      <li>• Screenshots & videos on failure</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                    <h3 className="font-bold text-blue-900 mb-2">📦 Features</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• E2E testing (full user flows)</li>
                      <li>• Component testing (isolated)</li>
                      <li>• API testing (REST/GraphQL)</li>
                      <li>• Visual regression testing</li>
                      <li>• Cross-browser support</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Basic Example</h3>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {examples.basic}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'commands' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Essential Cypress Commands</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200 rounded">
                    <h3 className="font-bold text-slate-900 mb-2">Navigation</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.visit('/path')</code>
                        <p className="text-slate-600">Visit a URL</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.go('back')</code>
                        <p className="text-slate-600">Go back/forward</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.reload()</code>
                        <p className="text-slate-600">Reload page</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded">
                    <h3 className="font-bold text-slate-900 mb-2">Queries</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.get('.class')</code>
                        <p className="text-slate-600">Get element by selector</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.contains('text')</code>
                        <p className="text-slate-600">Get element with text</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">cy.find('.child')</code>
                        <p className="text-slate-600">Find child elements</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded">
                    <h3 className="font-bold text-slate-900 mb-2">Actions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.click()</code>
                        <p className="text-slate-600">Click element</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.type('text')</code>
                        <p className="text-slate-600">Type into input</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.select('option')</code>
                        <p className="text-slate-600">Select dropdown</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded">
                    <h3 className="font-bold text-slate-900 mb-2">Assertions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.should('be.visible')</code>
                        <p className="text-slate-600">Element is visible</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.should('have.text', 'x')</code>
                        <p className="text-slate-600">Has specific text</p>
                      </div>
                      <div className="p-2 bg-slate-50 rounded">
                        <code className="text-blue-600">.should('have.value', 'x')</code>
                        <p className="text-slate-600">Input has value</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">API Interception</h3>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {examples.api}
                  </pre>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Commands</h3>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {examples.commands}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'best-practices' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cypress Best Practices</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <h3 className="font-bold text-green-900 mb-2">✅ Use data-testid attributes</h3>
                    <div className="text-sm space-y-2">
                      <pre className="bg-white p-2 rounded text-green-700">
{`// ✅ Good - Stable selector
cy.get('[data-testid="submit-button"]').click()

// ❌ Bad - Can break with CSS changes
cy.get('.btn-primary.submit').click()`}
                      </pre>
                      <p className="text-green-800">
                        Test selectors should be independent of styling
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                    <h3 className="font-bold text-blue-900 mb-2">✅ Don't use cy.wait(ms) - use assertions</h3>
                    <div className="text-sm space-y-2">
                      <pre className="bg-white p-2 rounded text-blue-700">
{`// ✅ Good - Wait for element to appear
cy.get('[data-testid="success-message"]').should('be.visible')

// ❌ Bad - Arbitrary wait
cy.wait(2000)
cy.get('[data-testid="success-message"]')`}
                      </pre>
                      <p className="text-blue-800">
                        Cypress automatically retries assertions
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded">
                    <h3 className="font-bold text-purple-900 mb-2">✅ Stub network requests in tests</h3>
                    <div className="text-sm space-y-2">
                      <pre className="bg-white p-2 rounded text-purple-700">
{`// ✅ Good - Predictable, fast tests
cy.intercept('GET', '/api/users', { fixture: 'users.json' })
cy.visit('/users')

// ❌ Bad - Slow, flaky, dependent on backend
cy.visit('/users') // Makes real API call`}
                      </pre>
                      <p className="text-purple-800">
                        Control network responses for reliable tests
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                    <h3 className="font-bold text-orange-900 mb-2">✅ Keep tests independent</h3>
                    <div className="text-sm space-y-2">
                      <pre className="bg-white p-2 rounded text-orange-700">
{`// ✅ Good - Each test is independent
beforeEach(() => {
  cy.login('user@example.com', 'password')
  cy.visit('/dashboard')
})

// ❌ Bad - Tests depend on each other
it('test 1', () => { /* creates data */ })
it('test 2', () => { /* uses data from test 1 */ })`}
                      </pre>
                      <p className="text-orange-800">
                        Tests should run independently in any order
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Configuration</h3>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {examples.config}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'demo' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Live Demo: Todo App (Test Target)
                  </h2>
                  <p className="text-slate-700 mb-4">
                    This is a simple Todo app that we would test with Cypress. 
                    The test code below shows how you'd write E2E tests for it.
                  </p>
                </div>

                {/* Interactive Todo App */}
                <div className="p-6 bg-slate-50 border-2 border-slate-300 rounded-lg">
                  <h3 className="font-bold text-slate-900 mb-4">Todo Application</h3>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      data-testid="todo-input"
                      value={todoText}
                      onChange={(e) => setTodoText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                      placeholder="What needs to be done?"
                      className="flex-1 px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      data-testid="add-todo-button"
                      onClick={handleAddTodo}
                      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  <div className="space-y-2" data-testid="todo-list">
                    {todos.length === 0 && (
                      <p className="text-slate-600 text-center py-8" data-testid="empty-state">
                        No todos yet. Add one above!
                      </p>
                    )}
                    {todos.map(todo => (
                      <div
                        key={todo.id}
                        data-testid={`todo-item-${todo.id}`}
                        className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleToggleTodo(todo.id)}
                          data-testid={`todo-checkbox-${todo.id}`}
                          className="w-5 h-5"
                        />
                        <span
                          className={`flex-1 ${todo.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}
                          data-testid={`todo-text-${todo.id}`}
                        >
                          {todo.text}
                        </span>
                        <button
                          onClick={() => handleDeleteTodo(todo.id)}
                          data-testid={`todo-delete-${todo.id}`}
                          className="text-red-600 hover:text-red-800 font-bold"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-slate-600" data-testid="todo-count">
                    {todos.filter(t => !t.completed).length} items left
                  </div>
                </div>

                {/* Cypress Test Code */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Cypress Test for this Todo App
                  </h3>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`describe('Todo App E2E', () => {
  beforeEach(() => {
    cy.visit('/testing/cypress')
  })

  it('should add a new todo', () => {
    // Type into input
    cy.get('[data-testid="todo-input"]').type('Buy groceries')
    
    // Click add button
    cy.get('[data-testid="add-todo-button"]').click()
    
    // Verify todo was added
    cy.get('[data-testid="todo-list"]')
      .should('contain', 'Buy groceries')
    
    // Verify input is cleared
    cy.get('[data-testid="todo-input"]').should('have.value', '')
  })

  it('should mark todo as completed', () => {
    // Add a todo first
    cy.get('[data-testid="todo-input"]').type('Read book')
    cy.get('[data-testid="add-todo-button"]').click()
    
    // Get the checkbox and click it
    cy.get('[data-testid^="todo-checkbox-"]').first().click()
    
    // Verify text has line-through
    cy.get('[data-testid^="todo-text-"]').first()
      .should('have.class', 'line-through')
  })

  it('should delete a todo', () => {
    // Add a todo
    cy.get('[data-testid="todo-input"]').type('Learn Cypress')
    cy.get('[data-testid="add-todo-button"]').click()
    
    // Click delete button
    cy.get('[data-testid^="todo-delete-"]').first().click()
    
    // Verify todo is removed
    cy.get('[data-testid="todo-list"]')
      .should('not.contain', 'Learn Cypress')
    
    // Verify empty state is shown
    cy.get('[data-testid="empty-state"]').should('be.visible')
  })

  it('should show correct count of active todos', () => {
    // Add multiple todos
    cy.get('[data-testid="todo-input"]').type('Task 1{enter}')
    cy.get('[data-testid="todo-input"]').type('Task 2{enter}')
    cy.get('[data-testid="todo-input"]').type('Task 3{enter}')
    
    // Verify count
    cy.get('[data-testid="todo-count"]')
      .should('contain', '3 items left')
    
    // Complete one todo
    cy.get('[data-testid^="todo-checkbox-"]').first().click()
    
    // Verify updated count
    cy.get('[data-testid="todo-count"]')
      .should('contain', '2 items left')
  })
})`}
                  </pre>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-yellow-900 text-sm">
                    <strong>Note:</strong> Notice how we use <code className="bg-yellow-100 px-2 py-1 rounded">data-testid</code> attributes 
                    on all interactive elements. This makes our tests stable and independent of styling changes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
