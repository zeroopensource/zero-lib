import { Markdown, Page } from '@/lib'
import AboutApp from '@/components/markdown/about-app.mdx'

export default function AboutPage() {
  return (
    <Page layout='center' className='py-6'>
      <Markdown>
        <AboutApp />
      </Markdown>
    </Page>
  )
}
