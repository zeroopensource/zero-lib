'use client'
import {
  AppLayoutV3,
  AppLayoutV4,
  IconV2,
  MenuV2,
  Footer,
  Header,
  ZERO_LINKS,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuItemV1Collapsible,
  SidebarGroupV1CollapsibleSub,
  SupportCardV2,
  SocialCard,
  AppHeaderV4,
  NavCollapsibleV4,
} from '@/lib'
import {
  LuList,
  LuUser,
  LuLock,
  LuCircleUserRound,
  LuAsterisk,
  LuMousePointerClick,
  LuNavigationOff,
  LuInfo,
  LuBookOpen,
  LuLogIn,
  LuLogOut,
  LuUserPlus,
  LuMail,
} from 'react-icons/lu'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa6'
import { GlobalSidebarTabs } from '@/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  const SidebarGroupMain = () => (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LuList />
              Components
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton disabled>
              <LuBookOpen />
              Docs
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LuInfo />
              About
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

  const navMainProps: React.ComponentProps<typeof NavCollapsibleV4> = {
    label: 'Pages',
    items: [
      {
        title: 'Main',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'Components',
            url: `/${pathnameDepth1}`,
          },
          {
            title: 'Docs',
            url: `/${pathnameDepth1}/docs`,
          },
          {
            title: 'About',
            url: `/${pathnameDepth1}/about-app`,
          },
        ],
      },
      {
        title: 'Components',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'Table',
            url: `/${pathnameDepth1}/table`,
          },
        ],
      },
      {
        title: 'Auth Forms',
        url: '#',
        icon: Bot,
        items: [
          {
            title: 'Sign In',
            url: `/${pathnameDepth1}/signin`,
          },
          {
            title: 'Sign Up',
            url: `/${pathnameDepth1}/signup`,
          },
          {
            title: 'Forgot Password',
            url: `/${pathnameDepth1}/forgotpassword`,
          },
          {
            title: 'Verified Email',
            url: `/${pathnameDepth1}/verifiedemail`,
          },
        ],
      },
      {
        title: 'Misc',
        url: '#',
        icon: Settings2,
        items: [
          {
            title: 'Email',
            url: `/${pathnameDepth1}/email`,
          },
          {
            title: 'OnClick',
            url: '#',
          },
          {
            title: 'Disabled',
            url: '#',
          },
        ],
      },
    ],
  }

  return (
    <>
      <AppLayoutV4
        body={children}
        header={<Header />}
        sidebarProps={{
          header: <AppHeaderV4 />,
          content: (
            <>
              <NavCollapsibleV4 {...navMainProps} />
              <SidebarGroupMain />
            </>
          ),
          contentFooter: (
            <>
              <SupportCardV2 />
              <SocialCard />
              <Footer />
            </>
          ),
        }}
      />
    </>
  )
}
