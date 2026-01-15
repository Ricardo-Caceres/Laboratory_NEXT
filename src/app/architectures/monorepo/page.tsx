import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function MonorepoPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Monorepo Architecture"
        description="**Monorepo** es una estrategia de desarrollo donde múltiples proyectos relacionados se mantienen en un único repositorio. Popularizado por Google, Facebook y Microsoft.

**Key Concepts:**
- **Single Source of Truth**: Un repo para todo el código
- **Atomic Changes**: Cambios cross-project en un commit
- **Shared Dependencies**: Versionado unificado
- **Code Reuse**: Librerías compartidas fácilmente
- **Tooling Consistency**: Mismas herramientas en todos los proyectos

**Benefits:**
- Refactoring simplificado cross-project
- Mejor colaboración y code sharing
- Testing integrado entre proyectos
- Deployment coordinado
- Configuración DRY (Don't Repeat Yourself)
- Atomic commits para features multi-package

**Challenges:**
- Repo size growth (Git puede volverse lento)
- Build times aumentan sin optimización
- Acceso granular limitado
- CI/CD complexity
- Tooling requirements (Nx, Turborepo, Lerna)

**Herramientas Populares:**
- **Turborepo**: Ultra-fast builds con remote caching
- **Nx**: Extensible dev tools con computation caching
- **Lerna**: Package management para JS monorepos
- **Yarn Workspaces**: Gestión de dependencias
- **pnpm Workspaces**: Eficiente gestión de packages

**When to Use:**
- Múltiples apps que comparten código
- Frontend + Backend en mismo repo
- Component libraries con apps de ejemplo
- Microservices que se deployean juntos"
        codeContent={[
          {
            filePath: 'monorepo-structure.txt',
            content: `// Estructura típica de Monorepo
my-monorepo/
├── apps/
│   ├── web/              # Next.js app principal
│   │   ├── package.json
│   │   ├── src/
│   │   └── next.config.js
│   ├── admin/            # Admin dashboard
│   │   ├── package.json
│   │   └── src/
│   ├── mobile/           # React Native app
│   │   ├── package.json
│   │   └── src/
│   └── docs/             # Documentación site
│       ├── package.json
│       └── src/
├── packages/
│   ├── ui/               # Shared components
│   │   ├── package.json
│   │   └── src/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── index.tsx
│   ├── config/           # Shared configs
│   │   ├── eslint-config/
│   │   ├── tsconfig/
│   │   └── tailwind-config/
│   ├── utils/            # Shared utilities
│   │   ├── package.json
│   │   └── src/
│   ├── api-client/       # API client library
│   │   ├── package.json
│   │   └── src/
│   └── types/            # Shared TypeScript types
│       ├── package.json
│       └── src/
├── package.json          # Root package.json
├── turbo.json            # Turborepo config
├── pnpm-workspace.yaml   # pnpm workspaces
└── .gitignore`,
          },
          {
            filePath: 'package.json',
            content: `// Root package.json con workspaces
{
  "name": "my-monorepo",
  "private": true,
  "version": "0.0.0",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "clean": "turbo run clean",
    "format": "prettier --write \\"**/*.{ts,tsx,md}\\""
  },
  "devDependencies": {
    "@turbo/gen": "^1.11.0",
    "prettier": "^3.1.0",
    "turbo": "^1.11.0",
    "typescript": "^5.3.0"
  },
  "packageManager": "pnpm@8.10.0",
  "engines": {
    "node": ">=18.0.0"
  }
}`,
          },
          {
            filePath: 'turbo.json',
            content: `// Turborepo pipeline configuration
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": [
    "**/.env.*local"
  ],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [
        ".next/**",
        "!.next/cache/**",
        "dist/**"
      ]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"],
      "inputs": [
        "src/**/*.tsx",
        "src/**/*.ts",
        "test/**/*.ts",
        "test/**/*.tsx"
      ]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "clean": {
      "cache": false
    }
  }
}`,
          },
          {
            filePath: 'packages/ui/package.json',
            content: `// Shared UI package
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.tsx",
  "types": "./src/index.tsx",
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@repo/eslint-config": "*",
    "@repo/typescript-config": "*",
    "@types/react": "^19.0.0",
    "eslint": "^8.55.0",
    "typescript": "^5.3.0"
  }
}`,
          },
          {
            filePath: 'packages/ui/src/Button.tsx',
            content: `// Shared Button component
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded font-semibold transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};`,
          },
          {
            filePath: 'packages/ui/src/index.tsx',
            content: `// Export all UI components
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';
export { Modal } from './Modal';

// Export types
export type { ButtonProps } from './Button';
export type { InputProps } from './Input';`,
          },
          {
            filePath: 'apps/web/package.json',
            content: `// Web app consuming shared packages
{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@repo/ui": "*",
    "@repo/utils": "*",
    "@repo/types": "*",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@repo/eslint-config": "*",
    "@repo/typescript-config": "*",
    "@types/node": "^20.10.0",
    "@types/react": "^19.0.0",
    "typescript": "^5.3.0"
  }
}`,
          },
          {
            filePath: 'apps/web/src/app/page.tsx',
            content: `// Using shared components from @repo/ui
import { Button, Card } from '@repo/ui';
import { formatDate } from '@repo/utils';
import type { User } from '@repo/types';

export default function HomePage() {
  const user: User = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  };
  
  return (
    <main className="container mx-auto p-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-600 mb-4">
          Member since {formatDate(new Date())}
        </p>
        <Button variant="primary" onClick={() => alert('Hello!')}>
          Click Me
        </Button>
      </Card>
    </main>
  );
}`,
          },
          {
            filePath: 'pnpm-workspace.yaml',
            content: `# pnpm workspace configuration
packages:
  - 'apps/*'
  - 'packages/*'`,
          },
          {
            filePath: 'nx.json',
            content: `// Nx configuration (alternativa a Turborepo)
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "affected": {
    "defaultBase": "main"
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "cache": true,
      "outputs": ["{projectRoot}/dist", "{projectRoot}/.next"]
    },
    "test": {
      "cache": true,
      "inputs": ["default", "^default"]
    },
    "lint": {
      "cache": true,
      "inputs": [
        "default",
        "{workspaceRoot}/.eslintrc.json"
      ]
    }
  },
  "generators": {
    "@nx/react": {
      "application": {
        "style": "css",
        "linter": "eslint",
        "bundler": "vite"
      }
    }
  }
}`,
          },
          {
            filePath: 'ci-cd-example.yml',
            content: `# GitHub Actions CI/CD para Monorepo
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Para Nx affected
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      # Turborepo con remote caching
      - name: Build
        run: pnpm turbo run build
        env:
          TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: \${{ vars.TURBO_TEAM }}
      
      - name: Test
        run: pnpm turbo run test
      
      - name: Lint
        run: pnpm turbo run lint
      
      # Build solo proyectos afectados
      - name: Build Affected (Nx)
        run: pnpm nx affected --target=build --base=origin/main
      
      - name: Deploy Web
        if: github.ref == 'refs/heads/main'
        run: |
          cd apps/web
          pnpm run deploy`,
          },
        ]}
        variant="architecture"
      />
      
      <RightPanel>
        <MonorepoExample />
      </RightPanel>
    </div>
  );
}

function MonorepoExample() {
  return (
    <div className="space-y-6 p-6">
      <div className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
          📦 Monorepo Interactive Demo
        </h2>
        
        <div className="space-y-4">
          <div className="bg-[var(--background)] p-4 rounded border border-[var(--border)]">
            <h3 className="font-bold text-lg mb-3 text-[var(--foreground)]">
              Ventajas de Monorepo
            </h3>
            <ul className="space-y-2 text-sm text-[var(--foreground)]">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Code Sharing:</strong> Reutiliza componentes fácilmente entre apps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Atomic Changes:</strong> Cambia API + frontend en un commit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Unified Tooling:</strong> Una config de ESLint, TS, etc para todo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Better Collaboration:</strong> Todo el equipo ve todo el código</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Simplified Dependencies:</strong> Una versión de React para todo</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--background)] p-4 rounded border border-[var(--border)]">
            <h3 className="font-bold text-lg mb-3 text-[var(--foreground)]">
              Monorepo vs Polyrepo
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-blue-500">Monorepo ✨</h4>
                <ul className="space-y-1 text-[var(--foreground)] opacity-90">
                  <li>• Un repo, todo visible</li>
                  <li>• Refactor cross-project fácil</li>
                  <li>• CI/CD coordinado</li>
                  <li>• Versionado unificado</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-500">Polyrepo 🗂️</h4>
                <ul className="space-y-1 text-[var(--foreground)] opacity-90">
                  <li>• Repos separados</li>
                  <li>• Ownership más claro</li>
                  <li>• Menor acoplamiento</li>
                  <li>• Deploy independiente</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--background)] p-4 rounded border border-[var(--border)]">
            <h3 className="font-bold text-lg mb-3 text-[var(--foreground)]">
              Herramientas Comparación
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-24 font-semibold text-[var(--primary)]">Turborepo</div>
                <div className="flex-1 text-[var(--foreground)] opacity-90">
                  Ultra-rápido, remote caching, ideal para Next.js, fácil setup
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-24 font-semibold text-[var(--primary)]">Nx</div>
                <div className="flex-1 text-[var(--foreground)] opacity-90">
                  Más features, code generation, affected builds, multi-framework
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-24 font-semibold text-[var(--primary)]">Lerna</div>
                <div className="flex-1 text-[var(--foreground)] opacity-90">
                  Package publishing, versioning, legacy pero estable
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-24 font-semibold text-[var(--primary)]">pnpm</div>
                <div className="flex-1 text-[var(--foreground)] opacity-90">
                  Workspaces eficientes, disk space optimizado, fast installs
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded border border-blue-500/20">
            <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">
              🚀 Quick Start
            </h3>
            <div className="space-y-2 text-sm font-mono bg-[var(--code-bg)] p-3 rounded">
              <div className="text-[var(--foreground)] opacity-90"># Turborepo</div>
              <div className="text-green-400">npx create-turbo@latest</div>
              <div className="text-[var(--foreground)] opacity-90 mt-2"># Nx</div>
              <div className="text-green-400">npx create-nx-workspace@latest</div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
            <h3 className="font-bold mb-2 text-yellow-600 dark:text-yellow-400">
              ⚠️ Cuando NO usar Monorepo
            </h3>
            <ul className="text-sm space-y-1 text-[var(--foreground)] opacity-90">
              <li>• Proyectos completamente independientes</li>
              <li>• Equipos que trabajan en zonas horarias muy diferentes</li>
              <li>• Proyectos con ciclos de release muy distintos</li>
              <li>• Cuando el overhead de tooling no vale la pena</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
