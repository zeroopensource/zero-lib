'use client'
import { AppLayoutV1, Icon } from '@/lib'
import { LuList, LuHouse } from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV1
        body={children}
        header={
          <div className='p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebarTabs={{
          defaultTab: 'home',
          top: [
            {
              id: 'home',
              icon: <Icon reactIcon={<LuHouse />} />,
              content: <div>home</div>,
            },
            {
              id: 'list',
              icon: <Icon reactIcon={<LuList />} />,
              content: <div>list</div>,
            },
          ],
          bottom: [...GlobalSidebarTabs],
        }}
      />
    </>
  )
}
