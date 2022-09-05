/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/JerGun/jergun.github.io/gh-pages/"
    : "",
  env: {
    INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
