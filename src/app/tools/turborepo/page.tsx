import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Turborepo - Monorepo Tool',
  description: 'Build system de alto rendimiento para monorepos JavaScript/TypeScript'
};

export default function TurborepoPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Turborepo</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Build system de alto rendimiento para monorepos JavaScript y TypeScript.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">¿Por qué Turborepo?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Builds incrementales ultra-rápidos</li>
          <li>Remote caching - comparte builds entre equipo</li>
          <li>Parallel execution optimizado</li>
          <li>Zero config en mayoría de casos</li>
          <li>Integración con Vercel</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Configuración y Uso</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Setup Inicial</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`# Crear nuevo monorepo
npx create-turbo@latest

# O agregar a proyecto existente
yarn add turbo -W -D

# Estructura básica
my-turborepo/
  apps/
    web/          # Next.js app
    docs/         # Documentación
  packages/
    ui/           # Shared UI components
    config/       # Shared configs
    tsconfig/     # Shared TS configs
  turbo.json
  package.json`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. turbo.json</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Package.json Root</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`{
  "name": "my-turborepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "test": "turbo run test"
  },
  "devDependencies": {
    "turbo": "latest"
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Shared Package</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// packages/ui/package.json
{
  "name": "@repo/ui",
  "version": "0.0.0",
  "main": "./src/index.tsx",
  "types": "./src/index.tsx",
  "scripts": {
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "^19.0.0"
  }
}

// packages/ui/src/button.tsx
export const Button = ({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

// packages/ui/src/index.tsx
export * from './button';`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Usar Package en App</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// apps/web/package.json
{
  "name": "web",
  "dependencies": {
    "@repo/ui": "*",
    "next": "latest",
    "react": "^19.0.0"
  }
}

// apps/web/app/page.tsx
import { Button } from '@repo/ui';

export default function Page() {
  return <Button>Click me</Button>;
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. Pipeline Dependencies</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`{
  "pipeline": {
    "build": {
      // ^ significa ejecutar build de dependencias primero
      "dependsOn": ["^build"],
      
      // Cache outputs
      "outputs": [".next/**", "dist/**"],
      
      // Variables de entorno
      "env": ["NODE_ENV"]
    },
    "deploy": {
      // Ejecutar después del build de este package
      "dependsOn": ["build"],
      
      // No cachear deploys
      "cache": false
    },
    "test": {
      // Ejecutar después del build
      "dependsOn": ["build"],
      
      // Inputs que invalidan cache
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**"]
    }
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">7. Remote Caching</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`# Login a Vercel para remote cache
npx turbo login

# Link al remote cache
npx turbo link

# Builds ahora se comparten entre equipo
yarn build  # Primer dev ejecuta
yarn build  # Segundo dev usa cache remoto

# Forzar sin cache
yarn build --force

# Ver qué se cachea
yarn build --dry-run`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">8. Filtering</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`# Build solo un workspace
turbo run build --filter=web

# Build workspace y sus dependencias
turbo run build --filter=web...

# Build todos los que dependen de ui
turbo run build --filter=...ui

# Build múltiples
turbo run build --filter=web --filter=docs

# Build basado en git changes
turbo run build --filter=[HEAD^1]`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">9. Environment Variables</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// turbo.json
{
  "pipeline": {
    "build": {
      "env": [
        "DATABASE_URL",
        "NEXT_PUBLIC_API_URL"
      ],
      "passThroughEnv": [
        "AWS_*"
      ]
    }
  },
  "globalEnv": [
    "NODE_ENV"
  ]
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">10. CI/CD Integration</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'yarn'
      
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      
      - name: Build
        run: yarn turbo run build
        env:
          TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: \${{ vars.TURBO_TEAM }}
      
      - name: Test
        run: yarn turbo run test`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa remote caching para equipos</li>
          <li>Define dependencies correctamente en pipeline</li>
          <li>Específica outputs para mejor caching</li>
          <li>Usa filtering en CI para builds más rápidos</li>
          <li>Shared configs en packages/config</li>
          <li>Versionado consistente de dependencias</li>
          <li>Monitorea tamaño de cache</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/tools"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a Tools
        </Link>
      </div>
    </div>
  );
}
