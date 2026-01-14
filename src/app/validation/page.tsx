import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schema Validation',
  description: 'Validación de datos con TypeScript'
};

export default function ValidationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Schema Validation</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Bibliotecas para validación de datos type-safe.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Link
          href="/validation/zod"
          style={{ 
            background: 'var(--panel)', 
            borderLeft: '4px solid var(--primary)'
          }}
          className="block p-6 rounded-lg hover:opacity-80 transition-opacity"
        >
          <h2 className="text-xl font-bold mb-2">Zod</h2>
          <p style={{ color: 'var(--foreground)' }}>
            TypeScript-first schema validation con inferencia automática de tipos
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
