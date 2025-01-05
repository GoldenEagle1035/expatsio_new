/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'expatsio.b-cdn.net',
      },
    ],
  },

};

export default nextConfig;
