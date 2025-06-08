'use client'
import { cn, Button } from '@/components/shadcn'
import { GRADIENTS } from '@/lib'

const TEXTSIZES = {
  sm: 'text-xs',
  lg: 'text-md',
  default: 'text-sm',
  icon: 'text-sm',
}

type Props = {
  size?: React.ComponentProps<typeof Button>['size']
  className?: string
  children: React.ReactNode
  gradient?: keyof typeof GRADIENTS
  onClick?: () => void
}

export const GradientButton = ({
  children,
  className,
  size = 'sm',
  gradient = 'purple1',
  onClick,
}: Props) => {
  return (
    children && (
      <Button
        onClick={onClick}
        size={size}
        className={cn(
          'text-white',
          TEXTSIZES[size || 'default'],
          GRADIENTS[gradient],
          className,
        )}
      >
        {children}
      </Button>
    )
  )
}
