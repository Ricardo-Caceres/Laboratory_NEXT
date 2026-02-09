'use client';

import { useState } from 'react';

// ============================================
// SIMULATED MICROSERVICES
// ============================================

// User Service
interface User {
  id: string;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
  ];

  async getUser(id: string): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.users.find(u => u.id === id) || null;
  }

  async getAllUsers(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.users];
  }
}

// Order Service
interface Order {
  id: string;
  userId: string;
  items: Array<{ productId: string; quantity: number }>;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

class OrderService {
  private orders: Order[] = [
    {
      id: 'ord-1',
      userId: '1',
      items: [{ productId: 'prod-1', quantity: 2 }],
      total: 199.98,
      status: 'delivered',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 'ord-2',
      userId: '1',
      items: [{ productId: 'prod-2', quantity: 1 }],
      total: 49.99,
      status: 'shipped',
      createdAt: new Date('2024-01-20'),
    },
  ];

  async getOrdersByUser(userId: string): Promise<Order[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.orders.filter(o => o.userId === userId);
  }

  async createOrder(userId: string, items: Array<{ productId: string; quantity: number }>, total: number): Promise<Order> {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date(),
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}

// Product Service
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

class ProductService {
  private products: Product[] = [
    { id: 'prod-1', name: 'Wireless Headphones', price: 99.99, stock: 50 },
    { id: 'prod-2', name: 'USB-C Cable', price: 19.99, stock: 200 },
    { id: 'prod-3', name: 'Laptop Stand', price: 49.99, stock: 30 },
  ];

  async getProduct(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.products.find(p => p.id === id) || null;
  }

  async getAllProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.products];
  }

  async checkStock(productId: string, quantity: number): Promise<boolean> {
    const product = await this.getProduct(productId);
    return product ? product.stock >= quantity : false;
  }
}

// Notification Service
interface Notification {
  id: string;
  userId: string;
  message: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning';
}

class NotificationService {
  private notifications: Notification[] = [];

  async sendNotification(userId: string, message: string, type: Notification['type']): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    this.notifications.push({
      id: `notif-${Date.now()}`,
      userId,
      message,
      timestamp: new Date(),
      type,
    });
  }

  async getNotifications(userId: string): Promise<Notification[]> {
    return this.notifications.filter(n => n.userId === userId);
  }
}

// ============================================
// API GATEWAY - Aggregates microservices
// ============================================

class APIGateway {
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  async getUserDashboard(userId: string) {
    const [user, orders] = await Promise.all([
      this.userService.getUser(userId),
      this.orderService.getOrdersByUser(userId),
    ]);

    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const items = await Promise.all(
          order.items.map(async (item) => {
            const product = await this.productService.getProduct(item.productId);
            return { ...item, productName: product?.name || 'Unknown' };
          })
        );
        return { ...order, items };
      })
    );

    return { user, orders: enrichedOrders };
  }

  async createOrder(userId: string, items: Array<{ productId: string; quantity: number }>) {
    // Check stock across Product Service
    for (const item of items) {
      const hasStock = await this.productService.checkStock(item.productId, item.quantity);
      if (!hasStock) {
        throw new Error(`Insufficient stock for product ${item.productId}`);
      }
    }

    // Calculate total from Product Service
    let total = 0;
    for (const item of items) {
      const product = await this.productService.getProduct(item.productId);
      if (product) total += product.price * item.quantity;
    }

    // Create order in Order Service
    const order = await this.orderService.createOrder(userId, items, total);

    // Send notification via Notification Service
    await this.notificationService.sendNotification(
      userId,
      `Order ${order.id} created successfully!`,
      'success'
    );

    return order;
  }
}

// ============================================
// FRONTEND - API Gateway Client
// ============================================

const userService = new UserService();
const orderService = new OrderService();
const productService = new ProductService();
const notificationService = new NotificationService();
const apiGateway = new APIGateway(userService, orderService, productService, notificationService);

export default function MicroservicesArchitectureExample() {
  const [currentUserId, setCurrentUserId] = useState('1');
  const [dashboard, setDashboard] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const loadDashboard = async () => {
    setLoading(true);
    const data = await apiGateway.getUserDashboard(currentUserId);
    setDashboard(data);
    const notifs = await notificationService.getNotifications(currentUserId);
    setNotifications(notifs);
    setLoading(false);
  };

  const loadProducts = async () => {
    const prods = await productService.getAllProducts();
    setProducts(prods);
  };

  const handleCreateOrder = async (productId: string) => {
    try {
      await apiGateway.createOrder(currentUserId, [{ productId, quantity: 1 }]);
      setMessage('Order created successfully!');
      await loadDashboard();
      setTimeout(() => setMessage(''), 3000);
    } catch (error: any) {
      setMessage(error.message);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Microservices Architecture Demo
          </h1>
          <p className="text-slate-700 mb-4">
            Simulated microservices: User, Order, Product, Notification services coordinated by an API Gateway
          </p>
          <div className="flex gap-3">
            <button
              onClick={loadDashboard}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load Dashboard'}
            </button>
            <button
              onClick={loadProducts}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Load Products
            </button>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Microservices Architecture</h2>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="font-bold text-purple-900 mb-2">🌐 API Gateway</div>
              <div className="text-sm text-purple-800">
                • Single entry point for all client requests<br />
                • Aggregates data from multiple microservices<br />
                • Example: getUserDashboard() calls User + Order services
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <div className="font-bold text-blue-900">👤 User Service</div>
                <div className="text-xs text-blue-700 mt-1">Manages user data</div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <div className="font-bold text-green-900">📦 Order Service</div>
                <div className="text-xs text-green-700 mt-1">Handles orders</div>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                <div className="font-bold text-orange-900">🛍️ Product Service</div>
                <div className="text-xs text-orange-700 mt-1">Product catalog</div>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <div className="font-bold text-red-900">🔔 Notification Service</div>
                <div className="text-xs text-red-700 mt-1">Sends alerts</div>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              <strong>Key Principle:</strong> Each service owns its data and exposes APIs. 
              Services communicate via network calls (HTTP, message queues, etc.)
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`p-4 rounded-lg border ${
            message.includes('success') 
              ? 'bg-green-50 border-green-200 text-green-900' 
              : 'bg-red-50 border-red-200 text-red-900'
          }`}>
            {message}
          </div>
        )}

        {/* Dashboard */}
        {dashboard && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Dashboard</h2>
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <h3 className="font-bold text-blue-900">{dashboard.user.name}</h3>
                <p className="text-sm text-blue-700">{dashboard.user.email}</p>
              </div>

              <h3 className="font-bold text-slate-900 mb-2">Order History</h3>
              <div className="space-y-3">
                {dashboard.orders.map((order: any) => (
                  <div key={order.id} className="p-3 border border-slate-200 rounded bg-slate-50">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-xs text-slate-600">{order.id}</span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-slate-700">
                      {order.items.map((item: any, idx: number) => (
                        <div key={idx}>• {item.productName} (x{item.quantity})</div>
                      ))}
                    </div>
                    <div className="mt-2 font-bold text-slate-900">Total: ${order.total.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Notifications</h2>
              <div className="space-y-2">
                {notifications.length === 0 && (
                  <p className="text-slate-600">No notifications yet</p>
                )}
                {notifications.map(notif => (
                  <div key={notif.id} className={`p-3 border rounded ${
                    notif.type === 'success' ? 'bg-green-50 border-green-200' :
                    notif.type === 'warning' ? 'bg-orange-50 border-orange-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <p className="text-sm font-medium">{notif.message}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      {notif.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {products.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Products (Create Order)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-lg text-green-600 font-bold mb-1">${product.price}</p>
                  <p className="text-sm text-slate-600 mb-3">Stock: {product.stock}</p>
                  <button
                    onClick={() => handleCreateOrder(product.id)}
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits & Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">✅ Benefits</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <strong className="text-green-900">Independent Deployment</strong>
                <p className="text-green-800">Deploy services separately without affecting others</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <strong className="text-blue-900">Technology Flexibility</strong>
                <p className="text-blue-800">Each service can use different tech stack</p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <strong className="text-purple-900">Scalability</strong>
                <p className="text-purple-800">Scale only the services that need it</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Challenges</h2>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <strong className="text-orange-900">Distributed Complexity</strong>
                <p className="text-orange-800">Network latency, failure handling</p>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded">
                <strong className="text-red-900">Data Consistency</strong>
                <p className="text-red-800">Managing transactions across services</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <strong className="text-yellow-900">Monitoring</strong>
                <p className="text-yellow-800">Requires distributed tracing, logging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
