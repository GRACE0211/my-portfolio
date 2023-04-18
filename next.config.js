/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}




module.exports = {
  nextConfig,
  module: {
    rules: [
      {
        test: /\.(mp4|webm)$/i,
        loader: 'file-loader',
        options: {
          name: 'videos/[name].[ext]',
        },
      },
    ],
  },
};


