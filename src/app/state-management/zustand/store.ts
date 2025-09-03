
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Counter (Ejemplo Básico)
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

// 2. Shopping Cart (Ejemplo Intermedio con Middleware)
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            const updatedItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            return { items: updatedItems };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      clearCart: () => set({ items: [] }),
      totalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage', // key en localStorage
    }
  )
);

// 3. Async Actions & Loading State (Ejemplo Avanzado)
interface Post {
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
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            if (!response.ok) throw new Error('Failed to fetch posts.');
            const posts = await response.json();
            set({ posts, loading: false });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
            set({ loading: false, error: errorMessage });
        }
    }
}));
