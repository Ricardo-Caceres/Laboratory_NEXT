import CodeDisplay from '@/components/CodeDisplay';

export default function ZustandGuidePage() {
  const codeContent = [
    {
      filePath: 'src/app/state-management/zustand/stores/counter-store.ts',
      content: `import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  resetCounter: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCounter: () => set({ count: 0 }),
}));
`,
    },
    {
      filePath: 'src/app/state-management/zustand/stores/cart-store.ts',
      content: `import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem: (product) =>
          set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
              return {
                items: state.items.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
              };
            }
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }),
        removeItem: (productId) =>
          set((state) => {
            const existingItem = state.items.find((item) => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
              return {
                items: state.items.map((item) =>
                  item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                ),
              };
            }
            return { items: state.items.filter((item) => item.id !== productId) };
          }),
        clearCart: () => set({ items: [] }),
        totalPrice: () => {
          return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
      }),
      {
        name: 'cart-storage', // unique name
      }
    )
  )
);
`,
    },
    {
      filePath: 'src/app/state-management/zustand/stores/post-store.ts',
      content: `import { create } from 'zustand';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AsyncState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const useAsyncStore = create<AsyncState>((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const posts = await response.json();
      set({ posts, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred';
      set({ loading: false, error: message });
    }
  },
}));
`,
    },
    {
      filePath: 'src/app/state-management/zustand/components/Counter.tsx',
      content: `'use client';

import { useCounterStore } from '../store';

export default function Counter() {
  const { count, increment, decrement, resetCounter } = useCounterStore();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-2">Contador (Ejemplo Básico)</h2>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">Incrementar</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">Decrementar</button>
        <button onClick={resetCounter} className="px-4 py-2 bg-gray-500 text-white rounded">Resetear</button>
      </div>
    </div>
  );
}
`,
    },
    {
      filePath: 'src/app/state-management/zustand/components/Cart.tsx',
      content: `'use client';

import { useCartStore, CartItem } from '../store';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 300 },
];

export default function Cart() {
  const { items, addItem, removeItem, clearCart, totalPrice } = useCartStore();

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Carrito de Compras (Ejemplo Intermedio)</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Productos Disponibles</h3>
        <div className="flex gap-2 mt-2">
          {products.map((product) => (
            <button 
              key={product.id} 
              onClick={() => addItem(product)} 
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Agregar {product.name} - \${product.price}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Items en el Carrito</h3>
        {items.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="list-disc pl-5 mt-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-1">
                <span>{item.name} (x{item.quantity}) - \${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="font-bold text-lg mb-4">Total: \${totalPrice()}</div>

      <button onClick={clearCart} className="px-4 py-2 bg-gray-700 text-white rounded">Limpiar Carrito</button>
    </div>
  );
}
`,
    },
    {
      filePath: 'src/app/state-management/zustand/components/AsyncPosts.tsx',
      content: `'use client';

import { useEffect } from 'react';
import { useAsyncStore } from '../store';

export default function AsyncPosts() {
  const { posts, loading, error, fetchPosts } = useAsyncStore();

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Posts Asíncronos (Ejemplo Avanzado)</h2>
      <button 
        onClick={fetchPosts} 
        disabled={loading} 
        className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-purple-300"
      >
        {loading ? 'Cargando...' : 'Cargar Posts'}
      </button>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {posts.length > 0 && (
        <ul className="list-disc pl-5 mt-4">
          {posts.map(post => (
            <li key={post.id} className="mb-2">
              <h4 className="font-semibold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
`,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Guía Detallada de Zustand</h1>
        <p className="mt-2 text-lg text-gray-600">
          Una guía completa para entender y usar Zustand en una aplicación de Next.js.
        </p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Creando los Stores</h2>
          <p className="mb-4">
            En Zustand, un &quot;store&quot; es un hook que contiene tanto el estado como las acciones que lo modifican. Se crean con la función `create`.
          </p>
          <CodeDisplay codeContent={[codeContent[0], codeContent[1], codeContent[2]]} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Usando los Stores en los Componentes</h2>
          <p className="mb-4">
            Para usar un store, simplemente lo importas y lo llamas como un hook en tus componentes. No es necesario ningún `Provider`.
          </p>
          <CodeDisplay codeContent={[codeContent[3], codeContent[4], codeContent[5]]} />
        </section>
      </div>
    </div>
  );
}
