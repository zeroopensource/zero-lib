'use client'
import { cn, TabsTrigger as ShadcnTabsTrigger } from '@/components/shadcn'

export const TabsTriggerV2 = (props: {
  key: number
  children: React.ReactNode
  value: string
  onClick?: () => void
}) => {
  return props.onClick ? (
    <button {...props}>{props.children}</button>
  ) : (
    <ShadcnTabsTrigger
      className={cn(
        'p-0 data-[state=active]:bg-inherit',
        'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0',
      )}
      {...props}
    >
      {props.children}
    </ShadcnTabsTrigger>
  )
}
