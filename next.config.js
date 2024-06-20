const path = require('path');
/** @type {import('next').NextConfig} */


const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {
   async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
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
