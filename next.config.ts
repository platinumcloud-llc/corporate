import type { NextConfig } from "next";

/**
 * Published as static files (Cloudflare Workers static assets).
 * Build with `npm run build`; the site is written to `out`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
