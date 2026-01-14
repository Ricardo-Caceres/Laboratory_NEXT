'use client';

import { Code } from 'lucide-react';

export default function DocumentationToolsPage() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="header-section">
          <div className="icon-wrapper">
            <Code className="icon" />
          </div>
          <h1>Documentation Tools</h1>
          <p className="subtitle">
            Herramientas modernas para crear documentación técnica profesional
          </p>
        </div>

        <div className="section-card">
          <h2>📚 Docusaurus</h2>
          <p>Framework de Meta/Facebook para crear sitios de documentación estáticos con React</p>
          
          <h3>Características Principales</h3>
          <ul>
            <li><strong>Basado en React:</strong> Personalización completa con componentes React</li>
            <li><strong>Markdown/MDX:</strong> Soporte nativo para escribir documentación</li>
            <li><strong>Versionado:</strong> Múltiples versiones de documentación simultáneas</li>
            <li><strong>i18n:</strong> Internacionalización integrada</li>
            <li><strong>SEO Optimizado:</strong> SSR y meta tags automáticos</li>
            <li><strong>Búsqueda:</strong> Integración con Algolia DocSearch</li>
          </ul>

          <div className="code-block">
            <h4>Instalación y Setup</h4>
            <pre>{`# Crear nuevo proyecto
npx create-docusaurus@latest my-website classic

# Instalar TypeScript
yarn add --dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus

# Estructura básica
my-website/
├── docs/                  # Documentación
├── blog/                  # Blog (opcional)
├── src/
│   ├── components/        # Componentes React
│   ├── css/              # Estilos
│   └── pages/            # Páginas custom
├── static/               # Assets estáticos
└── docusaurus.config.js  # Configuración`}</pre>
          </div>

          <div className="code-block">
            <h4>Configuración docusaurus.config.js</h4>
            <pre>{`module.exports = {
  title: 'My Project',
  tagline: 'Documentation for developers',
  url: 'https://myproject.com',
  baseUrl: '/',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/user/repo/edit/main/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Project',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/user/repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Tutorial', to: '/docs/intro' },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
    },
  },
};`}</pre>
          </div>

          <div className="code-block">
            <h4>MDX con Componentes React</h4>
            <pre>{`---
id: intro
title: Introduction
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Welcome to My Docs

<Tabs>
  <TabItem value="js" label="JavaScript">
    \`\`\`javascript
    const greeting = 'Hello World';
    \`\`\`
  </TabItem>
  <TabItem value="ts" label="TypeScript">
    \`\`\`typescript
    const greeting: string = 'Hello World';
    \`\`\`
  </TabItem>
</Tabs>

## Custom Component

<CustomAlert type="warning">
  This is a custom component!
</CustomAlert>`}</pre>
          </div>

          <div className="code-block">
            <h4>Versionado de Documentación</h4>
            <pre>{`# Crear nueva versión
yarn docusaurus docs:version 1.0.0

# Estructura después de versionar
versioned_docs/
├── version-1.0.0/
│   └── intro.md
versioned_sidebars/
└── version-1.0.0-sidebars.json
versions.json

# En docusaurus.config.js
docs: {
  lastVersion: 'current',
  versions: {
    current: {
      label: '2.0.0 (Next)',
      path: 'next',
    },
    '1.0.0': {
      label: '1.0.0',
      path: '/',
    },
  },
}`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>📖 VitePress</h2>
          <p>Generador de sitios estáticos basado en Vite y Vue, ultra rápido</p>
          
          <div className="code-block">
            <h4>Setup VitePress</h4>
            <pre>{`# Instalación
yarn add -D vitepress

# Inicializar
yarn vitepress init

# Estructura
docs/
├── .vitepress/
│   ├── config.ts        # Configuración
│   └── theme/           # Tema custom
├── guide/
│   ├── index.md
│   └── getting-started.md
└── index.md             # Home page`}</pre>
          </div>

          <div className="code-block">
            <h4>Configuración .vitepress/config.ts</h4>
            <pre>{`import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'Technical documentation',
  
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is this?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/user/repo' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>📝 Nextra</h2>
          <p>Framework de documentación basado en Next.js</p>
          
          <div className="code-block">
            <h4>Setup Nextra</h4>
            <pre>{`# Instalación
yarn add next react react-dom nextra nextra-theme-docs

# next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()

# Estructura
pages/
├── _meta.json           # Sidebar config
├── index.mdx           # Home
├── docs/
│   ├── _meta.json
│   ├── getting-started.mdx
│   └── advanced.mdx
└── api/
    └── reference.mdx`}</pre>
          </div>

          <div className="code-block">
            <h4>theme.config.tsx</h4>
            <pre>{`import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/user/repo',
  },
  docsRepositoryBase: 'https://github.com/user/repo/tree/main',
  footer: {
    text: 'My Documentation © 2024',
  },
  search: {
    placeholder: 'Search documentation...',
  },
  toc: {
    title: 'On This Page',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
}

export default config`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>📚 GitBook</h2>
          <p>Plataforma de documentación moderna con colaboración en tiempo real</p>
          
          <div className="code-block">
            <h4>GitBook CLI</h4>
            <pre>{`# Instalación
yarn global add gitbook-cli

# Inicializar
gitbook init

# Estructura SUMMARY.md
# Summary

* [Introduction](README.md)
* [Getting Started](getting-started/README.md)
  * [Installation](getting-started/installation.md)
  * [Configuration](getting-started/configuration.md)
* [API Reference](api/README.md)
  * [Authentication](api/auth.md)
  * [Endpoints](api/endpoints.md)

# book.json
{
  "title": "My Documentation",
  "description": "Technical docs",
  "plugins": [
    "search",
    "prism",
    "github",
    "anchors"
  ],
  "pluginsConfig": {
    "github": {
      "url": "https://github.com/user/repo"
    }
  }
}`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>🔧 TypeDoc</h2>
          <p>Generador de documentación automática para TypeScript</p>
          
          <div className="code-block">
            <h4>Setup TypeDoc</h4>
            <pre>{`# Instalación
yarn add -D typedoc

# typedoc.json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "theme": "default",
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeExternals": true,
  "includeVersion": true,
  "readme": "README.md",
  "navigation": {
    "includeCategories": true,
    "includeGroups": true
  }
}

# Comentarios JSDoc
/**
 * Calcula el precio total con descuento
 * 
 * @param price - Precio original del producto
 * @param discount - Porcentaje de descuento (0-100)
 * @returns Precio final con descuento aplicado
 * 
 * @example
 * \`\`\`typescript
 * const finalPrice = calculateTotal(100, 20);
 * console.log(finalPrice); // 80
 * \`\`\`
 * 
 * @throws {Error} Si el descuento es inválido
 * @public
 */
export function calculateTotal(
  price: number,
  discount: number
): number {
  if (discount < 0 || discount > 100) {
    throw new Error('Invalid discount');
  }
  return price - (price * discount / 100);
}

/**
 * Usuario del sistema
 * @category Models
 */
export interface User {
  /** ID único del usuario */
  id: string;
  /** Nombre completo */
  name: string;
  /** Correo electrónico */
  email: string;
  /** Roles asignados */
  roles: Role[];
}`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>📄 JSDoc</h2>
          <p>Documentación inline para JavaScript</p>
          
          <div className="code-block">
            <h4>JSDoc Setup y Ejemplos</h4>
            <pre>{`# Instalación
yarn add -D jsdoc

# jsdoc.json
{
  "source": {
    "include": ["src"],
    "includePattern": ".+\\\\.js(doc|x)?$",
    "excludePattern": "(node_modules|docs)"
  },
  "opts": {
    "destination": "./docs",
    "recurse": true,
    "template": "node_modules/docdash"
  },
  "plugins": ["plugins/markdown"],
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true
  }
}

// Ejemplos avanzados de JSDoc

/**
 * @typedef {Object} Product
 * @property {string} id - ID del producto
 * @property {string} name - Nombre
 * @property {number} price - Precio
 * @property {string[]} tags - Etiquetas
 */

/**
 * Servicio de productos
 * @class ProductService
 */
class ProductService {
  /**
   * @param {Object} config - Configuración
   * @param {string} config.apiUrl - URL de la API
   * @param {number} [config.timeout=5000] - Timeout en ms
   */
  constructor(config) {
    this.apiUrl = config.apiUrl;
    this.timeout = config.timeout || 5000;
  }

  /**
   * Obtiene un producto por ID
   * 
   * @async
   * @param {string} id - ID del producto
   * @returns {Promise<Product>} Producto encontrado
   * @throws {Error} Si el producto no existe
   * 
   * @example
   * const product = await service.getProduct('123');
   */
  async getProduct(id) {
    // implementación
  }

  /**
   * Filtra productos
   * 
   * @template T
   * @param {T[]} products - Array de productos
   * @param {(item: T) => boolean} predicate - Función de filtro
   * @returns {T[]} Productos filtrados
   */
  filter(products, predicate) {
    return products.filter(predicate);
  }
}

/**
 * @callback RequestCallback
 * @param {Error|null} error - Error si ocurrió
 * @param {Object} response - Respuesta del servidor
 * @returns {void}
 */

/**
 * @param {string} url - URL
 * @param {RequestCallback} callback - Callback
 */
function makeRequest(url, callback) {
  // implementación
}`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>🎨 Storybook Docs</h2>
          <p>Documentación automática de componentes con Storybook</p>
          
          <div className="code-block">
            <h4>MDX Stories con Docs</h4>
            <pre>{`// Button.stories.mdx
import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';
import { Button } from './Button';

<Meta title="Components/Button" component={Button} />

# Button

Componente de botón reutilizable con múltiples variantes.

## Props

<ArgsTable of={Button} />

## Variantes

<Canvas>
  <Story name="Primary">
    <Button variant="primary">Primary Button</Button>
  </Story>
  <Story name="Secondary">
    <Button variant="secondary">Secondary Button</Button>
  </Story>
</Canvas>

## Uso

\`\`\`tsx
import { Button } from '@/components/Button';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
\`\`\`

// Button.stories.tsx (alternativa)
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Componente de botón con múltiples variantes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Variante visual del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};`}</pre>
          </div>
        </div>

        <div className="section-card">
          <h2>📚 Comparación de Herramientas</h2>
          
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Mejor Para</th>
                <th>Stack</th>
                <th>Características Clave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Docusaurus</strong></td>
                <td>Proyectos grandes, docs versionadas</td>
                <td>React</td>
                <td>Versionado, i18n, MDX, búsqueda</td>
              </tr>
              <tr>
                <td><strong>VitePress</strong></td>
                <td>Performance, simplicidad</td>
                <td>Vue, Vite</td>
                <td>Ultra rápido, búsqueda local</td>
              </tr>
              <tr>
                <td><strong>Nextra</strong></td>
                <td>Next.js projects</td>
                <td>Next.js</td>
                <td>Integración Next.js, MDX</td>
              </tr>
              <tr>
                <td><strong>GitBook</strong></td>
                <td>Colaboración en equipo</td>
                <td>Cloud/Self-hosted</td>
                <td>Editor WYSIWYG, colaborativo</td>
              </tr>
              <tr>
                <td><strong>TypeDoc</strong></td>
                <td>API TypeScript</td>
                <td>TypeScript</td>
                <td>Auto-generado desde código</td>
              </tr>
              <tr>
                <td><strong>Storybook</strong></td>
                <td>Componentes UI</td>
                <td>Framework-agnostic</td>
                <td>Testing visual, interactivo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section-card">
          <h2>🚀 Best Practices</h2>
          
          <h3>Estructura de Documentación</h3>
          <div className="code-block">
            <pre>{`docs/
├── getting-started/
│   ├── installation.md
│   ├── quick-start.md
│   └── prerequisites.md
├── guides/
│   ├── authentication.md
│   ├── deployment.md
│   └── testing.md
├── api/
│   ├── reference/
│   │   ├── classes/
│   │   ├── interfaces/
│   │   └── functions/
│   └── endpoints.md
├── tutorials/
│   ├── beginner/
│   ├── intermediate/
│   └── advanced/
├── examples/
│   └── use-cases/
├── troubleshooting/
│   ├── common-issues.md
│   └── faq.md
└── contributing/
    ├── code-of-conduct.md
    ├── development.md
    └── style-guide.md`}</pre>
          </div>

          <h3>Mejores Prácticas</h3>
          <ul>
            <li><strong>Consistencia:</strong> Usar mismo formato y estructura</li>
            <li><strong>Ejemplos:</strong> Incluir código ejecutable y casos de uso</li>
            <li><strong>Búsqueda:</strong> Implementar búsqueda full-text</li>
            <li><strong>Versionado:</strong> Mantener docs de versiones anteriores</li>
            <li><strong>Actualización:</strong> CI/CD para actualizar automáticamente</li>
            <li><strong>SEO:</strong> Meta tags, sitemap, URLs amigables</li>
            <li><strong>Accesibilidad:</strong> WCAG 2.1 compliance</li>
            <li><strong>Mobile:</strong> Diseño responsive</li>
            <li><strong>Analytics:</strong> Medir uso y mejorar contenido</li>
          </ul>
        </div>

        <div className="section-card">
          <h2>🔄 CI/CD para Documentación</h2>
          
          <div className="code-block">
            <h4>GitHub Actions - Deploy Docusaurus</h4>
            <pre>{`# .github/workflows/deploy-docs.yml
name: Deploy Documentation

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'docusaurus.config.js'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'yarn'
      
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      
      - name: Build docs
        run: yarn build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          cname: docs.example.com`}</pre>
          </div>

          <div className="code-block">
            <h4>Vercel Deploy</h4>
            <pre>{`# vercel.json
{
  "buildCommand": "yarn build",
  "outputDirectory": "build",
  "installCommand": "yarn install",
  "framework": "docusaurus2",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`}</pre>
          </div>
        </div>

        <div className="navigation-section">
          <a href="/tools" className="back-link">← Volver a Tools</a>
        </div>
      </div>
    </div>
  );
}
