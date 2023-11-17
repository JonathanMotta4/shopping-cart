/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
