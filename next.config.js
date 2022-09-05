/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const path = require("path")

const nextConfig = {
  // target: "serverless",
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: "imgix",
    path: isProd ? process.env.ASSET_PREFIX : "",
  },
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.ASSET_PREFIX : "",
  swcMinify: true,
  env: {
    INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
