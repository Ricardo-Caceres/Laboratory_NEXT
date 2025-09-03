
# Redux Toolkit

Redux Toolkit (RTK) es el conjunto de herramientas oficial y recomendado para el desarrollo con Redux. Incluye utilidades que ayudan a simplificar el desarrollo con Redux y a evitar los errores más comunes.

## Características Principales

- **Opinado y eficiente:** Proporciona una buena configuración por defecto y reduce el boilerplate.
- **Inmutable por defecto:** Usa Immer.js internamente para que puedas escribir lógica de actualización "mutativa" que se convierte en actualizaciones inmutables.
- **Baterías incluidas:** Viene con las herramientas más utilizadas como `createSlice`, `createAsyncThunk`, y `createEntityAdapter`.

## Instalación

```bash
npm install @reduxjs/toolkit react-redux
# o
yarn add @reduxjs/toolkit react-redux
```

## Configuración del Store

`configureStore` simplifica la creación del store, combinando reductores, añadiendo middleware y habilitando las Redux DevTools.

```typescript
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## Creando un Slice

`createSlice` genera automáticamente creadores de acciones y tipos de acción a partir de un reductor.

```typescript
// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

## Usando Redux en Componentes

Necesitas envolver tu aplicación en un `Provider` y luego usar los hooks `useSelector` y `useDispatch` en tus componentes.

```tsx
// layout.tsx o un componente provider
'use client';
import { Provider } from 'react-redux';
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// Counter.tsx
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from './features/counter/counterSlice';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
}
```

## Acciones Asíncronas con `createAsyncThunk`

`createAsyncThunk` es la forma estándar de manejar peticiones asíncronas.

```typescript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    return response.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
        // Lógica para estado pendiente
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
        // Lógica para estado completado
    })
    builder.addCase(fetchUserById.rejected, (state, action) => {
        // Lógica para estado rechazado
    })
  },
})
```
