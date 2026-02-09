'use client';

import { useState } from 'react';

// ============================================
// SIMULATED MONOREPO STRUCTURE
// ============================================

/*
Example Monorepo Structure:

monorepo/
├── packages/
│   ├── ui-components/          (Shared UI library)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── package.json
│   ├── utils/                  (Shared utilities)
│   │   ├── validation.ts
│   │   ├── formatters.ts
│   │   └── package.json
│   └── types/                  (Shared TypeScript types)
│       ├── user.ts
│       ├── product.ts
│       └── package.json
├── apps/
│   ├── web/                    (Next.js web app)
│   │   ├── src/
│   │   └── package.json        (depends on: ui-components, utils, types)
│   ├── mobile/                 (React Native app)
│   │   ├── src/
│   │   └── package.json        (depends on: ui-components, utils, types)
│   └── admin/                  (Admin dashboard)
│       ├── src/
│       └── package.json        (depends on: ui-components, utils, types)
└── package.json                (Root workspace config)
*/

// ============================================
// Shared UI Components Package
// ============================================

const Button = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}: { 
  label: string; 
  onClick: () => void; 
  variant?: 'primary' | 'secondary' 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded font-medium transition-colors ${
      variant === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
    }`}
  >
    {label}
  </button>
);

const Input = ({ 
  value, 
  onChange, 
  placeholder 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder?: string 
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

// ============================================
// Shared Utils Package
// ============================================

const validators = {
  isEmail: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  isStrongPassword: (password: string): boolean => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  }
};

const formatters = {
  currency: (amount: number): string => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(amount);
  },
  date: (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      dateStyle: 'medium' 
    }).format(date);
  }
};

// ============================================
// Shared Types Package
// ============================================

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

// ============================================
// APP 1: Web Application
// ============================================

const WebApp = () => {
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidate = () => {
    if (validators.isEmail(email)) {
      setValidationMessage('✅ Valid email!');
    } else {
      setValidationMessage('❌ Invalid email format');
    }
  };

  return (
    <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="text-xl font-bold text-blue-900 mb-4">🌐 Web App</h3>
      <p className="text-sm text-blue-800 mb-4">
        Uses: <code className="bg-blue-100 px-2 py-1 rounded">@monorepo/ui-components</code>,{' '}
        <code className="bg-blue-100 px-2 py-1 rounded">@monorepo/utils</code>
      </p>
      <div className="space-y-3">
        <Input 
          value={email} 
          onChange={setEmail} 
          placeholder="Enter email" 
        />
        <Button label="Validate Email" onClick={handleValidate} variant="primary" />
        {validationMessage && (
          <p className="text-sm font-medium">{validationMessage}</p>
        )}
      </div>
    </div>
  );
};

// ============================================
// APP 2: Mobile Application
// ============================================

const MobileApp = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = () => {
    if (validators.isStrongPassword(password)) {
      setStrength('✅ Strong password');
    } else {
      setStrength('⚠️ Weak (needs 8+ chars, uppercase, number)');
    }
  };

  return (
    <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
      <h3 className="text-xl font-bold text-green-900 mb-4">📱 Mobile App</h3>
      <p className="text-sm text-green-800 mb-4">
        Uses: <code className="bg-green-100 px-2 py-1 rounded">@monorepo/ui-components</code>,{' '}
        <code className="bg-green-100 px-2 py-1 rounded">@monorepo/utils</code>
      </p>
      <div className="space-y-3">
        <Input 
          value={password} 
          onChange={setPassword} 
          placeholder="Enter password" 
        />
        <Button label="Check Strength" onClick={checkStrength} variant="primary" />
        {strength && (
          <p className="text-sm font-medium">{strength}</p>
        )}
      </div>
    </div>
  );
};

// ============================================
// APP 3: Admin Dashboard
// ============================================

const AdminApp = () => {
  const [products] = useState<Product[]>([
    { id: '1', name: 'Laptop', price: 999, inStock: true },
    { id: '2', name: 'Mouse', price: 25, inStock: false },
  ]);

  return (
    <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
      <h3 className="text-xl font-bold text-purple-900 mb-4">⚙️ Admin Dashboard</h3>
      <p className="text-sm text-purple-800 mb-4">
        Uses: <code className="bg-purple-100 px-2 py-1 rounded">@monorepo/ui-components</code>,{' '}
        <code className="bg-purple-100 px-2 py-1 rounded">@monorepo/utils</code>,{' '}
        <code className="bg-purple-100 px-2 py-1 rounded">@monorepo/types</code>
      </p>
      <div className="space-y-2">
        {products.map(product => (
          <div key={product.id} className="p-3 bg-white border border-purple-200 rounded">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-900">{product.name}</span>
              <span className="font-bold text-green-600">
                {formatters.currency(product.price)}
              </span>
            </div>
            <span className={`text-xs ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function MonorepoExample() {
  const [showCode, setShowCode] = useState(false);

  const packageJsonExample = `{
  "name": "monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test"
  },
  "devDependencies": {
    "turbo": "^1.10.0"
  }
}`;

  const webAppPackageJson = `{
  "name": "@apps/web",
  "dependencies": {
    "@monorepo/ui-components": "*",
    "@monorepo/utils": "*",
    "@monorepo/types": "*",
    "next": "^14.0.0",
    "react": "^18.0.0"
  }
}`;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Monorepo Architecture Demo
          </h1>
          <p className="text-slate-700 mb-4">
            Single repository containing multiple apps and shared packages. 
            Demonstrates code sharing, unified versioning, and atomic commits.
          </p>
        </div>

        {/* Structure Visualization */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Monorepo Structure</h2>
          <div className="font-mono text-sm space-y-1 bg-slate-900 text-green-400 p-4 rounded overflow-x-auto">
            <div>monorepo/</div>
            <div className="ml-4">├── packages/ <span className="text-slate-500">(Shared libraries)</span></div>
            <div className="ml-8">│   ├── ui-components/</div>
            <div className="ml-8">│   ├── utils/</div>
            <div className="ml-8">│   └── types/</div>
            <div className="ml-4">├── apps/ <span className="text-slate-500">(Applications)</span></div>
            <div className="ml-8">│   ├── web/</div>
            <div className="ml-8">│   ├── mobile/</div>
            <div className="ml-8">│   └── admin/</div>
            <div className="ml-4">├── package.json <span className="text-slate-500">(Workspace config)</span></div>
            <div className="ml-4">└── turbo.json <span className="text-slate-500">(Build orchestration)</span></div>
          </div>

          <button
            onClick={() => setShowCode(!showCode)}
            className="mt-4 px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 transition-colors"
          >
            {showCode ? 'Hide' : 'Show'} Configuration Files
          </button>

          {showCode && (
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Root package.json</h3>
                <pre className="bg-slate-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
                  {packageJsonExample}
                </pre>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Web App package.json</h3>
                <pre className="bg-slate-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
                  {webAppPackageJson}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Live Demo */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Live Demo: 3 Apps Sharing Same Components
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <WebApp />
            <MobileApp />
            <AdminApp />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-900 text-sm">
              <strong>Notice:</strong> All 3 apps use the same Button and Input components from{' '}
              <code className="bg-yellow-100 px-2 py-1 rounded">@monorepo/ui-components</code>.
              A change to the Button component would instantly affect all apps!
            </p>
          </div>
        </div>

        {/* Tools Comparison */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Popular Monorepo Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-slate-200 rounded">
              <h3 className="font-bold text-slate-900 mb-2">Turborepo</h3>
              <p className="text-sm text-slate-700 mb-2">
                High-performance build system with intelligent caching
              </p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">turbo run build</code>
            </div>
            <div className="p-4 border border-slate-200 rounded">
              <h3 className="font-bold text-slate-900 mb-2">Nx</h3>
              <p className="text-sm text-slate-700 mb-2">
                Smart, fast and extensible build system with graph visualization
              </p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">nx build app</code>
            </div>
            <div className="p-4 border border-slate-200 rounded">
              <h3 className="font-bold text-slate-900 mb-2">Lerna</h3>
              <p className="text-sm text-slate-700 mb-2">
                Classic tool for managing JavaScript projects with multiple packages
              </p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">lerna run build</code>
            </div>
          </div>
        </div>

        {/* Benefits & Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">✅ Benefits</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <strong className="text-green-900">Single Source of Truth</strong>
                <p className="text-green-800">All code in one repo, easier to find and maintain</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <strong className="text-blue-900">Atomic Commits</strong>
                <p className="text-blue-800">Changes across packages in a single commit</p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <strong className="text-purple-900">Code Sharing</strong>
                <p className="text-purple-800">Easy to share components, utils, types</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <strong className="text-orange-900">Unified Tooling</strong>
                <p className="text-orange-800">Same linter, formatter, test runner for all</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Challenges</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-red-50 border border-red-200 rounded">
                <strong className="text-red-900">Repository Size</strong>
                <p className="text-red-800">Can become very large with many apps</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <strong className="text-yellow-900">CI/CD Complexity</strong>
                <p className="text-yellow-800">Need smart caching to avoid rebuilding everything</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <strong className="text-orange-900">Access Control</strong>
                <p className="text-orange-800">All teams see all code (may not always be desired)</p>
              </div>
              <div className="p-3 bg-slate-100 border border-slate-300 rounded">
                <strong className="text-slate-900">Tooling Setup</strong>
                <p className="text-slate-700">Initial configuration can be complex</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Real-World Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <strong className="text-blue-900">Google</strong>
              <p className="text-sm text-blue-800">Single monorepo with billions of lines of code</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <strong className="text-green-900">Facebook/Meta</strong>
              <p className="text-sm text-green-800">All web/mobile apps in one monorepo</p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <strong className="text-purple-900">Vercel</strong>
              <p className="text-sm text-purple-800">Turborepo for Next.js and other projects</p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <strong className="text-orange-900">Nx Community</strong>
              <p className="text-sm text-orange-800">Many enterprise apps using Nx monorepos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
