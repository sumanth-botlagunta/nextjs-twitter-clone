/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.toiimg.com',
      },
    ],
  },
};

module.exports = nextConfig
