/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/forge-admin-panel',
  assetPrefix: '/forge-admin-panel/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
