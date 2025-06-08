'use client'
import { ReactNode, Fragment } from 'react'
import { LuChevronRight } from 'react-icons/lu'
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
  SidebarMenuSubButtonV2,
  Button,
} from '@/lib'
import Link from 'next/link'

type menu = {
  children?: ReactNode
  text?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  menuSubItem?: ReactNode
}

const items: any[] = [
  {
    children: 'Getting Started',
    href: '#',
    items: [
      {
        title: 'Installation',
        href: '#',
      },
      {
        title: 'Project Structure',
        href: '#',
      },
    ],
  },
  {
    title: 'Building Your Application',
    href: '#',
    items: [
      {
        title: 'Routing',
        url: '#',
      },
      {
        title: 'Data Fetching',
        url: '#',
        isActive: true,
      },
      {
        title: 'Rendering',
        url: '#',
      },
      {
        title: 'Caching',
        url: '#',
      },
      {
        title: 'Styling',
        url: '#',
      },
      {
        title: 'Optimizing',
        url: '#',
      },
      {
        title: 'Configuring',
        url: '#',
      },
      {
        title: 'Testing',
        url: '#',
      },
      {
        title: 'Authentication',
        url: '#',
      },
      {
        title: 'Deploying',
        url: '#',
      },
      {
        title: 'Upgrading',
        url: '#',
      },
      {
        title: 'Examples',
        url: '#',
      },
    ],
  },
  {
    title: 'API Reference',
    href: '#',
    items: [
      {
        title: 'Components',
        url: '#',
      },
      {
        title: 'File Conventions',
        url: '#',
      },
      {
        title: 'Functions',
        url: '#',
      },
      {
        title: 'next.config.js Options',
        url: '#',
      },
      {
        title: 'CLI',
        url: '#',
      },
      {
        title: 'Edge Runtime',
        url: '#',
      },
    ],
  },
  {
    title: 'Architecture',
    href: '#',
    items: [
      {
        title: 'Accessibility',
        href: '#',
      },
      {
        title: 'Fast Refresh',
        href: '#',
      },
      {
        title: 'Next.js Compiler',
        href: '#',
      },
      {
        title: 'Supported Browsers',
        href: '#',
      },
      {
        title: 'Turbopack',
        href: '#',
      },
    ],
  },
]

type Props = {
  sidebarMenuButtonChildren?: ReactNode
  disabled?: boolean
  defaultOpen?: boolean
  menus?: menu[]
  menuSubButtons?: {
    href?: string
    text?: string
    buttonChildren?: ReactNode
    onClick?: () => void
    disabled?: boolean
    sidebarMenuSubChildren?: ReactNode
  }[]
}

export const SidebarMenuItemV1Collapsible = ({
  sidebarMenuButtonChildren,
  disabled,
  menuSubButtons,
  defaultOpen,
}: Props) => {
  return (
    <Collapsible className='group/collapsible' defaultOpen={defaultOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild disabled={disabled}>
          <SidebarMenuButton>
            {sidebarMenuButtonChildren}
            <LuChevronRight className='transition-transform ml-auto group-data-[state=open]/collapsible:rotate-90' />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {menuSubButtons?.map((button, key) =>
              button.sidebarMenuSubChildren ? (
                <Fragment key={key}>{button.sidebarMenuSubChildren}</Fragment>
              ) : (
                <SidebarMenuSubItem key={key}>
                  <SidebarMenuSubButtonV2
                    asChild
                    disabled={button.disabled}
                    onClick={button.onClick}
                    className='cursor-default'
                  >
                    {button.text ? (
                      <Link href={button.href || ''}>
                        <span>{button.text}</span>
                      </Link>
                    ) : (
                      button.buttonChildren
                    )}
                  </SidebarMenuSubButtonV2>
                </SidebarMenuSubItem>
              ),
            )}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export const SidebarGroupV1CollapsibleSub = ({
  sidebarMenuButtonChildren,
  disabled,
  menuSubButtons,
  defaultOpen,
}: Props) => {
  return (
    <Collapsible className='group/collapsibleSub' defaultOpen={defaultOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild disabled={disabled}>
          <SidebarMenuButton>
            {sidebarMenuButtonChildren}
            <LuChevronRight className='transition-transform ml-auto group-data-[state=open]/collapsibleSub:rotate-90' />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {menuSubButtons?.map((button, key) => (
              <SidebarMenuSubItem key={key}>
                <SidebarMenuSubButtonV2
                  asChild
                  disabled={button.disabled}
                  onClick={button.onClick}
                  className='cursor-default'
                >
                  {button.text ? (
                    <Link href={button.href || ''}>
                      <span>{button.text}</span>
                    </Link>
                  ) : (
                    button.buttonChildren
                  )}
                </SidebarMenuSubButtonV2>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
