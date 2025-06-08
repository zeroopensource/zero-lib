'use client'
import {
  cn,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from '@/lib'

type Props = {
  header?: React.ReactNode
  content?: React.ReactNode
  contentFooter?: React.ReactNode
  footer?: React.ReactNode
}

export const AppSidebarV4 = ({
  header,
  content,
  contentFooter,
  footer,
}: Props) => {
  return (
    <>
      <Sidebar
        className='*:divide-y !border-r-0'
        collapsible='icon'
        data-name='AppSidebarV4'
      >
        {header && <SidebarHeader className='p-0'>{header}</SidebarHeader>}
        {content && (
          <SidebarContent className='divide-y gap-0'>
            {content}
            <div className='flex-1' />
            <div className='divide-y'>{contentFooter}</div>
          </SidebarContent>
        )}
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </Sidebar>
    </>
  )
}
