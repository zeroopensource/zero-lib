'use client'
import { Copyright } from 'lucide-react'
import { SidebarMenu } from '@/lib'

export const DisclaimerCard = () => {
  return (
    <>
      <div className='p-2 text-xs'>
        <Copyright />
        <p>© Zero. All Rights Reserved.</p>
      </div>
      <SidebarMenu></SidebarMenu>
    </>
  )
}
