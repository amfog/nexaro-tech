import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Optional: Add any custom Next.js config here
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "example.com",
  //     },
  //   ],
  // },
};

export default withNextIntl(nextConfig);