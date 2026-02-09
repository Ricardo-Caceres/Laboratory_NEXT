'use client';

import { useState } from 'react';

// ===== ATOMS (Smallest building blocks) =====
function Button({ children, variant = 'primary', onClick }: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) {
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-slate-200 text-slate-900 hover:bg-slate-300';
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${styles}`}
    >
      {children}
    </button>
  );
}

function Input({ placeholder, value, onChange }: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-slate-700">{children}</label>;
}

function Badge({ children, color = 'blue' }: {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'red';
}) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
  };
  
  return (
    <span className={`px-2 py-1 text-xs rounded ${colors[color]}`}>
      {children}
    </span>
  );
}

// ===== MOLECULES (Simple groups of atoms) =====
function FormField({ label, placeholder, value, onChange }: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

function ProductCard({ name, price, stock }: {
  name: string;
  price: number;
  stock: number;
}) {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <h3 className="font-semibold text-slate-900 mb-2">{name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">${price}</span>
        <Badge color={stock > 0 ? 'green' : 'red'}>
          {stock > 0 ? `${stock} in stock` : 'Out of stock'}
        </Badge>
      </div>
    </div>
  );
}

function SearchBar({ value, onChange, onSearch }: {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}) {
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Input
          placeholder="Search products..."
          value={value}
          onChange={onChange}
        />
      </div>
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
}

// ===== ORGANISMS (Complex components made of molecules) =====
function ProductList({ products }: {
  products: Array<{ id: number; name: string; price: number; stock: number }>;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
      <div className="space-y-4">
        <FormField
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={setName}
        />
        <FormField
          label="Email"
          placeholder="your@email.com"
          value={email}
          onChange={setEmail}
        />
        <div className="space-y-1">
          <Label>Message</Label>
          <textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSubmit}>Submit</Button>
          <Button variant="secondary" onClick={() => { setName(''); setEmail(''); setMessage(''); }}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

// ===== TEMPLATES (Page-level layouts) =====
function PageTemplate({ header, content, sidebar }: {
  header: React.ReactNode;
  content: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        {header}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">{content}</div>
        {sidebar && <div className="md:col-span-1">{sidebar}</div>}
      </div>
    </div>
  );
}

// ===== PAGE (Complete page with real data) =====
export default function AtomicDesignExample() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    { id: 1, name: 'Laptop Pro', price: 1299, stock: 5 },
    { id: 2, name: 'Wireless Mouse', price: 29, stock: 15 },
    { id: 3, name: 'Mechanical Keyboard', price: 89, stock: 0 },
    { id: 4, name: 'Monitor 27"', price: 399, stock: 8 },
    { id: 5, name: 'Webcam HD', price: 79, stock: 12 },
    { id: 6, name: 'Headphones', price: 149, stock: 0 },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* What is Atomic Design */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What is Atomic Design?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Atomic Design is a methodology for creating design systems by breaking interfaces into smaller, reusable components. Think of it like chemistry: atoms combine to form molecules, molecules form organisms, and organisms form templates and pages.
        </p>
        
        <div className="grid md:grid-cols-5 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
            <div className="text-2xl mb-1">⚛️</div>
            <p className="font-semibold text-blue-900 text-sm">Atoms</p>
            <p className="text-xs text-blue-700">Basic elements</p>
          </div>
          
          <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-center">
            <div className="text-2xl mb-1">🧬</div>
            <p className="font-semibold text-green-900 text-sm">Molecules</p>
            <p className="text-xs text-green-700">Simple groups</p>
          </div>
          
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-center">
            <div className="text-2xl mb-1">🦠</div>
            <p className="font-semibold text-purple-900 text-sm">Organisms</p>
            <p className="text-xs text-purple-700">Complex UI sections</p>
          </div>
          
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-center">
            <div className="text-2xl mb-1">📄</div>
            <p className="font-semibold text-amber-900 text-sm">Templates</p>
            <p className="text-xs text-amber-700">Page layouts</p>
          </div>
          
          <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-center">
            <div className="text-2xl mb-1">🌐</div>
            <p className="font-semibold text-red-900 text-sm">Pages</p>
            <p className="text-xs text-red-700">Real instances</p>
          </div>
        </div>
      </div>

      {/* Layer Examples */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Atomic Design Layers</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">⚛️ Atoms (Basic Elements)</h3>
            <p className="text-sm text-blue-800 mb-3">Smallest building blocks: buttons, inputs, labels, icons</p>
            <div className="flex gap-2 flex-wrap">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Input placeholder="Input field" value="" onChange={() => {}} />
              <Badge>Badge</Badge>
              <Badge color="green">Success</Badge>
              <Badge color="red">Error</Badge>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3">🧬 Molecules (Simple Groups)</h3>
            <p className="text-sm text-green-800 mb-3">Atoms combined: form fields, cards, search bars</p>
            <div className="grid md:grid-cols-2 gap-3">
              <FormField
                label="Email Address"
                placeholder="your@email.com"
                value=""
                onChange={() => {}}
              />
              <ProductCard name="Sample Product" price={99} stock={5} />
            </div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-3">🦠 Organisms (Complex Sections)</h3>
            <p className="text-sm text-purple-800 mb-3">Molecules combined: headers, product grids, forms</p>
            <div className="bg-white p-4 rounded border border-purple-200">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={() => alert(`Searching for: ${searchTerm}`)}
              />
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-3">📄 Templates (Page Structure)</h3>
            <p className="text-sm text-amber-800 mb-3">Organisms arranged into page layouts with placeholders</p>
            <div className="bg-white p-4 rounded border border-amber-200 text-xs text-slate-600">
              [Header] + [Content Grid] + [Sidebar] = Page Template
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-900 mb-3">🌐 Pages (Real Instances)</h3>
            <p className="text-sm text-red-800 mb-3">Templates filled with real content and data</p>
            <div className="bg-white p-4 rounded border border-red-200 text-xs text-slate-600">
              See full example below ↓
            </div>
          </div>
        </div>
      </div>

      {/* Full Page Example */}
      <div className="p-6 bg-white rounded-lg border-2 border-slate-300">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Complete Page Example</h2>
          <p className="text-sm text-slate-600">
            All atomic design layers working together to create a functional e-commerce page
          </p>
        </div>

        <PageTemplate
          header={
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-slate-900">Product Store</h1>
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={() => {}}
              />
            </div>
          }
          content={<ProductList products={filteredProducts} />}
          sidebar={<ContactForm />}
        />
      </div>

      {/* Benefits */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Benefits of Atomic Design</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">✅ Consistency</h3>
            <p className="text-sm text-green-800">Reusable components ensure consistent UI across the app</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">✅ Scalability</h3>
            <p className="text-sm text-blue-800">Easy to add new features by combining existing components</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">✅ Maintainability</h3>
            <p className="text-sm text-purple-800">Changes in atoms automatically propagate to all pages</p>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">✅ Collaboration</h3>
            <p className="text-sm text-amber-800">Designers and developers share the same component language</p>
          </div>
        </div>
      </div>

      {/* File Structure */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Recommended File Structure</h2>
        
        <div className="p-4 bg-slate-50 rounded border border-slate-200">
          <pre className="text-xs text-slate-700">
{`components/
├── atoms/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Label.tsx
│   └── Badge.tsx
├── molecules/
│   ├── FormField.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
├── organisms/
│   ├── Header.tsx
│   ├── ProductList.tsx
│   └── ContactForm.tsx
├── templates/
│   ├── PageTemplate.tsx
│   └── DashboardTemplate.tsx
└── pages/
    ├── HomePage.tsx
    ├── ProductPage.tsx
    └── ContactPage.tsx`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">✨ Best Practices</h3>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Start with atoms and build up - don't skip layers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Keep atoms simple and single-purpose (one responsibility)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Document each component with Storybook or similar tool</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Use TypeScript for prop definitions and type safety</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Don't be too strict - adapt the methodology to your team's needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>Combine with design tokens (colors, spacing, typography)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
