/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // Add fakestoreapi.com to allowed domains
  },
  webpack(config) {
    config.optimization.minimizer = [new (require('terser-webpack-plugin'))()];
    return config;
  },
};

module.exports = nextConfig;