import createMiddleware from "next-intl/middleware";
import { routing } from "./src/lib/i18n/routing";

export default createMiddleware({
  ...routing,
  // Always redirect to /en for non-localized paths
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};