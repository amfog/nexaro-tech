import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // Vercel-specific optimizations
  output: 'standalone',
  
  // Ensure proper image handling
  images: {
    unoptimized: true, // Disable image optimization for now to test
  },
  
  // Don't add trailing slashes
  trailingSlash: false,
};

export default withNextIntl(nextConfig);