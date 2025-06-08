'use client'
import { Icon } from '@/lib'
import {
  LuSettings,
  LuCircleUserRound,
  LuSearch,
  LuLayoutGrid,
} from 'react-icons/lu'
import Link from 'next/link'

export const GlobalSidebarTabs = [
  {
    id: 'apps',
    icon: <Icon reactIcon={<LuLayoutGrid />} />,
    content: (
      <>
        <div className='p-2'>apps</div>
        <div className='p-2'>
          <Link href='/'>Root</Link>
        </div>
        <div className='p-2'>
          <Link href='/zero'>Zero</Link>
        </div>
        <div className='p-2'>
          <Link href='/docs'>Docs</Link>
        </div>
      </>
    ),
  },
  {
    id: 'search',
    icon: <Icon reactIcon={<LuSearch />} />,
    content: <div>search</div>,
    disabled: true,
  },
  {
    id: 'user',
    icon: <Icon reactIcon={<LuCircleUserRound />} />,
    content: <div>user</div>,
    disabled: true,
  },
  {
    id: 'settings',
    icon: <Icon reactIcon={<LuSettings />} />,
    content: <div>settings</div>,
    disabled: true,
  },
]
