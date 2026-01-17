import { NextRequest, NextResponse } from 'next/server';

interface CachedMutation {
  response: any;
  status: number;
  timestamp: number;
}

const mutationCache = new Map<string, CachedMutation>();
const TTL = 24 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  const idempotencyKey = request.headers.get('Idempotency-Key');

  if (!idempotencyKey) {
    return NextResponse.json(
      { error: 'Idempotency-Key header requerido' },
      { status: 400 }
    );
  }

  const cached = mutationCache.get(idempotencyKey);
  if (cached && Date.now() - cached.timestamp < TTL) {
    console.log('✅ Retornando recurso cacheado:', cached.response.resourceId);
    return NextResponse.json(cached.response, { status: cached.status });
  }

  try {
    const body = await request.json();
    const { action, data } = body;

    await new Promise(resolve => setTimeout(resolve, 300));

    const resourceId = 'res_' + Math.random().toString(36).substring(7);
    const response = {
      success: true,
      resourceId,
      action,
      data,
      createdAt: new Date().toISOString(),
    };

    mutationCache.set(idempotencyKey, {
      response,
      status: 201,
      timestamp: Date.now(),
    });

    setTimeout(() => {
      mutationCache.delete(idempotencyKey);
    }, TTL);

    return NextResponse.json(response, { status: 201 });

  } catch (error) {
    const errorResponse = {
      success: false,
      error: 'Error creando el recurso',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
