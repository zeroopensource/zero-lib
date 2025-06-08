'use client'
import { cn } from '@/components/shadcn'

type Props = {
  className?: string
}

export const ZeroLogo = ({ className }: Props) => {
  return (
    <svg
      id='zero-logo-v1'
      className={cn(
        'group-hover/brightIcon:brightness-150 text-base',
        className,
      )}
      width='1.25em'
      height='1.25em'
      viewBox='0 0 320 320'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M160 320C248.366 320 320 248.366 320 160C320 71.6344 248.366 0 160 0C71.6344 0 0 71.6344 0 160C0 248.366 71.6344 320 160 320ZM160 272C221.856 272 272 221.856 272 160C272 98.1441 221.856 48 160 48C98.1441 48 48 98.1441 48 160C48 221.856 98.1441 272 160 272Z'
        fill='currentColor'
      />
    </svg>
  )
}
