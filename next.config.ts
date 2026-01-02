import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Ignore TypeScript errors during production build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
