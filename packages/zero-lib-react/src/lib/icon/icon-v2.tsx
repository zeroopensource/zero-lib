'use client'
import {
  cn,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn'
import { FaQuestion } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const sizeVariants = {
  default: 'size-10',
  sm: 'size-4',
  md: 'size-10',
} as const

type Props = {
  reactIcon?: React.ReactNode
  tooltipContent?: React.ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  size?: keyof typeof sizeVariants
  className?: string
  hoverBrightness?: boolean
}

/**
 * https://react-icons.github.io/react-icons/
 */
export const IconV2 = ({
  size = 'default',
  reactIcon,
  direction,
  tooltipContent,
  className,
  hoverBrightness = true,
}: Props) => {
  return (
    <IconContext.Provider
      value={{
        className: cn('group-hover/brightIcon:brightness-150 size-full'),
      }}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              id='Icon'
              className={cn(
                'flex shrink-0 justify-center items-center',
                hoverBrightness && 'group/brightIcon',
                sizeVariants[size],
                className,
              )}
            >
              {reactIcon || <FaQuestion />}
            </div>
          </TooltipTrigger>
          {tooltipContent && (
            <TooltipContent side={direction}>{tooltipContent}</TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </IconContext.Provider>
  )
}
