'use client';

import { useState } from 'react';

// ===== MODEL =====
// Data and business logic
class TodoModel {
  private todos: Array<{ id: number; text: string; completed: boolean }> = [];
  private listeners: Array<() => void> = [];

  addTodo(text: string) {
    this.todos.push({
      id: Date.now(),
      text,
      completed: false,
    });
    this.notifyListeners();
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.notifyListeners();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.notifyListeners();
  }

  getTodos() {
    return [...this.todos];
  }

  getStats() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(t => t.completed).length,
      pending: this.todos.filter(t => !t.completed).length,
    };
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}

// ===== CONTROLLER =====
// Handles user input and updates model
class TodoController {
  constructor(private model: TodoModel) {}

  handleAddTodo(text: string) {
    if (text.trim()) {
      this.model.addTodo(text.trim());
    }
  }

  handleToggleTodo(id: number) {
    this.model.toggleTodo(id);
  }

  handleDeleteTodo(id: number) {
    this.model.deleteTodo(id);
  }
}

// ===== VIEW =====
// React component that displays the UI
export default function MVCExample() {
  const [model] = useState(() => new TodoModel());
  const [controller] = useState(() => new TodoController(model));
  const [, forceUpdate] = useState({});
  const [inputText, setInputText] = useState('');

  // Subscribe to model changes
  useState(() => {
    model.subscribe(() => forceUpdate({}));
  });

  const todos = model.getTodos();
  const stats = model.getStats();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    controller.handleAddTodo(inputText);
    setInputText('');
  };

  return (
    <div className="space-y-8">
      {/* What is MVC */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is MVC Architecture?</h2>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Model-View-Controller</strong> is a design pattern that separates an application into three interconnected components. It promotes separation of concerns and makes the code more maintainable.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">📊 Model</h3>
            <p className="text-sm text-blue-800">Data and business logic. Notifies observers of changes.</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">👁️ View</h3>
            <p className="text-sm text-green-800">UI presentation. Renders model data to the user.</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">🎮 Controller</h3>
            <p className="text-sm text-purple-800">Handles user input. Updates model based on actions.</p>
          </div>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">MVC Flow</h2>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex-1">
              <p className="font-semibold text-green-900 text-sm">1. User Interaction</p>
              <p className="text-xs text-green-700">User clicks button, types, etc.</p>
            </div>
            <span className="text-2xl text-slate-400">→</span>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 flex-1">
              <p className="font-semibold text-purple-900 text-sm">2. Controller</p>
              <p className="text-xs text-purple-700">Processes input, calls model methods</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 flex-1">
              <p className="font-semibold text-purple-900 text-sm">Controller</p>
            </div>
            <span className="text-2xl text-slate-400">→</span>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 flex-1">
              <p className="font-semibold text-blue-900 text-sm">3. Model</p>
              <p className="text-xs text-blue-700">Updates data, runs business logic</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 flex-1">
              <p className="font-semibold text-blue-900 text-sm">Model</p>
            </div>
            <span className="text-2xl text-slate-400">→</span>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex-1">
              <p className="font-semibold text-green-900 text-sm">4. View</p>
              <p className="text-xs text-green-700">Re-renders with updated data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Interactive Example: Todo App</h2>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
            <p className="text-xs text-blue-600">Total</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-900">{stats.completed}</p>
            <p className="text-xs text-green-600">Completed</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-amber-900">{stats.pending}</p>
            <p className="text-xs text-amber-600">Pending</p>
          </div>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-sm text-slate-500 italic text-center py-4">No todos yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => controller.handleToggleTodo(todo.id)}
                  className="w-4 h-4"
                />
                <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => controller.handleDeleteTodo(todo.id)}
                  className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Code Structure */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Code Structure</h2>
        
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm font-semibold text-blue-900 mb-2">Model (Data + Logic)</p>
            <pre className="text-xs text-blue-800 overflow-x-auto">
{`class TodoModel {
  private todos: Todo[] = [];
  private listeners: (() => void)[] = [];
  
  addTodo(text: string) {
    this.todos.push({ id: Date.now(), text, completed: false });
    this.notifyListeners();
  }
  
  getTodos() { return this.todos; }
  subscribe(listener: () => void) { this.listeners.push(listener); }
}`}
            </pre>
          </div>

          <div className="p-4 bg-purple-50 rounded border border-purple-200">
            <p className="text-sm font-semibold text-purple-900 mb-2">Controller (User Input)</p>
            <pre className="text-xs text-purple-800 overflow-x-auto">
{`class TodoController {
  constructor(private model: TodoModel) {}
  
  handleAddTodo(text: string) {
    if (text.trim()) {
      this.model.addTodo(text.trim());
    }
  }
  
  handleToggleTodo(id: number) {
    this.model.toggleTodo(id);
  }
}`}
            </pre>
          </div>

          <div className="p-4 bg-green-50 rounded border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-2">View (React Component)</p>
            <pre className="text-xs text-green-800 overflow-x-auto">
{`function TodoView() {
  const [model] = useState(() => new TodoModel());
  const [controller] = useState(() => new TodoController(model));
  
  // Subscribe to model updates
  useEffect(() => {
    model.subscribe(() => forceUpdate());
  }, []);
  
  return <div>{model.getTodos().map(todo => ...)}</div>;
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Benefits of MVC</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">✅ Separation of Concerns</h3>
            <p className="text-sm text-green-800">Each component has a single, well-defined responsibility</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">✅ Reusability</h3>
            <p className="text-sm text-blue-800">Models can be reused across different views</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">✅ Testability</h3>
            <p className="text-sm text-purple-800">Easy to test business logic independently</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">✅ Parallel Development</h3>
            <p className="text-sm text-amber-800">Teams can work on different components simultaneously</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Keep business logic in the Model, not in View or Controller</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Views should only display data, not contain business logic</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Controllers should be thin - just coordinate between View and Model</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use Observer pattern so Model notifies Views of changes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>In modern React, consider hooks/state management instead of strict MVC</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
