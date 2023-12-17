const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = nextConfig;

module.exports = withContentlayer(withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}));