import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // Ensure trailing slashes don't cause issues
  trailingSlash: false,
  
  // Optimize for Vercel
  output: 'standalone',
  
  images: {
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);