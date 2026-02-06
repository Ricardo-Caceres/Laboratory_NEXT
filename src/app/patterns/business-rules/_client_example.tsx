'use client';

import { useState, useMemo } from 'react';

// ============================================================================
// DOMAIN MODELS
// ============================================================================

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: 'electronics' | 'clothing' | 'food';
}

interface Customer {
  id: string;
  name: string;
  email: string;
  membershipLevel: 'basic' | 'premium' | 'vip';
  totalPurchases: number;
  registrationDate: Date;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// ============================================================================
// BUSINESS RULES
// ============================================================================

class ShoppingCartRules {
  // Regla: Stock disponible
  static hasEnoughStock(product: Product, requestedQuantity: number): boolean {
    return product.stock >= requestedQuantity;
  }

  // Regla: Cantidad mínima por producto
  static meetsMinimumQuantity(quantity: number): boolean {
    return quantity >= 1;
  }

  // Regla: Cantidad máxima por producto
  static meetsMaximumQuantity(quantity: number): boolean {
    return quantity <= 10;
  }

  // Regla: Cálculo de descuento por membresía
  static getMembershipDiscount(level: Customer['membershipLevel']): number {
    const discounts = {
      basic: 0,
      premium: 0.1, // 10%
      vip: 0.2, // 20%
    };
    return discounts[level];
  }

  // Regla: Descuento por volumen
  static getVolumeDiscount(quantity: number): number {
    if (quantity >= 5) return 0.05; // 5%
    return 0;
  }

  // Regla: Descuento por cliente frecuente
  static getLoyaltyDiscount(totalPurchases: number): number {
    if (totalPurchases > 5000) return 0.1; // 10%
    if (totalPurchases > 2000) return 0.05; // 5%
    return 0;
  }

  // Regla: Descuento total (acumulativo con máximo)
  static calculateTotalDiscount(
    customer: Customer,
    quantity: number
  ): number {
    const membershipDiscount = this.getMembershipDiscount(customer.membershipLevel);
    const volumeDiscount = this.getVolumeDiscount(quantity);
    const loyaltyDiscount = this.getLoyaltyDiscount(customer.totalPurchases);

    const totalDiscount = membershipDiscount + volumeDiscount + loyaltyDiscount;

    // Máximo descuento: 35%
    return Math.min(totalDiscount, 0.35);
  }

  // Regla: Envío gratis
  static qualifiesForFreeShipping(subtotal: number, membershipLevel: Customer['membershipLevel']): boolean {
    if (membershipLevel === 'vip') return true;
    if (membershipLevel === 'premium' && subtotal >= 50) return true;
    if (subtotal >= 100) return true;
    return false;
  }

  // Regla: Costo de envío
  static calculateShippingCost(subtotal: number, membershipLevel: Customer['membershipLevel']): number {
    if (this.qualifiesForFreeShipping(subtotal, membershipLevel)) {
      return 0;
    }
    return 9.99;
  }

  // Regla: Mínimo de compra
  static meetsMinimumPurchase(subtotal: number): boolean {
    return subtotal >= 10;
  }
}

// ============================================================================
// CUSTOM HOOK WITH BUSINESS RULES
// ============================================================================

function useShoppingCart(customer: Customer) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    // Validar reglas de negocio
    if (!ShoppingCartRules.meetsMinimumQuantity(quantity)) {
      alert('Cantidad mínima: 1');
      return;
    }

    if (!ShoppingCartRules.meetsMaximumQuantity(quantity)) {
      alert('Cantidad máxima: 10 por producto');
      return;
    }

    if (!ShoppingCartRules.hasEnoughStock(product, quantity)) {
      alert(`Stock insuficiente. Disponible: ${product.stock}`);
      return;
    }

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      
      if (!ShoppingCartRules.meetsMaximumQuantity(newQuantity)) {
        alert('No puedes agregar más de 10 unidades de este producto');
        return;
      }

      if (!ShoppingCartRules.hasEnoughStock(product, newQuantity)) {
        alert(`Stock insuficiente. Disponible: ${product.stock}`);
        return;
      }

      setCart(cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (!ShoppingCartRules.meetsMinimumQuantity(newQuantity)) {
      removeFromCart(productId);
      return;
    }

    if (!ShoppingCartRules.meetsMaximumQuantity(newQuantity)) {
      alert('Cantidad máxima: 10');
      return;
    }

    const item = cart.find(item => item.product.id === productId);
    if (item && !ShoppingCartRules.hasEnoughStock(item.product, newQuantity)) {
      alert(`Stock insuficiente. Disponible: ${item.product.stock}`);
      return;
    }

    setCart(cart.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const summary = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const discount = ShoppingCartRules.calculateTotalDiscount(customer, totalItems);
    const discountAmount = subtotal * discount;

    const subtotalAfterDiscount = subtotal - discountAmount;

    const shippingCost = ShoppingCartRules.calculateShippingCost(
      subtotalAfterDiscount,
      customer.membershipLevel
    );

    const total = subtotalAfterDiscount + shippingCost;

    const canCheckout = ShoppingCartRules.meetsMinimumPurchase(subtotal) && cart.length > 0;

    return {
      subtotal,
      discount: discount * 100, // porcentaje
      discountAmount,
      shippingCost,
      total,
      totalItems,
      canCheckout,
      freeShipping: shippingCost === 0,
    };
  }, [cart, customer]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    summary,
  };
}

// ============================================================================
// COMPONENTS
// ============================================================================

const SAMPLE_PRODUCTS: Product[] = [
  { id: '1', name: 'Laptop Dell', price: 899, stock: 5, category: 'electronics' },
  { id: '2', name: 'Teclado Mecánico', price: 79, stock: 15, category: 'electronics' },
  { id: '3', name: 'Camisa Premium', price: 49, stock: 20, category: 'clothing' },
  { id: '4', name: 'Café Gourmet 1kg', price: 25, stock: 8, category: 'food' },
];

export default function BusinessRulesExample() {
  const [customer, setCustomer] = useState<Customer>({
    id: '1',
    name: 'Ana García',
    email: 'ana@example.com',
    membershipLevel: 'basic',
    totalPurchases: 500,
    registrationDate: new Date('2024-01-15'),
  });

  const { cart, addToCart, removeFromCart, updateQuantity, summary } = useShoppingCart(customer);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          🛒 Ejemplo Interactivo: E-commerce con Reglas de Negocio
        </h2>
        <p className="text-slate-600 mb-4">
          Este ejemplo muestra cómo implementar reglas de negocio complejas en un carrito de compras.
        </p>

        {/* Customer Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Cliente</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Nombre:</strong> {customer.name}</p>
            <div className="flex items-center gap-2">
              <strong>Membresía:</strong>
              <select
                value={customer.membershipLevel}
                onChange={(e) => setCustomer({
                  ...customer,
                  membershipLevel: e.target.value as Customer['membershipLevel']
                })}
                className="border border-slate-300 rounded px-2 py-1"
              >
                <option value="basic">Basic (0% descuento)</option>
                <option value="premium">Premium (10% descuento)</option>
                <option value="vip">VIP (20% descuento)</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <strong>Compras totales:</strong>
              <input
                type="number"
                value={customer.totalPurchases}
                onChange={(e) => setCustomer({
                  ...customer,
                  totalPurchases: parseInt(e.target.value) || 0
                })}
                className="border border-slate-300 rounded px-2 py-1 w-32"
              />
              <span className="text-slate-600">
                {customer.totalPurchases > 5000 && '(+10% descuento por lealtad)'}
                {customer.totalPurchases > 2000 && customer.totalPurchases <= 5000 && '(+5% descuento por lealtad)'}
              </span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Productos Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAMPLE_PRODUCTS.map(product => (
              <div
                key={product.id}
                className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-slate-900">{product.name}</h4>
                    <p className="text-sm text-slate-600">{product.category}</p>
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    ${product.price}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Stock: {product.stock} unidades
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                >
                  {product.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="border-t border-slate-200 pt-6">
          <h3 className="font-semibold text-slate-900 mb-3">Carrito de Compras</h3>
          
          {cart.length === 0 ? (
            <p className="text-slate-600 text-center py-8">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">{item.product.name}</h4>
                    <p className="text-sm text-slate-600">
                      ${item.product.price} × {item.quantity} = ${item.product.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 bg-slate-200 rounded hover:bg-slate-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 bg-slate-200 rounded hover:bg-slate-300 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 px-3 py-1 rounded hover:bg-red-50"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}

              {/* Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-slate-700">
                  <span>Subtotal:</span>
                  <span>${summary.subtotal.toFixed(2)}</span>
                </div>
                
                {summary.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento ({summary.discount.toFixed(0)}%):</span>
                    <span>-${summary.discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-700">
                  <span className="flex items-center gap-2">
                    Envío:
                    {summary.freeShipping && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                        GRATIS
                      </span>
                    )}
                  </span>
                  <span>${summary.shippingCost.toFixed(2)}</span>
                </div>

                <div className="border-t border-slate-300 pt-2 flex justify-between font-bold text-lg text-slate-900">
                  <span>Total:</span>
                  <span>${summary.total.toFixed(2)}</span>
                </div>

                <button
                  disabled={!summary.canCheckout}
                  className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors mt-4"
                >
                  {summary.canCheckout ? 'Proceder al Pago' : 'Compra mínima: $10'}
                </button>

                {/* Rules explanation */}
                <div className="mt-4 pt-4 border-t border-slate-300">
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    💡 Reglas de Negocio Activas:
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Descuento por membresía: {ShoppingCartRules.getMembershipDiscount(customer.membershipLevel) * 100}%</li>
                    <li>• Descuento por volumen (5+ items): {ShoppingCartRules.getVolumeDiscount(summary.totalItems) * 100}%</li>
                    <li>• Descuento por lealtad: {ShoppingCartRules.getLoyaltyDiscount(customer.totalPurchases) * 100}%</li>
                    <li>• Máximo descuento total: 35%</li>
                    <li>• Cantidad por producto: 1-10 unidades</li>
                    <li>• Envío gratis: {customer.membershipLevel === 'vip' ? 'Siempre (VIP)' : summary.subtotal >= 100 ? 'Sí (>$100)' : 'No'}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
