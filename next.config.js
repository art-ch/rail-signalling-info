/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme')]
  },
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
