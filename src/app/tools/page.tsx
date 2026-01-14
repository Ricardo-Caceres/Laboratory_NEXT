import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Tools',
  description: 'Herramientas esenciales para desarrollo moderno'
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'Turborepo',
      description: 'Build system de alto rendimiento para monorepos',
      href: '/tools/turborepo'
    },
    {
      title: 'DataDog',
      description: 'Monitoreo y observabilidad de aplicaciones',
      href: '/tools/datadog'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Developer Tools</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Herramientas esenciales para desarrollo, monitoreo y optimización.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{ 
              background: 'var(--panel)', 
              borderLeft: '4px solid var(--primary)'
            }}
            className="block p-6 rounded-lg hover:opacity-80 transition-opacity"
          >
            <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
            <p style={{ color: 'var(--foreground)' }}>{tool.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link 
          href="/"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
