/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com", "dl.memuplay.com"],
  },
});

module.exports = nextConfig;
