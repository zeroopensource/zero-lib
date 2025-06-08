'use client'
import {
  render,
  Html,
  Button,
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Markdown as ReMarkdown,
  TailwindConfig,
} from '@react-email/components'
import { ZeroLogo } from '../zero/zero-logo'
import { ZERO_LINKS } from '@/lib'
import Markdown from 'react-markdown'
//import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dark,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */
const normalizeCss = `
*,::after,::before{box-sizing:border-box}html{font-family:system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';line-height:1.15;-webkit-text-size-adjust:100%;tab-size:4}body{margin:0}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:currentcolor}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`
const twConfig: TailwindConfig = {
  safelist: '',
  experimental: '',
  corePlugins: '',
  separator: '',
  theme: {
    extend: {
      colors: {
        border: 'hsl(240 3.7% 15.9%)',
        background: 'hsl(240 10% 3.9%)',
        foreground: 'hsl(0 0% 98%)',
      },
    },
  },
}
const tw = {
  // Polyfills to fix lack of base styles, https://github.com/resend/react-email/issues/1615
  borderT: 'border-solid border-border border-x-0 border-t border-b-0',
  borderB: 'border-solid border-border border-x-0 border-b border-t-0',
  borderL: 'border-solid border-border border-y-0 border-l border-r-0',
  borderR: 'border-solid border-border border-y-0 border-r border-l-0',
  border: 'border-solid border-border border',
}
const svg = {
  FaFacebookF: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 320 512'
      className='group-hover/brightIcon:brightness-150 size-full'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'></path>
    </svg>
  ),
  FaGithub: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 496 512'
      className='group-hover/brightIcon:brightness-150 size-full'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
    </svg>
  ),
  FaTwitter: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      className='group-hover/brightIcon:brightness-150 size-full'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
    </svg>
  ),
  FaGlobe: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      className='group-hover/brightIcon:brightness-150 size-full'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z'></path>
    </svg>
  ),
}
const socials = [
  {
    link: ZERO_LINKS.website,
    svg: svg.FaGlobe,
  },
  {
    link: ZERO_LINKS.github,
    svg: svg.FaGithub,
  },
  {
    link: ZERO_LINKS.twitter,
    svg: svg.FaTwitter,
  },
  {
    link: ZERO_LINKS.facebook,
    svg: svg.FaFacebookF,
  },
]

const Header = ({
  className,
  header,
}: {
  className?: string
  header?: string
}) => (
  <div className={`flex h-10 ${className}`}>
    <div className={`flex-1 p-2 truncate content-center ${tw.borderR}`}>
      {header || 'Email from Zero'}
    </div>
    <a
      target='_blank'
      href={ZERO_LINKS.website}
      className={`h-10 w-10 p-2.5 text-white`}
    >
      <ZeroLogo />
    </a>
  </div>
)

const Footer = ({
  className,
  footer,
}: {
  className?: string
  footer?: string
}) => (
  <div className={`flex h-10 ${className}`}>
    <div className={`flex-1 p-2`}>{footer}</div>
    {socials.map((social, i) => (
      <a
        key={i}
        target='_blank'
        href={social.link}
        className={`h-10 w-10 p-3 text-white ${tw.borderL}`}
      >
        {social.svg}
      </a>
    ))}
  </div>
)

type ReMarkdownProps = React.ComponentProps<typeof ReMarkdown>
const reMarkdownProps: Omit<ReMarkdownProps, 'children'> = {
  markdownCustomStyles: {
    h1: {},
    codeInline: { color: '#ffffff' },
  },
  markdownContainerStyles: {},
}
type MarkdownProps = React.ComponentProps<typeof Markdown>
const markdownComponents: MarkdownProps['components'] = {
  code: props => {
    const { children, className, node, ref, ...rest } = props
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <div className={`${tw.border}`}>
        <SyntaxHighlighter
          {...rest}
          PreTag='div'
          language={match[1]}
          style={{
            ...vscDarkPlus,
            'pre[class*="language-"]': {
              ...vscDarkPlus['pre[class*="language-"]'],
              background: 'transparent',
              padding: '0px',
            },
          }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
  },
}

type Props = {
  markdown?: string
  children?: React.ReactNode
  preview?: string
  header?: string
  footer?: string
}

export const EmailV1 = ({
  preview,
  header,
  footer,
  markdown,
  children,
}: Props) => {
  return (
    <Html lang='en'>
      <Head>
        <style type='text/css'>{normalizeCss}</style>
        <style>{`pre{overflow:auto}`}</style>
      </Head>
      {preview && <Preview>{preview}</Preview>}
      <Tailwind config={twConfig}>
        <Body className='bg-background text-foreground my-auto mx-auto font-sans p-1'>
          <div className='border border-solid border-border rounded max-w-2xl mx-auto'>
            <Header className={`${tw.borderB}`} header={header} />
            <div className={`p-2`}>
              {children ? (
                children
              ) : (
                // <ReMarkdown {...reMarkdownProps}>{`${markdown}`}</ReMarkdown>
                <Markdown
                  rehypePlugins={[]}
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {markdown}
                </Markdown>
              )}
            </div>
            <Footer className={`${tw.borderT}`} footer={footer} />
          </div>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const renderEmailV1React = render
export const renderEmailV1 = ({
  header,
  markdown,
}: {
  header: string
  markdown: string
}) => render(<EmailV1 header={header} markdown={markdown} />)
