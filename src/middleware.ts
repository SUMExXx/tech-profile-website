import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const subdomain = host?.split('.')[0] || '';

  if (subdomain === 'blog') {
    const url = request.nextUrl.clone();
    console.log(url.pathname)
    url.pathname = `/blog${url.pathname}`;
    return NextResponse.rewrite(url); // Rewrite the URL to the correct route
  }

  // Default handling for the main domain
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Apply middleware to all routes
};
