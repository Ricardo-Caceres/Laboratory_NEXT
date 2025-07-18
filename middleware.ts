import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('x-custom-header', 'Hello from Middleware');

  if (request.nextUrl.pathname.startsWith('/nextjs-apis/server/private')) {
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/nextjs-apis/server/:path*',
    '/api/:path*',
  ],
};
