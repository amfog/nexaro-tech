import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Point to the CORRECT location of your request.ts file
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // Optional: Add any custom Next.js config here
};

export default withNextIntl(nextConfig);