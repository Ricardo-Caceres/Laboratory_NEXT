'use client';

import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] as string[] },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(`+1 at ${new Date().toLocaleTimeString()}`);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(`-1 at ${new Date().toLocaleTimeString()}`);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.history.push(`+${action.payload} at ${new Date().toLocaleTimeString()}`);
    },
    reset: (state) => {
      state.value = 0;
      state.history.push(`Reset at ${new Date().toLocaleTimeString()}`);
    },
  },
});

const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const history = useSelector((state: RootState) => state.counter.history);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Redux Toolkit Counter</h1>
            <p className="text-base sm:text-lg text-gray-600">Modern Redux with simplified API</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 shadow-lg text-center">
              <p className="text-purple-100 text-sm font-medium mb-2">Redux State Value</p>
              <p className="text-6xl sm:text-7xl font-bold text-white">{count}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Action History
              </h3>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {history.slice(-5).reverse().map((item, index) => (
                  <div key={index} className="text-xs text-gray-600 bg-white px-3 py-2 rounded border border-gray-200">
                    {item}
                  </div>
                ))}
                {history.length === 0 && (
                  <p className="text-sm text-gray-400 text-center py-4">No actions yet</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <button 
              className="px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition-all"
              onClick={() => dispatch(increment())}
            >
              +1
            </button>
            <button 
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              +5
            </button>
            <button 
              className="px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 active:scale-95 transition-all"
              onClick={() => dispatch(decrement())}
            >
              -1
            </button>
            <button 
              className="px-4 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:scale-95 transition-all"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-gray-900 mb-2">Redux Toolkit Benefits:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Simplified store setup with configureStore</li>
              <li>✓ Reducers with createSlice (no switch statements)</li>
              <li>✓ Immutability with Immer built-in</li>
              <li>✓ TypeScript support out of the box</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReduxToolkitPage() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
