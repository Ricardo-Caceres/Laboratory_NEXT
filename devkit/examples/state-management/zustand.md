# Zustand

Zustand es una librería de manejo de estado para React pequeña, rápida y escalable. Se basa en un enfoque minimalista y proporciona una API simple para manejar el estado de tu aplicación sin el código repetitivo de otras soluciones como Redux.

## ¿Por qué Zustand?

Zustand se destaca por su simplicidad y facilidad de uso. A diferencia de Redux, no necesitas definir acciones, reductores o selectores complejos. En su lugar, creas una "tienda" que contiene tu estado y las funciones para actualizarlo.

### Beneficios de Zustand

- **Mínimo código repetitivo:** Con Zustand, puedes lograr mucho con muy poco código.
- **Sin proveedor de contexto:** No necesitas envolver tu aplicación en un componente `Provider`.
- **Renderizados optimizados:** Los componentes solo se vuelven a renderizar cuando cambian las partes del estado que les interesan.
- **Fácil de aprender:** La API es pequeña e intuitiva, lo que facilita el comienzo.

## Conceptos básicos

### `create`

La función `create` se utiliza para crear una tienda. Acepta una función que devuelve el estado inicial de la tienda y las acciones para actualizarlo.

```javascript
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

### `set`

La función `set` se utiliza para actualizar el estado de la tienda. Recibe una función que toma el estado actual y devuelve el nuevo estado.

### El hook

Zustand devuelve un hook que puedes usar en tus componentes para acceder al estado y a las acciones de la tienda.

```javascript
import React from 'react';
import { useCounterStore } from './store';

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};
```

## Funciones avanzadas

### Middleware

Zustand admite middleware que te permite agregar funcionalidad adicional a tus tiendas. Dos middleware populares son:

- **`devtools`:** Integra tu tienda con las Redux DevTools para facilitar la depuración.
- **`persist`:** Guarda el estado de tu tienda en el almacenamiento local para que persista entre sesiones.

```javascript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useCounterStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      {
        name: 'counter-storage', // nombre de la clave en el almacenamiento local
      }
    )
  )
);
```

### Acciones asíncronas

Puedes definir acciones asíncronas en tu tienda para obtener datos de una API u realizar otras operaciones asíncronas.

```javascript
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  fetchUser: async (userId) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = await response.json();
    set({ user: data.data });
  },
}));
```
