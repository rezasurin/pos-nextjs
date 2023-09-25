/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["media.istockphoto.com"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/",
  //         destination: "/dashboard"
  //       }
  //     ]
  //   }
  // }
}

module.exports = nextConfig
