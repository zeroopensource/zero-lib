'use client'
import { Button, buttonVariants } from '@/components/shadcn'
import {
  IconV2,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
} from '@/lib'
import Link from 'next/link'
import { LuChevronDown, LuChevronUp, LuChevronsUpDown } from 'react-icons/lu'

type Option = {
  children?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  href?: string
  subMenu?: React.ReactNode
}

type Props = {
  label?: string
  options: Option[]
}

/* 
TODO: CheckMenu
TODO: RadioMenu
TODO: Label
TODO: Notif badge count
*/

const MenuAccordion = ({ option }: { option: Option }) => (
  <Accordion type='single' collapsible className='w-full'>
    <AccordionItem value='item-1' className='border-none'>
      <AccordionTrigger
        disabled={option.disabled}
        onClick={option.onClick}
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'py-0 gap-2 justify-start h-8 pl-8 pr-1 w-full hover:no-underline',
        )}
      >
        {option.icon && (
          <span className='-ml-6'>
            <IconV2 reactIcon={option.icon} size='sm' />
          </span>
        )}
        {option.children}
        <div className='flex-1' />
      </AccordionTrigger>
      <AccordionContent className='p-0'>{option.subMenu}</AccordionContent>
    </AccordionItem>
  </Accordion>
)

const MenuButton = ({ option }: { option: Option }) => (
  <Button
    size='sm'
    className='gap-2 justify-start h-8 pl-8 pr-1 w-full'
    variant='ghost'
    disabled={option.disabled}
    onClick={option.onClick}
  >
    {option.icon && (
      <span className='-ml-6'>
        <IconV2 reactIcon={option.icon} size='sm' />
      </span>
    )}
    {option.children}
    <div className='flex-1' />
    {option.subMenu && <IconV2 reactIcon={<LuChevronDown />} size='sm' />}
  </Button>
)

export const MenuV2 = ({ label, options }: Props) => {
  return (
    <div className='flex flex-col p-1 text-xs'>
      {label && <p className='text-muted-foreground pb-1 pl-2'>{label}</p>}
      {options.map((option, key) => {
        if (option.subMenu) return <MenuAccordion key={key} option={option} />
        else if (option.href && !option.onClick)
          return (
            <Link key={key} href={option.href || ''}>
              <MenuButton option={option} />
            </Link>
          )
        else return <MenuButton key={key} option={option} />
      })}
    </div>
  )
}
