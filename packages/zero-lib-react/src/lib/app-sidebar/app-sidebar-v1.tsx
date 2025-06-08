'use client'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronRight,
  LifeBuoy,
  Send,
} from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/lib'
import Link from 'next/link'

type Props = {
  sidebarGroups?: React.ReactNode
}

export const AppSidebarV1 = ({ sidebarGroups }: Props) => {
  return (
    <Sidebar className='*:bg-(--background)'>
      <SidebarContent>{sidebarGroups}</SidebarContent>
    </Sidebar>
  )
}
