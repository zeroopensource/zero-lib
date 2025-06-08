'use client'
import { cn, Button } from '@/components/shadcn'

export const SupportCard = () => {
  return (
    <div className='flex p-2 gap-2 '>
      <Button
        size='sm'
        className='text-xs text-white gap-2 bg-gradient-to-tr from-mdeeppurple-a400 to-mpurple-a700 flex-1'
      >
        Support Zero
      </Button>
      <Button
        size='sm'
        className='text-xs text-white gap-2 bg-gradient-to-tr from-mdeeppurple-a400 to-mblue-a400 flex-1'
      >
        Join Community
      </Button>
    </div>
  )
}
