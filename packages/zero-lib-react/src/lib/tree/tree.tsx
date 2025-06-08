'use client'
import { cn } from '@/components/shadcn'

export type Directory = {
  path: string
  name: string
  subfolders?: Directory[]
}

const directories: Directory[] = [
  {
    path: '/components',
    name: 'components',
    subfolders: [
      {
        path: '/components/features',
        name: 'features',
      },
    ],
  },
]

type Props = {}

export const Tree = ({}: Props) => {
  return (
    <div>
      <p>tree</p>
    </div>
  )
}
