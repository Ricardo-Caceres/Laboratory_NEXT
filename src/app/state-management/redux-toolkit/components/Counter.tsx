
'use client';

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
