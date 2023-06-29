/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "png.pngtree.com",
      "img.freepik.com",
      "i.pinimg.com",
      "media.istockphoto.com"
    ]
  }
}

module.exports = nextConfig
