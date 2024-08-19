/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/builder',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
