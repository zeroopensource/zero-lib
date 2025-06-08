'use client'
import { cn } from '@/components/shadcn'
import { HEADER_SIDEBAR_SIZE, Icon, ZeroLogo } from '@/lib'
import { usePathname } from 'next/navigation'

type Props = {
  className?: string
  header?: React.ReactNode
  title?: string
  subtitle?: string
}

export const AppHeaderV4 = ({ className, header, title, subtitle }: Props) => {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'flex flex-1 *:h-full divide-x text-xs',
        HEADER_SIDEBAR_SIZE.H,
        className,
      )}
    >
      <div className='flex-1'>
        {header || (
          <div className='p-1'>
            <p className='tracking-wider truncate'>
              {title || pathname.split('/').slice(2).join('/') || '/'}
            </p>
            <p className='tracking-wider text-muted-foreground'>
              {subtitle || '----'}
            </p>
          </div>
        )}
      </div>
      <Icon reactIcon={<ZeroLogo />} />
    </div>
  )
}
