import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.set('theme', 'dark', { path: '/', maxAge: 60 * 60 * 24 * 7 });
  return NextResponse.json({ message: 'Cookie set!' });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('theme');
  return NextResponse.json({ message: 'Cookie deleted!' });
}
