/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.ASSET_PREFIX : "",
  swcMinify: true,
  env: {
    INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    ASSET_PREFIX: process.env.ASSET_PREFIX,
  },
}

module.exports = nextConfig
