/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [
    // ...
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    // ...
  ],
}

module.exports = nextConfig
