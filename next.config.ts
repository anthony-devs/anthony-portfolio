import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the whole site to /out.
  // Deploys anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
