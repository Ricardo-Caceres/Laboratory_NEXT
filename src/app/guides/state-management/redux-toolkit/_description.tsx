export default function ReduxToolkitGuideDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Guía práctica de Redux Toolkit: la forma moderna y oficial de usar Redux.
        Aprende setup, slices, async thunks, RTK Query y best practices para state management escalable.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Core APIs</h3>
          <ul className="space-y-2">
            <li>✓ configureStore - Setup simplificado</li>
            <li>✓ createSlice - Reducers + actions</li>
            <li>✓ createAsyncThunk - Async logic</li>
            <li>✓ createEntityAdapter - Normalized data</li>
            <li>✓ RTK Query - Data fetching/caching</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✅ Ventajas vs Redux clásico</h3>
          <ul className="space-y-2">
            <li>• 90% menos boilerplate</li>
            <li>• Immer built-in - "Mutable" updates</li>
            <li>• DevTools pre-configurado</li>
            <li>• TypeScript first-class support</li>
            <li>• RTK Query - Reemplaza Redux Saga/Thunk</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ createSlice - El corazón de RTK</p>
        <ul className="space-y-1 text-sm">
          <li>• Define state, reducers y actions en un solo lugar</li>
          <li>• Genera action creators automáticamente</li>
          <li>• Usa Immer - escribe código "mutable" seguro</li>
          <li>• Perfect TypeScript inference</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔄 RTK Query</p>
        <ul className="space-y-1 text-sm">
          <li>• Data fetching y caching automático</li>
          <li>• Elimina necesidad de thunks manuales</li>
          <li>• Auto-generated hooks - useGetUserQuery</li>
          <li>• Optimistic updates, cache invalidation</li>
          <li>• Similar a React Query pero integrado con Redux</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Setup básico</p>
        <div className="text-sm space-y-2">
          <p>1. <code>configureStore</code> - Configurar store</p>
          <p>2. <code>createSlice</code> - Crear slice por feature</p>
          <p>3. <code>Provider</code> - Envolver app</p>
          <p>4. <code>useSelector/useDispatch</code> - Usar en components</p>
        </div>
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Cuándo usar RTK</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Apps grandes con state complejo compartido</li>
          <li>✓ Necesitas time-travel debugging</li>
          <li>✓ Muchos componentes acceden al mismo state</li>
          <li>✓ Lógica de negocio compleja</li>
          <li>❌ Apps simples (usa Context o Zustand)</li>
        </ul>
      </div>
    </>
  );
}
