'use client';

import React, { useState } from 'react';

export default function IdempotencyPage() {
  const [activeTab, setActiveTab] = useState<'intro' | 'hooks' | 'api' | 'payment' | 'mutations'>('intro');
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const [paymentHistory, setPaymentHistory] = useState<Array<{ id: string; amount: number; status: string }>>([]);
  const [mutationResult, setMutationResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const idempotencyKey = crypto.randomUUID();
    
    try {
      const response = await fetch('/api/idempotent-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify({ amount: 100, currency: 'USD' }),
      });
      
      const data = await response.json();
      setPaymentStatus(`✅ Pago procesado: ${data.transactionId}`);
      setPaymentHistory(prev => [...prev, { 
        id: data.transactionId, 
        amount: 100, 
        status: 'success' 
      }]);
    } catch (error) {
      setPaymentStatus('❌ Error en el pago');
    } finally {
      setLoading(false);
    }
  };

  const handleDuplicatePayment = async () => {
    setLoading(true);
    const idempotencyKey = 'duplicate-key-123';
    
    try {
      const response1 = await fetch('/api/idempotent-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify({ amount: 50, currency: 'USD' }),
      });
      
      const data1 = await response1.json();
      
      // Intentar duplicar
      const response2 = await fetch('/api/idempotent-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify({ amount: 50, currency: 'USD' }),
      });
      
      const data2 = await response2.json();
      
      setPaymentStatus(
        `Primera llamada: ${data1.transactionId}\n` +
        `Segunda llamada (misma key): ${data2.transactionId}\n` +
        `${data1.transactionId === data2.transactionId ? '✅ Idempotencia funcionando!' : '❌ Pago duplicado!'}`
      );
    } catch (error) {
      setPaymentStatus('❌ Error en el pago');
    } finally {
      setLoading(false);
    }
  };

  const handleMutation = async () => {
    setLoading(true);
    const idempotencyKey = crypto.randomUUID();
    
    try {
      const response = await fetch('/api/idempotent-mutation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify({ action: 'create', data: { name: 'Test Item' } }),
      });
      
      const data = await response.json();
      setMutationResult(`✅ Recurso creado: ${data.resourceId}`);
    } catch (error) {
      setMutationResult('❌ Error en la mutación');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ♻️ Idempotencia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende a implementar operaciones idempotentes en React y Next.js
            para prevenir duplicados y garantizar consistencia
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-lg">
          {[
            { id: 'intro', label: '📚 Introducción', icon: '📚' },
            { id: 'hooks', label: '🪝 React Hooks', icon: '🪝' },
            { id: 'api', label: '🔌 API Routes', icon: '🔌' },
            { id: 'payment', label: '💳 Pagos', icon: '💳' },
            { id: 'mutations', label: '✏️ Mutaciones', icon: '✏️' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {activeTab === 'intro' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué es la Idempotencia?
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700">
                  Una operación es <strong>idempotente</strong> cuando puede ejecutarse 
                  múltiples veces con el mismo resultado, sin efectos secundarios adicionales.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border border-green-200 bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    ✅ Operaciones Idempotentes
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• GET /users/123 → Siempre devuelve el mismo usuario</li>
                    <li>• PUT /users/123 → Actualiza a los mismos valores</li>
                    <li>• DELETE /users/123 → Elimina una vez, luego 404</li>
                    <li>• PATCH /users/123 (con idempotency key)</li>
                  </ul>
                </div>

                <div className="border border-red-200 bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    ❌ Operaciones NO Idempotentes
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• POST /users → Crea múltiples usuarios</li>
                    <li>• POST /payments → Cobra múltiples veces</li>
                    <li>• PATCH /counter/increment → Incrementa cada vez</li>
                    <li>• POST /send-email → Envía múltiples emails</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  ¿Por qué es importante?
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">🔄</div>
                    <h4 className="font-bold text-purple-800 mb-2">Reintentos</h4>
                    <p className="text-sm text-gray-600">
                      Permite reintentar operaciones fallidas sin duplicar efectos
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">🌐</div>
                    <h4 className="font-bold text-blue-800 mb-2">Redes</h4>
                    <p className="text-sm text-gray-600">
                      Protege contra timeouts y requests duplicados
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">👥</div>
                    <h4 className="font-bold text-green-800 mb-2">Usuarios</h4>
                    <p className="text-sm text-gray-600">
                      Previene doble-clicks y acciones accidentales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hooks' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Custom Hook: useIdempotentAction
              </h2>

              <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <pre className="text-sm">
{`// hooks/useIdempotentAction.ts
import { useRef, useCallback } from 'react';

interface IdempotentConfig {
  timeout?: number; // Tiempo para considerar una key expirada
}

export function useIdempotentAction<T extends any[], R>(
  action: (...args: T) => Promise<R>,
  config: IdempotentConfig = {}
) {
  const { timeout = 5000 } = config;
  const pendingKeys = useRef(new Map<string, Promise<R>>());
  const completedKeys = useRef(new Map<string, { result: R; timestamp: number }>());

  const execute = useCallback(
    async (idempotencyKey: string, ...args: T): Promise<R> => {
      // 1. Verificar si ya está en progreso
      const pending = pendingKeys.current.get(idempotencyKey);
      if (pending) {
        console.log('🔄 Operación en progreso, retornando promesa existente');
        return pending;
      }

      // 2. Verificar si ya se completó recientemente
      const completed = completedKeys.current.get(idempotencyKey);
      if (completed) {
        const age = Date.now() - completed.timestamp;
        if (age < timeout) {
          console.log('✅ Operación ya completada, retornando resultado cached');
          return completed.result;
        }
        // Expiró, eliminar de cache
        completedKeys.current.delete(idempotencyKey);
      }

      // 3. Ejecutar la acción
      console.log('🚀 Ejecutando nueva operación');
      const promise = action(...args);
      pendingKeys.current.set(idempotencyKey, promise);

      try {
        const result = await promise;
        
        // Guardar resultado
        completedKeys.current.set(idempotencyKey, {
          result,
          timestamp: Date.now(),
        });
        
        return result;
      } finally {
        // Limpiar de pendientes
        pendingKeys.current.delete(idempotencyKey);
      }
    },
    [action, timeout]
  );

  return execute;
}`}
                </pre>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Uso en Componente</h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
{`// components/PaymentButton.tsx
'use client';

import { useState } from 'react';
import { useIdempotentAction } from '@/hooks/useIdempotentAction';

export default function PaymentButton() {
  const [status, setStatus] = useState('');

  const processPayment = async (amount: number) => {
    const response = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
    return response.json();
  };

  const idempotentPayment = useIdempotentAction(processPayment);

  const handleClick = async () => {
    try {
      const key = 'payment-' + Date.now();
      const result = await idempotentPayment(key, 100);
      setStatus(\`✅ Pago exitoso: \${result.id}\`);
    } catch (error) {
      setStatus('❌ Error en el pago');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        Pagar $100
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-yellow-800 mb-2">💡 Características del Hook</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Detecta operaciones en progreso</li>
                  <li>✅ Cachea resultados temporalmente</li>
                  <li>✅ Previene duplicados por doble-click</li>
                  <li>✅ TypeScript con genéricos</li>
                  <li>✅ Configurable con timeout</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                API Routes Idempotentes
              </h2>

              <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <pre className="text-sm">
{`// app/api/idempotent-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Simulación de base de datos
const idempotencyStore = new Map<string, any>();

export async function POST(request: NextRequest) {
  const idempotencyKey = request.headers.get('Idempotency-Key');

  // 1. Validar que existe el header
  if (!idempotencyKey) {
    return NextResponse.json(
      { error: 'Idempotency-Key header requerido' },
      { status: 400 }
    );
  }

  // 2. Verificar si ya procesamos este request
  const cached = idempotencyStore.get(idempotencyKey);
  if (cached) {
    console.log('✅ Retornando resultado cacheado para key:', idempotencyKey);
    return NextResponse.json(cached.response, { status: cached.status });
  }

  try {
    // 3. Procesar el pago (simulado)
    const body = await request.json();
    const { amount, currency } = body;

    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 500));

    const transactionId = 'txn_' + Math.random().toString(36).substring(7);
    const response = {
      success: true,
      transactionId,
      amount,
      currency,
      timestamp: new Date().toISOString(),
    };

    // 4. Guardar resultado en cache
    idempotencyStore.set(idempotencyKey, {
      response,
      status: 200,
      timestamp: Date.now(),
    });

    // 5. Limpiar cache después de 24 horas
    setTimeout(() => {
      idempotencyStore.delete(idempotencyKey);
    }, 24 * 60 * 60 * 1000);

    return NextResponse.json(response);

  } catch (error) {
    // También cachear errores
    const errorResponse = {
      success: false,
      error: 'Error procesando el pago',
    };

    idempotencyStore.set(idempotencyKey, {
      response: errorResponse,
      status: 500,
      timestamp: Date.now(),
    });

    return NextResponse.json(errorResponse, { status: 500 });
  }
}`}
                </pre>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Middleware para Idempotencia
                </h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
{`// lib/idempotencyMiddleware.ts
import { NextRequest, NextResponse } from 'next/server';

interface CachedResponse {
  body: any;
  status: number;
  timestamp: number;
}

const cache = new Map<string, CachedResponse>();
const TTL = 24 * 60 * 60 * 1000; // 24 horas

export async function withIdempotency(
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    const key = request.headers.get('Idempotency-Key');

    if (!key) {
      return NextResponse.json(
        { error: 'Idempotency-Key header required' },
        { status: 400 }
      );
    }

    // Check cache
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < TTL) {
      return NextResponse.json(cached.body, { status: cached.status });
    }

    // Execute handler
    const response = await handler(request);
    const body = await response.json();

    // Store in cache
    cache.set(key, {
      body,
      status: response.status,
      timestamp: Date.now(),
    });

    return NextResponse.json(body, { status: response.status });
  };
}

// Uso:
// export const POST = withIdempotency(async (request) => {
//   // Tu lógica aquí
// });`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-blue-800 mb-2">🔑 Headers de Idempotencia</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <code className="bg-blue-100 px-2 py-1 rounded">Idempotency-Key</code>: UUID único por operación</li>
                  <li>• <code className="bg-blue-100 px-2 py-1 rounded">X-Request-ID</code>: Para tracking</li>
                  <li>• Stripe usa: <code className="bg-blue-100 px-2 py-1 rounded">Idempotency-Key</code></li>
                  <li>• AWS usa: <code className="bg-blue-100 px-2 py-1 rounded">x-amz-request-id</code></li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Demo: Sistema de Pagos Idempotente
              </h2>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Probar Idempotencia en Pagos
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg disabled:opacity-50 transition-all transform hover:scale-105"
                  >
                    {loading ? '⏳ Procesando...' : '💳 Nuevo Pago ($100)'}
                  </button>

                  <button
                    onClick={handleDuplicatePayment}
                    disabled={loading}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg disabled:opacity-50 transition-all transform hover:scale-105"
                  >
                    {loading ? '⏳ Procesando...' : '🔄 Probar Duplicado'}
                  </button>
                </div>

                {paymentStatus && (
                  <div className="bg-white p-4 rounded-lg shadow-md whitespace-pre-line">
                    <strong>Estado:</strong> {paymentStatus}
                  </div>
                )}

                {paymentHistory.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-800 mb-2">Historial de Pagos:</h4>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      {paymentHistory.map((payment, idx) => (
                        <div key={idx} className="border-b border-gray-200 py-2 last:border-0">
                          {payment.id} - ${payment.amount} - {payment.status}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto mt-6">
                <h3 className="text-xl font-bold mb-4">Implementación del Cliente</h3>
                <pre className="text-sm">
{`// Client-side payment with idempotency
async function processPayment(amount: number) {
  // Generar key única
  const idempotencyKey = crypto.randomUUID();

  try {
    const response = await fetch('/api/idempotent-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({ 
        amount, 
        currency: 'USD' 
      }),
    });

    if (!response.ok) {
      throw new Error('Payment failed');
    }

    const result = await response.json();
    return result;

  } catch (error) {
    // En caso de error de red, puedes reintentar
    // con la MISMA idempotency key
    console.error('Payment error:', error);
    throw error;
  }
}`}
                </pre>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 mb-2">⚠️ Mejores Prácticas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Usa UUIDs como idempotency keys</li>
                  <li>✅ Guarda las keys en el cliente para reintentos</li>
                  <li>✅ Implementa TTL para el cache (24h típicamente)</li>
                  <li>✅ Cachea tanto éxitos como errores</li>
                  <li>✅ Usa Redis/DB para producción (no in-memory)</li>
                  <li>✅ Documenta el comportamiento en tu API</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'mutations' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Mutaciones Idempotentes con React Query
              </h2>

              <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                <pre className="text-sm">
{`// hooks/useIdempotentMutation.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

interface MutationConfig {
  endpoint: string;
  method?: 'POST' | 'PUT' | 'PATCH';
}

export function useIdempotentMutation<TData, TVariables>(
  config: MutationConfig
) {
  const queryClient = useQueryClient();
  const idempotencyKeyRef = useRef<string | null>(null);

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      // Generar o reusar key para reintentos
      if (!idempotencyKeyRef.current) {
        idempotencyKeyRef.current = crypto.randomUUID();
      }

      const response = await fetch(config.endpoint, {
        method: config.method || 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKeyRef.current,
        },
        body: JSON.stringify(variables),
      });

      if (!response.ok) {
        throw new Error('Mutation failed');
      }

      return response.json() as Promise<TData>;
    },
    
    onSuccess: (data) => {
      // Limpiar la key después del éxito
      idempotencyKeyRef.current = null;
      
      // Invalidar queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['resources'] });
    },
    
    onError: (error) => {
      // Mantener la key para permitir reintentos
      console.error('Mutation error, key preserved for retry:', error);
    },
  });
}`}
                </pre>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Uso en Componente</h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
{`'use client';

import { useIdempotentMutation } from '@/hooks/useIdempotentMutation';

export default function CreateResourceForm() {
  const mutation = useIdempotentMutation({
    endpoint: '/api/resources',
    method: 'POST',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await mutation.mutateAsync({
        name: 'New Resource',
        description: 'Created with idempotency',
      });
      
      console.log('✅ Resource created:', result);
    } catch (error) {
      console.error('❌ Failed to create resource');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button 
        type="submit" 
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Creating...' : 'Create Resource'}
      </button>
      
      {mutation.isError && (
        <div className="error">
          Failed to create. 
          <button onClick={() => mutation.mutate({})}>
            Retry (same idempotency key)
          </button>
        </div>
      )}
      
      {mutation.isSuccess && (
        <div className="success">
          Resource created successfully!
        </div>
      )}
    </form>
  );
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Probar Mutación Idempotente
                </h3>
                
                <button
                  onClick={handleMutation}
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg disabled:opacity-50 transition-all transform hover:scale-105"
                >
                  {loading ? '⏳ Creando...' : '✨ Crear Recurso'}
                </button>

                {mutationResult && (
                  <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <strong>Resultado:</strong> {mutationResult}
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-3">✅ Ventajas</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Previene recursos duplicados</li>
                    <li>• Reintentos seguros automáticos</li>
                    <li>• Integración con React Query</li>
                    <li>• Manejo de errores de red</li>
                    <li>• UX mejorada</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-3">🔧 Casos de Uso</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Creación de registros</li>
                    <li>• Actualizaciones críticas</li>
                    <li>• Operaciones de inventario</li>
                    <li>• Reservas y bookings</li>
                    <li>• Transacciones financieras</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            💡 <strong>Tip:</strong> La idempotencia es clave para sistemas distribuidos y APIs confiables
          </p>
        </div>
      </div>
    </div>
  );
}
