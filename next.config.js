const path = require('path');
/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;


const nextConfig = {
   // Añadir CSP ( content security policy ot avoid xss )
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
  // Excluir la carpeta `stories`
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'ignore-loader',
      include: [path.resolve(__dirname, 'src/stories')],
    });
    return config;
  },
};

module.exports = nextConfig;