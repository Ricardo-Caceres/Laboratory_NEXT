'use client';

import { useState } from 'react';

// ============================================
// DATA ACCESS LAYER (DAL) - Database/API
// ============================================

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

class ProductRepository {
  private products: Product[] = [
    { id: '1', name: 'Laptop', price: 999, stock: 5, category: 'Electronics' },
    { id: '2', name: 'Mouse', price: 25, stock: 50, category: 'Electronics' },
    { id: '3', name: 'Desk', price: 299, stock: 10, category: 'Furniture' },
    { id: '4', name: 'Chair', price: 199, stock: 15, category: 'Furniture' },
  ];

  async getAll(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.products];
  }

  async getById(id: string): Promise<Product | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.products.find(p => p.id === id);
  }

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newProduct = { ...product, id: Date.now().toString() };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: string, updates: Partial<Product>): Promise<Product> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  async delete(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    this.products = this.products.filter(p => p.id !== id);
  }
}

// ============================================
// BUSINESS LOGIC LAYER (BLL) - Domain logic
// ============================================

class ProductService {
  constructor(private repository: ProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    return this.repository.getAll();
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    const products = await this.repository.getAll();
    return products.filter(p => p.category === category);
  }

  async purchaseProduct(id: string, quantity: number): Promise<{ success: boolean; message: string }> {
    const product = await this.repository.getById(id);
    
    if (!product) {
      return { success: false, message: 'Product not found' };
    }

    if (product.stock < quantity) {
      return { success: false, message: `Only ${product.stock} items in stock` };
    }

    await this.repository.update(id, { stock: product.stock - quantity });
    return { success: true, message: `Purchased ${quantity} ${product.name}(s)` };
  }

  async addProduct(name: string, price: number, stock: number, category: string): Promise<Product> {
    if (price <= 0) throw new Error('Price must be positive');
    if (stock < 0) throw new Error('Stock cannot be negative');
    
    return this.repository.create({ name, price, stock, category });
  }

  async calculateTotalValue(): Promise<number> {
    const products = await this.repository.getAll();
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
  }
}

// ============================================
// PRESENTATION LAYER (UI) - React components
// ============================================

// Singleton instances
const repository = new ProductRepository();
const service = new ProductService(repository);

export default function LayeredArchitectureExample() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [totalValue, setTotalValue] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    const allProducts = await service.getAllProducts();
    setProducts(allProducts);
    const value = await service.calculateTotalValue();
    setTotalValue(value);
    setLoading(false);
  };

  const filterByCategory = async (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
    const filtered = category === 'All' 
      ? await service.getAllProducts() 
      : await service.getProductsByCategory(category);
    setProducts(filtered);
    setLoading(false);
  };

  const handlePurchase = async (id: string) => {
    const result = await service.purchaseProduct(id, 1);
    setMessage(result.message);
    setTimeout(() => setMessage(''), 3000);
    
    if (result.success) {
      await loadProducts();
    }
  };

  const categories = ['All', 'Electronics', 'Furniture'];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Layered Architecture Demo
          </h1>
          <p className="text-slate-700 mb-4">
            Classic 3-tier architecture: Presentation Layer → Business Logic Layer → Data Access Layer
          </p>
          <button
            onClick={loadProducts}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load Products'}
          </button>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Layers</h2>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-bold text-blue-900 mb-2">
                🎨 Presentation Layer (UI Components)
              </div>
              <div className="text-sm text-blue-800 space-y-1">
                <div>• React components, user interactions</div>
                <div>• Calls Business Logic Layer only</div>
                <div>• Example: Product list, filters, purchase buttons</div>
              </div>
            </div>

            <div className="ml-8 text-2xl text-slate-400">↓</div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="font-bold text-green-900 mb-2">
                💼 Business Logic Layer (Services)
              </div>
              <div className="text-sm text-green-800 space-y-1">
                <div>• Domain logic, validation, calculations</div>
                <div>• Orchestrates data operations</div>
                <div>• Example: ProductService with purchase logic, total value calculation</div>
              </div>
            </div>

            <div className="ml-8 text-2xl text-slate-400">↓</div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="font-bold text-orange-900 mb-2">
                💾 Data Access Layer (Repository)
              </div>
              <div className="text-sm text-orange-800 space-y-1">
                <div>• Database/API operations (CRUD)</div>
                <div>• No business logic</div>
                <div>• Example: ProductRepository with getAll, create, update, delete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Alert */}
        {message && (
          <div className={`p-4 rounded-lg border ${
            message.includes('Purchased') 
              ? 'bg-green-50 border-green-200 text-green-900' 
              : 'bg-red-50 border-red-200 text-red-900'
          }`}>
            {message}
          </div>
        )}

        {/* Category Filter */}
        {products.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-bold text-slate-900">Category:</span>
              <div className="flex gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => filterByCategory(cat)}
                    className={`px-4 py-2 rounded transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 p-3 bg-slate-50 rounded border border-slate-200">
              <strong className="text-slate-900">Total Inventory Value:</strong>{' '}
              <span className="text-green-600 font-bold">${totalValue.toFixed(2)}</span>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id} className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{product.name}</h3>
                  <div className="space-y-1 text-sm text-slate-700 mb-3">
                    <div><strong>Price:</strong> ${product.price}</div>
                    <div><strong>Stock:</strong> {product.stock} units</div>
                    <div><strong>Category:</strong> {product.category}</div>
                  </div>
                  <button
                    onClick={() => handlePurchase(product.id)}
                    disabled={product.stock === 0}
                    className={`w-full py-2 rounded font-medium transition-colors ${
                      product.stock > 0
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {product.stock > 0 ? 'Purchase' : 'Out of Stock'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Layered Architecture Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 className="font-bold text-blue-900 mb-2">🔄 Separation of Concerns</h3>
              <p className="text-blue-800 text-sm">Each layer has a single responsibility</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h3 className="font-bold text-green-900 mb-2">🧪 Easy Testing</h3>
              <p className="text-green-800 text-sm">Test each layer independently</p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <h3 className="font-bold text-purple-900 mb-2">♻️ Reusability</h3>
              <p className="text-purple-800 text-sm">Business logic reusable across UIs</p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <h3 className="font-bold text-orange-900 mb-2">🔧 Maintainability</h3>
              <p className="text-orange-800 text-sm">Changes isolated to specific layers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
