import { NextRequest, NextResponse } from 'next/server';

interface CachedPayment {
  response: any;
  status: number;
  timestamp: number;
}

const idempotencyStore = new Map<string, CachedPayment>();
const TTL = 24 * 60 * 60 * 1000; // 24 horas

export async function POST(request: NextRequest) {
  const idempotencyKey = request.headers.get('Idempotency-Key');

  if (!idempotencyKey) {
    return NextResponse.json(
      { error: 'Idempotency-Key header requerido' },
      { status: 400 }
    );
  }

  const cached = idempotencyStore.get(idempotencyKey);
  if (cached) {
    const age = Date.now() - cached.timestamp;
    if (age < TTL) {
      console.log('✅ Retornando resultado cacheado para key:', idempotencyKey);
      return NextResponse.json(cached.response, { status: cached.status });
    }
    idempotencyStore.delete(idempotencyKey);
  }

  try {
    const body = await request.json();
    const { amount, currency } = body;

    await new Promise(resolve => setTimeout(resolve, 500));

    const transactionId = 'txn_' + Math.random().toString(36).substring(7);
    const response = {
      success: true,
      transactionId,
      amount,
      currency,
      timestamp: new Date().toISOString(),
      idempotencyKey,
    };

    idempotencyStore.set(idempotencyKey, {
      response,
      status: 200,
      timestamp: Date.now(),
    });

    setTimeout(() => {
      idempotencyStore.delete(idempotencyKey);
    }, TTL);

    return NextResponse.json(response);

  } catch (error) {
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
}
