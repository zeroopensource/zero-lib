import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  output: 'export',
  distDir: 'dist-next',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx', 'server.ts'],
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    }
    return config
  },
  //transpilePackages: ['remark-gfm'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // [
      //   //@ts-ignore
      //   'remark-gfm',
      //   { strict: true, throwOnError: true },
      // ],
      //remarkGfm,
    ],
    rehypePlugins: [],
  },
})

if (process.env.NEXT_OUTPUT === 'export') {
  nextConfig.pageExtensions = ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

export default withMDX(nextConfig)
