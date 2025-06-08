'use client'
import { ErrorPage } from '@/lib'

type Props = {
  children?: React.ReactNode
}

export const Markdown = ({ children }: Props) => {
  return children ? (
    <div className='prose prose-invert'>{children}</div>
  ) : (
    <ErrorPage />
  )
}
