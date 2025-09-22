import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that should be protected
const protectedPaths = [
  '/profile',
  '/settings',
  '/jobs',
  '/rooms',
  '/events',
  '/meetups',
  '/people',
  '/blogs',
  // Add other protected routes
];

// Add paths that should be accessible only to non-authenticated users
const authPaths = ['/signin', '/signup'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { pathname } = req.nextUrl;

  // Check if the path should be protected
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // Check if the path is for non-authenticated users
  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  // If the path is protected and user is not authenticated
  if (isProtectedPath && !session) {
    const redirectUrl = new URL('/signin', req.url);
    redirectUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If user is authenticated and tries to access auth pages
  if (isAuthPath && session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
