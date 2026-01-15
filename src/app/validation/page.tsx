import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schema Validation',
  description: 'Validación de datos con TypeScript'
};

export default function ValidationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-5xl">✅</span>
          <h1 className="text-4xl font-bold">Schema Validation</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
          Valida datos de forma type-safe con las mejores bibliotecas del ecosistema TypeScript. 
          Garantiza integridad de datos en runtime con inferencia automática de tipos.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            🔒 Type-safe
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            ⚡ Runtime validation
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            🎯 Auto-inference
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Link
          href="/validation/zod"
          style={{ 
            background: 'var(--panel)', 
            borderLeft: '4px solid var(--primary)'
          }}
          className="block p-6 rounded-lg hover:opacity-80 transition-all hover:translate-x-1"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-xl font-bold">Zod</h2>
          </div>
          <p className="mb-2 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
            La biblioteca líder en validación TypeScript-first con inferencia automática de tipos
          </p>
          <p className="text-sm" style={{ color: 'var(--primary)', fontWeight: 500 }}>
            💡 Ideal para forms, APIs y validación de datos externos
          </p>
        </Link>
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
