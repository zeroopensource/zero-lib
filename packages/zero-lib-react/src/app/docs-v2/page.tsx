import Link from 'next/link'
import Docs from '@/components/markdown/docs.mdx'
import { Markdown } from '@/lib'

export default function Page() {
  return <Markdown>{<Docs />}</Markdown>
}
