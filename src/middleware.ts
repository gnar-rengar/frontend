import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.cookies.get('token')) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/recommend/fit', '/my-page', '/login'],
};
