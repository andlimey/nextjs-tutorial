const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      codecovWebpackPlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: 'nextjs-tutorial',
        uploadToken: process.env.CODECOV_TOKEN,
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
