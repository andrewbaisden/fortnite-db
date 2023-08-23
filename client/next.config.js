module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/static/assets/weapons/**',
      },
    ],
    domains: [
      'https://fortnite-db-backend-server.onrender.com/',
      'https://render.com/',
    ],
  },
};
