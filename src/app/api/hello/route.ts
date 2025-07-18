import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  return NextResponse.json({ message: `Hello, ${name}!` });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data, status: 'success' });
}
