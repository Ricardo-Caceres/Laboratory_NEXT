
import Counter from './components/Counter';
import Cart from './components/Cart';
import AsyncPosts from './components/AsyncPosts';
import Link from 'next/link';

export default function ZustandPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Gestión de Estado con Zustand</h1>
        <p className="mt-2 text-lg text-gray-600">
          Ejemplos de uso de Zustand para gestionar el estado en una aplicación de Next.js.
        </p>
        <Link href="/guides/state-management/zustand" className="text-blue-500 hover:underline mt-2 inline-block">
          Leer la guía detallada de Zustand
        </Link>
      </header>

      <div className="space-y-8">
        <Counter />
        <Cart />
        <AsyncPosts />
      </div>
    </div>
  );
}
