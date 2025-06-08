'use client'
import { cn, Button } from '@/components/shadcn'
import {
  SidebarV1,
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  SidebarTabsPropsV1,
} from '@/lib'
import { LuMenu } from 'react-icons/lu'
import { useState } from 'react'

type Props = {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
  sidebarTabs?: SidebarTabsPropsV1
}

export const AppLayoutV1 = ({ header, sidebar, body, sidebarTabs }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      id='AppLayout'
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400 text-xs leading-none overflow-clip'
    >
      <div
        className={cn(
          'transition-all',
          !isSidebarOpen && '-ml-[100vw] sm:ml-0',
        )}
      >
        <SidebarV1
          className='w-screen sm:w-64'
          tabs={{
            ...sidebarTabs,
            top: [
              {
                id: 'sidebar',
                icon: (
                  <div className='divide-y sm:hidden'>
                    <Icon reactIcon={<LuMenu />} />
                    <div />
                  </div>
                ),
                onClick: () => setIsSidebarOpen(false),
              },
              ...(sidebarTabs?.top || []),
            ],
          }}
          header={
            <div className='flex divide-x'>
              <Header header={header} />
            </div>
          }
        />
      </div>

      <div
        className={cn('flex-1 flex flex-col divide-y sm:-mt-px', BORDER_COLOR)}
      >
        <div className='flex sm:hidden divide-x'>
          <Button
            size='sm'
            variant='ghost'
            className={cn(HEADER_SIDEBAR_SIZE.SIZE)}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Icon reactIcon={<LuMenu />} />
          </Button>
          <Header header={header} />
        </div>

        {body}
        <div />
      </div>
    </div>
  )
}
