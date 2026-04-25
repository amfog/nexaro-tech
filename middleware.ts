import createMiddleware from "next-intl/middleware";
import { routing } from "./src/lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Only match internationalized paths
  matcher: [
    // Match all pathnames except:
    // - api (API routes)
    // - _next (Next.js internals)
    // - all files inside /public (favicon.ico, etc.)
    '/((?!api|_next|.*\\..*).*)',
    // Match all locales
    '/(en|ar)/:path*',
  ],
};