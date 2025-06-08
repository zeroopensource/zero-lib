'use client'
import { cn } from '@/lib'

const LAYOUTS = {
  center: 'm-auto max-w-4xl w-full',
  default: 'w-full',
}

type Props = {
  children?: React.ReactNode
  className?: string
  layout?: keyof typeof LAYOUTS
  innerClassName?: string
}

export const Page = ({
  children,
  className,
  layout = 'default',
  innerClassName,
}: Props) => {
  return (
    <div className={cn('flex-1 flex flex-col p-2 overflow-auto', className)}>
      <div className={cn('space-y-2', LAYOUTS[layout], innerClassName)}>
        {children}
      </div>
    </div>
  )
}
