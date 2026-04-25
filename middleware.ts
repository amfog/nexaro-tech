import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./src/lib/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Handle i18n routing
  const response = handleI18nRouting(request);
  
  // Redirect root path to /en
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // Redirect paths without locale to /en/path
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith('/en') && !pathname.startsWith('/ar')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
  
  return response;
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};