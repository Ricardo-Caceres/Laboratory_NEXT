import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    appName: 'Next.js App',
    version: '1.0.0',
    publicApiUrl: 'https://api.example.com/public',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'super-secret-key',
    serverApiUrl: 'https://api.example.com/server',
  },
};

export default nextConfig;
