/** @type {import('next').NextConfig} */

const HOME_PAGE_IMAGE = `https://images.ctfassets.net/${process.env.CONTENTFUL_SPACE_ID}/hsiQt5oOSUEcQ6TsHiAO3/e4411a4dc30a42dd18267a0a1e826c49/homepage-train.png`;

const additionalData = `$homePageImage: '${HOME_PAGE_IMAGE}';`;

const path = require('path');

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline;

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
  },

  webpack(config) {
    const sassRules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.find(
        (rule) =>
          rule.sideEffects === false &&
          regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );

    sassRules.use = sassRules.use.map((rule) =>
      rule.loader && rule.loader.includes('sass-loader')
        ? {
            ...rule,
            options: {
              ...rule.options,
              additionalData
            }
          }
        : rule
    );

    return config;
  }
};

module.exports = nextConfig;
