import CodeDisplay from '@/components/CodeDisplay';

export default function ReduxToolkitGuidePage() {
  const codeContent = [
    {
      filePath: 'src/app/state-management/redux-toolkit/store/slices/counterSlice.ts',
      content: `import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
`,
    },
    {
      filePath: 'src/app/state-management/redux-toolkit/store/slices/cartSlice.ts',
      content: `import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Selectors
const selectCartModule = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartModule],
  (cart) => cart.items
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export default cartSlice.reducer;
`,
    },
    {
      filePath: 'src/app/state-management/redux-toolkit/store/index.ts',
      content: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import cartReducer from '../features/cart/cart-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`,
    },
    {
      filePath: 'src/app/state-management/redux-toolkit/provider.tsx',
      content: `'use client';

import { Provider } from 'react-redux';
import { store } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
`,
    },
    {
      filePath: 'src/app/state-management/redux-toolkit/components/Counter.tsx',
      content: `'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, reset } from '../features/counter/counter-slice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-2">Contador (Ejemplo Básico)</h2>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded">Incrementar</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">Decrementar</button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-gray-500 text-white rounded">Resetear</button>
      </div>
    </div>
  );
}
`,
    },
    {
      filePath: 'src/app/state-management/redux-toolkit/components/Cart.tsx',
      content: `'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem, clearCart, selectCartItems, selectTotalPrice } from '../features/cart/cart-slice';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 300 },
];

export default function Cart() {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Carrito de Compras (Ejemplo Intermedio)</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Productos Disponibles</h3>
        <div className="flex gap-2 mt-2">
          {products.map((product) => (
            <button 
              key={product.id} 
              onClick={() => dispatch(addItem(product))} 
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
                <button onClick={() => dispatch(removeItem(item.id))} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="font-bold text-lg mb-4">Total: \${totalPrice}</div>

      <button onClick={() => dispatch(clearCart())} className="px-4 py-2 bg-gray-700 text-white rounded">Limpiar Carrito</button>
    </div>
  );
}
`,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Guía Detallada de Redux Toolkit</h1>
        <p className="mt-2 text-lg text-gray-600">
          Una guía completa para entender y usar Redux Toolkit en una aplicación de Next.js.
        </p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Creando los Slices</h2>
          <p className="mb-4">
            Los "slices" son la parte más importante de Redux Toolkit. Un slice es una colección de lógica de reducers y acciones para una sola característica en tu aplicación.
          </p>
          <CodeDisplay codeContent={[codeContent[0], codeContent[1]]} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Configurando el Store</h2>
          <p className="mb-4">
            El store de Redux es el objeto que contiene todo el estado de la aplicación. Con `configureStore`, podemos combinar todos nuestros slices en un solo store.
          </p>
          <CodeDisplay codeContent={[codeContent[2]]} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Proveyendo el Store</h2>
          <p className="mb-4">
            Para que nuestros componentes de React puedan acceder al store, necesitamos envolver nuestra aplicación con el componente `Provider` de `react-redux`.
          </p>
          <CodeDisplay codeContent={[codeContent[3]]} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Usando el Store en los Componentes</h2>
          <p className="mb-4">
            Finalmente, podemos usar los hooks `useSelector` y `useDispatch` en nuestros componentes para leer el estado y despachar acciones.
          </p>
          <CodeDisplay codeContent={[codeContent[4], codeContent[5]]} />
        </section>
      </div>
    </div>
  );
}
