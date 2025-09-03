
'use client';

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
              Agregar {product.name} - ${product.price}
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
                <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)} className="px-2 py-1 bg-red-500 text-white rounded text-xs">Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="font-bold text-lg mb-4">Total: ${totalPrice()}</div>

      <button onClick={clearCart} className="px-4 py-2 bg-gray-700 text-white rounded">Limpiar Carrito</button>
    </div>
  );
}
