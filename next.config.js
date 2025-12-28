/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: "ToneCheck",
    NEXT_PUBLIC_APP_DESCRIPTION: "Analyze and rewrite your tone with clarity and confidence",
  },
};

module.exports = nextConfig;
