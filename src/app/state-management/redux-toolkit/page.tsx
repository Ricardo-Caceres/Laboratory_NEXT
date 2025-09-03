
import { ReduxProvider } from './provider';
import Counter from './components/Counter';
import Cart from './components/Cart';
import Link from 'next/link';

export default function ReduxToolkitPage() {
  return (
    <ReduxProvider>
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Gestión de Estado con Redux Toolkit</h1>
          <p className="mt-2 text-lg text-gray-600">
            Ejemplos de uso de Redux Toolkit para gestionar el estado en una aplicación de Next.js.
          </p>
          <Link href="/guides/state-management/redux-toolkit" className="text-blue-500 hover:underline mt-2 inline-block">
            Leer la guía detallada de Redux Toolkit
          </Link>
        </header>

        <div className="space-y-8">
          <Counter />
          <Cart />
        </div>
      </div>
    </ReduxProvider>
  );
}
