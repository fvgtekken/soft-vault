const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // Excluir la carpeta `stories`
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'ignore-loader',
      include: [path.resolve(__dirname, 'src/stories')],
    });

    return config;
  },
};

module.exports = nextConfig;
