/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';
const repoName = 'portfolio_website';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
};

export default nextConfig;
