import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

export default nextConfig;