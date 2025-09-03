# Redux Toolkit

Redux Toolkit es la forma oficial y recomendada de escribir lógica de Redux. Está diseñado para simplificar el desarrollo con Redux y resolver problemas comunes como la configuración compleja de la tienda, el código repetitivo y la dificultad para manejar la lógica asíncrona.

## ¿Por qué Redux Toolkit?

Redux es una librería de manejo de estado predecible para aplicaciones JavaScript. Sin embargo, la configuración inicial y la cantidad de código necesario para realizar tareas simples pueden ser abrumadoras. Redux Toolkit aborda estos problemas al proporcionar un conjunto de herramientas y abstracciones que simplifican el proceso.

### Problemas con Redux "clásico"

- **Configuración compleja de la tienda:** Configurar una tienda de Redux con middleware, devtools y otros potenciadores puede ser complicado.
- **Código repetitivo:** Escribir acciones y reductores a menudo implica una gran cantidad of código repetitivo.
- **Lógica asíncrona:** Redux no tiene una forma integrada de manejar la lógica asíncrona, lo que requiere el uso de middleware como `redux-thunk` o `redux-saga`.

### Soluciones de Redux Toolkit

- **`configureStore`:** Simplifica la configuración de la tienda al incluir `redux-thunk` y Redux DevTools por defecto.
- **`createSlice`:** Genera automáticamente creadores de acciones y tipos de acción a partir de un conjunto de funciones reductoras, lo que reduce drásticamente el código repetitivo.
- **`createAsyncThunk`:** Proporciona una abstracción para manejar la lógica asíncrona y las acciones que despachan en función del estado de una Promesa.

## APIs principales

### `configureStore`

`configureStore` envuelve la función `createStore` de Redux para simplificar la configuración. Acepta un objeto de opciones y configura la tienda con los reductores y el middleware proporcionados.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
```

### `createSlice`

`createSlice` es una función que acepta un estado inicial, un objeto de funciones reductoras y un "nombre de porción", y genera automáticamente creadores de acciones y tipos de acción que corresponden a los reductores y al estado.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### `createAsyncThunk`

`createAsyncThunk` es una función que acepta un tipo de acción y una función que devuelve una promesa, y genera un thunk que despacha acciones de ciclo de vida de promesa que puede escuchar en sus reductores.

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    return await response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = 'loading';
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.entities.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
```

## Ejemplo de uso en React

Para usar Redux Toolkit con React, necesitarás instalar `react-redux`.

```bash
npm install react-redux
```

Luego, puedes usar el componente `Provider` para que la tienda de Redux esté disponible para tu aplicación.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

En tus componentes, puedes usar los hooks `useSelector` y `useDispatch` para interactuar con la tienda de Redux.

```javascript
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
```

## Redux DevTools

Redux Toolkit viene con soporte para la extensión Redux DevTools fuera de la caja. Simplemente instala la extensión en tu navegador y `configureStore` la habilitará automáticamente. Las DevTools te permiten inspeccionar el estado de tu tienda, ver las acciones que se han despachado y viajar en el tiempo a estados anteriores.
