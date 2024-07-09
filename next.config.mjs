/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatternes: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
    ],
  },
};

export default nextConfig;
