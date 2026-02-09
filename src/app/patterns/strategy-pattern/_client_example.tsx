'use client';

import { useState } from 'react';

// Strategy Interface
interface DiscountStrategy {
  calculate(total: number, quantity: number): number;
  getDescription(): string;
  getName(): string;
}

// Concrete Strategies
class NoDiscountStrategy implements DiscountStrategy {
  calculate(total: number): number {
    return total;
  }

  getDescription(): string {
    return 'No discount applied';
  }

  getName(): string {
    return 'Regular Price';
  }
}

class PercentageDiscountStrategy implements DiscountStrategy {
  constructor(private percentage: number) {}

  calculate(total: number): number {
    return total * (1 - this.percentage / 100);
  }

  getDescription(): string {
    return `${this.percentage}% off total price`;
  }

  getName(): string {
    return `${this.percentage}% Discount`;
  }
}

class BulkDiscountStrategy implements DiscountStrategy {
  constructor(private minQuantity: number, private discount: number) {}

  calculate(total: number, quantity: number): number {
    if (quantity >= this.minQuantity) {
      return total * (1 - this.discount / 100);
    }
    return total;
  }

  getDescription(): string {
    return `${this.discount}% off when buying ${this.minQuantity}+ items`;
  }

  getName(): string {
    return `Bulk Discount (${this.minQuantity}+ items)`;
  }
}

class SeasonalDiscountStrategy implements DiscountStrategy {
  constructor(private fixedAmount: number) {}

  calculate(total: number): number {
    return Math.max(0, total - this.fixedAmount);
  }

  getDescription(): string {
    return `$${this.fixedAmount} off (Seasonal Sale)`;
  }

  getName(): string {
    return 'Seasonal Sale';
  }
}

class LoyaltyDiscountStrategy implements DiscountStrategy {
  constructor(private tier: 'bronze' | 'silver' | 'gold') {}

  calculate(total: number): number {
    const discounts = { bronze: 5, silver: 10, gold: 20 };
    return total * (1 - discounts[this.tier] / 100);
  }

  getDescription(): string {
    const discounts = { bronze: 5, silver: 10, gold: 20 };
    return `${discounts[this.tier]}% off (${this.tier.toUpperCase()} member)`;
  }

  getName(): string {
    return `${this.tier.charAt(0).toUpperCase() + this.tier.slice(1)} Loyalty`;
  }
}

// Context
class ShoppingCart {
  private strategy: DiscountStrategy = new NoDiscountStrategy();
  private items: Array<{ name: string; price: number }> = [];

  setDiscountStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  clearItems(): void {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getSubtotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getTotal(): number {
    const subtotal = this.getSubtotal();
    return this.strategy.calculate(subtotal, this.items.length);
  }

  getDiscount(): number {
    return this.getSubtotal() - this.getTotal();
  }

  getStrategy(): DiscountStrategy {
    return this.strategy;
  }
}

export default function StrategyPatternExample() {
  const [cart] = useState(() => new ShoppingCart());
  const [, forceUpdate] = useState({});
  const refresh = () => forceUpdate({});

  const strategies: DiscountStrategy[] = [
    new NoDiscountStrategy(),
    new PercentageDiscountStrategy(10),
    new PercentageDiscountStrategy(25),
    new BulkDiscountStrategy(5, 15),
    new BulkDiscountStrategy(10, 30),
    new SeasonalDiscountStrategy(20),
    new SeasonalDiscountStrategy(50),
    new LoyaltyDiscountStrategy('bronze'),
    new LoyaltyDiscountStrategy('silver'),
    new LoyaltyDiscountStrategy('gold'),
  ];

  const products = [
    { name: '📱 Smartphone', price: 599 },
    { name: '💻 Laptop', price: 1299 },
    { name: '🎧 Headphones', price: 199 },
    { name: '⌚ Smartwatch', price: 299 },
    { name: '📷 Camera', price: 899 },
    { name: '🖥️ Monitor', price: 449 },
  ];

  const handleAddItem = (name: string, price: number) => {
    cart.addItem(name, price);
    refresh();
  };

  const handleRemoveItem = (index: number) => {
    cart.removeItem(index);
    refresh();
  };

  const handleClearCart = () => {
    cart.clearItems();
    refresh();
  };

  const handleChangeStrategy = (strategy: DiscountStrategy) => {
    cart.setDiscountStrategy(strategy);
    refresh();
  };

  const subtotal = cart.getSubtotal();
  const total = cart.getTotal();
  const discount = cart.getDiscount();
  const currentStrategy = cart.getStrategy();

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 sm:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Strategy Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Dynamic Discount Strategies for Shopping Cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Products */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Available Products
              </h3>
              <div className="space-y-2">
                {products.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => handleAddItem(product.name, product.price)}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg transition-all"
                  >
                    <span className="font-medium text-gray-900">{product.name}</span>
                    <span className="text-emerald-600 font-bold">${product.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Shopping Cart */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  Shopping Cart ({cart.getItems().length})
                </h3>
                {cart.getItems().length > 0 && (
                  <button
                    onClick={handleClearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-[300px]">
                {cart.getItems().length === 0 ? (
                  <p className="text-gray-500 italic text-center py-12">Your cart is empty</p>
                ) : (
                  <div className="space-y-2">
                    {cart.getItems().map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-gray-900">{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-900">${item.price}</span>
                          <button
                            onClick={() => handleRemoveItem(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Discount Strategies */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Select Discount Strategy:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {strategies.map((strategy, index) => (
                <button
                  key={index}
                  onClick={() => handleChangeStrategy(strategy)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    strategy.getName() === currentStrategy.getName()
                      ? 'bg-emerald-50 border-emerald-500 shadow-md'
                      : 'bg-white border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="font-semibold text-sm text-gray-900 mb-1">{strategy.getName()}</div>
                  <div className="text-xs text-gray-600">{strategy.getDescription()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-6 border-2 border-emerald-200">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-emerald-200">
                <span className="text-gray-700 font-medium">Current Strategy:</span>
                <span className="font-bold text-emerald-700">{currentStrategy.getName()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Subtotal:</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Discount:</span>
                <span className="font-semibold text-red-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-emerald-300">
                <span className="text-xl font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-emerald-600">${total.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-sm text-green-800 font-medium text-center">
                    🎉 You saved ${discount.toFixed(2)}!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-700">
              <strong className="text-emerald-700">Strategy Pattern:</strong> The shopping cart can dynamically switch between different discount calculation strategies without changing its core logic. Each strategy encapsulates a different algorithm for calculating discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
