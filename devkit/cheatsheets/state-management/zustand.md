
# Zustand

Zustand es una solución de gestión de estado pequeña, rápida y escalable para React. Se basa en hooks y no requiere envolver tu aplicación en un componente de proveedor.

## Características Principales

- **Simple y poco dogmático:** La API es sencilla y fácil de aprender.
- **Menos boilerplate:** No necesitas escribir mucho código para empezar.
- **Renderizados optimizados:** Solo los componentes que usan una parte del estado se vuelven a renderizar cuando esa parte cambia.
- **Basado en hooks:** Se integra de forma natural con el ecosistema de React.

## Instalación

```bash
npm install zustand
# o
yarn add zustand
```

## Creando un Store

Para crear un store, usamos la función `create` de Zustand.

```typescript
// store.ts
import { create } from 'zustand';

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## Usando el Store en Componentes

Puedes usar el store en cualquier componente funcional como un hook.

```tsx
// BearCounter.tsx
import { useBearStore } from './store';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} osos alrededor.</h1>;
}

// Controls.tsx
import { useBearStore } from './store';

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>uno más</button>;
}
```

## Middleware

Zustand tiene middleware que puede extender su funcionalidad.

### `persist`

Para guardar el estado en `localStorage` o `sessionStorage`.

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // nombre de la clave en el storage
    }
  )
);
```

### `immer`

Para mutar el estado de forma segura.

```typescript
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
  count: number;
}

interface Actions {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
}

export const useCountStore = create(
  immer<State & Actions>((set) => ({
    count: 0,
    increment: (qty) => {
      set((state) => {
        state.count += qty;
      });
    },
    decrement: (qty) => {
      set((state) => {
        state.count -= qty;
      });
    },
  }))
);
```

## Patrones Avanzados

### Acciones Asíncronas

Puedes definir acciones asíncronas dentro de tu store.

```typescript
interface DogState {
  dogCount: number;
  fetchDogs: () => Promise<void>;
}

export const useDogStore = create<DogState>((set) => ({
  dogCount: 0,
  fetchDogs: async () => {
    const response = await fetch('https://api.example.com/dogs');
    const { count } = await response.json();
    set({ dogCount: count });
  },
}));
```
