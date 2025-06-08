'use client'
import { SidebarMenuSubButton, cn } from '@/lib'

type Props = {
  disabled?: boolean
} & React.ComponentProps<typeof SidebarMenuSubButton>

export const SidebarMenuSubButtonV2 = (props: Props) => {
  return (
    <SidebarMenuSubButton
      {...props}
      data-disabled={props.disabled}
      className={cn(
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.className,
      )}
    />
  )
}
