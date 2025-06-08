'use client'
import { cn, Button } from '@/components/shadcn'
import {
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  ZeroLogo,
  SidebarProvider,
  SidebarTrigger,
} from '@/lib'
import { LuPanelLeftOpen } from 'react-icons/lu'
import { useState } from 'react'
import { AppSidebarV4 } from './app-sidebar-v4'

type Props = {
  sidebarProps?: React.ComponentProps<typeof AppSidebarV4>
  sidebar?: React.ReactNode
  sidebarGroups?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
}

export const AppLayoutV4 = ({ header, body, sidebarProps }: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <SidebarProvider>
      <div
        className='flex divide-x w-screen h-screen leading-none overflow-clip'
        data-name='AppLayoutV4'
      >
        <AppSidebarV4 {...sidebarProps} />
        <div
          className={cn(
            'flex-1 flex flex-col divide-y sm:-mt-px w-screen min-w-[100vw] sm:min-w-0 shrink-0',
            BORDER_COLOR,
          )}
        >
          <div className='flex sm:hidden divide-x sm:-ml-px'>
            <Button
              size='sm'
              variant='ghost'
              className={cn(HEADER_SIDEBAR_SIZE.SIZE)}
              onClick={e => setSidebarOpen(prev => !prev)}
            >
              <Icon
                reactIcon={<LuPanelLeftOpen />}
                data-open={isSidebarOpen}
                className='data-[open=true]:rotate-180 transition-transform duration-200'
              />
            </Button>
            <Header header={header} />
            <Icon reactIcon={<ZeroLogo />} />
          </div>
          <div className='flex overflow-y-auto h-full divide-x'>
            {/* <SidebarTrigger className='-ml-1' /> */}
            {body}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
