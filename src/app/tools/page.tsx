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
      icon: '⚡',
      description: 'Sistema de build de alto rendimiento diseñado específicamente para monorepos',
      benefits: 'Incrementa velocidad hasta 85% con cache inteligente',
      href: '/tools/turborepo'
    },
    {
      title: 'DataDog',
      icon: '📊',
      description: 'Plataforma completa de monitoreo y observabilidad para aplicaciones modernas',
      benefits: 'Detecta problemas antes que afecten usuarios',
      href: '/tools/datadog'
    },
    {
      title: 'Documentation Tools',
      icon: '📚',
      description: 'Suite de herramientas profesionales para documentación técnica',
      benefits: 'Docusaurus, VitePress, Nextra y TypeDoc',
      href: '/tools/documentation'
    },
    {
      title: 'Artillery',
      icon: '🎯',
      description: 'Framework moderno de load testing para APIs, WebSockets y microservicios',
      benefits: 'Simula millones de usuarios concurrentes',
      href: '/tools/artillery'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Developer Tools</h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
          Herramientas esenciales que todo desarrollador debe dominar para 
          construir, monitorear y optimizar aplicaciones de clase mundial.
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
            className="block p-6 rounded-lg hover:opacity-80 transition-all hover:translate-x-1"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{tool.icon}</span>
              <h2 className="text-xl font-bold">{tool.title}</h2>
            </div>
            <p className="mb-2 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
              {tool.description}
            </p>
            <p className="text-sm" style={{ color: 'var(--primary)', fontWeight: 500 }}>
              💡 {tool.benefits}
            </p>
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
