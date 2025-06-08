import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <Link
        href='#save-your-data'
        className='underline underline-offset-4 hover:text-primary'
      >
        <h2
          id={children
            ?.toString()
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')}
        >
          {children}
        </h2>
      </Link>
    ),
    ...components,
  }
}
