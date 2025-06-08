'use client'
import { AppLayoutV2, IconV2, Menu } from '@/lib'
import {
  LuList,
  LuHouse,
  LuLayoutGrid,
  LuSettings,
  LuCircleUserRound,
  LuSearch,
} from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'
import { Button } from '@/components/shadcn'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV2
        body={children}
        header={
          <div className='p-1'>
            <p>zero-docs</p>
          </div>
        }
        sidebar={
          <>
            <div className='flex flex-col items-start p-1 *:w-full'>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuHouse />} size='sm' /> Browse
              </Button>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuList />} size='sm' /> Outline
              </Button>
            </div>

            <Menu
              options={[
                {
                  children: 'Apps',
                  icon: <LuLayoutGrid />,
                  //href: '/apps'
                },
                {
                  children: 'Search',
                  icon: <LuSearch />,
                  //href: '/search',
                  disabled: true,
                },
                {
                  children: 'User',
                  icon: <LuCircleUserRound />,
                  //href: '/user',
                  disabled: true,
                },
                {
                  children: 'Settings',
                  icon: <LuSettings />,
                  //href: '/settings',
                  disabled: true,
                },
              ]}
            />
          </>
        }
      />
    </>
  )
}
