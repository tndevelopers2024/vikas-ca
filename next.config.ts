import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel Image Optimization quota exhausted (402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED).
    // Serve pre-compressed files from /public directly instead.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vikasca.com",
      },
    ],
  },
};

export default nextConfig;
